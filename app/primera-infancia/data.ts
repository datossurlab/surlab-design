// Contenidos de la landing «La primera infancia en debate» (27 de noviembre de 2026).
// Los datos pendientes del documento de contenidos quedan vacíos: la página
// oculta el elemento correspondiente hasta que se completen.

export const SITE_URL = 'https://sur-lab.org/primera-infancia'

// Formulario de inscripción de Monday. Es el que separa presencial / en vivo.
export const FORM_URL = 'https://forms.monday.com/forms/3ef168523a72b993247ffe5b4f7a8435?r=use1'
export const FORM_EMBED_URL = 'https://forms.monday.com/forms/embed/3ef168523a72b993247ffe5b4f7a8435?r=use1'

// Programa completo en PDF (pendiente). Ej.: '/infancias/programa.pdf'
export const PROGRAM_PDF_URL = ''

// Canal o transmisión de YouTube (pendiente).
export const YOUTUBE_URL = ''

export const CONTACT_EMAIL = 'comunicacion@sur-lab.org'

export const EVENT = {
  title: 'La primera infancia en debate: ¿qué agenda necesitamos?',
  shortTitle: 'La primera infancia en debate',
  // 15:00 a 20:00 h, hora de Argentina (UTC−3)
  startISO: '2026-11-27T15:00:00-03:00',
  endISO: '2026-11-27T20:00:00-03:00',
  startUTC: '20261127T180000Z',
  endUTC: '20261127T230000Z',
  venue: 'Aula Magna, Facultad de Derecho, Universidad de Buenos Aires',
  address: 'Av. Figueroa Alcorta 2263, Ciudad de Buenos Aires',
  description:
    'Primera jornada rumbo a una Agenda Nacional de Primera Infancia 2027. Presencial en la Facultad de Derecho (UBA) y en vivo por YouTube.',
}

export const MAP_EMBED_URL =
  'https://www.google.com/maps?q=Facultad+de+Derecho+UBA,+Av.+Figueroa+Alcorta+2263,+Buenos+Aires&output=embed'
export const MAP_LINK_URL =
  'https://www.google.com/maps/search/?api=1&query=Facultad+de+Derecho+UBA+Av.+Figueroa+Alcorta+2263'

export const navItems = [
  { label: 'Sobre la jornada', href: '#sobre' },
  { label: 'Programa', href: '#programa' },
  { label: 'Participan', href: '#participan' },
  { label: 'Cómo participar', href: '#como-participar' },
  { label: 'Preguntas', href: '#preguntas' },
]

export type Organizer = {
  name: string
  short: string
  description: string
  href?: string
  logo: string
  // Altura del logo en la tarjeta (los tres tienen proporciones muy distintas)
  logoClass: string
}

export const organizers: Organizer[] = [
  {
    name: 'OMEP Argentina',
    short: 'OMEP Argentina',
    description:
      'Comité argentino de la Organización Mundial para la Educación Preescolar.',
    logo: '/images/logos/omep-argentina.png',
    logoClass: 'h-24',
  },
  {
    name: 'SurLab, Laboratorio de Innovación Política',
    short: 'SurLab',
    description:
      'Diseña políticas públicas junto a gobiernos, universidades, empresas y comunidades, con base en Córdoba y mirada en América Latina y el Caribe.',
    href: '/',
    logo: '/images/logos/surlab.png',
    logoClass: 'h-16',
  },
  {
    name: 'Facultad de Derecho, Universidad de Buenos Aires',
    short: 'Derecho UBA',
    description: '',
    href: 'https://www.derecho.uba.ar',
    logo: '/images/logos/uba-derecho.png',
    logoClass: 'h-11',
  },
]

export const keyFacts = [
  { icon: 'calendar', label: 'Fecha', text: 'Viernes 27 de noviembre de 2026' },
  {
    icon: 'clock',
    label: 'Horario',
    text: '15:00 a 20:00 h (hora de Argentina). Acreditación y café desde las 14:30 h',
  },
  {
    icon: 'map',
    label: 'Lugar',
    text: 'Aula Magna, Facultad de Derecho, Universidad de Buenos Aires. Av. Figueroa Alcorta 2263, Ciudad de Buenos Aires',
  },
  { icon: 'video', label: 'Modalidad', text: 'Presencial, con transmisión en vivo por YouTube' },
  { icon: 'ticket', label: 'Requisitos', text: 'Actividad gratuita con inscripción previa' },
] as const

