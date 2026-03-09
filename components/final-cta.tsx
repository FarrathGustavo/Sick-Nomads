import Image from "next/image"

const WHATSAPP_URL = "https://wa.me/5511919662784?text=Ol%C3%A1!%20Quero%20planejar%20minha%20pr%C3%B3xima%20aventura%20com%20a%20Sick%20Nomads!"

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-32 md:py-40">
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 800 400" preserveAspectRatio="none" fill="none" aria-hidden>
          <path d="M0 300 Q200 200 400 250 Q600 300 800 200" stroke="white" strokeWidth="1" />
          <path d="M0 320 Q200 220 400 270 Q600 320 800 220" stroke="white" strokeWidth="1" />
          <path d="M0 340 Q200 240 400 290 Q600 340 800 240" stroke="white" strokeWidth="1" />
          <path d="M0 360 Q200 260 400 310 Q600 360 800 260" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-6 font-serif text-4xl font-bold tracking-tight text-primary-foreground drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)] md:text-6xl">
          Pronto para viver sua próxima aventura?
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-lg leading-relaxed text-white/90">
          Fale com a gente e comece a planejar sua próxima jornada.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-whatsapp inline-flex items-center gap-3 rounded-full bg-secondary px-10 py-5 text-lg font-bold text-secondary-foreground ring-2 ring-secondary/30 hover:bg-secondary/95 hover:ring-secondary/50"
        >
          <Image src="/images/ChatGPT%20Image%204_03_2026%2C%2015_39_52.png" alt="WhatsApp" width={72} height={72} className="h-16 w-16 object-contain md:h-20 md:w-20" />
          Planejar viagem no WhatsApp
        </a>
      </div>
    </section>
  )
}
