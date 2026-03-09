import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Experiences from "@/components/experiences"
import HowItWorks from "@/components/how-it-works"
import About from "@/components/about"
import MissionVisionValues from "@/components/mission-vision-values"
import Testimonials from "@/components/testimonials"
import FinalCTA from "@/components/final-cta"
import Footer from "@/components/footer"
import WhatsAppFloating from "@/components/whatsapp-floating"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experiences />
        <HowItWorks />
        <About />
        <MissionVisionValues />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloating />
    </>
  )
}