export const questions = [
  {
    title: '¿Dónde estamos?',
    text: 'Condiciones de vida, desigualdades, derechos y cambios demográficos que atraviesan a las infancias.',
    href: '#panel-1',
    block: 'Panel 1',
  },
  {
    title: '¿Qué estamos haciendo y qué debemos hacer?',
    text: 'Las políticas y experiencias en marcha, y lo que hace falta cambiar o crear.',
    href: '#panel-2',
    block: 'Panel 2',
  },
  {
    title: '¿Cómo interpelan las transformaciones de nuestro tiempo a la primera infancia?',
    text: 'Cambios sociales, culturales, tecnológicos y ambientales, y lo que les toca a las generaciones adultas.',
    href: '#panel-3',
    block: 'Panel 3',
  },
  {
    title: '¿Con qué compromisos queremos llegar a 2027?',
    text: 'Prioridades y propuestas para una agenda nacional de primera infancia.',
    href: '#cierre',
    block: 'Cierre',
  },
]

// Cada participante del programa enlaza a su tarjeta en #participan.
type ProgramPerson = { name: string; id?: string }

export type ProgramRow = {
  time: string
  id?: string
  label?: string
  title: string
  people?: ProgramPerson[]
  coordinator?: ProgramPerson
  extra?: string
}

export const program: ProgramRow[] = [
  { time: '14:30', title: 'Acreditación y café' },
  {
    time: '15:00',
    id: 'apertura',
    label: 'Apertura',
    title: 'La primera infancia en la agenda pública',
    people: [
      { name: 'María Elena Úbeda', id: 'maria-elena-ubeda' },
      { name: 'Christian Asinelli', id: 'christian-asinelli' },
      { name: 'representación del BID', id: 'representacion-bid' },
      { name: 'Mercedes Mayol Lassalle', id: 'mercedes-mayol-lassalle' },
      { name: 'autoridades de la Facultad de Derecho', id: 'representacion-facultad' },
    ],
    coordinator: { name: 'Adrián Rozengardt', id: 'adrian-rozengardt' },
  },
  {
    time: '16:00',
    id: 'panel-1',
    label: 'Panel 1',
    title: '¿Dónde estamos?',
    people: [
      { name: 'Carolina Aulicino', id: 'carolina-aulicino' },
      { name: 'Roxana Mazzola', id: 'roxana-mazzola' },
      { name: 'Javier Moro', id: 'javier-moro' },
      { name: 'Georgina Tavella', id: 'georgina-tavella' },
    ],
    coordinator: { name: 'Gabriela Fairstein', id: 'gabriela-fairstein' },
  },
  { time: '17:00', title: 'Pausa y café' },
  {
    time: '17:30',
    id: 'panel-2',
    label: 'Panel 2',
    title: 'Educar y cuidar desde el nacimiento',
    people: [
      { name: 'Mercedes Mayol Lassalle', id: 'mercedes-mayol-lassalle' },
      { name: 'Diego Álvarez', id: 'diego-alvarez' },
      { name: 'Ramiro Aranda', id: 'ramiro-aranda' },
      { name: 'Intendencia de Mercedes', id: 'intendencia-mercedes' },
    ],
    coordinator: { name: 'Javier Rodríguez', id: 'javier-rodriguez' },
  },
  {
    time: '18:30',
    id: 'panel-3',
    label: 'Panel 3',
    title: 'Las transformaciones de nuestro tiempo',
    people: [
      { name: 'Daniel Brailovsky', id: 'daniel-brailovsky' },
      { name: 'Fernando Salvatierra', id: 'fernando-salvatierra' },
      { name: 'Raúl Mercer', id: 'raul-mercer' },
      { name: 'Mercedes Gabriela Valenzuela', id: 'mercedes-gabriela-valenzuela' },
    ],
    coordinator: { name: 'Paula Lorenzi', id: 'paula-lorenzi' },
  },
  {
    time: '19:30',
    id: 'cierre',
    label: 'Cierre',
    title: '¿Con qué compromisos queremos llegar a 2027?',
    coordinator: { name: 'Adrián Rozengardt', id: 'adrian-rozengardt' },
    extra: 'Cierre musical',
  },
]

export type Block = 'Apertura' | 'Panel 1' | 'Panel 2' | 'Panel 3' | 'Cierre'

export type Speaker = {
  id: string
  name: string
  role: string
  blocks: Block[]
  coordinates?: boolean
  institutional?: boolean
  photo?: string
  bio?: string
}

