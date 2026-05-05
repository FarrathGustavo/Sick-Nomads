import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { Experiences } from "@/components/sections/Experiences";
import { Possibilidades } from "@/components/sections/Possibilidades";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experiences />
        <Possibilidades />
        <HowItWorks />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
