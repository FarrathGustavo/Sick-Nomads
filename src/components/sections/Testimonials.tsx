"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
  initials: string;
  avatarBg: string;
  /**
   * Foto da viagem que aparece no VERSO do card (clicar no card central → flip).
   *
   * Convenção (para o cliente substituir depois):
   *   /public/images/testimonials/{slug}.jpg
   *
   * Enquanto não chegam as fotos reais dos viajantes, usamos a foto do
   * destino correspondente como fallback.
   */
  image: string;
};

const ITEMS: Testimonial[] = [
  {
    quote:
      "Saído do óbvio em todos os sentidos: grupo leve, organização impecável e lugares que eu não acharia sozinho.",
    name: "Marina F.",
    role: "Patagônia",
    rating: 5,
    initials: "MF",
    avatarBg: "from-[#FFD700] to-[#F6A619]",
    // TODO: substituir por foto real da Marina → /images/testimonials/marina-patagonia.jpg
    image: "/images/possibilidades/patagonia.jpg",
  },
  {
    quote:
      "Finalmente uma viagem de aventura onde me senti incluído no ritmo — sem pressa artificial, com espaço pra respirar a paisagem.",
    name: "Ricardo P.",
    role: "Atacama",
    rating: 5,
    initials: "RP",
    avatarBg: "from-[#646a26] to-[#8a9434]",
    // TODO: substituir por foto real do Ricardo → /images/testimonials/ricardo-atacama.jpg
    image: "/images/experiences/atacama.jpg",
  },
  {
    quote:
      "A Sick Nomads mistura planejamento sério com aquela vibe de estrada que a gente quer repetir.",
    name: "Camila & Bruno",
    role: "Chapada",
    rating: 5,
    initials: "C&B",
    avatarBg: "from-[#1f4e2c] to-[#2d6b3e]",
    // TODO: substituir por foto real → /images/testimonials/camila-bruno-chapada.jpg
    image: "/images/possibilidades/chapada-diamantina.jpg",
  },
  {
    quote:
      "Noronha sem fila, sem turista de excursão — só o lugar, a gente e o tempo de mergulhar fundo. Voltei outra pessoa.",
    name: "Eduardo M.",
    role: "Fernando de Noronha",
    rating: 5,
    initials: "EM",
    avatarBg: "from-[#0b9bbe] to-[#16c2e0]",
    // TODO: substituir por foto real do Eduardo → /images/testimonials/eduardo-noronha.jpg
    image: "/images/experiences/noronha.jpg",
  },
  {
    quote:
      "Pavones no nascer do sol, conversa boa na varanda e roteiro que não tinha um dia perdido. É viagem que gruda.",
    name: "Letícia S.",
    role: "Costa Rica",
    rating: 5,
    initials: "LS",
    avatarBg: "from-[#BC5217] to-[#ff5a12]",
    // TODO: substituir por foto real da Letícia → /images/testimonials/leticia-costa-rica.jpg
    image: "/images/experiences/costa-rica.jpg",
  },
];

const INTERVAL = 5500;

/* Posições espaciais — relativas à largura/altura do próprio card. */
const POSITIONS = [
  { x: "0%",     y: "0%",    scale: 1.0,  blur: 0,   opacity: 1,    zIndex: 30, rotate: 0  },
  { x: "-105%",  y: "-15%",  scale: 0.52, blur: 0.4, opacity: 0.9,  zIndex: 20, rotate: -2 },
  { x: "105%",   y: "-18%",  scale: 0.52, blur: 0.4, opacity: 0.9,  zIndex: 20, rotate: 2  },
  { x: "-122%",  y: "38%",   scale: 0.46, blur: 0.8, opacity: 0.8,  zIndex: 15, rotate: 3  },
  { x: "122%",   y: "40%",   scale: 0.46, blur: 0.8, opacity: 0.8,  zIndex: 15, rotate: -3 },
];

