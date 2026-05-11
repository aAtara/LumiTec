/* ============================================
   Base de conocimiento de LumiTec
   Preguntas y respuestas del TecNM Campus Delicias
   ============================================ */

const KNOWLEDGE_BASE = {

  // --- SALUDOS Y DESPEDIDAS ---
  saludos: {
    keywords: ['hola', 'buenos días', 'buenas tardes', 'buenas noches', 'hey', 'qué onda', 'que onda', 'saludos', 'hi', 'hello'],
    response: '¡Hola! Soy LumiTec, tu asistente virtual del Tec de Delicias. ¿En qué puedo ayudarte? Puedo orientarte sobre ubicaciones del campus, trámites, horarios y más.',
    category: 'general'
  },

  despedidas: {
    keywords: ['adiós', 'adios', 'bye', 'hasta luego', 'nos vemos', 'gracias', 'muchas gracias', 'chao', 'ok gracias'],
    response: '¡Gracias por usar LumiTec! Si necesitas algo más, aquí estaré. ¡Éxito en tus estudios! 💡',
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
    response: 'La Biblioteca (Centro de Información) está ubicada en la zona sur-oeste del campus, cerca de la cafetería. Cuenta con sala de lectura, área de cómputo y préstamo de libros. Horario: Lunes a Viernes de 8:00 a 20:00 hrs.',
    category: 'ubicacion',
    building: 'biblioteca'
  },

  cafeteria: {
    keywords: ['cafetería', 'cafeteria', 'comer', 'comida', 'alimentos', 'tienda', 'lonche'],
    response: 'La Cafetería se encuentra en la zona sur-oeste del campus, junto a la biblioteca. Aquí puedes comprar alimentos, bebidas y snacks. Horario: Lunes a Viernes de 7:30 a 16:00 hrs.',
    category: 'ubicacion',
    building: 'cafeteria'
  },

  direccion: {
    keywords: ['dirección', 'direccion', 'director', 'edificio a', 'administración', 'administracion', 'oficina del director'],
    response: 'La Dirección y oficinas administrativas se encuentran en el Edificio A, en la esquina noroeste del campus (al entrar, a la izquierda al fondo). Aquí están la oficina del director, subdirecciones y áreas administrativas. Horario: Lunes a Viernes de 8:00 a 15:00 hrs.',
    category: 'ubicacion',
    building: 'direccion'
  },

  serviciosEscolares: {
    keywords: ['servicios escolares', 'inscripción', 'inscripcion', 'credencial', 'constancia', 'control escolar', 'ventanilla'],
    response: 'Servicios Escolares está debajo del Edificio A, en la zona noroeste del campus. Aquí realizas trámites de inscripción, constancias, credencial, kardex y más. Horario: Lunes a Viernes de 9:00 a 15:00 hrs.',
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
    response: 'El Laboratorio de Cómputo (Centro de Cómputo) está en la zona noreste del campus, junto al Edificio C. Tiene equipos con software especializado para prácticas. Necesitas tu credencial vigente para acceder. Horario: Lunes a Viernes de 8:00 a 19:00 hrs.',
    category: 'ubicacion',
    building: 'lab-computo'
  },

  labElectronica: {
    keywords: ['laboratorio de electrónica', 'laboratorio de electronica', 'lab electrónica', 'lab electronica', 'mecatrónica', 'mecatronica', 'lab mecatrónica'],
    response: 'El Laboratorio de Electrónica y Mecatrónica está en la esquina noreste del campus. Aquí se realizan prácticas de circuitos, electrónica digital, robótica y automatización. Solicita acceso con tu docente.',
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
    response: 'El Edificio B de aulas está en la zona norte-central del campus. Cuenta con múltiples salones de clase equipados con proyector. Consulta tu horario para saber tu aula específica.',
    category: 'ubicacion',
    building: 'edificio-b'
  },

  edificioC: {
    keywords: ['edificio c', 'aulas edificio c', 'salones edificio c'],
    response: 'El Edificio C de aulas está en la zona noreste del campus, junto al laboratorio de cómputo. Tiene salones con proyector y equipo multimedia.',
    category: 'ubicacion',
    building: 'edificio-c'
  },

  edificioD: {
    keywords: ['edificio d', 'posgrado', 'aulas edificio d', 'maestría', 'maestria'],
    response: 'El Edificio D se ubica en la zona sur-central del campus. Alberga aulas adicionales y espacios para posgrado.',
    category: 'ubicacion',
    building: 'edificio-d'
  },

  banos: {
    keywords: ['baños', 'banos', 'baño', 'bano', 'sanitarios', 'restroom', 'wc'],
    response: 'Hay módulos de baños en dos ubicaciones principales: uno en la zona central-oeste del campus (cerca de la biblioteca) y otro en la zona noreste (junto a los laboratorios). Ambos están señalizados.',
    category: 'ubicacion',
    building: 'banos'
  },

  canchas: {
    keywords: ['canchas', 'deportes', 'cancha', 'futbol', 'fútbol', 'basquetbol', 'básquetbol', 'deporte', 'actividades deportivas', 'gimnasio'],
    response: 'Las canchas deportivas están en la zona sureste del campus. Hay canchas de básquetbol, voleibol y un área multiusos. Se usan para clases de educación física y actividades extracurriculares.',
    category: 'ubicacion',
    building: 'canchas'
  },

  estacionamiento: {
    keywords: ['estacionamiento', 'parking', 'estacionar', 'carro', 'coche', 'auto', 'vehículo', 'vehiculo', 'donde dejo mi carro'],
    response: 'El estacionamiento para estudiantes está en la zona sureste del campus, junto a las canchas. Respeta los cajones señalizados y las áreas reservadas para personal docente y personas con discapacidad.',
    category: 'ubicacion',
    building: 'estacionamiento'
  },

  entrada: {
    keywords: ['entrada', 'puerta principal', 'acceso', 'cómo llego', 'como llego', 'entrada principal'],
    response: 'La entrada principal del campus está en la parte sur, sobre la Av. Tecnológico. Es la puerta con la caseta de vigilancia. Presenta tu credencial al entrar.',
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
    response: 'Para reinscribirte: 1) Ingresa al SII (Sistema Integral de Información) en línea. 2) Selecciona tus materias en el periodo de selección. 3) Genera tu ficha de pago. 4) Realiza el pago en banco. 5) Entrega comprobante en Servicios Escolares. Las fechas se publican en la página del Tec y en redes sociales.',
    category: 'tramite'
  },

  bajaTemporal: {
    keywords: ['baja temporal', 'baja', 'darme de baja', 'suspender estudios', 'dejar la escuela temporalmente'],
    response: 'Para solicitar baja temporal: 1) Acude a Servicios Escolares antes de que termine el periodo ordinario. 2) Llena el formato de solicitud de baja. 3) Firma del jefe de carrera. 4) Entrega en ventanilla. Puedes reincorporarte el siguiente semestre. Tienes derecho a hasta 2 bajas temporales.',
    category: 'tramite'
  },

  constancia: {
    keywords: ['constancia', 'constancia de estudios', 'carta de estudios', 'comprobante de estudios'],
    response: 'Para obtener una constancia de estudios: 1) Solicítala en Servicios Escolares. 2) Presenta tu credencial vigente. 3) Paga la cuota correspondiente en caja. 4) La constancia se entrega en 2-3 días hábiles. Horario de atención: Lunes a Viernes de 9:00 a 15:00 hrs.',
    category: 'tramite'
  },

  kardex: {
    keywords: ['kardex', 'kárdex', 'historial académico', 'historial academico', 'calificaciones', 'boleta'],
    response: 'Puedes consultar tu kárdex (historial de calificaciones) en el SII en línea con tu número de control y contraseña. Para un kárdex oficial impreso, solicítalo en Servicios Escolares con tu credencial. Tiene un costo y tarda 2-3 días.',
    category: 'tramite'
  },

  titulacion: {
    keywords: ['titulación', 'titulacion', 'título', 'titulo', 'titularme', 'cómo me titulo', 'como me titulo', 'requisitos titulación', 'tesis'],
    response: 'Para titularte necesitas: 1) Haber aprobado todas las materias. 2) Servicio social liberado. 3) Residencias profesionales liberadas. 4) Acta de nacimiento y CURP. 5) Fotos tamaño título. 6) Elegir modalidad (tesis, memoria, CENEVAL, etc.). Acude a la División de Estudios Profesionales para iniciar el trámite.',
    category: 'tramite'
  },

  servicioSocial: {
    keywords: ['servicio social', 'ss', 'donde hago servicio social', 'requisitos servicio social', 'horas servicio social'],
    response: 'El servicio social requiere: 1) Tener al menos el 70% de créditos aprobados. 2) Acudir al departamento de Gestión Tecnológica y Vinculación. 3) Elegir un programa o dependencia. 4) Cumplir 480 horas mínimo (6 meses). 5) Entregar reportes bimestrales. 6) Al terminar, solicita tu carta de liberación.',
    category: 'tramite'
  },

  residencias: {
    keywords: ['residencias', 'residencias profesionales', 'residencia profesional', 'donde hago residencias', 'requisitos residencias', 'prácticas profesionales', 'practicas profesionales'],
    response: 'Las residencias profesionales requieren: 1) Tener al menos el 80% de créditos. 2) Servicio social liberado (o en proceso). 3) Buscar empresa o institución. 4) Presentar anteproyecto al jefe de carrera. 5) Duración mínima de 4 meses (640 hrs). 6) Entregar reporte final y memoria. Acude a tu jefatura de carrera para más detalles.',
    category: 'tramite'
  },

  credencial: {
    keywords: ['credencial', 'credencial de estudiante', 'identificación', 'identificacion', 'id estudiantil', 'perdí mi credencial'],
    response: 'Para tramitar o reponer tu credencial: 1) Acude a Servicios Escolares con una identificación oficial. 2) Lleva 2 fotos tamaño infantil. 3) Paga la cuota en caja. 4) Se entrega en aproximadamente 5 días hábiles. Si la perdiste, el trámite de reposición tiene un costo adicional.',
    category: 'tramite'
  },

  pago: {
    keywords: ['pago', 'cuánto cuesta', 'cuanto cuesta', 'colegiatura', 'ficha de pago', 'donde pago', 'costo inscripción', 'costo inscripcion'],
    response: 'Las fichas de pago se generan desde el SII (Sistema Integral de Información) en línea. El pago se realiza en banco (BBVA, Santander, etc.) o en la caja del Tec en horario de 9:00 a 14:00 hrs. El monto varía según el trámite. Conserva siempre tu comprobante.',
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

  horarioCafeteria: {
    keywords: ['horario cafetería', 'horario cafeteria', 'a qué hora abre la cafetería'],
    response: 'La Cafetería abre de Lunes a Viernes de 7:30 a 16:00 hrs. El menú del día se publica en la entrada.',
    category: 'horario'
  },

  horarioTec: {
    keywords: ['horario del tec', 'a qué hora abre el tec', 'horario de clases', 'horario general', 'a qué hora abren'],
    response: 'El campus abre de Lunes a Viernes de 7:00 a 21:00 hrs (clases en turno matutino y vespertino). Los sábados el horario es de 8:00 a 14:00 hrs (solo si hay clases programadas).',
    category: 'horario'
  },

  // --- INFORMACIÓN GENERAL ---
  carreras: {
    keywords: ['carreras', 'qué carreras', 'que carreras', 'ingenierías', 'ingenierias', 'oferta académica', 'oferta educativa', 'qué puedo estudiar', 'que puedo estudiar', 'licenciatura'],
    response: 'El TecNM Campus Delicias ofrece las siguientes carreras: • Ingeniería en Sistemas Computacionales • Ingeniería Industrial • Ingeniería Mecatrónica • Licenciatura en Administración. Todas con validez oficial y reconocimiento del TecNM.',
    category: 'info'
  },

  telefono: {
    keywords: ['teléfono', 'telefono', 'número', 'numero', 'contacto', 'llamar', 'tel'],
    response: 'El teléfono del Instituto Tecnológico de Delicias es: (639) 474 5640. Horario de atención telefónica: Lunes a Viernes de 8:00 a 15:00 hrs.',
    category: 'info'
  },

  ubicacionTec: {
    keywords: ['dirección del tec', 'direccion del tec', 'dónde está el tec', 'donde esta el tec', 'ubicación del campus', 'ubicacion del campus', 'cómo llego al tec'],
    response: 'El Instituto Tecnológico de Delicias se ubica en Av. Tecnológico s/n, Col. Tecnológico, en Delicias, Chihuahua, México. Desde el centro de la ciudad, toma rumbo al sur por la Av. Tecnológico.',
    category: 'info'
  },

  wifi: {
    keywords: ['wifi', 'wi-fi', 'internet', 'red', 'contraseña wifi', 'cómo me conecto', 'como me conecto al wifi'],
    response: 'Sí, hay Wi-Fi en el campus. La red se llama "TecNM_Delicias" (puede variar). Para conectarte, usa tu número de control como usuario. Si tienes problemas, acude al Centro de Cómputo o al DAIS para soporte.',
    category: 'info'
  },

  tecNM: {
    keywords: ['tecnm', 'tecnológico nacional', 'tecnologico nacional', 'qué es el tecnm', 'que es el tecnm'],
    response: 'El TecNM (Tecnológico Nacional de México) es un sistema de educación superior tecnológica pública con presencia en todo el país. El Campus Delicias forma parte de este sistema, lo que garantiza que los planes de estudio y títulos tienen reconocimiento nacional.',
    category: 'info'
  },

  becas: {
    keywords: ['becas', 'beca', 'apoyo económico', 'apoyo economico', 'benito juárez', 'benito juarez', 'jóvenes escribiendo', 'jovenes escribiendo'],
    response: 'El Tec ofrece acceso a varias becas: • Beca Benito Juárez (federal). • Becas institucionales por promedio. • Becas de manutención CNBES. Para más información, acude al Departamento de Servicios Estudiantiles o revisa la convocatoria en la página oficial del TecNM.',
    category: 'info'
  },

  sii: {
    keywords: ['sii', 'sistema integral', 'plataforma', 'portal estudiante', 'número de control', 'numero de control', 'contraseña sii'],
    response: 'El SII (Sistema Integral de Información) es la plataforma en línea donde consultas calificaciones, horarios, realizas selección de materias y generas fichas de pago. Accede con tu número de control y contraseña. Si olvidaste tu contraseña, acude a Servicios Escolares con tu credencial.',
    category: 'info'
  },

  extraescolares: {
    keywords: ['actividades extra', 'extraescolares', 'clubes', 'talleres', 'actividades culturales', 'deporte', 'selección deportiva'],
    response: 'El Tec ofrece actividades extraescolares como: deportes (futbol, basquetbol, voleibol), talleres culturales (música, danza), club de robótica, club de programación, entre otros. Infórmate en el Departamento de Actividades Extraescolares al inicio de cada semestre.',
    category: 'info'
  },

  tutoria: {
    keywords: ['tutoría', 'tutoria', 'tutor', 'asesoría', 'asesoria', 'asesor', 'ayuda académica'],
    response: 'Cada alumno tiene asignado un tutor académico. Tu tutor puede ayudarte con orientación académica, problemas de desempeño y canalización a servicios de apoyo. Consulta quién es tu tutor en la jefatura de tu carrera o en el SII.',
    category: 'info'
  },

  nuevoIngreso: {
    keywords: ['nuevo ingreso', 'primer semestre', 'recién entro', 'recien entro', 'soy nuevo', 'voy a entrar', 'admisión', 'admision', 'ficha', 'examen de admisión'],
    response: 'Si eres de nuevo ingreso: 1) Consulta la convocatoria en la página del TecNM Delicias. 2) Compra tu ficha de examen. 3) Presenta el examen de admisión. 4) Si eres aceptado, realiza tu inscripción en las fechas indicadas. 5) Asiste a la semana de inducción. ¡Bienvenido!',
    category: 'info'
  }
};

// Información de los edificios para el mapa interactivo
const BUILDING_INFO = {
  'entrada': {
    title: 'Entrada Principal',
    description: 'Acceso principal del campus sobre Av. Tecnológico. Presenta tu credencial de estudiante al personal de vigilancia.',
    icon: '🚪'
  },
  'direccion': {
    title: 'Dirección / Edificio A',
    description: 'Oficinas de Dirección, Subdirecciones y Administración. Horario: L-V 8:00-15:00 hrs.',
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
    description: 'Aulas para clases regulares y programas de posgrado. Zona sur-central del campus.',
    icon: '🏫'
  },
  'lab-computo': {
    title: 'Laboratorio de Cómputo',
    description: 'Centro de cómputo con equipos y software especializado. Requiere credencial vigente. Horario: L-V 8:00-19:00 hrs.',
    icon: '🖥️'
  },
  'lab-electronica': {
    title: 'Lab. Electrónica y Mecatrónica',
    description: 'Prácticas de circuitos, electrónica digital, robótica y automatización. Acceso con docente.',
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
    description: 'Venta de alimentos, bebidas y snacks. Horario: L-V 7:30-16:00 hrs.',
    icon: '🍽️'
  },
  'canchas': {
    title: 'Canchas Deportivas',
    description: 'Canchas de básquetbol, voleibol y área multiusos para educación física y actividades deportivas.',
    icon: '⚽'
  },
  'estacionamiento': {
    title: 'Estacionamiento',
    description: 'Estacionamiento para estudiantes. Respeta los cajones señalizados y áreas reservadas.',
    icon: '🅿️'
  },
  'banos': {
    title: 'Baños / Sanitarios',
    description: 'Módulos de sanitarios señalizados. Hay dos ubicaciones: zona central-oeste y zona noreste.',
    icon: '🚻'
  }
};
