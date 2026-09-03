/* ─────────────────────────────────────────────────────────────────────────────
   EDIT THIS FILE. Todo el sitio sale de acá.
   ───────────────────────────────────────────────────────────────────────────── */

export const profile = {
  name: 'Alfredo Ramírez',
  role: 'Director y creador',
  project: 'Punto Holístico Consciente',
  tagline:
    'Una mirada integradora sobre conciencia, pensamiento, experiencia humana y transformación personal.',

  portrait: '/portrait.jpg',
  locationShort: 'ARGENTINA · ESPAÑA',

  email: 'twdefensa100@gmail.com',
  phones: [
    { country: 'Argentina', display: '+54 9 2974 75-4587', whatsapp: 'https://wa.me/5492974754587' },
    { country: 'España', display: '+34 673 028 697', whatsapp: 'https://wa.me/34673028697' },
  ],

  // Actualizar una vez deployado en Vercel.
  siteUrl: 'https://punto-holistico-consciente.vercel.app',
  title: 'Alfredo Ramírez — Punto Holístico Consciente',
  description:
    'Una mirada integradora sobre conciencia, pensamiento, experiencia humana y transformación personal. Derecho, Filosofía, Psicología Transpersonal, Cuidados Paliativos y Tarot Evolutivo.',
}

/* icon acepta: 'instagram' | 'youtube' | 'tiktok' | 'mail' | 'whatsapp' */
export const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/punto_holistico_consciente/', icon: 'instagram' as const },
  { label: 'YouTube', href: 'https://www.youtube.com/@PuntoHolístico-y4p', icon: 'youtube' as const },
  { label: 'TikTok', href: 'https://www.tiktok.com/@punto.holistico3', icon: 'tiktok' as const },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' as const },
]

export const bio = [
  'Profesional con una trayectoria interdisciplinaria que une el Derecho, la Filosofía, la Salud Mental, la Psicología Transpersonal, los Cuidados Paliativos y la exploración de herramientas de autoconocimiento.',
  'Su recorrido profesional y académico le permite abordar la experiencia humana desde diferentes perspectivas, con especial interés en la conciencia, el sentido, las crisis vitales y los procesos de transformación.',
]

export const quote = 'Explorar el umbral entre lo que somos, lo que pensamos y aquello que todavía podemos llegar a ser.'

/* Trayectoria y formación */
export const trayectoria = [
  { area: 'Salud Mental', text: 'Experiencia profesional en el área de Salud Mental de la Provincia del Chubut, Argentina.' },
  { area: 'Magistratura y Defensa Pública', text: 'Trayectoria como magistrado y defensor público del Poder Judicial de Chubut.' },
  { area: 'Derecho y contratos', text: 'Especialización en contratos comerciales y experiencia docente en el ámbito de los contratos comerciales modernos.' },
  { area: 'Docencia', text: 'Experiencia como profesor de posgrado y formación continua.' },
  { area: 'Filosofía', text: 'Diplomado en Filosofía.' },
  { area: 'Psicología Transpersonal', text: 'Diplomado en Psicología Transpersonal y formación terapéutica transpersonal.' },
  { area: 'Cuidados Paliativos', text: 'Formación especializada en Cuidados Paliativos — Asociación Médica Argentina.' },
  { area: 'Tarot Evolutivo', text: 'Experiencia en lectura e interpretación del Tarot desde una perspectiva evolutiva y de autoconocimiento.' },
  { area: 'Conciencia y psicodélicos', text: 'Capacitación en hongos psilocibínicos y aproximaciones contemporáneas a los estados ampliados de conciencia.' },
]

/* Áreas de interés */
export const areas = [
  { t: 'Conciencia y autoconocimiento', d: 'Explorar patrones, decisiones, emociones y procesos de cambio.' },
  { t: 'Filosofía aplicada a la vida', d: 'Utilizar las grandes preguntas filosóficas para pensar la existencia cotidiana.' },
  { t: 'Psicología Transpersonal', d: 'Abordar dimensiones de la experiencia humana que exceden una mirada exclusivamente racional.' },
  { t: 'Tarot Evolutivo', d: 'Utilizar el lenguaje simbólico como herramienta de reflexión y autoconocimiento, sin presentarlo como diagnóstico ni certeza absoluta.' },
  { t: 'Cuidados Paliativos y sentido', d: 'Reflexionar sobre vulnerabilidad, finitud, vínculos, sufrimiento y sentido de vida.' },
  { t: 'Nuevos estados de conciencia', d: 'Analizar de manera responsable y crítica los debates contemporáneos sobre psicodélicos y estados ampliados de conciencia.' },
]

export const identidad = {
  eyebrow: 'Una identidad diferente',
  title: 'Punto Holístico Consciente',
  subtitle: 'Una propuesta interdisciplinaria para pensar, comprender y transformar.',
  text: 'Punto Holístico Consciente nace de la convergencia de distintas etapas de una misma trayectoria: la experiencia con personas y conflictos desde el Derecho y la función pública; la reflexión filosófica; el conocimiento de la Salud Mental; la Psicología Transpersonal; el acompañamiento en situaciones de fin de vida; y la búsqueda de herramientas simbólicas para comprender la experiencia interior.',
}

export const convergencia = {
  eyebrow: 'Una trayectoria que converge',
  campos: ['Derecho', 'Filosofía', 'Salud Mental', 'Psicología Transpersonal', 'Cuidados Paliativos', 'Tarot Evolutivo'],
  text: 'La singularidad de la propuesta está en la combinación de campos que habitualmente se presentan separados. El objetivo no es ofrecer respuestas cerradas, sino abrir preguntas, ampliar perspectivas y acompañar procesos de comprensión.',
}

export const projects = [
  {
    name: 'Punto Holístico Consciente',
    role: 'Director y creador',
    d: 'Espacio de divulgación interdisciplinaria sobre conciencia, pensamiento, filosofía, desarrollo personal y exploración interior.',
    href: 'https://www.instagram.com/punto_holistico_consciente/',
    cta: 'Ver en Instagram',
  },
  {
    name: 'El Umbral de Tarot',
    role: 'Director',
    d: 'Canal dedicado al Tarot Evolutivo y a su utilización como lenguaje simbólico para la reflexión personal.',
    href: 'https://www.youtube.com/@PuntoHolístico-y4p',
    cta: 'Ver el canal',
  },
]

export const closingLine = 'Pensar. Sentir. Comprender. Transformar.'

export const contactBody =
  'Para consultas, sesiones de Tarot Evolutivo, acompañamiento o simplemente para conversar, podés escribir por cualquiera de estos medios.'
