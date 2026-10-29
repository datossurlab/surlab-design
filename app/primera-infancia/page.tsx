import type { Metadata } from 'next'
import {
  ArrowRight,
  Bus,
  CalendarDays,
  Clock,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Ticket,
  TrainFront,
  Users,
  Video,
} from 'lucide-react'
import {
  CONTACT_EMAIL,
  EVENT,
  FORM_URL,
  MAP_EMBED_URL,
  MAP_LINK_URL,
  PROGRAM_PDF_URL,
  SITE_URL,
  YOUTUBE_URL,
  keyFacts,
  organizers,
  program,
  questions,
  socials,
} from './data'
import {
  AddToCalendar,
  EventHeader,
  Faq,
  MobileStickyCta,
  SpeakersGrid,
} from './interactive'

export const metadata: Metadata = {
  title: 'La primera infancia en debate · 27 de noviembre',
  description:
    'Primera jornada rumbo a una Agenda Nacional de Primera Infancia 2027. 27/11, 15 a 20 h, en la Facultad de Derecho (UBA) y en vivo. Inscribite.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'La primera infancia en debate: ¿qué agenda necesitamos?',
    description: '27 de noviembre · 15 a 20 h · Presencial en la UBA y en vivo por YouTube',
    url: SITE_URL,
    siteName: 'SurLab',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La primera infancia en debate: ¿qué agenda necesitamos?',
    description: '27 de noviembre · 15 a 20 h · Presencial en la UBA y en vivo por YouTube',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: EVENT.title,
  description: EVENT.description,
  startDate: EVENT.startISO,
  endDate: EVENT.endISO,
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
  inLanguage: 'es',
  isAccessibleForFree: true,
  url: SITE_URL,
  location: [
    {
      '@type': 'Place',
      name: EVENT.venue,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Av. Figueroa Alcorta 2263',
        addressLocality: 'Ciudad Autónoma de Buenos Aires',
        addressCountry: 'AR',
      },
    },
    { '@type': 'VirtualLocation', url: YOUTUBE_URL || SITE_URL },
  ],
  organizer: organizers.map((o) => ({ '@type': 'Organization', name: o.name })),
  offers: {
    '@type': 'Offer',
    price: 0,
    priceCurrency: 'ARS',
    availability: 'https://schema.org/InStock',
    url: FORM_URL,
  },
}

const factIcons = {
  calendar: CalendarDays,
  clock: Clock,
  map: MapPin,
  video: Video,
  ticket: Ticket,
}

const section = 'scroll-mt-20 py-16 sm:py-24'
const container = 'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'
const h2 = 'text-3xl font-medium tracking-tight text-ink sm:text-5xl text-balance'
const lead = 'mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground'

