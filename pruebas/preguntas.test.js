// Prueba el buscador local de LumiTec (findBestMatch) con preguntas típicas de alumnos.
// Córrela después de editar js/knowledge-base.js o js/chatbot.js:  node pruebas/preguntas.test.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const kb = fs.readFileSync(path.join(root, 'js/knowledge-base.js'), 'utf8');
const bot = fs.readFileSync(path.join(root, 'js/chatbot.js'), 'utf8')
  .replace(/return \{(\r?\n\s*)processInput,/, 'return {$1findBestMatch,$1processInput,');

const ctx = vm.createContext({ document: { getElementById: () => ({}) } });
vm.runInContext(kb, ctx);
vm.runInContext(bot + '\nglobalThis.__find = Chatbot.findBestMatch;\nglobalThis.__kb = KNOWLEDGE_BASE;', ctx);
const keyOf = entry => entry ? Object.keys(ctx.__kb).find(k => ctx.__kb[k] === entry) : 'IA';

// [pregunta, entrada esperada | 'IA' cuando no debe responder la base local]
const CASOS = [
  // Los fallos conocidos
  ['¿Qué me recomiendas para mi primera semana en el Tec?', 'IA'],
  ['¿Qué me recomiendas para mi primer día de clases?', 'IA'],
  ['¿Qué hago si me siento nervioso por empezar?', 'IA'],
  // Calendario
  ['¿Cuándo inician las clases?', 'calendario'],
  ['¿Cuándo empiezan las clases?', 'calendario'],
  ['¿Cuándo terminan las clases?', 'calendario'],
  ['¿Cuándo son las vacaciones?', 'calendario'],
  ['calendario', 'calendario'],
  ['¿Qué días no hay clases?', 'calendario'],
  // Ubicación del Tec
  ['¿Dónde está el Tec?', 'ubicacionTec'],
  ['¿Cómo llego al Tec?', 'ubicacionTec'],
  ['¿Cuál es la dirección del Tec?', 'ubicacionTec'],
  ['¿A qué hora abre el Tec?', 'horarioTec'],
  ['¿Qué es el TecNM?', 'tecNM'],
  // Carreras y laboratorios
  ['¿Qué carreras hay?', 'carreras'],
  ['Háblame de ingeniería electromecánica', 'ingenieriaElectromecanica'],
  ['¿Qué es electromecánica?', 'ingenieriaElectromecanica'],
  ['¿Dónde está el laboratorio de electromecánica?', 'labElectronica'],
  ['¿Dónde está el laboratorio de electrónica?', 'labElectronica'],
  ['¿Dónde está el laboratorio industrial?', 'labIndustrial'],
  ['ingeniería industrial', 'ingenieriaIndustrial'],
  ['¿Qué es sistemas computacionales?', 'ingenieriaSistemas'],
  // Deportes
  ['¿Qué deportes hay?', 'extraescolares'],
  ['¿Dónde están las canchas?', 'canchas'],
  ['¿Hay gimnasio?', 'canchas'],
  ['¿Cómo entro a la selección deportiva?', 'extraescolares'],
  // Ubicaciones y servicios
  ['¿Dónde está la biblioteca?', 'biblioteca'],
  ['¿A qué hora abre la biblioteca?', 'horarioBiblioteca'],
  ['¿Dónde está la cafetería?', 'cafeteria'],
  ['¿Dónde están los servicios escolares?', 'serviciosEscolares'],
  ['¿Dónde está el DAIS?', 'dais'],
  ['¿Dónde están los baños?', 'banos'],
  ['¿Dónde me estaciono?', 'estacionamiento'],
  ['¿En qué salón tengo clase?', 'aulas'],
  ['¿Hay Wi-Fi en el campus?', 'wifi'],
  // Trámites
  ['¿Cómo me reinscribo?', 'reinscripcion'],
  ['¿Cuánto cuesta la ficha?', 'costoInscripcion'],
  ['Soy de nuevo ingreso', 'nuevoIngreso'],
  ['¿Cómo saco una constancia de estudios?', 'constancia'],
  ['¿Cuáles son los requisitos del servicio social?', 'servicioSocial'],
  ['¿Cómo me titulo?', 'titulacion'],
  ['Perdí mi credencial', 'credencial'],
  ['¿Dónde pago?', 'pago'],
  ['¿Qué es el SII?', 'sii'],
  ['¿Hay becas?', 'becas'],
  // Personal
  ['¿Quién es la directora?', 'directora'],
  ['¿Quién es el jefe de sistemas?', 'jefeSistemas'],
  ['Teléfono del Tec', 'telefono'],
  ['hola', 'saludos'],
  ['gracias', 'despedidas'],
  // Regresión: preguntas que ya funcionaban
  ['¿Dónde está el centro de cómputo?', 'labComputo'],
  ['kardex', 'kardex'],
  ['¿Cómo hago mi servicio social?', 'servicioSocial'],
  ['¿Quién es el jefe de industrial?', 'jefeIndustrial'],
  ['¿Cuál es la misión?', 'mision'],
  ['¿Dónde puedo comer?', 'cafeteria'],
  ['¿Dónde está la entrada?', 'entrada'],
  ['¿Cuándo es el examen de admisión?', 'examenAdmision'],
  ['horario de servicios escolares', 'horarioServiciosEscolares'],
  ['residencias profesionales', 'residencias'],
  ['¿Qué es Moodle?', 'moodle'],
  ['¿Hay tutorías?', 'tutoria'],
  ['baja temporal', 'bajaTemporal'],
  ['organigrama', 'organigrama'],
  ['¿Cuántos alumnos tiene el Tec?', 'estadisticas'],
  ['¿Cuál es el horario de clases?', 'horarioTec'],
  ['¿Dónde está el edificio B?', 'edificioB'],
  ['¿Cuál es la historia del Tec?', 'historia'],
  ['¿Qué valores tiene el Tec?', 'valores'],
  ['¿Cuál es la página web?', 'paginaWeb'],
  ['¿Quién eres?', 'queEres'],
];

let fallos = 0;
for (const [pregunta, esperada] of CASOS) {
  const obtenida = keyOf(ctx.__find(pregunta));
  const ok = obtenida === esperada;
  if (!ok) fallos++;
  console.log(`${ok ? 'ok   ' : 'FALLA'} ${pregunta}  →  ${obtenida}${ok ? '' : `  (esperada: ${esperada})`}`);
}
console.log(`\n${CASOS.length - fallos}/${CASOS.length} correctas`);
process.exitCode = fallos ? 1 : 0;
