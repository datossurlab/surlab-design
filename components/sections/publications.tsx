'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, FileText, BookOpen, BarChart3, Newspaper } from 'lucide-react'

const publications = [
  {
    id: 1,
    type: 'Documento de trabajo',
    typeIcon: FileText,
    title: 'Gobernanza digital en América Latina: diagnóstico y agenda para la transformación del Estado',
    excerpt:
      'Análisis comparado de los marcos institucionales y capacidades estatales para la transformación digital en 12 países de la región.',
    date: 'Junio 2026',
    program: 'Innovación y Tecnología',
    image: '/images/pub-1.png',
    featured: true,
  },
  {
    id: 2,
    type: 'Policy brief',
    typeIcon: BookOpen,
    title: 'Ciudades inteligentes y equidad: cómo evitar la brecha digital en el urbanismo',
    excerpt:
      'Recomendaciones de política pública para garantizar que la modernización urbana no profundice las desigualdades existentes.',
    date: 'Mayo 2026',
    program: 'Cohesión Social',
    image: '/images/pub-2.png',
    featured: false,
  },
  {
    id: 3,
    type: 'Informe',
    typeIcon: BarChart3,
    title: 'IA y gestión pública: oportunidades y riesgos para el Sur Global',
    excerpt:
      'Mapeo de iniciativas de inteligencia artificial en el sector público latinoamericano con análisis de impacto y riesgos.',
    date: 'Abril 2026',
    program: 'Innovación y Tecnología',
    image: '/images/pub-3.png',
    featured: false,
  },
  {
    id: 4,
    type: 'Nota de opinión',
    typeIcon: Newspaper,
    title: 'Cooperación Sur-Sur: el rol de Córdoba como nodo iberoamericano',
    excerpt:
      'Reflexión sobre el posicionamiento estratégico de Argentina y la región de Córdoba en las redes de cooperación internacional.',
    date: 'Abril 2026',
    program: 'Desarrollo Productivo',
    image: '/images/pub-1.png',
    featured: false,
  },
]

const typeColors: Record<string, string> = {
  'Documento de trabajo': 'bg-[oklch(0.97_0.02_175)] text-[oklch(0.50_0.12_175)]',
  'Policy brief': 'bg-[oklch(0.97_0.02_290)] text-[oklch(0.45_0.18_290)]',
  'Informe': 'bg-[oklch(0.98_0.03_85)] text-[oklch(0.55_0.16_85)]',
  'Nota de opinión': 'bg-[oklch(0.97_0.02_200)] text-[oklch(0.45_0.14_200)]',
}

export function PublicationsSection() {
  const [activeType, setActiveType] = useState('Todos')

  const types = ['Todos', 'Documento de trabajo', 'Policy brief', 'Informe', 'Nota de opinión']
  const filtered = activeType === 'Todos' ? publications : publications.filter((p) => p.type === activeType)
  const featured = filtered.find((p) => p.featured) || filtered[0]
  const rest = filtered.filter((p) => p !== featured)

  return (
    <section id="publicaciones" className="py-24 bg-[oklch(0.97_0.005_255)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-semibold text-[oklch(0.45_0.18_290)] uppercase tracking-widest">
              Producción de conocimiento
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[oklch(0.22_0.05_255)] leading-tight">
              Publicaciones
            </h2>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[oklch(0.22_0.05_255)] hover:text-[oklch(0.45_0.18_290)] transition-colors"
          >
            Ver todas las publicaciones
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeType === type
                  ? 'bg-[oklch(0.22_0.05_255)] text-white'
                  : 'bg-white border border-[oklch(0.91_0.01_255)] text-[oklch(0.50_0.03_255)] hover:border-[oklch(0.22_0.05_255)] hover:text-[oklch(0.22_0.05_255)]'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Layout: featured + sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Featured */}
          {featured && (
            <div className="lg:col-span-3 group bg-white rounded-2xl overflow-hidden border border-[oklch(0.91_0.01_255)] hover:shadow-xl hover:shadow-black/8 transition-all duration-300">
              <div className="relative h-52 md:h-64 overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.05_255/0.5)] to-transparent" />
                <span
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    typeColors[featured.type] || 'bg-white/20 text-white'
                  }`}
                >
                  {featured.type}
                </span>
              </div>
              <div className="p-6">
                <span className="text-xs text-[oklch(0.65_0.02_255)]">{featured.date} · {featured.program}</span>
                <h3 className="mt-2 text-xl font-bold text-[oklch(0.22_0.05_255)] leading-snug mb-3 text-pretty">
                  {featured.title}
                </h3>
                <p className="text-sm text-[oklch(0.50_0.03_255)] leading-relaxed mb-5 text-pretty">
                  {featured.excerpt}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[oklch(0.22_0.05_255)] hover:text-[oklch(0.45_0.18_290)] transition-colors"
                >
                  Leer publicación
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

          {/* Sidebar list */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {rest.slice(0, 3).map((pub) => {
              const Icon = pub.typeIcon
              return (
                <div
                  key={pub.id}
                  className="group bg-white rounded-xl p-5 border border-[oklch(0.91_0.01_255)] hover:border-[oklch(0.22_0.05_255)] hover:shadow-md transition-all duration-200 flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[oklch(0.97_0.005_255)] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[oklch(0.45_0.18_290)]" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          typeColors[pub.type] || 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {pub.type}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-[oklch(0.22_0.05_255)] leading-snug mb-1 group-hover:text-[oklch(0.45_0.18_290)] transition-colors text-pretty">
                      {pub.title}
                    </h4>
                    <p className="text-xs text-[oklch(0.65_0.02_255)]">{pub.date}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
