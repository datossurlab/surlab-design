'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone, ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: '¿Cómo puedo colaborar con SurLab?',
    a: 'Podés contactarnos a través del formulario o enviarnos un correo a info@surlab.org. También podés seguirnos en redes sociales para enterarte de convocatorias abiertas.',
  },
  {
    q: '¿SurLab tiene convocatorias para investigadores?',
    a: 'Sí, periódicamente lanzamos convocatorias para investigadores, becarios y colaboradores. Te recomendamos suscribirte al newsletter para no perderte ninguna novedad.',
  },
  {
    q: '¿Dónde está ubicado SurLab?',
    a: 'SurLab tiene su sede en la ciudad de Córdoba, Argentina. También contamos con vínculos con instituciones en toda Iberoamérica a través de nuestra alianza con la OEI.',
  },
]

export function ContactSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await new Promise((r) => setTimeout(r, 800))
    setSent(true)
  }

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: contact info + FAQ */}
          <div>
            <span className="text-xs font-semibold text-[oklch(0.45_0.18_290)] uppercase tracking-widest">
              Contacto
            </span>
            <h2 className="mt-3 text-4xl font-bold text-[oklch(0.22_0.05_255)] mb-6 text-balance">
              Hablemos
            </h2>
            <p className="text-[oklch(0.50_0.03_255)] leading-relaxed mb-8 text-pretty">
              ¿Tenés una consulta, propuesta de colaboración o querés saber más sobre SurLab?
              Escribinos, con gusto te respondemos.
            </p>

            <div className="flex flex-col gap-4 mb-12">
              {[
                { icon: MapPin, label: 'Córdoba, Argentina' },
                { icon: Mail, label: 'info@surlab.org', href: 'mailto:info@surlab.org' },
                { icon: Phone, label: '+54 351 000 0000' },
              ].map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[oklch(0.22_0.05_255)] flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-[oklch(0.82_0.1_175)]" />
                  </div>
                  {href ? (
                    <a href={href} className="text-sm text-[oklch(0.50_0.03_255)] hover:text-[oklch(0.22_0.05_255)] transition-colors">
                      {label}
                    </a>
                  ) : (
                    <span className="text-sm text-[oklch(0.50_0.03_255)]">{label}</span>
                  )}
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-sm font-semibold text-[oklch(0.22_0.05_255)] uppercase tracking-widest mb-4">
                Preguntas frecuentes
              </h3>
              <div className="flex flex-col divide-y divide-[oklch(0.91_0.01_255)]">
                {faqs.map((faq, i) => (
                  <div key={i}>
                    <button
                      className="flex items-center justify-between w-full py-4 text-left group"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                    >
                      <span className="text-sm font-medium text-[oklch(0.25_0.04_255)] group-hover:text-[oklch(0.45_0.18_290)] transition-colors pr-4">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[oklch(0.65_0.02_255)] shrink-0 transition-transform duration-200 ${
                          openFaq === i ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openFaq === i && (
                      <p className="pb-4 text-sm text-[oklch(0.50_0.03_255)] leading-relaxed">{faq.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-[oklch(0.97_0.005_255)] rounded-2xl p-8 border border-[oklch(0.91_0.01_255)]">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-12">
                <div className="w-14 h-14 rounded-full bg-[oklch(0.82_0.1_175)] flex items-center justify-center">
                  <Mail className="w-7 h-7 text-[oklch(0.15_0.04_255)]" />
                </div>
                <h3 className="text-xl font-bold text-[oklch(0.22_0.05_255)]">¡Mensaje enviado!</h3>
                <p className="text-[oklch(0.50_0.03_255)] text-sm leading-relaxed max-w-xs">
                  Recibimos tu consulta y te responderemos a la brevedad desde info@surlab.org.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-lg font-bold text-[oklch(0.22_0.05_255)] mb-1">Envianos un mensaje</h3>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[oklch(0.40_0.03_255)] uppercase tracking-wide">
                    Nombre
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="px-4 py-3 rounded-lg bg-white border border-[oklch(0.91_0.01_255)] text-[oklch(0.22_0.05_255)] placeholder-[oklch(0.75_0.02_255)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.45_0.18_290)] text-sm transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[oklch(0.40_0.03_255)] uppercase tracking-wide">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="px-4 py-3 rounded-lg bg-white border border-[oklch(0.91_0.01_255)] text-[oklch(0.22_0.05_255)] placeholder-[oklch(0.75_0.02_255)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.45_0.18_290)] text-sm transition-colors"
                    placeholder="tu@correo.com"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[oklch(0.40_0.03_255)] uppercase tracking-wide">
                    Mensaje
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="px-4 py-3 rounded-lg bg-white border border-[oklch(0.91_0.01_255)] text-[oklch(0.22_0.05_255)] placeholder-[oklch(0.75_0.02_255)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.45_0.18_290)] text-sm transition-colors resize-none"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[oklch(0.22_0.05_255)] text-white font-semibold rounded-lg hover:bg-[oklch(0.28_0.06_255)] transition-colors text-sm"
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
