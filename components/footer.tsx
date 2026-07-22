import Link from 'next/link'
import { Mail, MapPin, Globe, ExternalLink, Share2, Rss } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#00143f] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/surlab-icon.png" alt="SURLAB" className="w-8 h-8" />
              <span className="text-white font-semibold text-lg">
                SURLAB
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
                { label: 'Sobre SURLAB', href: '#nosotros' },
                { label: 'Programas', href: '#programas' },
                { label: 'Ejes temáticos', href: '#ejes' },
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
                <span className="text-sm text-white/60">
                  Tenerife 4304 - Barrio Parque Horizonte
                  <br />
                  5016 - Córdoba
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[oklch(0.82_0.1_175)] shrink-0" />
                <a href="mailto:consejoadm@sur-lab.org" className="text-sm text-white/60 hover:text-white transition-colors">
                  consejoadm@sur-lab.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © 2026 SURLAB — Laboratorio de Innovación Política. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">Privacidad</Link>
            <Link href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
