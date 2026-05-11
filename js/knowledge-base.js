/* ============================================
   Base de conocimiento de LumiTec
   Preguntas y respuestas del TecNM Campus Delicias
   --- INFORMACIÓN VERIFICADA ---
   Fuentes: delicias.tecnm.mx, universidadesmex.com,
   sic.cultura.gob.mx, datamexico, escuelasmex.com
   ============================================ */

const KNOWLEDGE_BASE = {

  // --- SALUDOS Y DESPEDIDAS ---
  saludos: {
    keywords: ['hola', 'buenos días', 'buenas tardes', 'buenas noches', 'hey', 'qué onda', 'que onda', 'saludos', 'hi', 'hello'],
    response: '¡Hola! Soy LumiTec, tu asistente virtual del TecNM Campus Delicias. ¿En qué puedo ayudarte? Puedo orientarte sobre ubicaciones del campus, trámites, horarios y más.',
    category: 'general'
  },

  despedidas: {
    keywords: ['adiós', 'adios', 'bye', 'hasta luego', 'nos vemos', 'gracias', 'muchas gracias', 'chao', 'ok gracias'],
    response: '¡Gracias por usar LumiTec! Si necesitas algo más, aquí estaré. ¡Éxito en tus estudios!',
    category: 'general'
  },

  queEres: {
    keywords: ['quién eres', 'quien eres', 'qué eres', 'que eres', 'cómo te llamas', 'como te llamas', 'lumitec'],
    response: 'Soy LumiTec, un asistente virtual creado para ayudar a estudiantes del Tecnológico de Delicias. Mi nombre viene de "Lumi" (luz) y "Tec" (tecnológico). Puedo ayudarte con ubicaciones, trámites y horarios del campus.',
    category: 'general'
  },

  // --- UBICACIONES ---
  biblioteca: {
    keywords: ['biblioteca', 'libros', 'centro de información', 'estudiar', 'sala de estudio'],
    response: 'La Biblioteca (Centro de Información) se encuentra dentro del campus. Cuenta con sala de lectura, área de cómputo y servicio de préstamo de libros. Horario aproximado: Lunes a Viernes de 8:00 a 20:00 hrs.',
    category: 'ubicacion',
    building: 'biblioteca'
  },

  cafeteria: {
    keywords: ['cafetería', 'cafeteria', 'comer', 'comida', 'alimentos', 'tienda', 'lonche'],
    response: 'La Cafetería se encuentra dentro del campus, cerca de la biblioteca. Aquí puedes comprar alimentos, bebidas y snacks durante el horario escolar.',
    category: 'ubicacion',
    building: 'cafeteria'
  },

  direccion: {
    keywords: ['dirección', 'direccion', 'directora', 'director', 'edificio a', 'administración', 'administracion', 'oficina del director', 'oficina de la directora'],
    response: 'La Dirección y oficinas administrativas se encuentran en el Edificio A. La directora actual es la Mtra. Lilian Karina Santiesteban Torres. Aquí están las subdirecciones y áreas administrativas. Horario: Lunes a Viernes de 8:00 a 15:00 hrs. Correo: dir_delicias@tecnm.mx',
    category: 'ubicacion',
    building: 'direccion'
  },

  serviciosEscolares: {
    keywords: ['servicios escolares', 'inscripción', 'inscripcion', 'credencial', 'constancia', 'control escolar', 'ventanilla'],
    response: 'Servicios Escolares se ubica junto al Edificio A. Aquí realizas trámites de inscripción, constancias, credencial, kárdex y más. Horario: Lunes a Viernes de 9:00 a 15:00 hrs.',
    category: 'ubicacion',
    building: 'servicios-escolares'
  },

  dais: {
    keywords: ['dais', 'departamento de sistemas', 'sistemas computacionales', 'jefe de carrera sistemas', 'jefe de sistemas'],
    response: 'El DAIS (Departamento de Ingeniería en Sistemas Computacionales) está ubicado en la zona norte-central del campus. Aquí encuentras al jefe de carrera y asesores académicos de ISC. Horario: Lunes a Viernes de 9:00 a 15:00 hrs.',
    category: 'ubicacion',
    building: 'dais'
  },

  labComputo: {
    keywords: ['laboratorio de cómputo', 'laboratorio de computo', 'lab cómputo', 'lab computo', 'centro de cómputo', 'centro de computo', 'computadoras', 'sala de computo'],
    response: 'El Centro de Cómputo cuenta con más de 500 equipos con software especializado para prácticas. Necesitas tu credencial vigente para acceder. Horario: Lunes a Viernes de 8:00 a 19:00 hrs.',
    category: 'ubicacion',
    building: 'lab-computo'
  },

  labElectronica: {
    keywords: ['laboratorio de electrónica', 'laboratorio de electronica', 'lab electrónica', 'lab electronica', 'electromecánica', 'electromecanica', 'lab electromecánica'],
    response: 'El Laboratorio de Electrónica y Electromecánica está en la zona noreste del campus. Aquí se realizan prácticas de circuitos, electrónica, sistemas eléctricos y mecánicos. Solicita acceso con tu docente.',
    category: 'ubicacion',
    building: 'lab-electronica'
  },

  labIndustrial: {
    keywords: ['laboratorio industrial', 'lab industrial', 'ingeniería industrial', 'ingenieria industrial', 'taller industrial'],
    response: 'El Laboratorio de Ingeniería Industrial se encuentra en el extremo este del campus. Aquí se realizan prácticas de procesos de manufactura, métodos y tiempos, y control de calidad.',
    category: 'ubicacion',
    building: 'lab-industrial'
  },

  edificioB: {
    keywords: ['edificio b', 'aulas edificio b', 'salones edificio b'],
    response: 'El Edificio B de aulas está en la zona norte-central del campus. Cuenta con múltiples salones de clase equipados con proyector. Consulta tu horario en el SII para saber tu aula específica.',
    category: 'ubicacion',
    building: 'edificio-b'
  },

  edificioC: {
    keywords: ['edificio c', 'aulas edificio c', 'salones edificio c'],
    response: 'El Edificio C de aulas está en la zona noreste del campus, junto al centro de cómputo. Tiene salones con proyector y equipo multimedia.',
    category: 'ubicacion',
    building: 'edificio-c'
  },

  edificioD: {
    keywords: ['edificio d', 'posgrado', 'aulas edificio d', 'maestría', 'maestria'],
    response: 'El Edificio D se ubica en la zona sur-central del campus. Alberga aulas adicionales y espacios para posgrado. El Tec está abriendo nuevos programas de maestría.',
    category: 'ubicacion',
    building: 'edificio-d'
  },

  banos: {
    keywords: ['baños', 'banos', 'baño', 'bano', 'sanitarios', 'restroom', 'wc'],
    response: 'Hay módulos de baños en varias ubicaciones del campus. Los principales se encuentran cerca de los edificios de aulas y junto a los laboratorios. Todos están señalizados.',
    category: 'ubicacion',
    building: 'banos'
  },

  canchas: {
    keywords: ['canchas', 'deportes', 'cancha', 'futbol', 'fútbol', 'basquetbol', 'básquetbol', 'deporte', 'actividades deportivas', 'gimnasio', 'pesas', 'campo'],
    response: 'El campus cuenta con instalaciones deportivas que incluyen canchas, un gimnasio-auditorio (construido en 2022), un campo de pasto sintético y una sala de pesas equipada. Se usan para clases de educación física, actividades extracurriculares y torneos del TecNM.',
    category: 'ubicacion',
    building: 'canchas'
  },

  estacionamiento: {
    keywords: ['estacionamiento', 'parking', 'estacionar', 'carro', 'coche', 'auto', 'vehículo', 'vehiculo', 'donde dejo mi carro'],
    response: 'El estacionamiento para estudiantes está en la zona sureste del campus. Respeta los cajones señalizados y las áreas reservadas para personal docente y personas con discapacidad.',
    category: 'ubicacion',
    building: 'estacionamiento'
  },

  entrada: {
    keywords: ['entrada', 'puerta principal', 'acceso', 'cómo llego', 'como llego', 'entrada principal'],
    response: 'La entrada principal del campus se encuentra sobre el Paseo Tecnológico Km 3.5. Cuenta con caseta de vigilancia con personal de seguridad. Presenta tu credencial al entrar.',
    category: 'ubicacion',
    building: 'entrada'
  },

  aulas: {
    keywords: ['aulas', 'salones', 'salon', 'salón', 'donde tengo clase', 'mi salon'],
    response: 'Las aulas se distribuyen en los Edificios B, C y D. Consulta tu horario en el SII (Sistema Integral de Información) para conocer tu aula y edificio exacto. Si no encuentras tu salón, pregunta en Servicios Escolares.',
    category: 'ubicacion'
  },

  // --- TRÁMITES ---
  reinscripcion: {
    keywords: ['reinscripción', 'reinscripcion', 'reinscribirme', 'cómo me reinscribo', 'como me reinscribo', 'inscripción semestre', 'nuevo semestre'],
    response: 'Para reinscribirte: 1) Ingresa al SII (Sistema Integral de Información) en línea. 2) Selecciona tus materias en el periodo establecido. 3) Genera tu ficha de pago. 4) Realiza el pago en banco. 5) Entrega comprobante en Servicios Escolares. Las fechas se publican en delicias.tecnm.mx y en redes sociales del Tec.',
    category: 'tramite'
  },

  bajaTemporal: {
    keywords: ['baja temporal', 'baja', 'darme de baja', 'suspender estudios', 'dejar la escuela temporalmente'],
    response: 'Para solicitar baja temporal: 1) Acude a Servicios Escolares antes de que termine el periodo ordinario. 2) Llena el formato de solicitud de baja. 3) Obtén firma del jefe de carrera. 4) Entrega en ventanilla. Puedes reincorporarte el siguiente semestre.',
    category: 'tramite'
  },

  constancia: {
    keywords: ['constancia', 'constancia de estudios', 'carta de estudios', 'comprobante de estudios'],
    response: 'Para obtener una constancia de estudios: 1) Solicítala en Servicios Escolares. 2) Presenta tu credencial vigente. 3) Paga la cuota correspondiente en caja. 4) La constancia se entrega en 2-3 días hábiles. Horario: L-V 9:00-15:00 hrs.',
    category: 'tramite'
  },

  kardex: {
    keywords: ['kardex', 'kárdex', 'historial académico', 'historial academico', 'calificaciones', 'boleta'],
    response: 'Puedes consultar tu kárdex (historial de calificaciones) en el SII en línea con tu número de control y contraseña. Para un kárdex oficial impreso, solicítalo en Servicios Escolares con tu credencial. Tiene un costo y tarda 2-3 días hábiles.',
    category: 'tramite'
  },

  titulacion: {
    keywords: ['titulación', 'titulacion', 'título', 'titulo', 'titularme', 'cómo me titulo', 'como me titulo', 'requisitos titulación', 'tesis'],
    response: 'Para titularte necesitas: 1) Haber aprobado todas las materias. 2) Servicio social liberado. 3) Residencias profesionales liberadas. 4) Acta de nacimiento y CURP. 5) Fotos tamaño título. 6) Elegir modalidad de titulación (tesis, memoria, CENEVAL, etc.). Acude a la División de Estudios Profesionales para iniciar el trámite.',
    category: 'tramite'
  },

  servicioSocial: {
    keywords: ['servicio social', 'ss', 'donde hago servicio social', 'requisitos servicio social', 'horas servicio social'],
    response: 'El servicio social requiere: 1) Tener al menos el 70% de créditos aprobados. 2) Acudir al departamento de Gestión Tecnológica y Vinculación. 3) Elegir un programa o dependencia. 4) Cumplir 480 horas mínimo (6 meses). 5) Entregar reportes bimestrales. 6) Al terminar, solicita tu carta de liberación.',
    category: 'tramite'
  },

  residencias: {
    keywords: ['residencias', 'residencias profesionales', 'residencia profesional', 'donde hago residencias', 'requisitos residencias', 'prácticas profesionales', 'practicas profesionales'],
    response: 'Las residencias profesionales requieren: 1) Tener al menos el 80% de créditos. 2) Servicio social liberado (o en proceso). 3) Buscar empresa o institución. 4) Presentar anteproyecto al jefe de carrera. 5) Duración mínima de 4 meses (640 hrs). 6) Entregar reporte final y memoria. Acude a tu jefatura de carrera.',
    category: 'tramite'
  },

  credencial: {
    keywords: ['credencial', 'credencial de estudiante', 'identificación', 'identificacion', 'id estudiantil', 'perdí mi credencial'],
    response: 'Para tramitar o reponer tu credencial: 1) Acude a Servicios Escolares con una identificación oficial. 2) Lleva 2 fotos tamaño infantil. 3) Paga la cuota en caja. Si la perdiste, el trámite de reposición tiene un costo adicional. Horario: L-V 9:00-15:00 hrs.',
    category: 'tramite'
  },

  pago: {
    keywords: ['pago', 'cuánto cuesta', 'cuanto cuesta', 'colegiatura', 'ficha de pago', 'donde pago', 'costo inscripción', 'costo inscripcion'],
    response: 'Las fichas de pago se generan desde el SII (Sistema Integral de Información) en línea. El pago se realiza en banco o en la caja del Tec. El monto varía según el trámite. Conserva siempre tu comprobante de pago.',
    category: 'tramite'
  },

  // --- HORARIOS ---
  horarioServiciosEscolares: {
    keywords: ['horario servicios escolares', 'a qué hora abren servicios escolares', 'horario de atención servicios'],
    response: 'Servicios Escolares atiende de Lunes a Viernes de 9:00 a 15:00 hrs. Se recomienda llegar temprano, especialmente en periodo de inscripciones.',
    category: 'horario'
  },

  horarioBiblioteca: {
    keywords: ['horario biblioteca', 'a qué hora abre la biblioteca', 'horario de la biblioteca'],
    response: 'La Biblioteca abre de Lunes a Viernes de 8:00 a 20:00 hrs. Durante periodos de exámenes puede extender su horario.',
    category: 'horario'
  },

  horarioTec: {
    keywords: ['horario del tec', 'a qué hora abre el tec', 'horario de clases', 'horario general', 'a qué hora abren', 'turno'],
    response: 'El campus opera en turno discontinuo (matutino y vespertino). Las clases se imparten de Lunes a Viernes. Para conocer tu horario específico, consulta el SII con tu número de control.',
    category: 'horario'
  },

  // --- INFORMACIÓN GENERAL ---
  carreras: {
    keywords: ['carreras', 'qué carreras', 'que carreras', 'ingenierías', 'ingenierias', 'oferta académica', 'oferta educativa', 'qué puedo estudiar', 'que puedo estudiar', 'licenciatura'],
    response: 'El TecNM Campus Delicias ofrece 6 carreras: • Ingeniería Industrial • Ingeniería en Gestión Empresarial • Ingeniería Electromecánica • Ingeniería en Sistemas Computacionales • Ingeniería Civil • Ingeniería en Energías Renovables. Todas con validez oficial del TecNM. Más info en delicias.tecnm.mx/admision',
    category: 'info'
  },

  ingenieriaIndustrial: {
    keywords: ['ingeniería industrial', 'ingenieria industrial', 'industrial'],
    response: 'Ingeniería Industrial es la carrera con mayor matrícula del campus, con cerca de 700 estudiantes. Se enfoca en optimización de procesos, manufactura, calidad y logística. Cuenta con laboratorio especializado.',
    category: 'info'
  },

  ingenieriaGestion: {
    keywords: ['gestión empresarial', 'gestion empresarial', 'ige', 'administración', 'administracion', 'negocios'],
    response: 'Ingeniería en Gestión Empresarial (IGE) es la segunda carrera con más alumnos. Combina ingeniería con administración y negocios. Es diferente a una licenciatura en administración porque tiene enfoque tecnológico e ingenieril.',
    category: 'info'
  },

  ingenieriaElectromecanica: {
    keywords: ['electromecánica', 'electromecanica', 'eléctrica', 'electrica', 'mecánica', 'mecanica'],
    response: 'Ingeniería Electromecánica combina electricidad, electrónica y mecánica. Es la tercera carrera con mayor matrícula en el campus. Cuenta con laboratorios de electrónica y talleres especializados.',
    category: 'info'
  },

  ingenieriaSistemas: {
    keywords: ['sistemas computacionales', 'isc', 'programación', 'programacion', 'software', 'computación', 'computacion'],
    response: 'Ingeniería en Sistemas Computacionales (ISC) se enfoca en desarrollo de software, redes, bases de datos y tecnologías de la información. El campus cuenta con un centro de cómputo con más de 500 equipos. El departamento académico es el DAIS.',
    category: 'info'
  },

  ingenieriaCivil: {
    keywords: ['ingeniería civil', 'ingenieria civil', 'civil', 'construcción', 'construccion'],
    response: 'Ingeniería Civil forma profesionistas en diseño, construcción y supervisión de obras de infraestructura. Es una de las 6 carreras que ofrece el TecNM Campus Delicias.',
    category: 'info'
  },

  ingenieriaEnergias: {
    keywords: ['energías renovables', 'energias renovables', 'energía', 'energia', 'solar', 'renovable', 'sustentable'],
    response: 'Ingeniería en Energías Renovables se enfoca en fuentes de energía limpia como solar, eólica y biomasa. Es una carrera con gran demanda actual y forma parte de la oferta educativa del TecNM Campus Delicias.',
    category: 'info'
  },

  telefono: {
    keywords: ['teléfono', 'telefono', 'número', 'numero', 'contacto', 'llamar', 'tel', 'correo', 'email'],
    response: 'Teléfono del TecNM Delicias: 639 132 6500. Correos oficiales: dir_delicias@tecnm.mx (Dirección) y subadmi@delicias.tecnm.mx (Subdirección Administrativa). Sitio web: delicias.tecnm.mx',
    category: 'info'
  },

  ubicacionTec: {
    keywords: ['dirección del tec', 'direccion del tec', 'dónde está el tec', 'donde esta el tec', 'ubicación del campus', 'ubicacion del campus', 'cómo llego al tec', 'domicilio'],
    response: 'El Instituto Tecnológico de Delicias se ubica en Paseo Tecnológico Km 3.5, Col. Tecnológico, C.P. 33000, Delicias, Chihuahua, México (sobre la carretera Delicias-Rosalilla).',
    category: 'info'
  },

  directora: {
    keywords: ['directora', 'director', 'quién dirige', 'quien dirige', 'lilian', 'santiesteban'],
    response: 'La directora actual del TecNM Campus Delicias es la Mtra. Lilian Karina Santiesteban Torres. Su oficina se encuentra en el Edificio A (Dirección). Correo: dir_delicias@tecnm.mx',
    category: 'info',
    building: 'direccion'
  },

  wifi: {
    keywords: ['wifi', 'wi-fi', 'internet', 'red', 'contraseña wifi', 'cómo me conecto', 'como me conecto al wifi'],
    response: 'Sí, hay Wi-Fi disponible en el campus. Si tienes problemas para conectarte, acude al Centro de Cómputo o al DAIS para soporte técnico.',
    category: 'info'
  },

  tecNM: {
    keywords: ['tecnm', 'tecnológico nacional', 'tecnologico nacional', 'qué es el tecnm', 'que es el tecnm'],
    response: 'El TecNM (Tecnológico Nacional de México) es el sistema de educación superior tecnológica pública más grande de México y Latinoamérica. El Campus Delicias pertenece a este sistema, lo que garantiza que los planes de estudio y títulos tienen reconocimiento oficial en todo el país.',
    category: 'info'
  },

  mision: {
    keywords: ['misión', 'mision', 'visión', 'vision', 'valores', 'objetivo del tec'],
    response: 'Misión: Formar profesionistas de excelencia en el ámbito de la ciencia y la tecnología, capaces de propiciar el desarrollo y transformación de su entorno, a través de programas educativos de calidad pertinentes. Visión: Ser una institución educativa que se distinga como uno de los elementos fundamentales del desarrollo sustentable.',
    category: 'info'
  },

  becas: {
    keywords: ['becas', 'beca', 'apoyo económico', 'apoyo economico', 'benito juárez', 'benito juarez', 'jóvenes escribiendo', 'jovenes escribiendo'],
    response: 'El Tec de Delicias tiene acceso a becas federales: • Beca Benito Juárez • Beca Jóvenes Escribiendo el Futuro. También hay becas institucionales. Para más información, acude al Departamento de Servicios Estudiantiles o revisa las convocatorias en delicias.tecnm.mx',
    category: 'info'
  },

  sii: {
    keywords: ['sii', 'sistema integral', 'plataforma', 'portal estudiante', 'número de control', 'numero de control', 'contraseña sii'],
    response: 'El SII (Sistema Integral de Información) es la plataforma en línea donde consultas calificaciones, horarios, realizas selección de materias y generas fichas de pago. Accede con tu número de control y contraseña. Si olvidaste tu contraseña, acude a Servicios Escolares con tu credencial.',
    category: 'info'
  },

  extraescolares: {
    keywords: ['actividades extra', 'extraescolares', 'clubes', 'talleres', 'actividades culturales', 'deporte', 'selección deportiva', 'torneos'],
    response: 'El Tec ofrece actividades extraescolares como: deportes (futbol, basquetbol, voleibol, atletismo), talleres culturales, y programas deportivos. El campus ha sido sede de pre-nacionales deportivos del TecNM. Cuenta con gimnasio-auditorio, campo sintético y sala de pesas. Infórmate al inicio de cada semestre.',
    category: 'info'
  },

  tutoria: {
    keywords: ['tutoría', 'tutoria', 'tutor', 'asesoría', 'asesoria', 'asesor', 'ayuda académica'],
    response: 'Cada alumno tiene asignado un tutor académico. Tu tutor puede ayudarte con orientación académica, problemas de desempeño y canalización a servicios de apoyo. Consulta quién es tu tutor en la jefatura de tu carrera o en el SII.',
    category: 'info'
  },

  nuevoIngreso: {
    keywords: ['nuevo ingreso', 'primer semestre', 'recién entro', 'recien entro', 'soy nuevo', 'voy a entrar', 'admisión', 'admision', 'ficha', 'examen de admisión'],
    response: 'Si eres de nuevo ingreso: 1) Consulta la convocatoria en delicias.tecnm.mx/admision. 2) Realiza tu registro y obtén tu ficha. 3) Presenta el examen de admisión. 4) Si eres aceptado, realiza tu inscripción en las fechas indicadas. 5) Asiste a la semana de inducción. ¡Bienvenido al Tec de Delicias!',
    category: 'info'
  },

  estadisticas: {
    keywords: ['cuántos alumnos', 'cuantos alumnos', 'cuántos estudiantes', 'cuantos estudiantes', 'matrícula', 'matricula', 'cuántos maestros', 'cuantos maestros', 'docentes'],
    response: 'El TecNM Campus Delicias tiene aproximadamente 1,800 estudiantes y 92 docentes. Las carreras con mayor matrícula son: Ingeniería Industrial, Ingeniería en Gestión Empresarial e Ingeniería Electromecánica.',
    category: 'info'
  },

  paginaWeb: {
    keywords: ['página web', 'pagina web', 'sitio web', 'sitio oficial', 'redes sociales', 'facebook', 'página del tec', 'pagina del tec'],
    response: 'El sitio web oficial del TecNM Campus Delicias es: delicias.tecnm.mx. Ahí encuentras convocatorias, noticias, oferta educativa y trámites. También puedes seguir las redes sociales del Tec para avisos y eventos.',
    category: 'info'
  },

  distancia: {
    keywords: ['educación a distancia', 'educacion a distancia', 'en línea', 'en linea', 'virtual', 'clases en línea'],
    response: 'El TecNM Campus Delicias también ofrece programas de educación a distancia. Para más información, visita distancia.delicias.tecnm.mx o acude a la Subdirección Académica.',
    category: 'info'
  }
};

