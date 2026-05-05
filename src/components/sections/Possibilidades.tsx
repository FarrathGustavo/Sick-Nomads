"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import { FaWhatsapp, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { TRAVEL_IDEAS, waUrlForDestination, waUrlWithText } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const INTERVAL    = 4500;
const CARD_W_PCT  = 54;   // % da largura do stage por card
const SPREAD_PCT  = 85;   // % do card width de deslocamento lateral por posição
const ROTATE_DEG  = 40;   // graus de rotação Y por posição
const DEPTH_PX    = 200;  // px de recuo Z por posição
const SCALE_STEP  = 0.13; // redução de escala por posição
const MAX_VISIBLE = 2;    // quantas posições laterais mostrar (±)

function getAnimate(delta: number) {
  const abs = Math.abs(delta);
  return {
    x:       `${delta * SPREAD_PCT}%`,
    rotateY: delta * ROTATE_DEG,
    z:       -abs * DEPTH_PX,
    scale:   1 - abs * SCALE_STEP,
    opacity: abs > MAX_VISIBLE ? 0 : 1 - abs * 0.38,
    zIndex:  20 - abs,
  };
}

export function Possibilidades() {
  const [index,  setIndex]  = useState(0);
  const [paused, setPaused] = useState(false);
  const total   = TRAVEL_IDEAS.length;
  const current = TRAVEL_IDEAS[index];

  const go = useCallback((n: number) => setIndex((n + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(index + 1), INTERVAL);
    return () => clearInterval(t);
  }, [index, paused, go]);

  const touchX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? index + 1 : index - 1);
    touchX.current = null;
  };

  return (
    /* Sem overflow-hidden aqui — os cards 3D precisam sangrar lateralmente */
    <Section id="possibilidades" className="relative bg-[#0d110a]">
      <Container className="relative z-10">

        {/* Cabeçalho */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-3 flex items-center justify-center gap-3"
          >
            <div className="h-px w-10 bg-[#FFD700]/40" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FFD700] font-sans">
              Destinos
            </span>
            <div className="h-px w-10 bg-[#FFD700]/40" aria-hidden />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-display), var(--font-serif), system-ui, sans-serif" }}
          >
            Possibilidades
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14, duration: 0.45 }}
            className="mt-4 text-base text-white/50 font-sans"
          >
            Cada destino é uma história diferente — encontre a sua
          </motion.p>
        </div>

      </Container>

      {/* ── Stage 3-D — full width, fora do Container ─────────── */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10 w-full"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Perspectiva 3-D */}
        <div
          className="relative mx-auto h-[20rem] w-full sm:h-[26rem] lg:h-[32rem]"
          style={{ perspective: "1200px", perspectiveOrigin: "50% 50%" }}
        >
          <div className="relative h-full w-full" style={{ transformStyle: "preserve-3d" }}>
            {TRAVEL_IDEAS.map((idea, i) => {
              const delta    = i - index;
              const abs      = Math.abs(delta);
              const isActive = delta === 0;

              if (abs > MAX_VISIBLE) return null;

              return (
                <motion.div
                  key={idea.title}
                  animate={getAnimate(delta)}
                  transition={{ duration: 0.65, ease: [0.25, 0.8, 0.25, 1] }}
                  onClick={() => !isActive && go(i)}
                  className="absolute top-0 h-full overflow-hidden rounded-2xl shadow-2xl"
                  style={{
                    width:          `${CARD_W_PCT}%`,
                    left:           0,
                    right:          0,
                    margin:         "auto",
                    cursor:         isActive ? "default" : "pointer",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <Image
                    src={idea.image}
                    alt={idea.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width:640px) 80vw, 55vw"
                    priority={i === 0}
                  />

                  {/* Gradiente */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(13,17,10,0.95) 0%, rgba(13,17,10,0.3) 50%, transparent 100%)",
                    }}
                  />

                  {/* Conteúdo — só no card ativo */}
                  <motion.div
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
                    transition={{ duration: 0.4, delay: isActive ? 0.25 : 0 }}
                    className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8"
                  >
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      {idea.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#FFD700]/50 bg-black/40 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#FFD700] backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="text-[10px] text-white/40 font-sans">· {idea.duration}</span>
                    </div>

                    <h3
                      className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl"
                      style={{ fontFamily: "var(--font-display), var(--font-serif), system-ui, sans-serif" }}
                    >
                      {idea.title}
                    </h3>
                    <p className="mt-0.5 text-xs font-semibold tracking-wide text-[#FFD700]/75 font-sans sm:text-sm">
                      {idea.subtitle}
                    </p>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/55 font-sans sm:text-sm">
                      {idea.description}
                    </p>
                  </motion.div>

                  {/* Escurece cards laterais */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-black/40" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Controles */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={() => go(index - 1)}
            aria-label="Destino anterior"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-[#FFD700] hover:text-[#FFD700] active:scale-95"
          >
            <FaChevronLeft className="h-3.5 w-3.5" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {TRAVEL_IDEAS.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Ir para ${TRAVEL_IDEAS[i].title}`}
                className={`rounded-full transition-all duration-300 ${
                  i === index ? "h-2 w-7 bg-[#FFD700]" : "h-1.5 w-1.5 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(index + 1)}
            aria-label="Próximo destino"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-[#FFD700] hover:text-[#FFD700] active:scale-95"
          >
            <FaChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Barra de progresso */}
        <div className="mx-auto mt-4 h-[2px] max-w-xs overflow-hidden rounded-full bg-white/10">
          {!paused && (
            <motion.div
              key={index}
              className="h-full bg-[#FFD700]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: INTERVAL / 1000, ease: "linear" }}
            />
          )}
        </div>
      </motion.div>

      {/* CTA */}
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-5"
        >
          <Link
            href={waUrlForDestination(current.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-[#FFD700] to-[#F6A619] px-8 py-3.5 text-sm font-bold text-[#1a1f16] shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_-8px_rgba(255,215,0,0.5)] active:scale-95"
          >
            <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
            <FaWhatsapp className="h-4 w-4 transition-transform group-hover:rotate-12" />
            <span className="relative">Explorar {current.title}</span>
          </Link>

          <Link
            href={waUrlWithText("Oi! Vim pelo site da Sick Nomads e quero montar um roteiro personalizado!")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#FFD700]/60 px-7 py-2.5 text-sm font-bold text-[#FFD700] backdrop-blur-sm transition-all duration-300 hover:border-[#FFD700] hover:bg-[#FFD700]/10"
          >
            <FaWhatsapp className="h-4 w-4" />
            Roteiro Personalizado
          </Link>
        </motion.div>
      </Container>

    </Section>
  );
}
