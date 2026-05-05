"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { waUrl } from "@/lib/constants";

const LogoSymbol3D = dynamic(
  () => import("@/components/common/LogoSymbol3D").then((m) => ({ default: m.LogoSymbol3D })),
  { ssr: false, loading: () => <div className="h-full w-full" /> }
);

const METRICS = [
  { value: "100%", label: "roteiros personalizados" },
  { value: "5.0",  label: "avaliação média"         },
] as const;

export function FinalCta() {
  return (
    <Section className="relative overflow-hidden bg-[#0a1f10] py-24 text-white sm:py-32">

      {/* Textura topográfica — bem sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden
        style={{
          backgroundImage: "url('/images/contour-lines.png')",
          backgroundSize: "cover",
          mixBlendMode: "overlay",
        }}
      />

      {/* Glow dourado central */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-[0.18]"
        style={{
          background: "radial-gradient(ellipse, rgba(255,215,0,0.6) 0%, transparent 68%)",
          filter: "blur(90px)",
        }}
        aria-hidden
      />

      {/* Linha decorativa topo */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center gap-0" aria-hidden>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#FFD700]/25" />
        <div className="h-px w-24 bg-[#FFD700]/40" />
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#FFD700]/25" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_auto] lg:gap-24">

          {/* ── Coluna esquerda — texto + CTA ───────────────────── */}
          <div>
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4 }}
              className="mb-6 flex items-center gap-3"
            >
              <div className="h-px w-8 bg-[#FFD700]/50" aria-hidden />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#FFD700]/80 font-sans">
                Próximo passo
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.07 }}
              className="max-w-lg text-4xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-[3.5rem]"
              style={{ fontFamily: "var(--font-display), var(--font-serif), system-ui, sans-serif" }}
            >
              Pronto para viver
              <br />
              seu próximo destino?
            </motion.h2>

            {/* Divisor fino */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
              className="mt-8 mb-10 h-px w-16 origin-left rounded-full"
              style={{ background: "linear-gradient(to right, #FFD700aa, transparent)" }}
              aria-hidden
            />

            {/* Indicador de disponibilidade */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="mb-8 flex items-center gap-2.5"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-sm text-white/50 font-sans">
                Disponível agora · conversa sem compromisso
              </span>
            </motion.div>

            {/* Botão CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.32, duration: 0.5 }}
              className="flex flex-col items-start gap-3"
            >
              <Link
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-lg bg-gradient-to-r from-[#F6A619] to-[#FFD700] px-8 py-4 text-sm font-bold tracking-wide text-[#1a1f16] shadow-[0_8px_32px_-8px_rgba(246,166,25,0.5)] transition-all duration-300 hover:shadow-[0_16px_48px_-8px_rgba(255,215,0,0.55)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-600 group-hover:translate-x-full" />
                <FaWhatsapp className="relative h-4 w-4" aria-hidden />
                <span className="relative uppercase tracking-widest">Falar no WhatsApp</span>
                <svg className="relative h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              <Link
                href="#experiences"
                className="group inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-white/40 transition-colors hover:text-white/70 font-sans uppercase"
              >
                Ou explore os roteiros
                <svg className="h-3 w-3 transition-transform group-hover:translate-x-0.5" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* ── Coluna direita — métricas ────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="flex shrink-0 flex-col divide-y divide-white/10 lg:min-w-[220px]"
          >
            {/* Logo 3D na cor da marca */}
            <div className="pb-7">
              <div className="relative h-80 w-80">
                <LogoSymbol3D variant="gold" />
              </div>
            </div>

            {METRICS.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.28 + i * 0.1, duration: 0.45 }}
                className="py-7 first:pt-0 last:pb-0"
              >
                <p
                  className="text-4xl font-bold leading-none text-[#FFD700]"
                  style={{ fontFamily: "var(--font-display), var(--font-serif), system-ui, sans-serif" }}
                >
                  {value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/45 font-sans">
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </Container>

      {/* Linha decorativa base */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center" aria-hidden>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#FFD700]/25" />
        <div className="h-px w-24 bg-[#FFD700]/40" />
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#FFD700]/25" />
      </div>

    </Section>
  );
}
