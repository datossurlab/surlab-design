'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const navItems = [
  {
    label: 'Nosotros',
    href: '#nosotros',
  },
  {
    label: 'Programas',
    href: '#programas',
    children: [
      { label: 'Gobernanza y Estado', href: '#programas' },
      { label: 'Desarrollo Productivo', href: '#programas' },
      { label: 'Innovación y Tecnología', href: '#programas' },
      { label: 'Cohesión Social', href: '#programas' },
    ],
  },
  {
    label: 'Ejes Temáticos',
    href: '#ejes',
  },
  {
    label: 'Contacto',
    href: '#contacto',
  },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#00143f] shadow-lg shadow-black/20'
          : 'bg-[#00143f]/95'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img src="/surlab-icon.png" alt="SURLAB" className="w-8 h-8" />
            <span className="text-white font-semibold text-lg tracking-tight">
              SURLAB
            </span>
          </Link>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm text-white/80 hover:text-white transition-colors rounded-md hover:bg-white/10"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.label}
                    <ChevronDown className="w-3 h-3" />
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-xl border border-border py-1 z-50">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-[oklch(0.96_0.01_255)] transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm text-white/80 hover:text-white transition-colors rounded-md hover:bg-white/10 block"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
