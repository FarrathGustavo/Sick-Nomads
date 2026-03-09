import Link from "next/link"
import Image from "next/image"

const WHATSAPP_URL = "https://wa.me/5511919662784?text=Ol%C3%A1!%20Quero%20planejar%20minha%20pr%C3%B3xima%20aventura%20com%20a%20Sick%20Nomads!"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-28 overflow-visible border-b border-primary/20 bg-background/98 shadow-[0_1px_4px_rgba(11,97,45,0.06)] backdrop-blur-xl md:h-32">
      <nav className="mx-auto flex h-28 max-w-7xl items-center justify-between gap-8 px-8 md:h-32 md:gap-12 md:px-10">
        <Link
          href="/"
          className="flex shrink-0 items-center transition-all duration-300 ease-out hover:scale-[1.02] hover:opacity-95"
          aria-label="Sick Nomads início"
        >
          <Image
            src="/images/ChatGPT%20Image%204_03_2026%2C%2015_36_53.png"
            alt="Sick Nomads"
            width={560}
            height={210}
            className="h-28 w-auto object-contain drop-shadow-[0_2px_12px_rgba(11,97,45,0.2)] md:h-32"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          <li>
            <Link
              href="#experiences"
              className="relative inline-block py-1.5 text-base font-medium tracking-tight text-foreground/75 transition-all duration-300 hover:text-primary after:absolute after:bottom-0 after:left-0 after:block after:h-0.5 after:w-0 after:rounded-full after:bg-primary after:content-[''] after:transition-[width] after:duration-300 hover:after:w-full"
            >
              Experiências
            </Link>
          </li>
          <li>
            <Link
              href="#how-it-works"
              className="relative inline-block py-1.5 text-base font-medium tracking-tight text-foreground/75 transition-all duration-300 hover:text-primary after:absolute after:bottom-0 after:left-0 after:block after:h-0.5 after:w-0 after:rounded-full after:bg-primary after:content-[''] after:transition-[width] after:duration-300 hover:after:w-full"
            >
              Como funciona
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="relative inline-block py-1.5 text-base font-medium tracking-tight text-foreground/75 transition-all duration-300 hover:text-primary after:absolute after:bottom-0 after:left-0 after:block after:h-0.5 after:w-0 after:rounded-full after:bg-primary after:content-[''] after:transition-[width] after:duration-300 hover:after:w-full"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              href="#testimonials"
              className="relative inline-block py-1.5 text-base font-medium tracking-tight text-foreground/75 transition-all duration-300 hover:text-primary after:absolute after:bottom-0 after:left-0 after:block after:h-0.5 after:w-0 after:rounded-full after:bg-primary after:content-[''] after:transition-[width] after:duration-300 hover:after:w-full"
            >
              Depoimentos
            </Link>
          </li>
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex shrink-0 items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-primary via-[#0d7a38] to-[#094d24] px-6 py-3.5 text-base font-bold text-primary-foreground shadow-[0_4px_20px_rgba(11,97,45,0.35)] ring-2 ring-primary/20 transition-all duration-300 hover:shadow-[0_8px_28px_rgba(11,97,45,0.45)] hover:ring-primary/40 hover:scale-[1.03] active:scale-[0.98]"
        >
          <span className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
          <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/25 md:h-16 md:w-16">
            <Image
              src="/images/ChatGPT%20Image%204_03_2026%2C%2015_39_52.png"
              alt="WhatsApp"
              width={96}
              height={96}
              className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110 md:h-12 md:w-12"
            />
          </span>
          <span className="relative hidden whitespace-nowrap drop-shadow-sm sm:inline">Começar a planejar</span>
        </a>
      </nav>
    </header>
  )
}
