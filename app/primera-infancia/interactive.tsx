'use client'

import { useEffect, useRef, useState } from 'react'
import { CalendarPlus, ChevronDown, Menu, X } from 'lucide-react'
import {
  EVENT,
  FORM_URL,
  SITE_URL,
  blockAnchors,
  faqs,
  navItems,
  speakers,
  type Block,
} from './data'

export function EventHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ink/95 shadow-lg shadow-black/10 backdrop-blur">
      <nav aria-label="Secciones de la jornada" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="#inicio" className="text-sm font-bold tracking-tight text-white sm:text-base">
            La primera infancia en debate
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-mist"
            >
              Inscribite
            </a>
          </div>

          <button
            type="button"
            className="p-2 text-white lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="menu-jornada"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div id="menu-jornada" className="flex flex-col gap-1 border-t border-white/10 py-4 lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-white px-3 py-2.5 text-center text-sm font-semibold text-ink"
            >
              Inscribite
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}

// Botón fijo inferior en celulares; se oculta al llegar a #como-participar.
export function MobileStickyCta() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const target = document.getElementById('como-participar')
    if (!target) return
    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting || entry.boundingClientRect.top < 0),
      { threshold: 0 },
    )
    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-white/95 p-3 backdrop-blur transition-transform duration-300 md:hidden ${
        hidden ? 'translate-y-full' : 'translate-y-0'
      }`}
      aria-hidden={hidden}
    >
      <a
        href={FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={hidden ? -1 : 0}
        className="block rounded-full bg-ink py-3 text-center font-semibold text-white"
      >
        Inscribite
      </a>
    </div>
  )
}

function buildIcs() {
  const location = `${EVENT.venue}. ${EVENT.address}`
  const escape = (s: string) => s.replace(/[\\;,]/g, (m) => `\\${m}`)
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//SurLab//Primera Infancia//ES',
    'BEGIN:VEVENT',
    'UID:primera-infancia-2026-11-27@sur-lab.org',
    `DTSTAMP:${EVENT.startUTC}`,
    `DTSTART:${EVENT.startUTC}`,
    `DTEND:${EVENT.endUTC}`,
    `SUMMARY:${escape(EVENT.title)}`,
    `DESCRIPTION:${escape(`${EVENT.description} ${SITE_URL}`)}`,
    `LOCATION:${escape(location)}`,
    `URL:${SITE_URL}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')
}

export function AddToCalendar() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === 'Escape' : !ref.current?.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', close)
    document.addEventListener('keydown', close)
    return () => {
      document.removeEventListener('mousedown', close)
      document.removeEventListener('keydown', close)
    }
  }, [open])

  const location = `${EVENT.venue}. ${EVENT.address}`
  const details = `${EVENT.description}\n${SITE_URL}`
  const google = `https://calendar.google.com/calendar/render?${new URLSearchParams({
    action: 'TEMPLATE',
    text: EVENT.title,
    dates: `${EVENT.startUTC}/${EVENT.endUTC}`,
    details,
    location,
    ctz: 'America/Argentina/Buenos_Aires',
  })}`
  const outlook = `https://outlook.live.com/calendar/0/deeplink/compose?${new URLSearchParams({
    path: '/calendar/action/compose',
    rru: 'addevent',
    subject: EVENT.title,
    startdt: EVENT.startISO,
    enddt: EVENT.endISO,
    body: details,
    location,
  })}`

  const downloadIcs = () => {
    const blob = new Blob([buildIcs()], { type: 'text/calendar;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'primera-infancia-en-debate.ics'
    a.click()
    URL.revokeObjectURL(url)
    setOpen(false)
  }

  const item = 'block w-full px-4 py-2.5 text-left text-sm text-ink hover:bg-ink/5'

  return (
    <div ref={ref} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="inline-flex items-center gap-2 rounded-full border border-ink/30 bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/40"
      >
        <CalendarPlus className="h-4 w-4" />
        Agregar a mi calendario
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div role="menu" className="absolute left-0 z-20 mt-2 w-56 overflow-hidden rounded-lg border border-border bg-white py-1 shadow-xl">
          <a role="menuitem" href={google} target="_blank" rel="noopener noreferrer" className={item}>
            Google Calendar
          </a>
          <a role="menuitem" href={outlook} target="_blank" rel="noopener noreferrer" className={item}>
            Outlook
          </a>
          <button role="menuitem" type="button" onClick={downloadIcs} className={item}>
            Archivo .ics (Apple, otros)
          </button>
        </div>
      )}
    </div>
  )
}