// Información de los edificios para el mapa interactivo
const BUILDING_INFO = {
  'entrada': {
    title: 'Entrada Principal',
    description: 'Acceso principal del campus sobre Paseo Tecnológico Km 3.5. Cuenta con caseta de vigilancia y personal de seguridad.',
    icon: '🚪'
  },
  'direccion': {
    title: 'Dirección / Edificio A',
    description: 'Oficinas de la Directora Mtra. Lilian Karina Santiesteban Torres, Subdirecciones y Administración. Correo: dir_delicias@tecnm.mx. Horario: L-V 8:00-15:00 hrs.',
    icon: '🏛️'
  },
  'servicios-escolares': {
    title: 'Servicios Escolares',
    description: 'Inscripciones, constancias, credenciales, kárdex y trámites escolares. Horario: L-V 9:00-15:00 hrs.',
    icon: '📋'
  },
  'dais': {
    title: 'DAIS - Depto. de Sistemas',
    description: 'Departamento de Ingeniería en Sistemas Computacionales. Jefatura de carrera y asesoría académica. Horario: L-V 9:00-15:00 hrs.',
    icon: '💻'
  },
  'edificio-b': {
    title: 'Edificio B - Aulas',
    description: 'Salones de clase con proyector y equipo multimedia. Consulta tu horario en el SII para ubicar tu aula.',
    icon: '🏫'
  },
  'edificio-c': {
    title: 'Edificio C - Aulas',
    description: 'Salones de clase adicionales con equipo multimedia. Ubicado en la zona noreste del campus.',
    icon: '🏫'
  },
  'edificio-d': {
    title: 'Edificio D - Aulas / Posgrado',
    description: 'Aulas para clases regulares y programas de posgrado/maestría del TecNM.',
    icon: '🏫'
  },
  'lab-computo': {
    title: 'Centro de Cómputo',
    description: 'Más de 500 equipos con software especializado. Requiere credencial vigente. Horario: L-V 8:00-19:00 hrs.',
    icon: '🖥️'
  },
  'lab-electronica': {
    title: 'Lab. Electrónica y Electromecánica',
    description: 'Prácticas de circuitos, electrónica, sistemas eléctricos y mecánicos para Ing. Electromecánica. Acceso con docente.',
    icon: '⚡'
  },
  'lab-industrial': {
    title: 'Laboratorio Industrial',
    description: 'Prácticas de manufactura, métodos y tiempos, y control de calidad para Ing. Industrial.',
    icon: '🏭'
  },
  'biblioteca': {
    title: 'Biblioteca',
    description: 'Centro de información con sala de lectura, área de cómputo y préstamo de libros. Horario: L-V 8:00-20:00 hrs.',
    icon: '📚'
  },
  'cafeteria': {
    title: 'Cafetería',
    description: 'Venta de alimentos, bebidas y snacks durante el horario escolar.',
    icon: '🍽️'
  },
  'canchas': {
    title: 'Instalaciones Deportivas',
    description: 'Canchas deportivas, gimnasio-auditorio (2022), campo de pasto sintético y sala de pesas equipada. Sede de pre-nacionales TecNM.',
    icon: '⚽'
  },
  'estacionamiento': {
    title: 'Estacionamiento',
    description: 'Estacionamiento para estudiantes. Respeta los cajones señalizados y áreas reservadas para docentes y personas con discapacidad.',
    icon: '🅿️'
  },
  'banos': {
    title: 'Baños / Sanitarios',
    description: 'Módulos de sanitarios señalizados en varias ubicaciones del campus.',
    icon: '🚻'
  }
};
