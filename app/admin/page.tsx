'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  LayoutDashboard,
  FileText,
  BookOpen,
  Tag,
  Users,
  Settings,
  Plus,
  Search,
  ArrowLeft,
  Edit3,
  Trash2,
  Eye,
  ChevronRight,
  BarChart3,
  Bell,
  LogOut,
} from 'lucide-react'

type Section = 'dashboard' | 'publications' | 'programs' | 'axes' | 'team' | 'settings'

const publications = [
  { id: 1, title: 'Gobernanza digital en América Latina', type: 'Documento de trabajo', program: 'Innovación y Tecnología', status: 'Publicado', date: '10/06/2026' },
  { id: 2, title: 'Ciudades inteligentes y equidad', type: 'Policy brief', program: 'Cohesión Social', status: 'Publicado', date: '22/05/2026' },
  { id: 3, title: 'IA y gestión pública: oportunidades', type: 'Informe', program: 'Innovación y Tecnología', status: 'Publicado', date: '05/04/2026' },
  { id: 4, title: 'Cooperación Sur-Sur y rol de Córdoba', type: 'Nota de opinión', program: 'Desarrollo Productivo', status: 'Borrador', date: '01/04/2026' },
]

const programs = [
  { id: 1, title: 'Gobernanza y Estado', axes: 4, pubs: 6 },
  { id: 2, title: 'Desarrollo Productivo', axes: 4, pubs: 4 },
  { id: 3, title: 'Innovación y Tecnología', axes: 2, pubs: 8 },
  { id: 4, title: 'Cohesión Social', axes: 2, pubs: 3 },
]

const team = [
  { id: 1, name: 'Valentina Torres', role: 'Directora Ejecutiva', program: 'Todos' },
  { id: 2, name: 'Martín Gómez', role: 'Investigador senior', program: 'Gobernanza y Estado' },
  { id: 3, name: 'Lucía Fernández', role: 'Investigadora', program: 'Innovación y Tecnología' },
  { id: 4, name: 'Rodrigo Sánchez', role: 'Coordinador de comunicación', program: 'Todos' },
]

const statusColors: Record<string, string> = {
  Publicado: 'bg-[oklch(0.90_0.08_175)] text-[oklch(0.35_0.12_175)]',
  Borrador: 'bg-[oklch(0.97_0.03_85)] text-[oklch(0.55_0.14_85)]',
  Archivado: 'bg-gray-100 text-gray-500',
}