const filters: Array<Block | 'Todos'> = ['Todos', 'Apertura', 'Panel 1', 'Panel 2', 'Panel 3', 'Cierre']

function initials(name: string) {
  return name
    .split(' ')
    .filter((w) => /^[A-ZÁÉÍÓÚÑ]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
}

export function SpeakersGrid() {
  const [filter, setFilter] = useState<Block | 'Todos'>('Todos')
  // Los nombres del programa enlazan a #<id>: si la tarjeta está filtrada, se muestra todo.
  useEffect(() => {
    const reset = () => {
      const id = window.location.hash.slice(1)
      if (!speakers.some((s) => s.id === id)) return
      setFilter('Todos')
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 0)
    }
    window.addEventListener('hashchange', reset)
    return () => window.removeEventListener('hashchange', reset)
  }, [])

  const visible = filter === 'Todos' ? speakers : speakers.filter((s) => s.blocks.includes(filter))

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar por bloque">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === f
                ? 'border-ink bg-ink text-white'
                : 'border-ink/15 bg-white text-ink hover:border-ink/40'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visible.map((s) => (
          <li
            key={s.id}
            id={s.id}
            className="flex scroll-mt-24 gap-4 rounded-xl border border-ink/10 bg-white p-4 target:ring-2 target:ring-graphite"
          >
            {s.photo ? (
              <img
                src={s.photo}
                alt={`Retrato de ${s.name}`}
                className="h-16 w-16 shrink-0 rounded-lg object-cover"
                loading="lazy"
              />
            ) : (
              <span
                aria-hidden
                className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-lg text-lg font-bold ${
                  s.institutional ? 'bg-ink/5 text-ink/60' : 'bg-lilac/40 text-ink'
                }`}
              >
                {initials(s.name)}
              </span>
            )}
            <div className="min-w-0">
              <h3 className="font-bold leading-tight text-ink">{s.name}</h3>
              {s.role && <p className="mt-1 text-sm leading-snug text-muted-foreground">{s.role}</p>}
              <p className="mt-2 flex flex-wrap gap-1.5">
                {s.blocks.map((b) => (
                  <a
                    key={b}
                    href={blockAnchors[b]}
                    className="rounded-full bg-graphite/10 px-2 py-0.5 text-xs font-semibold text-graphite hover:bg-graphite/20"
                  >
                    {b}
                  </a>
                ))}
                {s.coordinates && (
                  <span className="rounded-full bg-teal/40 px-2 py-0.5 text-xs font-semibold text-ink">
                    Coordina
                  </span>
                )}
              </p>
              {s.bio && (
                <details className="mt-2 text-sm text-muted-foreground">
                  <summary className="cursor-pointer font-semibold text-ink">Ver más</summary>
                  <p className="mt-1">{s.bio}</p>
                </details>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {faqs.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={f.q}>
            <h3>
              <button
                type="button"
                id={`faq-q-${i}`}
                aria-expanded={isOpen}
                aria-controls={`faq-a-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-semibold text-ink"
              >
                {f.q}
                <ChevronDown
                  aria-hidden
                  className={`h-5 w-5 shrink-0 text-ink/50 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
            </h3>
            <div
              id={`faq-a-${i}`}
              role="region"
              aria-labelledby={`faq-q-${i}`}
              hidden={!isOpen}
              className="pb-5 pr-9 leading-relaxed text-muted-foreground"
            >
              {f.a}
            </div>
          </div>
        )
      })}
    </div>
  )
}
