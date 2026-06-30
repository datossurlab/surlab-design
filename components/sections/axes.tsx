'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const axes = [
  { id: 1, title: 'Formación Ciudadana', program: 'Gobernanza y Estado', desc: 'Educación cívica y participación democrática.' },
  { id: 2, title: 'Estado y Gestión Pública', program: 'Gobernanza y Estado', desc: 'Modernización institucional y transparencia.' },
  { id: 3, title: 'Seguridad Ciudadana', program: 'Gobernanza y Estado', desc: 'Políticas de prevención y convivencia.' },
  { id: 4, title: 'Salud Pública', program: 'Gobernanza y Estado', desc: 'Sistemas de salud y bienestar colectivo.' },
  { id: 5, title: 'Desarrollo Productivo', program: 'Desarrollo Productivo', desc: 'Competitividad e innovación productiva regional.' },
  { id: 6, title: 'Sustentabilidad y Energía', program: 'Desarrollo Productivo', desc: 'Transición energética y economía verde.' },
  { id: 7, title: 'Cooperación Internacional', program: 'Desarrollo Productivo', desc: 'Integración regional e iberoamericana.' },
  { id: 8, title: 'Economía y Finanzas', program: 'Desarrollo Productivo', desc: 'Política fiscal, empleo y desarrollo económico.' },
  { id: 9, title: 'Transformación Digital', program: 'Innovación y Tecnología', desc: 'Digitalización del Estado y servicios públicos.' },
  { id: 10, title: 'IA e Innovación', program: 'Innovación y Tecnología', desc: 'Inteligencia artificial para el sector público.' },
  { id: 11, title: 'Urbanismo y Ciudades', program: 'Cohesión Social', desc: 'Ciudades inteligentes y desarrollo urbano.' },
  { id: 12, title: 'Género e Inclusión', program: 'Cohesión Social', desc: 'Políticas de igualdad y diversidad.' },
]

const programs = ['Todos', 'Gobernanza y Estado', 'Desarrollo Productivo', 'Innovación y Tecnología', 'Cohesión Social']

const programColors: Record<string, string> = {
  'Gobernanza y Estado': 'oklch(0.82_0.1_175)',
  'Desarrollo Productivo': 'oklch(0.87_0.18_85)',
  'Innovación y Tecnología': 'oklch(0.72_0.14_290)',
  'Cohesión Social': 'oklch(0.65_0.14_200)',
}

export function AxesSection() {
  const [activeFilter, setActiveFilter] = useState('Todos')

  const filtered = activeFilter === 'Todos' ? axes : axes.filter((a) => a.program === activeFilter)

  return (
    <section id="ejes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-semibold text-[oklch(0.45_0.18_290)] uppercase tracking-widest">
            12 áreas de investigación
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[oklch(0.22_0.05_255)] leading-tight">
            Ejes temáticos
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {programs.map((prog) => (
            <button
              key={prog}
              onClick={() => setActiveFilter(prog)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === prog
                  ? 'bg-[oklch(0.22_0.05_255)] text-white shadow-sm'
                  : 'bg-[oklch(0.97_0.005_255)] text-[oklch(0.50_0.03_255)] hover:bg-[oklch(0.93_0.01_255)] hover:text-[oklch(0.22_0.05_255)]'
              }`}
            >
              {prog}
            </button>
          ))}
        </div>

        {/* Axes grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((axis) => (
            <div
              key={axis.id}
              className="group p-6 rounded-xl border border-[oklch(0.91_0.01_255)] hover:border-[oklch(0.22_0.05_255)] hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col gap-3"
            >
              <div className="flex items-start justify-between">
                <span
                  className="px-2.5 py-1 text-xs font-medium rounded-full text-white"
                  style={{ background: programColors[axis.program] }}
                >
                  {axis.program}
                </span>
                <ArrowUpRight className="w-4 h-4 text-[oklch(0.80_0.01_255)] group-hover:text-[oklch(0.22_0.05_255)] transition-colors shrink-0" />
              </div>
              <h3 className="font-semibold text-[oklch(0.22_0.05_255)] leading-snug">{axis.title}</h3>
              <p className="text-sm text-[oklch(0.55_0.03_255)] leading-relaxed">{axis.desc}</p>
            </div>
          ))}
        </div>

        {/* Counter */}
        <p className="mt-6 text-xs text-[oklch(0.65_0.02_255)] text-right">
          Mostrando {filtered.length} de 12 ejes
        </p>
      </div>
    </section>
  )
}
