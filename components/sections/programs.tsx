import { ArrowRight, Building2, TrendingUp, Cpu, HeartHandshake } from 'lucide-react'
import Link from 'next/link'

const programs = [
  {
    id: 1,
    number: '01',
    icon: Building2,
    title: 'Gobernanza y Estado',
    description:
      'Fortalecimiento institucional, formación ciudadana y modernización del Estado. Desarrollamos herramientas para una democracia más eficaz y transparente.',
    axes: ['Formación Ciudadana', 'Estado Moderno', 'Seguridad Ciudadana', 'Salud Pública'],
    color: 'oklch(0.82_0.1_175)',
    bg: 'oklch(0.97_0.02_175)',
  },
  {
    id: 2,
    number: '02',
    icon: TrendingUp,
    title: 'Desarrollo Productivo',
    description:
      'Estrategias para potenciar la economía regional. Trabajo en cooperación internacional, integración regional y economía sostenible.',
    axes: ['Desarrollo Productivo', 'Sustentabilidad y Energía', 'Cooperación Internacional', 'Economía'],
    color: 'oklch(0.87_0.18_85)',
    bg: 'oklch(0.98_0.03_85)',
  },
  {
    id: 3,
    number: '03',
    icon: Cpu,
    title: 'Innovación y Tecnología',
    description:
      'Transformación digital, IA y gestión del conocimiento al servicio de la gestión pública. Impulsamos la adopción de tecnologías de vanguardia.',
    axes: ['Transformación Digital', 'Inteligencia Artificial', 'Educación y Ciencia', 'Comunicación Estratégica'],
    color: 'oklch(0.72_0.14_290)',
    bg: 'oklch(0.97_0.02_290)',
  },
  {
    id: 4,
    number: '04',
    icon: HeartHandshake,
    title: 'Cohesión Social',
    description:
      'Políticas de inclusión, urbanismo y desarrollo social. Promovemos ciudades inteligentes e industrias creativas para el bienestar colectivo.',
    axes: ['Género e Inclusión', 'Urbanismo', 'Políticas de Juventud', 'Industrias Creativas'],
    color: 'oklch(0.65_0.14_200)',
    bg: 'oklch(0.97_0.02_200)',
  },
]

export function ProgramsSection() {
  return (
    <section id="programas" className="py-24 bg-[oklch(0.97_0.005_255)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-semibold text-[oklch(0.45_0.18_290)] uppercase tracking-widest">
              Áreas de trabajo
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[oklch(0.22_0.05_255)] leading-tight">
              Nuestros programas
            </h2>
          </div>
          <p className="text-[oklch(0.50_0.03_255)] max-w-sm text-sm leading-relaxed">
            Cuatro grandes programas que integran los 12 ejes temáticos de investigación y acción de SurLab.
          </p>
        </div>

        {/* Programs grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program) => {
            const Icon = program.icon
            return (
              <div
                key={program.id}
                className="group relative bg-white rounded-2xl overflow-hidden border border-[oklch(0.91_0.01_255)] hover:shadow-xl hover:shadow-black/8 transition-all duration-300"
              >
                {/* Top color bar */}
                <div
                  className="h-1 w-full"
                  style={{ background: `oklch(${program.color.replace('oklch(', '').replace(')', '')})` }}
                />

                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: `oklch(${program.bg.replace('oklch(', '').replace(')', '')})` }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: `oklch(${program.color.replace('oklch(', '').replace(')', '')})` }}
                      />
                    </div>
                    <span className="text-5xl font-bold text-[oklch(0.91_0.01_255)]">{program.number}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[oklch(0.22_0.05_255)] mb-3">{program.title}</h3>
                  <p className="text-[oklch(0.50_0.03_255)] text-sm leading-relaxed mb-6 text-pretty">
                    {program.description}
                  </p>

                  {/* Axes */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {program.axes.map((axis) => (
                      <span
                        key={axis}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-[oklch(0.97_0.005_255)] text-[oklch(0.40_0.03_255)] border border-[oklch(0.91_0.01_255)]"
                      >
                        {axis}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="#ejes"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[oklch(0.22_0.05_255)] group-hover:text-[oklch(0.45_0.18_290)] transition-colors"
                  >
                    Ver más
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
