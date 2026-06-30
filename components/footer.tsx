import Link from 'next/link'
import { Mail, MapPin, Globe, ExternalLink, Share2, Rss } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[oklch(0.22_0.05_255)] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-sm bg-[oklch(0.82_0.1_175)] flex items-center justify-center">
                <span className="text-[oklch(0.15_0.04_255)] font-bold text-sm">SL</span>
              </div>
              <span className="text-white font-semibold text-lg">
                Sur<span className="text-[oklch(0.82_0.1_175)]">Lab</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Laboratorio de Innovación Política para el desarrollo inclusivo de América Latina desde el Sur Global.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Sitio web" className="w-8 h-8 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Globe className="w-4 h-4 text-white/70" />
              </a>
              <a href="#" aria-label="Redes sociales" className="w-8 h-8 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Share2 className="w-4 h-4 text-white/70" />
              </a>
              <a href="#" aria-label="Newsletter" className="w-8 h-8 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Rss className="w-4 h-4 text-white/70" />
              </a>
              <a href="#" aria-label="Enlace externo" className="w-8 h-8 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <ExternalLink className="w-4 h-4 text-white/70" />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">Navegación</h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'Inicio', href: '#' },
                { label: 'Sobre SurLab', href: '#nosotros' },
                { label: 'Programas', href: '#programas' },
                { label: 'Ejes temáticos', href: '#ejes' },
                { label: 'Publicaciones', href: '#publicaciones' },
                { label: 'Blog', href: '#publicaciones' },
                { label: 'Contacto', href: '#contacto' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programas */}
          <div>
            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">Programas</h3>
            <ul className="flex flex-col gap-2.5">
              {[
                'Gobernanza y Estado',
                'Desarrollo Productivo',
                'Innovación y Tecnología',
                'Cohesión Social',
              ].map((item) => (
                <li key={item}>
                  <Link href="#programas" className="text-sm text-white/60 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">Contacto</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[oklch(0.82_0.1_175)] mt-0.5 shrink-0" />
                <span className="text-sm text-white/60">Córdoba, Argentina</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[oklch(0.82_0.1_175)] shrink-0" />
                <a href="mailto:info@surlab.org" className="text-sm text-white/60 hover:text-white transition-colors">
                  info@surlab.org
                </a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-white/40 mb-2">Alianzas estratégicas</p>
              <div className="flex flex-col gap-1.5">
                <span className="text-sm text-white/60">OEI</span>
                <span className="text-sm text-white/60">UTN Córdoba</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © 2026 SurLab — Laboratorio de Innovación Política. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">Privacidad</Link>
            <Link href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">Términos</Link>
            <Link href="/admin" className="text-xs text-white/40 hover:text-[oklch(0.82_0.1_175)] transition-colors">Panel CMS</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
