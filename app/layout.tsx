import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SurLab — Laboratorio de Innovación Política',
  description:
    'SurLab es una fundación dedicada a la generación de conocimiento estratégico e innovación pública para el desarrollo de América Latina desde el Sur Global.',
  keywords: ['think tank', 'innovación política', 'políticas públicas', 'Córdoba', 'América Latina', 'Sur Global'],
  openGraph: {
    title: 'SurLab — Laboratorio de Innovación Política',
    description:
      'Articulamos conocimiento estratégico e innovación pública para el desarrollo inclusivo de América Latina.',
    locale: 'es_AR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1a1e38',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
