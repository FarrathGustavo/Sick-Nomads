import Image from "next/image"
import { Compass, Map, Mountain } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/5511919662784?text=Ol%C3%A1!%20Quero%20planejar%20minha%20pr%C3%B3xima%20aventura%20com%20a%20Sick%20Nomads!"

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Conte sua ideia de viagem",
    text: "Compartilhe o destino ou a experiência que você quer viver.",
  },
  {
    number: "02",
    icon: Map,
    title: "Planejamos o roteiro",
    text: "Montamos um roteiro sob medida ou te incluímos em uma expedição em grupo.",
  },
  {
    number: "03",
    icon: Mountain,
    title: "Viva a experiência",
    text: "Viaje com segurança e viva o destino como um explorador.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-primary py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-24 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            O processo
          </p>
          <h2 className="mb-4 font-serif text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
            Como funciona
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="card-hover group relative rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm hover:bg-white/10 hover:border-white/20"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-secondary/25">
                  <step.icon className="h-7 w-7 text-secondary" />
                </div>
                <span className="text-4xl font-bold text-white/20">{step.number}</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary-foreground">
                {step.title}
              </h3>
              <p className="leading-relaxed text-white/75">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-whatsapp inline-flex items-center gap-3 rounded-full bg-secondary px-8 py-4 text-base font-bold text-secondary-foreground ring-2 ring-secondary/30 hover:bg-secondary/95 hover:ring-secondary/50"
          >
            <Image src="/images/ChatGPT%20Image%204_03_2026%2C%2015_39_52.png" alt="WhatsApp" width={64} height={64} className="h-14 w-14 object-contain md:h-16 md:w-16" />
            Planejar viagem no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
