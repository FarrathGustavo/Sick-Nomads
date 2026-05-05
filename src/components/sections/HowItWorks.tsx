"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CTA_LABELS, CONTACT, waUrl } from "@/lib/constants";

// Trocar pelo caminho da foto real do fundador quando disponível
const FOUNDER_PHOTO = "/images/foto_jose.jpeg";

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY      = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const cardY    = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <Section
      id="how-it-works"
      className="relative overflow-hidden text-white min-h-[90vh]"
    >
      <div ref={sectionRef} className="pointer-events-none absolute inset-0" aria-hidden />

      {/* ── Foto de fundo (Noronha) com parallax ──────────────── */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: bgY, scale: 1.12 }}
        aria-hidden
      >
        <Image
          src="/images/experiences/noronha.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay — verde da marca no topo, escuro na base */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(155deg, rgba(11,97,45,0.93) 0%, rgba(13,17,10,0.85) 50%, rgba(0,0,0,0.78) 100%)",
        }}
        aria-hidden
      />

      {/* Textura topográfica */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden
        style={{
          backgroundImage: "url('/images/contour-lines.png')",
          backgroundSize: "cover",
          mixBlendMode: "overlay",
        }}
      />

      {/* Glow dourado sutil no topo */}
      <div
        className="pointer-events-none absolute -top-20 left-1/4 h-[360px] w-[600px] -translate-x-1/2 opacity-20"
        style={{
          background: "radial-gradient(ellipse, rgba(255,215,0,0.55) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        aria-hidden
      />

      {/* ── Conteúdo — duas colunas ─────────────────────────────── */}
      <Container className="relative z-10 flex min-h-[90vh] flex-col justify-center py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16 xl:gap-24">

          {/* Coluna esquerda — texto ──────────────────────────── */}
          <div className="max-w-xl">

            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="mb-5 flex items-center gap-3"
            >
              <div className="h-px w-10 bg-[#FFD700]/50" aria-hidden />
              <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[#FFD700] font-sans">
                Sobre nós
              </span>
            </motion.div>

            {/* Título */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.07 }}
              className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-display), var(--font-serif), system-ui, sans-serif" }}
            >
              O que somos
            </motion.h2>

            {/* Linha decorativa */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
              className="mt-6 mb-8 h-px w-20 origin-left rounded-full"
              style={{ background: "linear-gradient(to right, #FFD700aa, transparent)" }}
              aria-hidden
            />

            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.28 }}
            >
              <p className="text-base leading-loose text-white/80 font-sans sm:text-lg">
                Antes de virar empresa, a Sick Nomads era uma forma de viajar. Uma recusa ao turismo
                de massa, ao selfie no ponto famoso, ao pacote que transforma destino em cenário. A
                proposta é simples: conexões reais, imersão cultural de verdade e um olhar que
                respeita o lugar e as pessoas que nele vivem.
              </p>

              {/* Frase de impacto — eco da tagline */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.42 }}
                className="mt-5 text-xl font-bold sm:text-2xl"
                style={{
                  fontFamily: "var(--font-display), var(--font-serif), system-ui, sans-serif",
                  color: "#FFD700",
                }}
              >
                Não ser turista — ser viajante.
              </motion.p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.5 }}
              className="mt-10 flex flex-col items-start gap-3"
            >
              <Link
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-[#FFD700] to-[#F6A619] px-8 py-3.5 text-sm font-bold text-[#1a1f16] shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_-8px_rgba(255,215,0,0.65)] active:scale-95"
              >
                <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
                <FaWhatsapp className="h-4 w-4 transition-transform group-hover:rotate-12" />
                <span className="relative">{CTA_LABELS.whatsapp}</span>
              </Link>
              <p className="text-xs text-white/40 font-sans">
                Resposta rápida — geralmente em até 1 hora útil
              </p>
            </motion.div>
          </div>

          {/* Coluna direita — foto do fundador ───────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: cardY }}
            className="mx-auto w-64 shrink-0 lg:mx-0 lg:w-72 xl:w-80"
          >
            {/* Moldura dourada com offset */}
            <div
              className="pointer-events-none absolute -right-3 -top-3 h-full w-full rounded-3xl border border-[#FFD700]/35"
              aria-hidden
            />

            {/* Card da foto */}
            <div className="relative overflow-hidden rounded-3xl shadow-[0_32px_72px_-16px_rgba(0,0,0,0.7)] border border-white/10">

              {/* Foto do fundador */}
              <div className="relative aspect-[3/4] w-full bg-[#0d1f14]">
                <Image
                  src={FOUNDER_PHOTO}
                  alt={`${CONTACT.founderName} — fundador da Sick Nomads`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 256px, 320px"
                />

                {/* Gradient na base do card */}
                <div
                  className="absolute inset-x-0 bottom-0 h-32"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
                  }}
                  aria-hidden
                />
              </div>

              {/* Rodapé do card com nome */}
              <div className="relative bg-[#0d1f14]/90 px-5 py-4 backdrop-blur-sm">
                <p
                  className="text-base font-bold text-white"
                  style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
                >
                  {CONTACT.founderName}
                </p>
                <p className="mt-0.5 text-xs tracking-wide text-[#FFD700] font-sans uppercase">
                  Fundador · Sick Nomads
                </p>
              </div>

              {/* Faixa dourada no topo */}
              <div
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{ background: "linear-gradient(to right, #FFD700, #F6A619, transparent)" }}
                aria-hidden
              />
            </div>

            {/* Glow atrás do card */}
            <div
              className="pointer-events-none absolute -inset-6 -z-10 opacity-25"
              style={{
                background: "radial-gradient(ellipse, rgba(255,215,0,0.45) 0%, transparent 70%)",
                filter: "blur(30px)",
              }}
              aria-hidden
            />
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}
