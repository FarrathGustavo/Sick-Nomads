import Image from "next/image"
import { ChevronDown } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/5511919662784?text=Ol%C3%A1!%20Quero%20planejar%20minha%20pr%C3%B3xima%20aventura%20com%20a%20Sick%20Nomads!"

export default function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero.jpg"
        alt="Paisagem de montanhas no golden hour com trilheiro contemplando picos"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Overlay escuro para legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/80" />

      {/* Espaço do header fixo (h-28 md:h-32) */}
      <div className="relative z-10 h-28 shrink-0 md:h-32" aria-hidden />

      {/* Content centralizado no espaço restante */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-4 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Logo em destaque - sem fundo, maior */}
          <div className="mb-10 flex justify-center animate-fade-in-up">
            <Image
              src="/images/ChatGPT%20Image%204_03_2026%2C%2015_36_53.png"
              alt="Sick Nomads"
              width={640}
              height={240}
              className="h-60 w-auto object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)] md:h-72 lg:h-80"
              priority
            />
          </div>
          <p className="mb-5 inline-block rounded-full border border-white/25 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/95 backdrop-blur-md">
            Experiências de viagem de aventura
          </p>
          <h1 className="mb-6 text-balance font-serif text-5xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] md:text-7xl lg:text-8xl">
            Explore o mundo como um Nomad.
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-white/90 md:text-xl">
            Experiências autênticas de viagem para quem quer ir além do turismo.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-whatsapp inline-flex items-center gap-3 rounded-full bg-secondary px-8 py-4 text-base font-bold text-secondary-foreground ring-2 ring-secondary/30 hover:bg-secondary/95 hover:ring-secondary/50"
          >
            <Image src="/images/ChatGPT%20Image%204_03_2026%2C%2015_39_52.png" alt="WhatsApp" width={64} height={64} className="h-14 w-14 object-contain md:h-16 md:w-16" />
            Planejar viagem no WhatsApp
          </a>
          <a
            href="#experiences"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/50"
          >
            Ver experiências
          </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-white/60" aria-hidden />
      </div>
    </section>
  )
}
