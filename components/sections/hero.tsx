import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Vista aérea de Córdoba"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[oklch(0.22_0.05_255/0.82)]" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(oklch(0.82_0.1_175) 1px, transparent 1px), linear-gradient(90deg, oklch(0.82_0.1_175) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[oklch(0.82_0.1_175)]" />
            <span className="text-xs font-semibold text-[oklch(0.82_0.1_175)] uppercase tracking-widest">
              Córdoba · América Latina · Sur Global
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight text-balance mb-6">
            Conocimiento estratégico para{' '}
            <span className="text-[oklch(0.82_0.1_175)]">transformar</span>{' '}
            lo público
          </h1>

          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl text-pretty">
            SurLab es una fundación dedicada a generar innovación pública y políticas basadas en evidencia,
            articulando el sector público, privado, académico e internacional desde el Sur Global.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#programas"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[oklch(0.82_0.1_175)] text-[oklch(0.15_0.04_255)] font-semibold rounded-md hover:bg-[oklch(0.75_0.12_175)] transition-colors"
            >
              Ver programas
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#publicaciones"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
            >
              Publicaciones
            </Link>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
          {[
            { value: '4', label: 'Programas' },
            { value: '12', label: 'Ejes temáticos' },
            { value: '2', label: 'Alianzas internacionales' },
            { value: '23', label: 'Países OEI' },
          ].map((stat) => (
            <div key={stat.label} className="border-l-2 border-[oklch(0.82_0.1_175)] pl-4">
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/50 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-white/20 animate-pulse" />
        <span className="text-xs text-white/30 uppercase tracking-widest">Explorar</span>
      </div>
    </section>
  )
}