// Ordenados por apellido; las representaciones institucionales van al final
// y se reemplazan por la persona cuando se confirme.
export const speakers: Speaker[] = [
  { id: 'diego-alvarez', name: 'Diego Álvarez', role: 'Ministro de Desarrollo Social de La Pampa', blocks: ['Panel 2'] },
  { id: 'ramiro-aranda', name: 'Ramiro Aranda', role: 'Ministro de Educación de Misiones', blocks: ['Panel 2'] },
  { id: 'christian-asinelli', name: 'Christian Asinelli', role: 'CAF, Banco de Desarrollo de América Latina y el Caribe', blocks: ['Apertura'] },
  { id: 'carolina-aulicino', name: 'Carolina Aulicino', role: 'UNICEF', blocks: ['Panel 1'] },
  { id: 'daniel-brailovsky', name: 'Daniel Brailovsky', role: 'UNIPE', blocks: ['Panel 3'] },
  { id: 'gabriela-fairstein', name: 'Gabriela Fairstein', role: 'Facultad de Derecho, UBA', blocks: ['Panel 1'], coordinates: true },
  { id: 'paula-lorenzi', name: 'Paula Lorenzi', role: '', blocks: ['Panel 3'], coordinates: true },
  { id: 'mercedes-mayol-lassalle', name: 'Mercedes Mayol Lassalle', role: 'OMEP', blocks: ['Apertura', 'Panel 2'] },
  { id: 'roxana-mazzola', name: 'Roxana Mazzola', role: 'FLACSO y UBA', blocks: ['Panel 1'] },
  { id: 'raul-mercer', name: 'Raúl Mercer', role: 'FLACSO', blocks: ['Panel 3'] },
  { id: 'javier-moro', name: 'Javier Moro', role: 'Defensoría de los Derechos de las Niñas, Niños y Adolescentes de la Nación', blocks: ['Panel 1'] },
  { id: 'javier-rodriguez', name: 'Javier Rodríguez', role: 'Fundación Arcor', blocks: ['Panel 2'], coordinates: true },
  { id: 'adrian-rozengardt', name: 'Adrián Rozengardt', role: 'SurLab, Laboratorio de Innovación Política', blocks: ['Apertura', 'Cierre'], coordinates: true },
  { id: 'fernando-salvatierra', name: 'Fernando Salvatierra', role: 'IIPE UNESCO', blocks: ['Panel 3'] },
  { id: 'georgina-tavella', name: 'Georgina Tavella', role: 'Defensoría de los Derechos de las Niñas, Niños y Adolescentes de Córdoba', blocks: ['Panel 1'] },
  { id: 'maria-elena-ubeda', name: 'María Elena Úbeda', role: 'UNICEF', blocks: ['Apertura'] },
  { id: 'mercedes-gabriela-valenzuela', name: 'Mercedes Gabriela Valenzuela', role: 'Senadora nacional por Corrientes, presidenta de la Comisión de Educación del Senado', blocks: ['Panel 3'] },
  { id: 'representacion-bid', name: 'Representación del BID', role: 'Banco Interamericano de Desarrollo', blocks: ['Apertura'], institutional: true },
  { id: 'representacion-facultad', name: 'Representación de la Facultad', role: 'Facultad de Derecho, UBA', blocks: ['Apertura'], institutional: true },
  { id: 'intendencia-mercedes', name: 'Intendencia de Mercedes', role: '', blocks: ['Panel 2'], institutional: true },
]

export const blockAnchors: Record<Block, string> = {
  Apertura: '#apertura',
  'Panel 1': '#panel-1',
  'Panel 2': '#panel-2',
  'Panel 3': '#panel-3',
  Cierre: '#cierre',
}

export const faqs = [
  { q: '¿La jornada tiene costo?', a: 'No. La participación es gratuita, con inscripción previa.' },
  {
    q: '¿Tengo que inscribirme si la sigo por YouTube?',
    a: 'Sí. Con la inscripción te enviamos el enlace a la transmisión y las novedades de los próximos encuentros.',
  },
  { q: '¿Puedo ir solo a una parte de la jornada?', a: 'Sí. Podés llegar o retirarte entre bloques.' },
  {
    q: '¿Se entrega certificado de asistencia?',
    a: 'No. Si necesitás una constancia de asistencia para justificar tu ausencia en el trabajo, indicalo en el formulario de inscripción y te la enviamos.',
  },
  {
    q: '¿La jornada va a quedar grabada?',
    a: 'Sí. La jornada se transmite en vivo por YouTube y el video queda disponible en el mismo canal.',
  },
  {
    q: '¿Esta es la única jornada?',
    a: 'No. Es la primera de una serie de encuentros rumbo a 2027. Si te inscribís, te avisamos cuando se confirmen las próximas fechas.',
  },
  {
    q: '¿A quién le escribo si tengo otra consulta?',
    a: `Escribinos a ${CONTACT_EMAIL} y te respondemos a la brevedad.`,
  },
]

export const socials = [
  { label: 'LinkedIn', handle: 'fundacionsurlab', href: 'https://www.linkedin.com/company/fundacionsurlab' },
  { label: 'Instagram', handle: '@fundacionsurlab', href: 'https://www.instagram.com/fundacionsurlab' },
  { label: 'Facebook', handle: 'SurLab', href: 'https://www.facebook.com/share/1D8qVE4Cgj/' },
]
