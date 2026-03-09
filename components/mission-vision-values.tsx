import { Target, Eye, Heart } from "lucide-react"

const cards = [
  {
    icon: Target,
    title: "Missão",
    text: "Criar experiências de viagem autênticas que conectem pessoas com o mundo.",
  },
  {
    icon: Eye,
    title: "Visão",
    text: "Inspirar uma nova forma de viajar — mais consciente, aventureira e significativa.",
  },
  {
    icon: Heart,
    title: "Valores",
    text: null,
    values: ["Exploração", "Conexão com a natureza", "Autenticidade", "Comunidade"],
  },
]

export default function MissionVisionValues() {
  return (
    <section className="bg-sand/40 py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="card-hover group rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-lg hover:border-primary/25"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <card.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-card-foreground">
                {card.title}
              </h3>
              {card.text ? (
                <p className="leading-relaxed text-muted-foreground">
                  {card.text}
                </p>
              ) : (
                <ul className="space-y-2">
                  {card.values?.map((value) => (
                    <li
                      key={value}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      {value}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
