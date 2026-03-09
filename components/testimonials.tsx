import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Lucas M.",
    location: "Expedição Patagônia",
    text: "Foi a viagem mais incrível da minha vida. Tudo muito bem organizado e repleto de momentos inesquecíveis.",
    stars: 5,
  },
  {
    name: "Camila R.",
    location: "Aventura no Peru",
    text: "A Sick Nomads transformou um sonho em realidade. A conexão com a natureza e com as pessoas no caminho mudou minha vida.",
    stars: 5,
  },
  {
    name: "Rafael S.",
    location: "Jornada no Atacama",
    text: "Nunca imaginei que uma viagem pudesse ser tão transformadora. A equipe entende de verdade o que é viagem autêntica.",
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="topo-pattern py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-24 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Confiança
          </p>
          <h2 className="mb-4 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            O que os viajantes dizem
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Depoimentos reais de quem já viveu experiências com a Sick Nomads.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-hover flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-lg"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-secondary text-secondary"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mb-6 flex-1 text-lg leading-relaxed text-card-foreground">
                {`"${t.text}"`}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-border pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
