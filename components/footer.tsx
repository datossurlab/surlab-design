import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white/70">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white/70">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white/70">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

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
              <a href="https://www.instagram.com/fundacionsurlab" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <InstagramIcon />
              </a>
              <a href="https://www.linkedin.com/company/fundacionsurlab" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <LinkedinIcon />
              </a>
              <a href="https://www.facebook.com/share/1D8qVE4Cgj/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <FacebookIcon />
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
            © 2026 SURLAB — Laboratorio de Innovación Política. Todos los derechos reservados. CUIT 33-71938947-9
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
