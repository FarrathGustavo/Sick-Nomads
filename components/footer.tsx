import Image from "next/image"

const WHATSAPP_URL = "https://wa.me/5511919662784?text=Ol%C3%A1!%20Quero%20planejar%20minha%20pr%C3%B3xima%20aventura%20com%20a%20Sick%20Nomads!"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-foreground py-16 text-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div className="max-w-sm">
            <div className="mb-4 flex items-center gap-2">
              <Image
                src="/images/ChatGPT%20Image%204_03_2026%2C%2015_36_53.png"
                alt="Sick Nomads"
                width={320}
                height={120}
                className="h-24 w-auto object-contain md:h-28"
              />
            </div>
            <p className="text-sm leading-relaxed text-background/70">
              Experiências de viagem autênticas para quem quer explorar o mundo como nômade de verdade.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/sicknomads"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-background/25 text-background/70 transition-colors duration-200 hover:border-background/50 hover:text-background"
              aria-label="Seguir Sick Nomads no Instagram"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-16 w-16 items-center justify-center rounded-full border border-background/25 text-background/70 transition-colors duration-200 hover:border-background/50 hover:text-background p-1.5 md:h-20 md:w-20"
              aria-label="Falar com Sick Nomads no WhatsApp"
            >
              <Image src="/images/ChatGPT%20Image%204_03_2026%2C%2015_39_52.png" alt="WhatsApp" width={72} height={72} className="h-full w-full object-contain" />
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8 text-center text-xs text-background/50">
          <p>Sick Nomads. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
