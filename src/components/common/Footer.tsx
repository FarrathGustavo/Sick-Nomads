"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { CONTACT, SITE, waUrl, NAV_ITEMS } from "@/lib/constants";
import { Logo } from "@/components/common/Logo";
import { FounderBusinessCard } from "@/components/common/FounderBusinessCard";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{ backgroundColor: "#646a26" }}
    >
      {/* Pattern topográfico */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          backgroundImage: "url('/images/contour-lines.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
          mixBlendMode: "overlay",
        }}
      />

      {/* Mesh gradient decorativo - múltiplas blobs */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[1000px] opacity-25"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,215,0,0.6) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 left-0 h-[300px] w-[400px] opacity-15"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,215,0,0.5) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 right-0 h-[300px] w-[400px] opacity-15"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,215,0,0.4) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Borda gradiente animada no topo */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        aria-hidden
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,215,0,0.6), transparent)",
        }}
      />

      <Container size="lg" className="relative z-10 py-8 !max-w-7xl">
        {/* ============== HERO: LOGO CENTRALIZADA ============== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo com glow */}
          <div className="relative">
            {/* Glow atrás do logo */}
            <div
              className="pointer-events-none absolute inset-0 -z-10"
              aria-hidden
              style={{
                background:
                  "radial-gradient(circle, rgba(255,215,0,0.3) 0%, transparent 60%)",
                filter: "blur(40px)",
                transform: "scale(1.5)",
              }}
            />
            <div className="text-[#FFD700]">
              <Logo size="lg" />
            </div>
          </div>

          {/* Tagline em destaque */}
          <p
            className="mt-5 max-w-md text-base font-bold leading-snug text-white sm:text-lg"
            style={{
              fontFamily:
                "var(--font-display), var(--font-serif), system-ui, sans-serif",
            }}
          >
            {SITE.tagline}
          </p>

          {/* Descrição */}
          <p className="mt-2 max-w-sm text-xs text-white/65 font-sans leading-relaxed">
            Experiências autênticas para quem busca ir além do turismo.
          </p>
        </motion.div>

        {/* ============== DIVISOR DECORATIVO ============== */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative my-7"
          aria-hidden
        >
          <div
            className="h-px w-full"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(255,215,0,0.4) 30%, rgba(255,215,0,0.4) 70%, transparent)",
            }}
          />
          {/* Ornamento central */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#646a26] px-3">
            <svg
              width="24"
              height="6"
              viewBox="0 0 24 6"
              className="text-[#FFD700]"
              fill="currentColor"
            >
              <circle cx="3" cy="3" r="2" opacity="0.4" />
              <circle cx="12" cy="3" r="2.5" />
              <circle cx="21" cy="3" r="2" opacity="0.4" />
            </svg>
          </div>
        </motion.div>

        {/* ============== GRID: 3 COLUNAS — 1fr auto 1fr centraliza o bloco como o hero do footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-6 lg:gap-10"
        >
          {/* COLUNA 1: Navegação — alinhada à direita da “metade” esquerda (rumo ao centro) */}
          <div className="flex w-full flex-col items-center md:max-w-none md:items-end md:pr-2">
            <p className="mb-4 w-full max-w-[200px] text-center text-[10px] font-bold uppercase tracking-[0.25em] text-[#FFD700] font-sans md:text-left">
              Navegação
            </p>
            <ul className="flex w-full max-w-[200px] flex-col gap-2.5 text-center font-sans text-sm md:text-left">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-white/80 transition-colors hover:text-[#FFD700]"
                  >
                    <span
                      className="block h-px w-2 bg-[#FFD700]/50 transition-all group-hover:w-5 group-hover:bg-[#FFD700]"
                      aria-hidden
                    />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUNA 2: Cartão — coluna central “auto”, sempre no eixo do ornamento acima */}
          <div className="flex w-full max-w-[min(600px,100%)] justify-self-center md:w-auto">
            <motion.div
              initial={{ opacity: 0, y: 20, rotateY: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: -6,
                rotateY: 4,
                rotateX: -2,
                scale: 1.03,
                transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
              }}
              className="group relative"
              style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
            >
              {/* Glow amarelo atrás do cartão */}
              <div
                className="pointer-events-none absolute -inset-4 -z-10 opacity-50 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(255,215,0,0.45) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />

              {/* Cartão com borda única — sem moldura duplicada em volta */}
              <div
                className="relative overflow-hidden rounded-2xl shadow-2xl transition-shadow duration-500 group-hover:shadow-[0_25px_56px_-12px_rgba(255,215,0,0.38)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <FounderBusinessCard className="transition-transform duration-700 group-hover:scale-[1.02]" />

                {/* Shine sweep no hover */}
                <div
                  className="pointer-events-none absolute inset-0 -translate-x-full rounded-2xl bg-gradient-to-r from-transparent via-white/22 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
                  aria-hidden
                />

                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_36px_rgba(0,0,0,0.045)]"
                  aria-hidden
                />
              </div>

              {/* Reflexo/sombra inferior */}
              <div
                className="pointer-events-none absolute inset-x-6 -bottom-3 h-6 rounded-[50%] opacity-40 transition-opacity duration-500 group-hover:opacity-70"
                aria-hidden
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 70%)",
                  filter: "blur(8px)",
                }}
              />
            </motion.div>
          </div>

          {/* COLUNA 3: CTA — alinhada à esquerda da “metade” direita (simétrico à coluna 1) */}
          <div className="flex w-full flex-col items-center md:max-w-none md:items-start md:pl-2">
            {/* Eyebrow com ornamento de linha — tom de mapa/atlas */}
            <div className="mb-3 flex w-full max-w-[300px] items-center justify-center gap-2.5 md:justify-start">
              <div className="h-px w-7 bg-[#FFD700]/55" aria-hidden />
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#FFD700] font-sans">
                Próximo passo
              </p>
            </div>

            {/* Headline — maior e em fonte display */}
            <h3
              className="w-full max-w-[300px] text-center text-2xl font-bold leading-tight text-white md:text-left sm:text-[1.7rem]"
              style={{
                fontFamily:
                  "var(--font-display), var(--font-serif), system-ui, sans-serif",
              }}
            >
              Pronto para a estrada?
            </h3>

            {/* Sub-descrição — tom caloroso */}
            <p className="mt-3 w-full max-w-[300px] text-center text-sm text-white/70 font-sans leading-relaxed md:text-left">
              Conta sua ideia de viagem que a gente desenha um roteiro
              só seu — sem compromisso, na conversa.
            </p>

            {/* CTA WhatsApp — refinado, sem perder o estilo */}
            <Link
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mt-6 inline-flex w-full max-w-[300px] items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-[#FFD700] to-[#F6A619] px-6 py-3.5 text-sm font-bold text-[#1a1f16] shadow-[0_10px_30px_-8px_rgba(255,215,0,0.45)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-10px_rgba(255,215,0,0.6)] active:translate-y-0"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <FaWhatsapp className="relative h-4 w-4 transition-transform group-hover:rotate-12" />
              <span className="relative">Falar no WhatsApp</span>
            </Link>

          </div>
        </motion.div>

        {/* ============== DIVISOR FINAL ============== */}
        <div
          className="mt-7 h-px"
          aria-hidden
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,215,0,0.25) 30%, rgba(255,215,0,0.25) 70%, transparent)",
          }}
        />

        {/* ============== BOTTOM BAR ============== */}
        <div className="mt-5 flex flex-col items-center gap-2 text-[11px] font-sans text-white/55 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white/75">{SITE.name}</span>. Todos os
            direitos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            Feito com <span className="animate-pulse text-[#FFD700]">♥</span> para
            quem ama estrada
          </p>
        </div>
      </Container>

      {/* Linha decorativa final com gradient animado */}
      <div
        className="relative h-[2px] w-full"
        aria-hidden
        style={{
          background:
            "linear-gradient(90deg, transparent, #FFD700 25%, #F6A619 50%, #FFD700 75%, transparent)",
          opacity: 0.5,
        }}
      />
    </footer>
  );
}