/* ─── FRENTE: depoimento ─────────────────────────────────────────── */
function TestimonialFront({
  t,
  isActive,
  showFlipHint,
}: {
  t: Testimonial;
  isActive: boolean;
  showFlipHint: boolean;
}) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden rounded-3xl border bg-white p-7 transition-shadow duration-500 sm:p-8 ${
        isActive
          ? "border-black/5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)]"
          : "border-black/10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.25)]"
      }`}
    >
      {/* Borda dourada no topo */}
      <div
        className="absolute inset-x-0 top-0 h-1"
        aria-hidden
        style={{
          background:
            "linear-gradient(90deg, transparent, #FFD700, #F6A619, #FFD700, transparent)",
        }}
      />

      {/* Aspas decorativas */}
      <FaQuoteLeft
        className="pointer-events-none absolute right-6 top-6 h-16 w-16 text-[#FFD700]/15"
        aria-hidden
      />

      {/* Hint de flip — só no card ativo */}
      {showFlipHint && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="absolute right-6 top-6 flex items-center gap-1.5 rounded-full bg-ink/5 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-ink/55 backdrop-blur-sm"
        >
          <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3">
            <path
              d="M3 8a5 5 0 0 1 10 0M13 8a5 5 0 0 1-10 0M11 5l2 1V4M5 11l-2-1v2"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Ver foto
        </motion.div>
      )}

      {/* Estrelas */}
      <div className="mb-4 flex items-center gap-0.5">
        {[...Array(t.rating)].map((_, i) => (
          <FaStar key={i} className="h-4 w-4 text-[#FFD700]" />
        ))}
      </div>

      {/* Quote */}
      <p
        className="text-base leading-relaxed text-ink/90 sm:text-lg"
        style={{
          fontFamily:
            "var(--font-display), var(--font-serif), system-ui, sans-serif",
        }}
      >
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Autor — fixo no rodapé */}
      <div className="absolute inset-x-7 bottom-6 flex items-center gap-3 border-t border-black/5 pt-5 sm:inset-x-8">
        <div
          className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.avatarBg} text-sm font-bold text-white shadow-lg ring-2 ring-white`}
          style={{
            fontFamily:
              "var(--font-display), var(--font-serif), system-ui, sans-serif",
          }}
        >
          {t.initials}
          <div className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#FFD700] ring-2 ring-white">
            <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-[#1a1f16]" fill="none">
              <path
                d="M2 6L5 9L10 3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink leading-tight">
            {t.name}
          </p>
          <p className="mt-0.5 truncate text-[11px] text-neutral">
            <span className="font-semibold text-[#646a26]">●</span> Viajou para {t.role}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── VERSO: foto da viagem ─────────────────────────────────────── */
function TestimonialBack({ t }: { t: Testimonial }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl border border-black/5 bg-[#0d110a] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)]">
      {/* Borda dourada no topo */}
      <div
        className="absolute inset-x-0 top-0 z-10 h-1"
        aria-hidden
        style={{
          background:
            "linear-gradient(90deg, transparent, #FFD700, #F6A619, #FFD700, transparent)",
        }}
      />

      {/* Foto da viagem */}
      <Image
        src={t.image}
        alt={`Foto da viagem de ${t.name} para ${t.role}`}
        fill
        sizes="360px"
        className="object-cover"
      />

      {/* Gradiente de legibilidade do rodapé ao topo */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />

      {/* Indicador "voltar" no canto */}
      <div className="pointer-events-none absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/85 backdrop-blur-md">
        <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3">
          <path
            d="M3 8a5 5 0 0 1 10 0M13 8a5 5 0 0 1-10 0M11 5l2 1V4M5 11l-2-1v2"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Voltar
      </div>

      {/* Conteúdo no rodapé */}
      <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
        <div className="mb-3 flex items-center gap-2.5">
          <div className="h-px w-8 bg-[#FFD700]" aria-hidden />
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#FFD700] font-sans">
            A viagem
          </p>
        </div>

        <p
          className="text-2xl font-bold leading-tight text-white sm:text-3xl"
          style={{
            fontFamily:
              "var(--font-display), var(--font-serif), system-ui, sans-serif",
          }}
        >
          {t.role}
        </p>

        <div className="mt-3 flex items-center gap-2.5">
          <div
            className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.avatarBg} text-[11px] font-bold text-white shadow-md ring-2 ring-white/90`}
            style={{
              fontFamily:
                "var(--font-display), var(--font-serif), system-ui, sans-serif",
            }}
          >
            {t.initials}
          </div>
          <p className="text-xs text-white/80 font-sans">
            por <span className="font-semibold text-white">{t.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const total = ITEMS.length;

  const go = useCallback(
    (n: number) => {
      setFlipped(false);
      setActive(((n % total) + total) % total);
    },
    [total]
  );

  /* Autoplay — pausa no hover OU quando o card está virado */
  useEffect(() => {
    if (paused || flipped) return;
    const t = setTimeout(() => go(active + 1), INTERVAL);
    return () => clearTimeout(t);
  }, [active, paused, flipped, go]);

  /* Swipe touch */
  const touchX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? active + 1 : active - 1);
    touchX.current = null;
  };

  const handleCardClick = (i: number, isActive: boolean) => {
    if (isActive) {
      setFlipped((f) => !f);
    } else {
      go(i);
    }
  };

  return (
    <Section id="testimonials" className="relative overflow-hidden bg-[#f7f5ef]">
      {/* Pattern topográfico */}
      <div
        className="pointer-events-none absolute inset-0 topo-pattern opacity-60"
        aria-hidden
      />

      {/* Glow ambient */}
      <div
        className="pointer-events-none absolute -top-40 right-0 h-96 w-[600px] opacity-20"
        aria-hidden
        style={{
          background: "radial-gradient(ellipse, rgba(255,215,0,0.5) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-0 h-96 w-[600px] opacity-15"
        aria-hidden
        style={{
          background: "radial-gradient(ellipse, rgba(100,106,38,0.5) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <Container className="relative z-10">
        {/* Cabeçalho */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45 }}
            className="mb-3 flex items-center justify-center gap-3"
          >
            <div className="h-px w-10 bg-[#646a26]/50" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#646a26] font-sans">
              Quem já viajou
            </span>
            <div className="h-px w-10 bg-[#646a26]/50" aria-hidden />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl font-bold text-ink sm:text-4xl lg:text-5xl"
            style={{
              fontFamily: "var(--font-display), var(--font-serif), system-ui, sans-serif",
            }}
          >
            Depoimentos
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14, duration: 0.45 }}
            className="mt-4 text-base text-neutral font-sans"
          >
            Quem já foi contou como foi viver a experiência com a gente.
          </motion.p>

          {/* Estatísticas */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-7 flex items-center justify-center gap-8 text-sm font-sans"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="h-4 w-4 text-[#FFD700]" />
                ))}
              </div>
              <span className="font-bold text-ink">5.0</span>
            </div>
            <div className="h-4 w-px bg-ink/20" aria-hidden />
            <div>
              <span className="font-bold text-ink">100%</span>
              <span className="text-neutral"> recomendariam</span>
            </div>
          </motion.div>
        </div>

        {/* ============== STAGE ESPACIAL ============== */}
        <div
          className="relative mx-auto w-full"
          style={{ maxWidth: "1100px", height: "560px" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Halo dourado por trás do card central */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 opacity-50"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse, rgba(255,215,0,0.35) 0%, transparent 65%)",
              filter: "blur(60px)",
            }}
          />

          {ITEMS.map((t, i) => {
            const offset = ((i - active) % total + total) % total;
            const pos = POSITIONS[offset] ?? POSITIONS[POSITIONS.length - 1];
            const isActive = offset === 0;
            const isFlipped = isActive && flipped;

            return (
              <motion.button
                key={t.name}
                type="button"
                onClick={() => handleCardClick(i, isActive)}
                aria-label={
                  isActive
                    ? isFlipped
                      ? `Voltar para o depoimento de ${t.name}`
                      : `Ver foto da viagem de ${t.name}`
                    : `Trazer depoimento de ${t.name} para o centro`
                }
                className="absolute left-1/2 top-1/2 origin-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f5ef]"
                style={{
                  width: "360px",
                  height: "440px",
                  marginLeft: "-180px",
                  marginTop: "-220px",
                  maxWidth: "85vw",
                  zIndex: pos.zIndex,
                  cursor: "pointer",
                }}
                animate={{
                  x: pos.x,
                  y: pos.y,
                  scale: pos.scale,
                  opacity: pos.opacity,
                  rotate: pos.rotate,
                  filter: `blur(${pos.blur}px)`,
                }}
                transition={{
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Wrapper com perspective para o flip 3D */}
                <div
                  className="h-full w-full"
                  style={{ perspective: "1500px" }}
                >
                  <div
                    className="relative h-full w-full"
                    style={{
                      transformStyle: "preserve-3d",
                      transition: "transform 0.85s cubic-bezier(0.22, 1, 0.36, 1)",
                      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    }}
                  >
                    {/* Frente */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                      }}
                    >
                      <TestimonialFront
                        t={t}
                        isActive={isActive}
                        showFlipHint={isActive && !flipped}
                      />
                    </div>

                    {/* Verso */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <TestimonialBack t={t} />
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}

          {/* Setas — desktop */}
          <button
            type="button"
            onClick={() => go(active - 1)}
            aria-label="Depoimento anterior"
            className="group absolute left-2 top-1/2 z-40 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 shadow-md backdrop-blur transition-all hover:scale-110 hover:border-[#FFD700] hover:shadow-lg active:scale-95 md:flex lg:left-6"
          >
            <FaChevronLeft className="h-3.5 w-3.5 text-ink transition-colors group-hover:text-[#F6A619]" />
          </button>
          <button
            type="button"
            onClick={() => go(active + 1)}
            aria-label="Próximo depoimento"
            className="group absolute right-2 top-1/2 z-40 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 shadow-md backdrop-blur transition-all hover:scale-110 hover:border-[#FFD700] hover:shadow-lg active:scale-95 md:flex lg:right-6"
          >
            <FaChevronRight className="h-3.5 w-3.5 text-ink transition-colors group-hover:text-[#F6A619]" />
          </button>
        </div>

        {/* Trust footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 text-center text-sm text-neutral font-sans"
        >
          Histórias reais de quem já trocou turismo por viagem com a gente.
        </motion.div>
      </Container>
    </Section>
  );
}
