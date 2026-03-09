import Image from "next/image"
import { ArrowRight } from "lucide-react"

const WHATSAPP_BASE = "https://wa.me/5511919662784?text="

const destinations = [
  { name: "Patagônia", image: "/images/patagonia.jpg", alt: "Torres del Paine com picos de granito e lago turquesa na Patagônia" },
  { name: "Peru", image: "/images/peru.jpg", alt: "Ruínas de Machu Picchu com montanhas enevoadas" },
  { name: "Atacama", image: "/images/atacama.jpg", alt: "Salares e montanhas vulcânicas do Deserto do Atacama ao pôr do sol" },
  { name: "Chapada Diamantina", image: "/images/chapada.jpg", alt: "Cachoeira em poço de águas cristalinas na Chapada Diamantina" },
  { name: "Jalapão", image: "/images/jalapao.jpg", alt: "Dunas douradas e águas cristalinas no Jalapão, Brasil" },
  { name: "Bolívia", image: "/images/bolivia.jpg", alt: "Reflexo espelhado no Salar de Uyuni ao pôr do sol" },
]

export default function Experiences() {
  return (
    <section id="experiences" className="topo-pattern py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-24 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Experiências realizadas
          </p>
          <h2 className="mb-4 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Viagens que já fizemos
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Destinos reais que exploramos em grupo. Clique e fale no WhatsApp para vivenciar o seu.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest) => (
            <a
              key={dest.name}
              href={`${WHATSAPP_BASE}Ol%C3%A1!%20Quero%20vivenciar%20${encodeURIComponent(dest.name)}%20com%20a%20Sick%20Nomads!`}
              target="_blank"
              rel="noopener noreferrer"
              className="group card-hover relative overflow-hidden rounded-2xl bg-foreground/5 shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.alt}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                <h3 className="text-xl font-bold text-white drop-shadow-md">{dest.name}</h3>
                <span className="flex shrink-0 items-center gap-2 rounded-full bg-secondary px-4 py-2.5 text-sm font-bold text-secondary-foreground shadow-lg opacity-0 transition-all duration-300 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0">
                  WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
