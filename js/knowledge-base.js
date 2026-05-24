/* ============================================
   Base de conocimiento de LumiTec
   TecNM Campus Delicias
   --- INFORMACIÓN VERIFICADA ---
   Extraída directamente de delicias.tecnm.mx
   Última actualización: Mayo 2026
   ============================================ */

const KNOWLEDGE_BASE = {

  // --- SALUDOS Y DESPEDIDAS ---
  saludos: {
    keywords: ['hola', 'buenos días', 'buenas tardes', 'buenas noches', 'hey', 'qué onda', 'que onda', 'saludos', 'hi', 'hello'],
    response: '¡Hola! Soy LumiTec, tu asistente virtual del TecNM Campus Delicias. ¿En qué puedo ayudarte? Puedo orientarte sobre carreras, trámites, horarios, ubicaciones y más.',
    category: 'general'
  },

  despedidas: {
    keywords: ['adiós', 'adios', 'bye', 'hasta luego', 'nos vemos', 'gracias', 'muchas gracias', 'chao', 'ok gracias'],
    response: '¡Gracias por usar LumiTec! Si necesitas algo más, aquí estaré. ¡Éxito en tus estudios! "Sembrar valores para cosechar líderes".',
    category: 'general'
  },

  queEres: {
    keywords: ['quién eres', 'quien eres', 'qué eres', 'que eres', 'cómo te llamas', 'como te llamas', 'lumitec'],
    response: 'Soy LumiTec, un asistente virtual del Tecnológico de Delicias. Mi nombre viene de "Lumi" (luz) y "Tec" (tecnológico). Puedo ayudarte con carreras, trámites, admisión, ubicaciones y horarios del campus.',
    category: 'general'
  },

  // --- INFORMACIÓN INSTITUCIONAL ---
  carreras: {
    keywords: ['carreras', 'qué carreras', 'que carreras', 'ingenierías', 'ingenierias', 'oferta académica', 'oferta educativa', 'qué puedo estudiar', 'que puedo estudiar', 'licenciatura', 'programas'],
    response: 'El TecNM Delicias ofrece 6 ingenierías y 1 maestría: • Ing. Industrial • Ing. en Gestión Empresarial • Ing. Electromecánica • Ing. en Sistemas Computacionales • Ing. en Energías Renovables • Ing. Civil • Maestría en Ingeniería Administrativa. Hay modalidades escolarizada, mixta y virtual. Más info: delicias.tecnm.mx/ofertacademica',
    category: 'info'
  },

  modalidades: {
    keywords: ['modalidad', 'modalidades', 'escolarizada', 'mixta', 'virtual', 'en línea', 'en linea', 'semipresencial', 'a distancia'],
    response: 'El Tec ofrece 3 modalidades: ESCOLARIZADA (6 carreras): Gestión Empresarial, Electromecánica, Industrial, Sistemas, Energías Renovables y Civil. MIXTA: Gestión Empresarial, Industrial y Sistemas. VIRTUAL: Ing. en Sistemas Computacionales. No todas las carreras se ofrecen en todos los periodos, consulta en delicias.tecnm.mx/ofertacademica',
    category: 'info'
  },

  ingenieriaIndustrial: {
    keywords: ['ingeniería industrial', 'ingenieria industrial', 'industrial'],
    response: 'Ingeniería Industrial es la carrera con mayor matrícula del campus (~700 estudiantes). Se enfoca en optimización de procesos, manufactura, calidad y logística. Disponible en modalidad escolarizada y mixta. Cuenta con laboratorio especializado.',
    category: 'info'
  },

  ingenieriaGestion: {
    keywords: ['gestión empresarial', 'gestion empresarial', 'ige', 'negocios'],
    response: 'Ingeniería en Gestión Empresarial (IGE) combina ingeniería con administración y negocios. Es la segunda carrera más popular (~370 alumnos). Disponible en modalidad escolarizada y mixta.',
    category: 'info'
  },

  ingenieriaElectromecanica: {
    keywords: ['electromecánica', 'electromecanica', 'eléctrica', 'electrica', 'mecánica', 'mecanica'],
    response: 'Ingeniería Electromecánica combina electricidad, electrónica y mecánica (~345 alumnos). Cuenta con laboratorios de electrónica y talleres especializados. Disponible en modalidad escolarizada.',
    category: 'info'
  },

  ingenieriaSistemas: {
    keywords: ['sistemas computacionales', 'isc', 'programación', 'programacion', 'software', 'computación', 'computacion'],
    response: 'Ingeniería en Sistemas Computacionales (ISC) se enfoca en desarrollo de software, redes y tecnologías de la información. Disponible en modalidad escolarizada, mixta y VIRTUAL. El departamento académico es el DAIS. El campus tiene más de 500 equipos de cómputo.',
    category: 'info'
  },

  ingenieriaCivil: {
    keywords: ['ingeniería civil', 'ingenieria civil', 'civil', 'construcción', 'construccion'],
    response: 'Ingeniería Civil forma profesionistas en diseño, construcción y supervisión de obras de infraestructura. Disponible en modalidad escolarizada. Costo de inscripción: $3,150.00. Retícula versión OCT-2025, con 260 créditos totales.',
    category: 'info'
  },

  ingenieriaEnergias: {
    keywords: ['energías renovables', 'energias renovables', 'energía', 'energia', 'solar', 'renovable', 'sustentable'],
    response: 'Ingeniería en Energías Renovables se enfoca en fuentes de energía limpia como solar, eólica y biomasa. Disponible en modalidad escolarizada.',
    category: 'info'
  },

  maestria: {
    keywords: ['maestría', 'maestria', 'posgrado', 'postgrado', 'ingeniería administrativa', 'ingenieria administrativa'],
    response: 'El Tec ofrece la Maestría en Ingeniería Administrativa en modalidad escolarizada. Para más información sobre el proceso de admisión al posgrado, consulta delicias.tecnm.mx/admision o comunícate al 639 168 13 21 (Desarrollo Académico).',
    category: 'info'
  },

  // --- ADMISIÓN ---
  nuevoIngreso: {
    keywords: ['nuevo ingreso', 'primer semestre', 'recién entro', 'recien entro', 'soy nuevo', 'voy a entrar', 'admisión', 'admision', 'ficha', 'examen de admisión', 'quiero entrar', 'inscribirme por primera vez'],
    response: 'Proceso de admisión: 1) Regístrate en delicias.tecnm.mx/admision. 2) Paga tu ficha ($750). 3) Genera tu NIP y llena la encuesta socioeconómica. 4) Presenta el test de colocación en línea. Debes estar en tu último semestre de bachillerato o haberlo terminado. Consulta fechas en la página.',
    category: 'tramite'
  },

  costoInscripcion: {
    keywords: ['costo inscripción', 'costo inscripcion', 'cuánto cuesta inscribirse', 'cuanto cuesta inscribirse', 'precio ficha', 'costo ficha', 'cuánto cuesta la ficha'],
    response: 'Costos de admisión: Ficha: $750.00 | Inscripción escolarizada: $2,900.00 | Inscripción Ing. Civil escolarizada: $3,150.00 | Inscripción mixta: $3,650.00. Pago en BBVA cuenta 0113571645, CLABE 012150001135716452, o en Caja del Edificio Principal del Tec (efectivo, débito o crédito).',
    category: 'tramite'
  },

  examenAdmision: {
    keywords: ['examen admisión', 'examen admision', 'test colocación', 'test colocacion', 'examen de ingreso', 'guía de estudio', 'guia de estudio'],
    response: 'El examen de admisión es un "test de colocación" en línea. La guía de estudio está disponible para descarga en delicias.tecnm.mx/admision. Consulta las fechas exactas en la página y redes sociales del Tec.',
    category: 'tramite'
  },

  // --- TRÁMITES ---
  reinscripcion: {
    keywords: ['reinscripción', 'reinscripcion', 'reinscribirme', 'cómo me reinscribo', 'como me reinscribo', 'inscripción semestre', 'nuevo semestre'],
    response: 'Para reinscribirte: 1) Ingresa al SII en línea. 2) Selecciona tus materias. 3) Genera tu ficha de pago. 4) Paga en banco BBVA o en Caja del Tec. 5) Entrega comprobante en Servicios Escolares. Fechas en delicias.tecnm.mx y redes sociales.',
    category: 'tramite'
  },

  bajaTemporal: {
    keywords: ['baja temporal', 'baja', 'darme de baja', 'suspender estudios', 'dejar la escuela temporalmente'],
    response: 'Para solicitar baja temporal: 1) Acude a Servicios Escolares antes de que termine el periodo. 2) Llena el formato de solicitud. 3) Obtén firma del jefe de carrera. 4) Entrega en ventanilla. Puedes reincorporarte el siguiente semestre.',
    category: 'tramite'
  },

  constancia: {
    keywords: ['constancia', 'constancia de estudios', 'carta de estudios', 'comprobante de estudios'],
    response: 'Para obtener una constancia de estudios: 1) Solicítala en Servicios Escolares. 2) Presenta tu credencial vigente. 3) Paga la cuota en caja. 4) Se entrega en 2-3 días hábiles. Horario: L-V 9:00-15:00 hrs.',
    category: 'tramite'
  },

  kardex: {
    keywords: ['kardex', 'kárdex', 'historial académico', 'historial academico', 'calificaciones', 'boleta'],
    response: 'Consulta tu kárdex en el SII en línea con tu número de control y contraseña. Para kárdex oficial impreso, solicítalo en Servicios Escolares con tu credencial.',
    category: 'tramite'
  },

  titulacion: {
    keywords: ['titulación', 'titulacion', 'título', 'titulo', 'titularme', 'cómo me titulo', 'como me titulo', 'requisitos titulación', 'tesis'],
    response: 'Para titularte necesitas: 1) Todas las materias aprobadas. 2) Servicio social liberado. 3) Residencias profesionales liberadas. 4) Acta de nacimiento y CURP. 5) Fotos tamaño título. 6) Elegir modalidad (tesis, memoria, CENEVAL, etc.). Acude a la División de Estudios Profesionales.',
    category: 'tramite'
  },

  servicioSocial: {
    keywords: ['servicio social', 'ss', 'donde hago servicio social', 'requisitos servicio social', 'horas servicio social'],
    response: 'El servicio social requiere: 1) Mínimo 70% de créditos aprobados. 2) Acudir a Gestión Tecnológica y Vinculación. 3) Elegir programa o dependencia. 4) Cumplir 480 horas (6 meses). 5) Entregar reportes bimestrales. 6) Solicitar carta de liberación al terminar.',
    category: 'tramite'
  },

  residencias: {
    keywords: ['residencias', 'residencias profesionales', 'residencia profesional', 'donde hago residencias', 'requisitos residencias', 'prácticas profesionales', 'practicas profesionales'],
    response: 'Las residencias requieren: 1) Mínimo 80% de créditos. 2) Servicio social liberado o en proceso. 3) Buscar empresa o institución. 4) Presentar anteproyecto al jefe de carrera. 5) Mínimo 4 meses (640 hrs). 6) Entregar reporte final y memoria.',
    category: 'tramite'
  },

  credencial: {
    keywords: ['credencial', 'credencial de estudiante', 'identificación', 'identificacion', 'id estudiantil', 'perdí mi credencial'],
    response: 'Para tramitar o reponer tu credencial acude a Servicios Escolares con identificación oficial y 2 fotos tamaño infantil. Paga la cuota en caja. Si la perdiste, la reposición tiene costo adicional.',
    category: 'tramite'
  },

  pago: {
    keywords: ['pago', 'ficha de pago', 'donde pago', 'forma de pago', 'banco', 'cuenta bancaria', 'caja'],
    response: 'Opciones de pago: 1) CAJA del Edificio Principal del Tec (efectivo, débito o crédito). 2) Transferencia BBVA: Cuenta 0113571645, CLABE 012150001135716452, a nombre de "TecNM Instituto Tecnológico de Delicias". Pon tu número de solicitud como concepto.',
    category: 'tramite'
  },

  tramites: {
    keywords: ['trámites', 'tramites', 'qué trámites', 'que tramites', 'trámite', 'tramite'],
    response: 'Trámites principales en Servicios Escolares: inscripción, reinscripción, constancias, credencial, kárdex, baja temporal, titulación. También: servicio social y residencias profesionales en tu jefatura de carrera. Para trámites de gobierno, hay un enlace en la página del Tec.',
    category: 'tramite'
  },

  // --- UBICACIONES ---
  biblioteca: {
    keywords: ['biblioteca', 'libros', 'centro de información', 'estudiar', 'sala de estudio'],
    response: 'La Biblioteca (Centro de Información) se encuentra dentro del campus. Cuenta con sala de lectura, área de cómputo y préstamo de libros. Horario aproximado: L-V 8:00-20:00 hrs.',
    category: 'ubicacion',
    building: 'biblioteca'
  },

  cafeteria: {
    keywords: ['cafetería', 'cafeteria', 'comer', 'comida', 'alimentos', 'tienda', 'lonche'],
    response: 'La Cafetería se encuentra dentro del campus. Aquí puedes comprar alimentos, bebidas y snacks durante el horario escolar.',
    category: 'ubicacion',
    building: 'cafeteria'
  },

  direccion: {
    keywords: ['dirección', 'direccion', 'edificio a', 'administración', 'administracion', 'oficina de la directora', 'edificio principal'],
    response: 'La Dirección está en el Edificio Principal. La directora es la Mtra. Lilian Karina Santiesteban Torres. Aquí están las subdirecciones, administración y Caja para pagos. Horario: L-V 8:00-15:00 hrs. Correo: dir_delicias@tecnm.mx',
    category: 'ubicacion',
    building: 'direccion'
  },

  serviciosEscolares: {
    keywords: ['servicios escolares', 'control escolar', 'ventanilla'],
    response: 'Servicios Escolares se ubica junto al Edificio Principal. Trámites: inscripción, constancias, credencial, kárdex y más. Horario: L-V 9:00-15:00 hrs.',
    category: 'ubicacion',
    building: 'servicios-escolares'
  },

  dais: {
    keywords: ['dais', 'departamento de sistemas', 'jefe de carrera sistemas', 'jefe de sistemas'],
    response: 'El DAIS (Departamento de Ingeniería en Sistemas Computacionales) está en la zona norte-central del campus. Jefatura de carrera y asesoría académica de ISC. Horario: L-V 9:00-15:00 hrs.',
    category: 'ubicacion',
    building: 'dais'
  },

  labComputo: {
    keywords: ['laboratorio de cómputo', 'laboratorio de computo', 'lab cómputo', 'lab computo', 'centro de cómputo', 'centro de computo', 'computadoras', 'sala de computo'],
    response: 'El Centro de Cómputo cuenta con más de 500 equipos con software especializado. Requiere credencial vigente. Horario: L-V 8:00-19:00 hrs.',
    category: 'ubicacion',
    building: 'lab-computo'
  },

  labElectronica: {
    keywords: ['laboratorio de electrónica', 'laboratorio de electronica', 'lab electrónica', 'lab electronica', 'electromecánica', 'electromecanica', 'lab electromecánica'],
    response: 'El Laboratorio de Electrónica y Electromecánica está en la zona noreste del campus. Prácticas de circuitos, electrónica, sistemas eléctricos y mecánicos. Acceso con docente.',
    category: 'ubicacion',
    building: 'lab-electronica'
  },

  labIndustrial: {
    keywords: ['laboratorio industrial', 'lab industrial', 'taller industrial'],
    response: 'El Laboratorio de Ingeniería Industrial se encuentra en el extremo este del campus. Prácticas de manufactura, métodos y tiempos, y control de calidad.',
    category: 'ubicacion',
    building: 'lab-industrial'
  },

  edificioB: {
    keywords: ['edificio b', 'aulas edificio b', 'salones edificio b'],
    response: 'El Edificio B tiene múltiples salones con proyector. Consulta tu aula en el SII.',
    category: 'ubicacion',
    building: 'edificio-b'
  },

  edificioC: {
    keywords: ['edificio c', 'aulas edificio c', 'salones edificio c'],
    response: 'El Edificio C tiene salones con proyector y equipo multimedia, junto al centro de cómputo.',
    category: 'ubicacion',
    building: 'edificio-c'
  },

  edificioD: {
    keywords: ['edificio d', 'aulas edificio d'],
    response: 'El Edificio D alberga aulas adicionales y espacios para la Maestría en Ingeniería Administrativa.',
    category: 'ubicacion',
    building: 'edificio-d'
  },

  banos: {
    keywords: ['baños', 'banos', 'baño', 'bano', 'sanitarios', 'restroom', 'wc'],
    response: 'Hay módulos de baños en varias ubicaciones del campus, cerca de los edificios de aulas y laboratorios. Todos están señalizados.',
    category: 'ubicacion',
    building: 'banos'
  },

  canchas: {
    keywords: ['canchas', 'deportes', 'cancha', 'futbol', 'fútbol', 'basquetbol', 'básquetbol', 'deporte', 'actividades deportivas', 'gimnasio', 'pesas', 'campo'],
    response: 'El campus tiene canchas, gimnasio-auditorio (construido 2022), campo de pasto sintético y sala de pesas equipada. Ha sido sede de pre-nacionales deportivos del TecNM.',
    category: 'ubicacion',
    building: 'canchas'
  },

  estacionamiento: {
    keywords: ['estacionamiento', 'parking', 'estacionar', 'carro', 'coche', 'auto', 'vehículo', 'vehiculo'],
    response: 'El estacionamiento está en la zona sureste del campus. Respeta cajones señalizados y áreas reservadas para docentes y personas con discapacidad.',
    category: 'ubicacion',
    building: 'estacionamiento'
  },

  entrada: {
    keywords: ['entrada', 'puerta principal', 'acceso', 'cómo llego', 'como llego', 'entrada principal'],
    response: 'La entrada principal está sobre el Paseo Tecnológico Km 3.5 (carretera Delicias-Rosalilla). Cuenta con caseta de vigilancia. Presenta tu credencial al entrar.',
    category: 'ubicacion',
    building: 'entrada'
  },

  aulas: {
    keywords: ['aulas', 'salones', 'salon', 'salón', 'donde tengo clase', 'mi salon'],
    response: 'Las aulas están en los Edificios B, C y D. Consulta tu horario en el SII con tu número de control para saber tu aula exacta.',
    category: 'ubicacion'
  },

  // --- PLATAFORMAS Y SISTEMAS ---
  sii: {
    keywords: ['sii', 'sistema integral', 'plataforma', 'portal estudiante', 'número de control', 'numero de control', 'contraseña sii'],
    response: 'El SII (Sistema Integral de Información) es donde consultas calificaciones, horarios, seleccionas materias y generas fichas de pago. Accede con tu número de control y contraseña. Si olvidaste tu contraseña, acude a Servicios Escolares con tu credencial.',
    category: 'info'
  },

  moodle: {
    keywords: ['moodle', 'plataforma virtual', 'clases virtuales', 'plataforma de cursos'],
    response: 'MOODLE es la plataforma de aprendizaje en línea del Tec. Ahí los docentes suben material, tareas y actividades. Accede con tus credenciales institucionales. Si tienes problemas, contacta a tu docente o al DAIS.',
    category: 'info'
  },

  sig: {
    keywords: ['sig', 'sistema integrado de gestión', 'iso', 'certificación', 'certificacion', 'calidad'],
    response: 'El Tec cuenta con un Sistema Integrado de Gestión certificado bajo las normas: ISO 9001:2015 (Calidad), ISO 14001:2015 (Medio Ambiente), ISO 45001:2018 (Seguridad y Salud) e ISO 50001:2018 (Energía). Esto garantiza estándares internacionales en educación.',
    category: 'info'
  },

  calendario: {
    keywords: ['calendario', 'calendario académico', 'calendario academico', 'periodo', 'semestre', 'cuando inician clases', 'inicio de clases'],
    response: 'El calendario académico vigente es ENE-JUN 2026. El próximo periodo es AGO-DIC 2026 con inicio de clases el 17 de agosto. Consulta el calendario completo en delicias.tecnm.mx',
    category: 'info'
  },

  // --- PERSONAL DIRECTIVO Y ORGANIGRAMA ---
  directora: {
    keywords: ['directora', 'director', 'quién dirige', 'quien dirige', 'lilian', 'santiesteban'],
    response: 'La directora del TecNM Campus Delicias es la Mtra. Lilian Karina Santiesteban Torres. Cuenta con 3 subdirecciones: Académica (Mtra. Mirna Araceli Acosta Rodríguez), Planeación y Vinculación (Mtro. Jorge Luis Alba Aldaz) y Servicios Administrativos (Hilario Ramírez Moreno). Oficina en el Edificio Principal. Correo: dir_delicias@tecnm.mx',
    category: 'info',
    building: 'direccion'
  },

  subdirectores: {
    keywords: ['subdirector', 'subdirectora', 'subdirecciones', 'mirna acosta', 'jorge alba', 'hilario ramírez', 'hilario ramirez'],
    response: 'Subdirecciones del TecNM Delicias: • Subdirectora Académica: Mtra. Mirna Araceli Acosta Rodríguez • Subdirector de Planeación y Vinculación: Mtro. Jorge Luis Alba Aldaz • Subdirector de Servicios Administrativos: Hilario Ramírez Moreno. Ubicados en el Edificio Principal.',
    category: 'info',
    building: 'direccion'
  },

  organigrama: {
    keywords: ['organigrama', 'estructura', 'personal', 'quiénes trabajan', 'quienes trabajan', 'jefes de departamento', 'jefes', 'departamentos'],
    response: 'El Tec tiene: Directora (Mtra. Lilian Santiesteban), 3 Subdirecciones y 22 jefes de departamento. Algunos jefes: Mtro. Emmanuel Morales (Industrial), Ing. Víctor González (Sistemas), Ing. Alejandro Cortéz (Electromecánica), Dr. Gilberto Peralta (Servicios Escolares), C.P. Julieta Martínez (Desarrollo Académico), Ing. David Álvarez (División de Estudios Profesionales). Consulta el organigrama completo en delicias.tecnm.mx/personal',
    category: 'info'
  },

  jefeIndustrial: {
    keywords: ['jefe de industrial', 'emmanuel morales', 'departamento de industrial'],
    response: 'El Jefe del Departamento de Industrial es el Mtro. Emmanuel Morales Chávez. Acude a su oficina para asesoría académica de la carrera.',
    category: 'info'
  },

  jefeSistemas: {
    keywords: ['jefe de sistemas', 'víctor gonzález', 'victor gonzalez', 'departamento de sistemas', 'jefe del dais'],
    response: 'El Jefe del Departamento de Sistemas Computacionales es el Ing. Víctor Manuel González Miranda. Su oficina está en el DAIS.',
    category: 'info',
    building: 'dais'
  },

  jefeElectromecanica: {
    keywords: ['jefe de electromecánica', 'jefe de electromecanica', 'alejandro cortéz', 'alejandro cortez', 'departamento de metalmecánica', 'departamento de metalmecanica'],
    response: 'El Jefe del Departamento de Metalmecánica es el Ing. Alejandro Cortéz Cortéz. Acude a su oficina para asesoría de Ing. Electromecánica.',
    category: 'info'
  },

  jefeServiciosEscolares: {
    keywords: ['jefe de servicios escolares', 'gilberto peralta', 'gabriel peralta'],
    response: 'El Jefe del Departamento de Servicios Escolares es el Dr. Gilberto Gabriel Peralta. Atiende en Servicios Escolares, L-V 9:00-15:00 hrs.',
    category: 'info',
    building: 'servicios-escolares'
  },

  jefeComunicacion: {
    keywords: ['comunicación', 'comunicacion', 'difusión', 'difusion', 'aranxa', 'rocío lópez', 'rocio lopez'],
    response: 'La Jefa del Departamento de Comunicación y Difusión es la Lic. Aranxa del Rocío López Avitia. Correo: comunicacion@delicias.tecnm.mx',
    category: 'info'
  },

  jefeVinculacion: {
    keywords: ['gestión tecnológica', 'gestion tecnologica', 'vinculación departamento', 'vinculacion departamento', 'maría baray', 'maria baray', 'rosario baray'],
    response: 'La Jefa del Departamento de Gestión Tecnológica y Vinculación es la Dra. María del Rosario Baray Guerrero. Coordina servicio social, residencias profesionales y vinculación con empresas.',
    category: 'info'
  },

  jefeDesarrolloAcademico: {
    keywords: ['desarrollo académico jefe', 'julieta martínez', 'julieta martinez', 'cereceres'],
    response: 'La Jefa del Departamento de Desarrollo Académico es la C.P. Julieta Martínez Cereceres. Coordina la oferta educativa y admisión. Tel: 639 168 13 21.',
    category: 'info'
  },

  jefeCentroComputo: {
    keywords: ['centro de cómputo jefe', 'centro de computo jefe', 'jorge gonzález hernández', 'jorge gonzalez hernandez'],
    response: 'El Jefe del Centro de Cómputo es el Ing. Jorge González Hernández. Brinda soporte técnico y administra los 500+ equipos del campus.',
    category: 'info',
    building: 'lab-computo'
  },

  jefeCentroInformacion: {
    keywords: ['centro de información jefe', 'centro de informacion jefe', 'juan solano', 'bibliotecario'],
    response: 'El Jefe del Centro de Información (Biblioteca) es el Mtro. Juan Solano Sánchez.',
    category: 'info',
    building: 'biblioteca'
  },

  jefeExtraescolares: {
    keywords: ['extraescolares jefe', 'actividades extraescolares jefe', 'javier hinostroza'],
    response: 'El Jefe del Departamento de Actividades Extraescolares es el Ing. Javier Hinostroza Alcantar. Coordina deportes, actividades culturales y complementarias.',
    category: 'info'
  },

  jefeDivisionEstudios: {
    keywords: ['división de estudios', 'division de estudios', 'estudios profesionales', 'david álvarez', 'david alvarez'],
    response: 'El Jefe de la División de Estudios Profesionales es el Ing. David Álvarez Sánchez. Coordina los programas académicos de todas las carreras.',
    category: 'info'
  },

  jefeRecursosHumanos: {
    keywords: ['recursos humanos', 'luis peña', 'luis pena'],
    response: 'El Jefe del Departamento de Recursos Humanos es el Ing. Luis Peña Muñoz.',
    category: 'info'
  },

  jefeRecursosMateriales: {
    keywords: ['recursos materiales', 'aldo alarcón', 'aldo alarcon'],
    response: 'El Jefe del Departamento de Recursos Materiales es el Mtro. Aldo Alarcón.',
    category: 'info'
  },

  jefeRecursosFinancieros: {
    keywords: ['recursos financieros', 'adrián aguirre', 'adrian aguirre'],
    response: 'El Jefe del Departamento de Recursos Financieros es el Ing. Adrián Enrique Aguirre Velasco.',
    category: 'info'
  },

  jefePlaneacion: {
    keywords: ['planeación departamento', 'planeacion departamento', 'programación y presupuesto', 'programacion y presupuesto', 'yazmín moreno', 'yazmin moreno'],
    response: 'La Jefa del Departamento de Planeación, Programación y Presupuestación es la Q.B.P. Yazmín Moreno Chacón.',
    category: 'info'
  },

  jefeMantenimiento: {
    keywords: ['mantenimiento', 'mantenimiento de equipo', 'jesús bolívar', 'jesus bolivar', 'bolívar holguín'],
    response: 'El Jefe del Departamento de Mantenimiento de Equipo es el Ing. Jesús José Bolívar Holguín.',
    category: 'info'
  },

  jefeCienciasBasicas: {
    keywords: ['ciencias básicas', 'ciencias basicas', 'antonio álvarez', 'antonio alvarez'],
    response: 'El Jefe del Departamento de Ciencias Básicas es el Ing. Antonio Álvarez Sánchez.',
    category: 'info'
  },

  jefeCienciasEconomicas: {
    keywords: ['ciencias económico', 'ciencias economico', 'administrativas', 'rosalinda garcía', 'rosalinda garcia', 'garcía cantón', 'garcia canton'],
    response: 'La Jefa del Departamento de Ciencias Económico-Administrativas es la C.P. Rosalinda García Cantón.',
    category: 'info'
  },

  telefono: {
    keywords: ['teléfono', 'telefono', 'contacto', 'llamar', 'tel', 'correo', 'email'],
    response: 'Contacto TecNM Delicias: Tel: 639 132 6500 | Desarrollo Académico: 639 168 13 21 | Correo: dir_delicias@tecnm.mx (Dirección), comunicacion@delicias.tecnm.mx (Comunicación). Web: delicias.tecnm.mx',
    category: 'info'
  },

  ubicacionTec: {
    keywords: ['dirección del tec', 'direccion del tec', 'dónde está el tec', 'donde esta el tec', 'ubicación del campus', 'ubicacion del campus', 'cómo llego al tec', 'domicilio'],
    response: 'El TecNM Campus Delicias está en Paseo Tecnológico Km 3.5, Col. Tecnológico, C.P. 33000, Delicias, Chihuahua, México (carretera Delicias-Rosalilla).',
    category: 'info'
  },

  mision: {
    keywords: ['misión', 'mision'],
    response: 'Misión del TecNM Delicias: Formar profesionistas de excelencia en el ámbito de la ciencia y la tecnología, capaces de propiciar el desarrollo y transformación de su entorno, a través de programas educativos de calidad pertinentes.',
    category: 'info'
  },

  vision: {
    keywords: ['visión', 'vision'],
    response: 'Visión del TecNM Delicias: Ser una institución educativa que se distinga como uno de los elementos fundamentales del desarrollo sustentable, permanente y equitativo del estado.',
    category: 'info'
  },

  valores: {
    keywords: ['valores', 'principios', 'lema'],
    response: 'Lema: "Sembrar valores para cosechar líderes". Valores institucionales: Honestidad, Responsabilidad, Respeto, Compromiso y Lealtad.',
    category: 'info'
  },

  historia: {
    keywords: ['historia', 'fundación', 'fundacion', 'cuándo se fundó', 'cuando se fundo', 'origen', 'aniversario'],
    response: 'El Tec de Delicias fue fundado el 6 de junio de 1986 mediante convenio entre el Gobierno del Estado, el Patronato y la Federación, durante el mandato del Gobernador Lic. Saúl González Herrera. Abrió sus puertas el 22 de septiembre de 1986. Fue el cuarto Instituto Tecnológico en Chihuahua.',
    category: 'info'
  },

  tecNM: {
    keywords: ['tecnm', 'tecnológico nacional', 'tecnologico nacional', 'qué es el tecnm', 'que es el tecnm'],
    response: 'El TecNM (Tecnológico Nacional de México) es el sistema de educación superior tecnológica pública más grande de Latinoamérica. El Campus Delicias pertenece a este sistema con reconocimiento oficial nacional.',
    category: 'info'
  },

  becas: {
    keywords: ['becas', 'beca', 'apoyo económico', 'apoyo economico', 'benito juárez', 'benito juarez', 'jóvenes escribiendo', 'jovenes escribiendo'],
    response: 'El Tec tiene acceso a becas federales: Beca Benito Juárez y Beca Jóvenes Escribiendo el Futuro. También hay becas institucionales. Consulta convocatorias en delicias.tecnm.mx',
    category: 'info'
  },

  estadisticas: {
    keywords: ['cuántos alumnos', 'cuantos alumnos', 'cuántos estudiantes', 'cuantos estudiantes', 'matrícula', 'matricula', 'cuántos maestros', 'cuantos maestros', 'docentes'],
    response: 'El TecNM Delicias tiene más de 1,800 estudiantes en sus 6 carreras y maestría, atendidos por 98 docentes calificados. Las carreras con mayor matrícula son: Ing. Industrial, Ing. en Gestión Empresarial e Ing. Electromecánica.',
    category: 'info'
  },

  paginaWeb: {
    keywords: ['página web', 'pagina web', 'sitio web', 'sitio oficial', 'redes sociales', 'facebook', 'página del tec'],
    response: 'Sitio web oficial: delicias.tecnm.mx. Ahí encuentras: Admisión, Oferta Educativa, Calendario Académico, SII, y más. Sigue las redes sociales del Tec para avisos y eventos.',
    category: 'info'
  },

  wifi: {
    keywords: ['wifi', 'wi-fi', 'internet', 'red', 'contraseña wifi', 'cómo me conecto'],
    response: 'Hay Wi-Fi disponible en el campus. Si tienes problemas para conectarte, acude al Centro de Cómputo o al DAIS para soporte técnico.',
    category: 'info'
  },

  extraescolares: {
    keywords: ['actividades extra', 'extraescolares', 'clubes', 'talleres', 'actividades culturales', 'deporte', 'selección deportiva', 'torneos', 'actividades complementarias'],
    response: 'El Tec ofrece actividades deportivas (futbol, basquetbol, voleibol, atletismo), talleres culturales y actividades complementarias (valen 5 créditos). Cuenta con gimnasio-auditorio, campo sintético y sala de pesas. El campus ha sido sede de pre-nacionales del TecNM.',
    category: 'info'
  },

  tutoria: {
    keywords: ['tutoría', 'tutoria', 'tutor', 'asesoría', 'asesoria', 'asesor', 'ayuda académica'],
    response: 'Cada alumno tiene un tutor académico asignado. Tu tutor te orienta académicamente y te canaliza a servicios de apoyo. Consulta quién es tu tutor en la jefatura de tu carrera o en el SII.',
    category: 'info'
  },

  vinculacion: {
    keywords: ['vinculación', 'vinculacion', 'empresas', 'convenios', 'nodess', 'consejo de vinculación'],
    response: 'El Tec tiene un Consejo de Vinculación con representantes del sector público, social y privado. También participa en NODESS (Nodos de Impulso a la Economía Social y Solidaria) con proyectos en Delicias, Meoqui, Rosales y Saucillo.',
    category: 'info'
  },

  proteccionCivil: {
    keywords: ['protección civil', 'proteccion civil', 'emergencia', 'seguridad', 'violencia de género', 'violencia de genero', 'igualdad', 'género', 'genero', 'acoso'],
    response: 'El Tec cuenta con: Unidad de Protección Civil, Comité Contra la Violencia de Género (CVG), Sistema de Gestión de Igualdad de Género (SGIG) y Subcomité de Ética (SEPCI). Si necesitas apoyo, acude a cualquiera de estas instancias en el Edificio Principal.',
    category: 'info'
  },

  horarioTec: {
    keywords: ['horario del tec', 'a qué hora abre el tec', 'horario de clases', 'horario general', 'a qué hora abren', 'turno'],
    response: 'El campus opera en turno discontinuo (matutino y vespertino). Las clases se imparten de lunes a viernes. Consulta tu horario específico en el SII con tu número de control.',
    category: 'horario'
  },

  horarioServiciosEscolares: {
    keywords: ['horario servicios escolares', 'a qué hora abren servicios escolares'],
    response: 'Servicios Escolares atiende de Lunes a Viernes de 9:00 a 15:00 hrs. Llega temprano en periodo de inscripciones.',
    category: 'horario'
  },

  horarioBiblioteca: {
    keywords: ['horario biblioteca', 'a qué hora abre la biblioteca'],
    response: 'La Biblioteca abre de Lunes a Viernes de 8:00 a 20:00 hrs. En exámenes puede extender horario.',
    category: 'horario'
  },

  desarrolloAcademico: {
    keywords: ['desarrollo académico', 'desarrollo academico'],
    response: 'El departamento de Desarrollo Académico coordina la oferta educativa y los procesos de admisión. Teléfono: 639 168 13 21. Consulta información en delicias.tecnm.mx/ofertacademica',
    category: 'info'
  }
};

