'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <section id="newsletter" className="py-20 bg-[oklch(0.22_0.05_255)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold text-[oklch(0.82_0.1_175)] uppercase tracking-widest">
            Mantente informado
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            Recibí nuestras novedades y publicaciones
          </h2>
          <p className="text-white/60 leading-relaxed mb-8 text-pretty">
            Suscribite al newsletter de SurLab y recibí en tu correo nuestros últimos documentos de trabajo,
            informes y novedades institucionales.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-6">
              <CheckCircle2 className="w-12 h-12 text-[oklch(0.82_0.1_175)]" />
              <p className="text-white font-semibold text-lg">¡Gracias por suscribirte!</p>
              <p className="text-white/60 text-sm">Recibirás nuestras novedades en tu correo.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@correo.com"
                required
                aria-label="Correo electrónico"
                className="flex-1 px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[oklch(0.82_0.1_175)] focus:border-transparent transition-colors text-sm"
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[oklch(0.82_0.1_175)] text-[oklch(0.15_0.04_255)] font-semibold rounded-md hover:bg-[oklch(0.75_0.12_175)] transition-colors disabled:opacity-70 text-sm shrink-0"
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-[oklch(0.15_0.04_255)/50] border-t-[oklch(0.15_0.04_255)] rounded-full animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                Suscribirme
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-white/30">
            Sin spam. Podés darte de baja en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  )
}
