import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FounderBusinessCard } from "@/components/common/FounderBusinessCard";
import { CONTACT, SITE } from "@/lib/constants";

export function About() {
  return (
    <Section id="about" className="topo-pattern bg-surface">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Cartão de visitas digital (layout em código + logo 3D) */}
          <div className="mx-auto w-full max-w-[min(42rem,100%)]">
            <FounderBusinessCard />
          </div>

          <div>
            {/* Acento Sol Nomad antes do título */}
            <div className="mb-3 flex items-center gap-2">
              <div className="h-1 w-8 rounded-full bg-[#F6A619]" aria-hidden />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#646a26] font-sans">
                Nossa história
              </span>
            </div>

            <h2
              className="text-3xl font-bold text-ink sm:text-4xl"
              style={{ fontFamily: "var(--font-display), var(--font-serif), system-ui, sans-serif" }}
            >
              Sobre a {SITE.name}
            </h2>

            <p className="mt-3 text-sm font-semibold text-[#646a26] font-sans">
              À frente da operação está {CONTACT.founderName}, conectando viajantes a experiências
              autênticas com o mesmo contato que você vê no rodapé e no cartão da marca.
            </p>

            <p className="mt-4 text-neutral leading-relaxed font-sans">
              Somos uma comunidade que organiza viagens com propósito: menos roteiro engessado,
              mais território vivido com respeito e curiosidade. Conectamos pessoas que querem
              caminhar, pedalar e explorar sem abrir mão de segurança e bom humor no grupo.
            </p>
            <p className="mt-4 text-neutral leading-relaxed font-sans">
              Cada saída é pensada para quem busca conversar com o lugar — com guias locais,
              ritmo humano e espaço para o imprevisto que faz a viagem ficar na memória.
            </p>

            {/* Destaque de valor da marca */}
            <div className="mt-6 rounded-xl bg-[#F7E196] px-5 py-4 border-l-4 border-[#F6A619]">
              <p className="text-sm font-semibold text-ink font-sans italic">
                «Não ser mais um turista, mas tornar-se um explorador imerso — você no centro da
                experiência, integrando-se ao ecossistema do destino.»
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