export default function AdminPage() {
  const [activeSection, setActiveSection] = useState<Section>('dashboard')
  const [searchQuery, setSearchQuery] = useState('')

  const navItems: { id: Section; label: string; icon: React.ComponentType<{ className?: string }>; count?: number }[] = [
    { id: 'dashboard', label: 'Panel principal', icon: LayoutDashboard },
    { id: 'publications', label: 'Publicaciones', icon: FileText, count: 4 },
    { id: 'programs', label: 'Programas', icon: BookOpen, count: 4 },
    { id: 'axes', label: 'Ejes temáticos', icon: Tag, count: 12 },
    { id: 'team', label: 'Equipo', icon: Users, count: 4 },
    { id: 'settings', label: 'Configuración', icon: Settings },
  ]

  return (
    <div className="min-h-screen flex bg-[oklch(0.97_0.005_255)]">
      {/* Sidebar */}
      <aside className="w-64 bg-[oklch(0.22_0.05_255)] flex flex-col">
        {/* Logo */}
        <div className="px-6 py-5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-sm bg-[oklch(0.82_0.1_175)] flex items-center justify-center">
              <span className="text-[oklch(0.15_0.04_255)] font-bold text-xs">SL</span>
            </div>
            <span className="text-white font-semibold text-sm">
              Sur<span className="text-[oklch(0.82_0.1_175)]">Lab</span>{' '}
              <span className="text-white/40 font-normal">CMS</span>
            </span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 flex flex-col gap-0.5">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all text-left w-full ${
                  isActive
                    ? 'bg-[oklch(0.82_0.1_175)] text-[oklch(0.15_0.04_255)] font-semibold'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="flex-1">{item.label}</span>
                {item.count !== undefined && (
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-[oklch(0.15_0.04_255/20)] text-[oklch(0.15_0.04_255)]' : 'bg-white/10 text-white/50'
                    }`}
                  >
                    {item.count}
                  </span>
                )}
              </button>
            )
          })}
        </nav>

        {/* Bottom */}
        <div className="px-3 py-4 border-t border-white/10">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/10 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Ver sitio público
          </Link>
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/10 transition-all w-full text-left mt-1">
            <LogOut className="w-4 h-4" />
            Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-white border-b border-[oklch(0.91_0.01_255)] px-8 py-4 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-lg font-bold text-[oklch(0.22_0.05_255)]">
              {navItems.find((n) => n.id === activeSection)?.label}
            </h1>
            <p className="text-xs text-[oklch(0.65_0.02_255)]">SurLab · Panel de administración</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[oklch(0.65_0.02_255)]" />
              <input
                type="search"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 text-sm bg-[oklch(0.97_0.005_255)] border border-[oklch(0.91_0.01_255)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[oklch(0.45_0.18_290)] w-56"
              />
            </div>
            <button className="relative w-9 h-9 rounded-lg bg-[oklch(0.97_0.005_255)] border border-[oklch(0.91_0.01_255)] flex items-center justify-center hover:bg-[oklch(0.93_0.01_255)] transition-colors">
              <Bell className="w-4 h-4 text-[oklch(0.50_0.03_255)]" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[oklch(0.82_0.1_175)] rounded-full" />
            </button>
            <div className="w-9 h-9 rounded-lg bg-[oklch(0.22_0.05_255)] flex items-center justify-center">
              <span className="text-white text-xs font-bold">VT</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-8 overflow-auto">
          {/* Dashboard */}
          {activeSection === 'dashboard' && (
            <div className="flex flex-col gap-8">
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Publicaciones', value: '4', sub: '1 borrador', icon: FileText, color: 'oklch(0.45_0.18_290)' },
                  { label: 'Programas', value: '4', sub: 'activos', icon: BookOpen, color: 'oklch(0.82_0.1_175)' },
                  { label: 'Ejes temáticos', value: '12', sub: 'áreas de trabajo', icon: Tag, color: 'oklch(0.87_0.18_85)' },
                  { label: 'Suscriptores', value: '128', sub: '+12 este mes', icon: Users, color: 'oklch(0.65_0.14_200)' },
                ].map((stat) => {
                  const Icon = stat.icon
                  return (
                    <div key={stat.label} className="bg-white rounded-xl p-5 border border-[oklch(0.91_0.01_255)]">
                      <div className="flex items-start justify-between mb-3">
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center"
                          style={{ background: `${stat.color.replace('oklch(', 'oklch(').replace(')', '/0.12)')}` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: `oklch(${stat.color.replace('oklch(', '').replace(')', '')})` }} />
                        </div>
                        <BarChart3 className="w-4 h-4 text-[oklch(0.80_0.01_255)]" />
                      </div>
                      <div className="text-2xl font-bold text-[oklch(0.22_0.05_255)]">{stat.value}</div>
                      <div className="text-xs text-[oklch(0.65_0.02_255)] mt-0.5">{stat.label} · {stat.sub}</div>
                    </div>
                  )
                })}
              </div>

              {/* Recent publications */}
              <div className="bg-white rounded-xl border border-[oklch(0.91_0.01_255)] overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b border-[oklch(0.91_0.01_255)]">
                  <h2 className="font-semibold text-[oklch(0.22_0.05_255)]">Publicaciones recientes</h2>
                  <button
                    onClick={() => setActiveSection('publications')}
                    className="text-xs text-[oklch(0.45_0.18_290)] hover:underline flex items-center gap-1"
                  >
                    Ver todas <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
                <div className="divide-y divide-[oklch(0.97_0.005_255)]">
                  {publications.slice(0, 3).map((pub) => (
                    <div key={pub.id} className="flex items-center gap-4 px-6 py-4 hover:bg-[oklch(0.99_0.002_255)] transition-colors">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-[oklch(0.22_0.05_255)] truncate">{pub.title}</p>
                        <p className="text-xs text-[oklch(0.65_0.02_255)] mt-0.5">{pub.type} · {pub.program}</p>
                      </div>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium shrink-0 ${statusColors[pub.status]}`}>
                        {pub.status}
                      </span>
                      <span className="text-xs text-[oklch(0.65_0.02_255)] shrink-0 hidden md:block">{pub.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick actions */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Nueva publicación', icon: FileText, section: 'publications' as Section },
                  { label: 'Nuevo programa', icon: BookOpen, section: 'programs' as Section },
                  { label: 'Nuevo eje', icon: Tag, section: 'axes' as Section },
                  { label: 'Nuevo miembro', icon: Users, section: 'team' as Section },
                ].map((action) => {
                  const Icon = action.icon
                  return (
                    <button
                      key={action.label}
                      onClick={() => setActiveSection(action.section)}
                      className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-[oklch(0.91_0.01_255)] hover:border-[oklch(0.22_0.05_255)] hover:shadow-sm transition-all text-center"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[oklch(0.22_0.05_255)] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[oklch(0.82_0.1_175)]" />
                      </div>
                      <span className="text-xs font-medium text-[oklch(0.40_0.03_255)]">{action.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Publications */}
          {activeSection === 'publications' && (
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-[oklch(0.50_0.03_255)]">
                  {publications.length} publicaciones registradas
                </h2>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-[oklch(0.22_0.05_255)] text-white text-sm font-semibold rounded-lg hover:bg-[oklch(0.28_0.06_255)] transition-colors">
                  <Plus className="w-4 h-4" />
                  Nueva publicación
                </button>
              </div>
              <div className="bg-white rounded-xl border border-[oklch(0.91_0.01_255)] overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[oklch(0.91_0.01_255)] bg-[oklch(0.99_0.002_255)]">
                      {['Título', 'Tipo', 'Programa', 'Estado', 'Fecha', 'Acciones'].map((col) => (
                        <th key={col} className="text-left px-5 py-3.5 text-xs font-semibold text-[oklch(0.50_0.03_255)] uppercase tracking-wider">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[oklch(0.97_0.005_255)]">
                    {publications.map((pub) => (
                      <tr key={pub.id} className="hover:bg-[oklch(0.99_0.002_255)] transition-colors">
                        <td className="px-5 py-4 font-medium text-[oklch(0.22_0.05_255)] max-w-xs">
                          <span className="line-clamp-2">{pub.title}</span>
                        </td>
                        <td className="px-5 py-4 text-[oklch(0.50_0.03_255)] whitespace-nowrap">{pub.type}</td>
                        <td className="px-5 py-4 text-[oklch(0.50_0.03_255)] whitespace-nowrap hidden md:table-cell">{pub.program}</td>
                        <td className="px-5 py-4 whitespace-nowrap">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[pub.status]}`}>
                            {pub.status}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-[oklch(0.65_0.02_255)] whitespace-nowrap hidden lg:table-cell">{pub.date}</td>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-1">
                            <button className="p-1.5 rounded-md hover:bg-[oklch(0.97_0.005_255)] text-[oklch(0.65_0.02_255)] hover:text-[oklch(0.22_0.05_255)] transition-colors" title="Ver">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-1.5 rounded-md hover:bg-[oklch(0.97_0.005_255)] text-[oklch(0.65_0.02_255)] hover:text-[oklch(0.22_0.05_255)] transition-colors" title="Editar">
                              <Edit3 className="w-4 h-4" />
                            </button>
                            <button className="p-1.5 rounded-md hover:bg-red-50 text-[oklch(0.65_0.02_255)] hover:text-red-500 transition-colors" title="Eliminar">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Programs */}
          {activeSection === 'programs' && (
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-[oklch(0.50_0.03_255)]">4 programas activos</h2>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-[oklch(0.22_0.05_255)] text-white text-sm font-semibold rounded-lg hover:bg-[oklch(0.28_0.06_255)] transition-colors">
                  <Plus className="w-4 h-4" />
                  Nuevo programa
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {programs.map((prog) => (
                  <div key={prog.id} className="bg-white rounded-xl p-6 border border-[oklch(0.91_0.01_255)] hover:border-[oklch(0.22_0.05_255)] transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-semibold text-[oklch(0.22_0.05_255)]">{prog.title}</h3>
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 rounded-md hover:bg-[oklch(0.97_0.005_255)] text-[oklch(0.65_0.02_255)] hover:text-[oklch(0.22_0.05_255)] transition-colors">
                          <Edit3 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-[oklch(0.22_0.05_255)]">{prog.axes}</div>
                        <div className="text-xs text-[oklch(0.65_0.02_255)]">ejes</div>
                      </div>
                      <div className="w-px h-8 bg-[oklch(0.91_0.01_255)]" />
                      <div className="text-center">
                        <div className="text-xl font-bold text-[oklch(0.22_0.05_255)]">{prog.pubs}</div>
                        <div className="text-xs text-[oklch(0.65_0.02_255)]">publicaciones</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Axes */}
          {activeSection === 'axes' && (
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-[oklch(0.50_0.03_255)]">12 ejes temáticos</h2>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-[oklch(0.22_0.05_255)] text-white text-sm font-semibold rounded-lg hover:bg-[oklch(0.28_0.06_255)] transition-colors">
                  <Plus className="w-4 h-4" />
                  Nuevo eje
                </button>
              </div>
              <div className="bg-white rounded-xl border border-[oklch(0.91_0.01_255)] overflow-hidden">
                {[
                  { title: 'Formación Ciudadana', program: 'Gobernanza y Estado', pubs: 2 },
                  { title: 'Estado y Gestión Pública', program: 'Gobernanza y Estado', pubs: 3 },
                  { title: 'Seguridad Ciudadana', program: 'Gobernanza y Estado', pubs: 1 },
                  { title: 'Salud Pública', program: 'Gobernanza y Estado', pubs: 0 },
                  { title: 'Desarrollo Productivo', program: 'Desarrollo Productivo', pubs: 2 },
                  { title: 'Sustentabilidad y Energía', program: 'Desarrollo Productivo', pubs: 1 },
                  { title: 'Cooperación Internacional', program: 'Desarrollo Productivo', pubs: 1 },
                  { title: 'Economía y Finanzas', program: 'Desarrollo Productivo', pubs: 0 },
                  { title: 'Transformación Digital', program: 'Innovación y Tecnología', pubs: 3 },
                  { title: 'IA e Innovación', program: 'Innovación y Tecnología', pubs: 5 },
                  { title: 'Urbanismo y Ciudades', program: 'Cohesión Social', pubs: 2 },
                  { title: 'Género e Inclusión', program: 'Cohesión Social', pubs: 1 },
                ].map((axis, i) => (
                  <div key={i} className="flex items-center gap-4 px-6 py-4 border-b border-[oklch(0.97_0.005_255)] hover:bg-[oklch(0.99_0.002_255)] transition-colors last:border-0">
                    <span className="text-xs text-[oklch(0.65_0.02_255)] w-6 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-[oklch(0.22_0.05_255)]">{axis.title}</p>
                      <p className="text-xs text-[oklch(0.65_0.02_255)]">{axis.program}</p>
                    </div>
                    <span className="text-xs text-[oklch(0.65_0.02_255)] shrink-0">{axis.pubs} pub.</span>
                    <div className="flex items-center gap-1">
                      <button className="p-1.5 rounded-md hover:bg-[oklch(0.97_0.005_255)] text-[oklch(0.65_0.02_255)] hover:text-[oklch(0.22_0.05_255)] transition-colors">
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Team */}
          {activeSection === 'team' && (
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-[oklch(0.50_0.03_255)]">4 miembros del equipo</h2>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-[oklch(0.22_0.05_255)] text-white text-sm font-semibold rounded-lg hover:bg-[oklch(0.28_0.06_255)] transition-colors">
                  <Plus className="w-4 h-4" />
                  Agregar miembro
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {team.map((member) => (
                  <div key={member.id} className="bg-white rounded-xl p-5 border border-[oklch(0.91_0.01_255)] flex items-center gap-4 hover:border-[oklch(0.22_0.05_255)] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[oklch(0.22_0.05_255)] flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-sm">
                        {member.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-[oklch(0.22_0.05_255)] text-sm">{member.name}</p>
                      <p className="text-xs text-[oklch(0.65_0.02_255)]">{member.role} · {member.program}</p>
                    </div>
                    <button className="p-1.5 rounded-md hover:bg-[oklch(0.97_0.005_255)] text-[oklch(0.65_0.02_255)] hover:text-[oklch(0.22_0.05_255)] transition-colors">
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Settings */}
          {activeSection === 'settings' && (
            <div className="max-w-2xl flex flex-col gap-6">
              <div className="bg-white rounded-xl p-6 border border-[oklch(0.91_0.01_255)]">
                <h3 className="font-semibold text-[oklch(0.22_0.05_255)] mb-4">Información del sitio</h3>
                <div className="flex flex-col gap-4">
                  {[
                    { label: 'Nombre del sitio', value: 'SurLab' },
                    { label: 'Descripción', value: 'Laboratorio de Innovación Política' },
                    { label: 'Email de contacto', value: 'info@surlab.org' },
                    { label: 'Dominio', value: 'surlab.org' },
                  ].map((field) => (
                    <div key={field.label} className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[oklch(0.50_0.03_255)] uppercase tracking-wide">{field.label}</label>
                      <input
                        defaultValue={field.value}
                        className="px-4 py-2.5 rounded-lg bg-[oklch(0.97_0.005_255)] border border-[oklch(0.91_0.01_255)] text-sm text-[oklch(0.22_0.05_255)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.45_0.18_290)]"
                      />
                    </div>
                  ))}
                  <button className="self-start px-5 py-2.5 bg-[oklch(0.22_0.05_255)] text-white text-sm font-semibold rounded-lg hover:bg-[oklch(0.28_0.06_255)] transition-colors mt-2">
                    Guardar cambios
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
