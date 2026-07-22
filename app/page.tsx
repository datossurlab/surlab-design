import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { ProgramsSection } from '@/components/sections/programs'
import { AxesSection } from '@/components/sections/axes'
import { NewsletterSection } from '@/components/sections/newsletter'
import { ContactSection } from '@/components/sections/contact'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <AxesSection />
          <NewsletterSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