function CtaButton({ children = 'Inscribite', className = '' }: { children?: React.ReactNode; className?: string }) {
  return (
    <a
      href={FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3 font-semibold text-white transition-colors hover:bg-ink-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden />
    </a>
  )
}

function SignupBand({ text }: { text: string }) {
  return (
    <aside className="bg-lilac text-ink">
      <div className={`${container} flex flex-col items-start gap-4 py-8 sm:flex-row sm:items-center sm:justify-between`}>
        <p className="text-lg font-semibold sm:text-xl">{text}</p>
        <CtaButton className="shrink-0" />
      </div>
    </aside>
  )
}

export default function InfanciasPage() {
  return (
    <div>
      <style>{`
        @media (prefers-reduced-motion: no-preference) { html { scroll-behavior: smooth; } }
      `}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <EventHeader />

      <main className="pb-20 md:pb-0">
        {/* 1 · Portada */}
        <section
          id="inicio"
          className="relative scroll-mt-20 overflow-hidden pt-28 pb-20 text-ink sm:pt-36 sm:pb-28"
          style={{ background: 'linear-gradient(115deg, #d8efd3 0%, #95d2b3 55%, #55ad9b 100%)' }}
        >
          <div className={`${container} relative`}>
            <p className="text-sm font-semibold tracking-[0.14em] text-ink/70 uppercase">
              Primera jornada · Rumbo a una Agenda Nacional de Primera Infancia 2027
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl leading-[1.05] font-medium tracking-tight text-balance sm:text-6xl lg:text-7xl">
              La primera infancia en debate: ¿qué agenda necesitamos?
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80 sm:text-xl">
              Un encuentro para revisar lo construido en políticas de primera infancia y llegar a 2027 con compromisos
              concretos para todas las niñas y todos los niños de Argentina.
            </p>
            <p className="mt-8 flex flex-wrap gap-x-3 gap-y-1 text-base font-medium text-ink">
              <span>Viernes 27 de noviembre</span>
              <span aria-hidden className="text-ink/40">·</span>
              <span>15 a 20 h</span>
              <span aria-hidden className="text-ink/40">·</span>
              <span>Aula Magna, Facultad de Derecho (UBA)</span>
              <span aria-hidden className="text-ink/40">·</span>
              <span>Presencial y en vivo por YouTube</span>
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <CtaButton>Inscribite gratis</CtaButton>
              <a
                href="#programa"
                className="inline-flex items-center justify-center rounded-full border border-ink bg-white px-7 py-3 font-semibold text-ink transition-colors hover:bg-white/70"
              >
                Ver programa
              </a>
            </div>
            <p className="mt-10 max-w-3xl text-sm leading-relaxed text-ink/70">
              <span className="font-semibold text-ink">Organizan:</span> OMEP Argentina (Organización Mundial
              para la Educación Preescolar) · SurLab, Laboratorio de Innovación Política · Facultad de Derecho,
              Universidad de Buenos Aires
            </p>
          </div>
        </section>

        {/* 2 · Datos clave */}
        <section id="datos" aria-labelledby="datos-titulo" className="scroll-mt-20 bg-mist py-12">
          <div className={container}>
            <h2 id="datos-titulo" className="sr-only">
              Datos clave
            </h2>
            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {keyFacts.map((f) => {
                const Icon = factIcons[f.icon]
                return (
                  <div key={f.label} className="flex gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-ink">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <dt className="text-xs font-bold tracking-wider text-ink/60 uppercase">{f.label}</dt>
                      <dd className="mt-1 text-sm leading-snug text-ink">{f.text}</dd>
                    </div>
                  </div>
                )
              })}
            </dl>
            <div className="mt-8">
              <AddToCalendar />
            </div>
          </div>
        </section>

        {/* 3 · Organizan */}
        <section id="organizan" aria-labelledby="organizan-titulo" className="scroll-mt-20 bg-paper py-16">
          <div className={container}>
            <h2 id="organizan-titulo" className={h2}>
              Organizan
            </h2>
            <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {organizers.map((org) => (
                <li key={org.short} className="flex flex-col gap-5 rounded-2xl border border-ink/10 bg-white p-6">
                  {org.href ? (
                    <a
                      href={org.href}
                      target={org.href.startsWith('http') ? '_blank' : undefined}
                      rel={org.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex h-24 items-center"
                      aria-label={org.name}
                    >
                      <img src={org.logo} alt={`Logo de ${org.name}`} className={`${org.logoClass} w-auto max-w-full object-contain object-left`} />
                    </a>
                  ) : (
                    <span className="flex h-24 items-center">
                      <img src={org.logo} alt={`Logo de ${org.name}`} className={`${org.logoClass} w-auto max-w-full object-contain object-left`} />
                    </span>
                  )}
                  <div>
                    <h3 className="font-bold text-ink">{org.name}</h3>
                    {org.description && (
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{org.description}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <SignupBand text="La inscripción es gratuita y el cupo presencial es de 250 personas." />

        {/* 4 · Sobre la jornada */}
        <section id="sobre" aria-labelledby="sobre-titulo" className={`${section} bg-white`}>
          <div className={container}>
            <div className="max-w-3xl">
              <h2 id="sobre-titulo" className={h2}>
                ¿Por qué hablar hoy de primera infancia?
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/85">
                <p>
                  En jardines maternales, espacios de cuidado comunitarios, centros de salud y escuelas de todo el país,
                  hay equipos que acompañan cada día los primeros años de niñas y niños. Sin embargo, el contexto está
                  cambiando. A las desigualdades históricas se suman programas que se descontinúan y presupuestos más
                  ajustados. Además, provincias y municipios asumen más responsabilidades.
                </p>
                <p>
                  También cambian las condiciones en las que niñas y niños nacen, crecen, juegan y aprenden. Las
                  transformaciones económicas, demográficas, ambientales y tecnológicas de estos años todavía no tienen
                  una respuesta clara en las políticas públicas.
                </p>
                <p>
                  Al mismo tiempo, algunos acuerdos sobre derechos humanos e igualdad vuelven a estar en discusión. Esta
                  jornada parte de una idea compartida: los derechos de las niñas y los niños son obligaciones públicas,
                  y lo alcanzado es un piso para sostener y ampliar.
                </p>
                <p>
                  En Argentina y en América Latina y el Caribe hay equipos con años de experiencia en primera infancia.
                  Te proponemos conversar para revisar lo hecho y, a partir de ahí, pensar alternativas.
                </p>
              </div>
            </div>

            <blockquote className="my-14 border-l-4 border-peri py-2 pl-6 text-2xl leading-snug font-bold text-ink text-balance sm:text-4xl">
              ¿Qué hay que sostener de lo que ya existe y qué políticas nuevas necesitamos para garantizar la educación y
              el cuidado de todas las infancias desde el nacimiento?
            </blockquote>

            <div className="max-w-3xl">
              <h3 className="text-2xl font-semibold text-ink">Rumbo a 2027</h3>
              <p className="mt-4 text-lg leading-relaxed text-foreground/85">
                Las elecciones de 2027 abren una oportunidad para que la primera infancia ocupe un lugar visible en el
                debate público y en las propuestas de todas las fuerzas políticas, con compromisos que se puedan
                seguir. Por eso la jornada es plural y no partidaria, y es la primera de una serie de encuentros.
              </p>
            </div>
          </div>
        </section>

        <SignupBand text="Sumate a la conversación rumbo a 2027." />

        {/* 5 · Cuatro preguntas */}
        <section id="recorrido" aria-labelledby="recorrido-titulo" className={`${section} bg-teal`}>
          <div className={container}>
            <h2 id="recorrido-titulo" className={h2}>
              Un recorrido en cuatro preguntas
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/80">
              Cada bloque de la tarde responde a una pregunta. Juntas arman un camino que empieza en el diagnóstico y
              termina en propuestas.
            </p>
            <ol className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
              {questions.map((q, i) => (
                <li key={q.href}>
                  <a
                    href={q.href}
                    className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-graphite/40 hover:shadow-lg"
                  >
                    <span className="text-5xl font-medium text-ink">{i + 1}</span>
                    <span className="mt-4 text-lg leading-snug font-bold text-ink">{q.title}</span>
                    <span className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{q.text}</span>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-graphite">
                      {q.block}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 6 · Programa */}
        <section id="programa" aria-labelledby="programa-titulo" className={`${section} bg-white`}>
          <div className={container}>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 id="programa-titulo" className={h2}>
                  Programa
                </h2>
                <p className="mt-3 text-lg text-muted-foreground">Viernes 27 de noviembre · 15 a 20 h (hora de Argentina)</p>
              </div>
              {PROGRAM_PDF_URL && (
                <a
                  href={PROGRAM_PDF_URL}
                  download
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-ink-soft"
                >
                  <Download className="h-4 w-4" aria-hidden />
                  Descargar programa completo (PDF)
                </a>
              )}
            </div>

            <ol className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
              {program.map((row) => {
                const isBreak = !row.label
                return (
                  <li
                    key={row.time}
                    id={row.id}
                    className={`grid scroll-mt-20 gap-2 py-6 md:grid-cols-[6rem_1fr_1.2fr] md:gap-8 target:bg-lilac/20 ${
                      isBreak ? 'text-muted-foreground' : ''
                    }`}
                  >
                    <span className="font-mono text-lg font-bold text-ink/70">{row.time}</span>
                    <div>
                      {row.label && (
                        <span className="text-xs font-bold tracking-wider text-graphite uppercase">{row.label}</span>
                      )}
                      <h3 className={isBreak ? 'text-base' : 'text-lg leading-snug font-bold text-ink'}>{row.title}</h3>
                      {row.subtitle && <p className="mt-1 text-sm leading-snug text-foreground/70 italic">{row.subtitle}</p>}
                    </div>
                    {!isBreak && (
                      <p className="text-sm leading-relaxed text-foreground/80">
                        {row.people?.map((p, i) => (
                          <span key={p.name}>
                            {i > 0 && (i === row.people!.length - 1 ? ' y ' : ', ')}
                            <PersonLink person={p} />
                          </span>
                        ))}
                        {row.people && '. '}
                        {row.coordinator && (
                          <>
                            Coordina <PersonLink person={row.coordinator} />.
                          </>
                        )}
                        {row.extra && <> {row.extra}.</>}
                      </p>
                    )}
                  </li>
                )
              })}
            </ol>
            <div className="mt-10">
              <CtaButton />
            </div>
          </div>
        </section>

        {/* 7 · Quienes participan */}
        <section id="participan" aria-labelledby="participan-titulo" className={`${section} bg-mist`}>
          <div className={container}>
            <h2 id="participan-titulo" className={h2}>
              Quienes participan
            </h2>
            <p className={`${lead} mb-10`}>
              Especialistas, equipos de gobierno, organismos internacionales, defensorías y universidades comparten
              diagnósticos y experiencias.
            </p>
            <SpeakersGrid />
          </div>
        </section>

        <SignupBand text="Podés escuchar a quienes participan en el Aula Magna o desde YouTube." />

        {/* 8 · Cómo participar */}
        <section id="como-participar" aria-labelledby="participar-titulo" className={`${section} bg-white`}>
          <div className={container}>
            <h2 id="participar-titulo" className={h2}>
              Cómo participar
            </h2>
            <p className={lead}>
              Podés venir al Aula Magna o seguir la jornada en vivo por YouTube. Elegís la modalidad al inscribirte y te
              enviamos la confirmación de tu lugar o el enlace a la transmisión.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <article className="flex flex-col rounded-2xl bg-mist p-6 sm:p-8">
                <h3 className="text-2xl font-semibold text-ink">Aula Magna, Facultad de Derecho (UBA)</h3>
                <p className="mt-4 leading-relaxed text-foreground/85">
                  Av. Figueroa Alcorta 2263, Ciudad de Buenos Aires. La acreditación y el café empiezan a las 14:30 h.
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground/85">
                  <li className="flex gap-3">
                    <Users className="mt-0.5 h-4 w-4 shrink-0 text-ink/60" aria-hidden />
                    <span>
                      <strong className="text-ink">Cupo presencial:</strong> 250 personas
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <TrainFront className="mt-0.5 h-4 w-4 shrink-0 text-ink/60" aria-hidden />
                    <span>
                      <strong className="text-ink">Cómo llegar:</strong> Subte línea H, estación Facultad de
                      Derecho-Julieta Lanteri, en la puerta de la Facultad.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Bus className="mt-0.5 h-4 w-4 shrink-0 text-ink/60" aria-hidden />
                    <span>Colectivos: 17, 61, 67, 92, 93, 110 y 130 (el 92 te deja prácticamente en la puerta).</span>
                  </li>
                  <li className="flex gap-3">
                    <Video className="mt-0.5 h-4 w-4 shrink-0 text-ink/60" aria-hidden />
                    <span>
                      <strong className="text-ink">En vivo:</strong> la jornada completa se transmite por YouTube y el
                      video queda disponible en el mismo canal.
                    </span>
                  </li>
                </ul>
                {YOUTUBE_URL && (
                  <a
                    href={YOUTUBE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-fit items-center gap-1 text-sm font-semibold text-graphite hover:underline"
                  >
                    Ir al canal de YouTube
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  </a>
                )}
                <div className="mt-auto pt-8">
                  <CtaButton>Inscribite al formulario</CtaButton>
                  <p className="mt-4 text-xs leading-relaxed text-ink/70">
                    Se abre en una pestaña nueva, donde elegís si participás de forma presencial o en vivo. Al enviarlo,
                    te llega un correo de confirmación. Usamos tus datos solo para organizar tu participación y avisarte
                    sobre los próximos encuentros. Consultas:{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-graphite underline">
                      {CONTACT_EMAIL}
                    </a>
                    .
                  </p>
                </div>
              </article>

              <div className="flex flex-col">
                <div className="overflow-hidden rounded-2xl bg-mist">
                  <iframe
                    src={MAP_EMBED_URL}
                    className="h-[240px] w-full md:h-[420px] lg:h-full lg:min-h-[420px]"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de la Facultad de Derecho de la UBA, Av. Figueroa Alcorta 2263"
                  />
                </div>
                <a
                  href={MAP_LINK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-fit items-center gap-1 text-sm font-semibold text-graphite hover:underline"
                >
                  Abrir en Google Maps
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 10 · Preguntas frecuentes */}
        <section id="preguntas" aria-labelledby="preguntas-titulo" className={`${section} bg-white`}>
          <div className={`${container} max-w-3xl`}>
            <h2 id="preguntas-titulo" className={`${h2} mb-10`}>
              Preguntas frecuentes
            </h2>
            <Faq />
          </div>
        </section>
      </main>

      {/* Pie */}
      <footer className="bg-ink pb-28 text-white md:pb-0">
        <div className={`${container} py-14`}>
          <div className="grid grid-cols-1 gap-8 text-sm md:grid-cols-3">
            <div>
              <h2 className="font-bold text-white">Contacto</h2>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-2 inline-flex items-center gap-2 text-white/75 hover:text-white"
              >
                <Mail className="h-4 w-4" aria-hidden />
                {CONTACT_EMAIL}
              </a>
            </div>
            <div>
              <h2 className="font-bold text-white">Seguí la conversación</h2>
              <p className="mt-2 text-white/75">#PrimeraInfancia2027 · #PrimeraInfancia</p>
            </div>
            <div>
              <h2 className="font-bold text-white">Redes de SurLab</h2>
              <ul className="mt-2 space-y-1">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-white/75 hover:text-white">
                      {s.label} · {s.handle}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-12 border-t border-white/10 pt-6 text-sm text-white/60">
            Primera jornada de una serie rumbo a 2027. Un espacio plural y no partidario.
          </p>
        </div>
      </footer>

      <MobileStickyCta />
    </div>
  )
}

function PersonLink({ person }: { person: { name: string; id?: string } }) {
  if (!person.id) return <>{person.name}</>
  return (
    <a href={`#${person.id}`} className="underline decoration-ink/20 underline-offset-2 hover:decoration-graphite">
      {person.name}
    </a>
  )
}