// Información de los edificios para el mapa interactivo
const BUILDING_INFO = {
  'entrada': {
    title: 'Entrada Principal',
    description: 'Acceso principal sobre Paseo Tecnológico Km 3.5 (carretera Delicias-Rosalilla). Caseta de vigilancia.',
    icon: '🚪'
  },
  'direccion': {
    title: 'Edificio Principal / Dirección',
    description: 'Dirección (Mtra. Lilian Karina Santiesteban Torres), Subdirecciones, Administración y Caja. Correo: dir_delicias@tecnm.mx. L-V 8:00-15:00.',
    icon: '🏛️'
  },
  'servicios-escolares': {
    title: 'Servicios Escolares',
    description: 'Inscripciones, constancias, credenciales, kárdex y trámites escolares. L-V 9:00-15:00.',
    icon: '📋'
  },
  'dais': {
    title: 'DAIS - Depto. de Sistemas',
    description: 'Departamento de Ing. en Sistemas Computacionales. Jefatura de carrera y asesoría académica. L-V 9:00-15:00.',
    icon: '💻'
  },
  'edificio-b': {
    title: 'Edificio B - Aulas',
    description: 'Salones con proyector. Consulta tu horario en el SII.',
    icon: '🏫'
  },
  'edificio-c': {
    title: 'Edificio C - Aulas',
    description: 'Salones con equipo multimedia, junto al centro de cómputo.',
    icon: '🏫'
  },
  'edificio-d': {
    title: 'Edificio D - Aulas / Posgrado',
    description: 'Aulas y espacios para la Maestría en Ingeniería Administrativa.',
    icon: '🏫'
  },
  'lab-computo': {
    title: 'Centro de Cómputo',
    description: '500+ equipos con software especializado. Credencial vigente requerida. L-V 8:00-19:00.',
    icon: '🖥️'
  },
  'lab-electronica': {
    title: 'Lab. Electromecánica',
    description: 'Prácticas de circuitos, electrónica, sistemas eléctricos y mecánicos. Acceso con docente.',
    icon: '⚡'
  },
  'lab-industrial': {
    title: 'Laboratorio Industrial',
    description: 'Manufactura, métodos y tiempos, control de calidad para Ing. Industrial.',
    icon: '🏭'
  },
  'biblioteca': {
    title: 'Biblioteca',
    description: 'Centro de información: sala de lectura, cómputo y préstamo de libros. L-V 8:00-20:00.',
    icon: '📚'
  },
  'cafeteria': {
    title: 'Cafetería',
    description: 'Alimentos, bebidas y snacks durante el horario escolar.',
    icon: '🍽️'
  },
  'canchas': {
    title: 'Instalaciones Deportivas',
    description: 'Canchas, gimnasio-auditorio (2022), campo sintético y sala de pesas. Sede pre-nacionales TecNM.',
    icon: '⚽'
  },
  'estacionamiento': {
    title: 'Estacionamiento',
    description: 'Para estudiantes. Respetar cajones señalizados y áreas reservadas.',
    icon: '🅿️'
  },
  'banos': {
    title: 'Baños / Sanitarios',
    description: 'Módulos señalizados en varias ubicaciones del campus.',
    icon: '🚻'
  }
};

