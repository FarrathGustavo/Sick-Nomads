import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="topo-pattern py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/about.jpg"
                alt="Grupo de viajantes em trilha de montanha no golden hour"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10" />
          </div>

          {/* Text */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-accent">
              Quem somos
            </p>
            <h2 className="mb-6 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Sobre a Sick Nomads
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                A Sick Nomads nasceu para quem quer explorar o mundo de forma autêntica.
              </p>
              <p>
                Mais que turismo, acreditamos em experiências de viagem reais que
                conectam pessoas com paisagens, culturas e comunidades.
              </p>
              <p>
                Cada jornada é pensada para quem quer viver os destinos como
                explorador, não só como visitante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
