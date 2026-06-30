import { Target, Globe2, Lightbulb, Users } from 'lucide-react'

const pillars = [
  {
    icon: Target,
    title: 'Nuestra misión',
    description:
      'Articular soluciones concretas a los desafíos del desarrollo en América Latina y el Caribe, promoviendo gobernanza moderna y cooperación regional con perspectiva del Sur Global.',
  },
  {
    icon: Globe2,
    title: 'Alcance regional',
    description:
      'Construimos redes de cooperación horizontal entre pares e instituciones con raíces regionales, con presencia en 23 países a través de nuestra alianza con la OEI.',
  },
  {
    icon: Lightbulb,
    title: 'Innovación aplicada',
    description:
      'Generamos políticas públicas basadas en evidencia, transfiriendo conocimiento e innovación aplicada a la gestión pública en un entorno de excelencia técnica.',
  },
  {
    icon: Users,
    title: 'Articulación intersectorial',
    description:
      'Cerramos la brecha entre el sector público, privado, academia y organismos internacionales para construir respuestas colaborativas a problemas complejos.',
  },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
          <div>
            <span className="text-xs font-semibold text-[oklch(0.45_0.18_290)] uppercase tracking-widest">
              Sobre SurLab
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[oklch(0.22_0.05_255)] leading-tight text-balance">
              Un laboratorio de pensamiento y acción para el Sur
            </h2>
          </div>
          <div>
            <p className="text-lg text-[oklch(0.40_0.03_255)] leading-relaxed text-pretty">
              Fundada en Córdoba en 2026, SurLab es un espacio diseñado específicamente para cerrar la brecha
              entre quienes piensan las políticas y quienes las implementan. Nuestro enfoque combina rigor
              académico con vocación transformadora.
            </p>
            <div className="mt-6 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[oklch(0.82_0.1_175)]" />
                <span className="text-sm text-[oklch(0.50_0.03_255)]">Fundada en 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[oklch(0.82_0.1_175)]" />
                <span className="text-sm text-[oklch(0.50_0.03_255)]">Córdoba, Argentina</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="group p-8 rounded-xl border border-[oklch(0.91_0.01_255)] hover:border-[oklch(0.82_0.1_175)] hover:shadow-lg hover:shadow-[oklch(0.82_0.1_175/0.1)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[oklch(0.22_0.05_255)] flex items-center justify-center mb-5 group-hover:bg-[oklch(0.82_0.1_175)] transition-colors">
                  <Icon className="w-5 h-5 text-[oklch(0.82_0.1_175)] group-hover:text-[oklch(0.15_0.04_255)] transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-[oklch(0.22_0.05_255)] mb-3">{pillar.title}</h3>
                <p className="text-[oklch(0.50_0.03_255)] leading-relaxed text-sm text-pretty">
                  {pillar.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Alliances teaser */}
        <div className="mt-16 p-8 rounded-xl bg-[oklch(0.22_0.05_255)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold text-[oklch(0.82_0.1_175)] uppercase tracking-widest mb-2">
              Alianzas internacionales
            </p>
            <h3 className="text-xl font-bold text-white">
              Respaldados por la OEI y la UTN Córdoba
            </h3>
            <p className="text-white/60 text-sm mt-2">
              Acuerdos de cooperación firmados en el lanzamiento institucional, 23 de abril de 2026.
            </p>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            {['OEI', 'UTN'].map((ally) => (
              <div
                key={ally}
                className="w-20 h-20 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center"
              >
                <span className="text-white font-bold text-lg">{ally}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