// Contexto institucional completo para el motor de IA
const INSTITUTIONAL_CONTEXT = `
Eres LumiTec, el asistente virtual del Instituto Tecnológico de Delicias (TecNM Campus Delicias), Chihuahua, México.

INFORMACIÓN INSTITUCIONAL:
- Nombre oficial: Instituto Tecnológico de Delicias, parte del Tecnológico Nacional de México (TecNM)
- Dirección: Paseo Tecnológico Km 3.5, Col. Tecnológico, C.P. 33000, Delicias, Chihuahua, México
- Teléfono: 639 132 6500 | Desarrollo Académico: 639 168 13 21
- Correos: dir_delicias@tecnm.mx | comunicacion@delicias.tecnm.mx
- Web: delicias.tecnm.mx
- Directora: Mtra. Lilian Karina Santiesteban Torres
- Fundado: 6 de junio de 1986, abrió puertas el 22 de septiembre de 1986
- Lema: "Sembrar valores para cosechar líderes"
- Valores: Honestidad, Responsabilidad, Respeto, Compromiso, Lealtad
- Certificaciones: ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, ISO 50001:2018
- Estudiantes: ~1,800 | Docentes: 98 | Computadoras: 500+
- Misión: Formar profesionistas de excelencia en ciencia y tecnología
- Visión: Ser elemento fundamental del desarrollo sustentable del estado

ORGANIGRAMA / PERSONAL DIRECTIVO:
- Directora: Mtra. Lilian Karina Santiesteban Torres
- Subdirectora Académica: Mtra. Mirna Araceli Acosta Rodríguez
- Subdirector de Planeación y Vinculación: Mtro. Jorge Luis Alba Aldaz
- Subdirector de Servicios Administrativos: Hilario Ramírez Moreno
Jefes de departamento:
- Industrial: Mtro. Emmanuel Morales Chávez
- Metalmecánica (Electromecánica): Ing. Alejandro Cortéz Cortéz
- Sistemas Computacionales: Ing. Víctor Manuel González Miranda
- Ciencias Básicas: Ing. Antonio Álvarez Sánchez
- Ciencias Económico-Administrativas: C.P. Rosalinda García Cantón
- Desarrollo Académico: C.P. Julieta Martínez Cereceres
- División de Estudios Profesionales: Ing. David Álvarez Sánchez
- Servicios Escolares: Dr. Gilberto Gabriel Peralta
- Comunicación y Difusión: Lic. Aranxa del Rocío López Avitia
- Centro de Información (Biblioteca): Mtro. Juan Solano Sánchez
- Gestión Tecnológica y Vinculación: Dra. María del Rosario Baray Guerrero
- Planeación, Programación y Presupuestación: Q.B.P. Yazmín Moreno Chacón
- Actividades Extraescolares: Ing. Javier Hinostroza Alcantar
- Recursos Humanos: Ing. Luis Peña Muñoz
- Recursos Materiales: Mtro. Aldo Alarcón
- Recursos Financieros: Ing. Adrián Enrique Aguirre Velasco
- Centro de Cómputo: Ing. Jorge González Hernández
- Mantenimiento de Equipo: Ing. Jesús José Bolívar Holguín

CARRERAS (6 ingenierías + 1 maestría):
1. Ing. Industrial (mayor matrícula ~700 alumnos) - Escolarizada y Mixta
2. Ing. en Gestión Empresarial - Escolarizada y Mixta
3. Ing. Electromecánica (~345 alumnos) - Escolarizada
4. Ing. en Sistemas Computacionales - Escolarizada, Mixta y Virtual
5. Ing. en Energías Renovables - Escolarizada
6. Ing. Civil - Escolarizada ($3,150 inscripción)
7. Maestría en Ingeniería Administrativa - Escolarizada (Posgrado)

COSTOS DE ADMISIÓN:
- Ficha: $750 | Inscripción escolarizada: $2,900 | Ing. Civil: $3,150 | Mixta: $3,650
- Banco: BBVA cuenta 0113571645, CLABE 012150001135716452
- También se puede pagar en Caja del Edificio Principal

PLATAFORMAS: SII (Sistema Integral de Información), MOODLE, SIG, SIRH
INSTANCIAS: Protección Civil, CVG (violencia de género), SGIG (igualdad), SEPCI (ética)
INSTALACIONES: Gimnasio-auditorio (2022), campo sintético, sala de pesas, biblioteca, centro de cómputo 500+ equipos, laboratorios

REGLAS DE RESPUESTA:
- Responde siempre en español
- Sé breve y directo (máximo 3-4 líneas)
- Si no sabes algo, sugiere acudir a Servicios Escolares (L-V 9:00-15:00) o llamar al 639 132 6500
- No inventes información, solo usa datos verificados
- Sé amigable y profesional
`;
