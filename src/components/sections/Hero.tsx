"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTA_LABELS, SITE, waUrl } from "@/lib/constants";
import { Logo } from "@/components/common/Logo";

/* Filtro CSS: compensa achatamento e perda de saturação do codec */
const VF = "contrast(1.10) saturate(1.28) brightness(1.04)";

/* Um clip representativo de cada destino */
const MOSAIC = [
  { src: "/videos/experiences/noronha-2.mp4",    label: "Fernando de Noronha", country: "Brasil" },
  { src: "/videos/experiences/costa-rica-1.mp4", label: "Costa Rica",          country: "Américas" },
  { src: "/videos/experiences/china-3.mp4",      label: "China & Macau",       country: "Ásia" },
] as const;

type MosaicItem = typeof MOSAIC[number];

function MosaicVideo({
  item,
  onClick,
}: {
  item: MosaicItem;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative h-full w-full overflow-hidden text-left"
      aria-label={`Expandir vídeo de ${item.label}`}
    >
      <video
        src={item.src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ filter: VF }}
      />
      {/* gradiente de legibilidade no rodapé do clip */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Indicador de expansão no hover */}
      <div className="pointer-events-none absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
        </svg>
      </div>

      {/* label do destino */}
      <div className="absolute bottom-3 left-3">
        <span className="block text-[9px] font-bold uppercase tracking-[0.22em] text-[#F6A619] font-sans leading-none">
          {item.country}
        </span>
        <span
          className="block text-sm font-bold text-white leading-tight"
          style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
        >
          {item.label}
        </span>
      </div>
    </button>
  );
}

function VideoLightbox({
  item,
  onClose,
}: {
  item: MosaicItem;
  onClose: () => void;
}) {
  /* Fecha com ESC e bloqueia o scroll do body enquanto aberto */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-[0_40px_120px_-20px_rgba(255,215,0,0.3)]"
        style={{ aspectRatio: "16 / 9" }}
      >
        <video
          src={item.src}
          autoPlay
          muted={false}
          controls
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-contain"
          style={{ filter: VF }}
        />

        {/* Label do destino */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
          <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-[#F6A619] font-sans">
            {item.country}
          </span>
          <span
            className="mt-1 block text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
          >
            {item.label}
          </span>
        </div>
      </motion.div>

      {/* Botão fechar */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar vídeo"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-white/20 active:scale-95 sm:right-6 sm:top-6"
      >
        <FaTimes className="h-4 w-4" />
      </button>
    </motion.div>
  );
}

export function Hero() {
  const [active, setActive] = useState<MosaicItem | null>(null);

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#0d110a] md:flex-row">

      {/* ── Painel esquerdo — texto ─────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center justify-center px-8 py-20 text-center md:w-[44%] md:min-h-[100svh] md:items-start md:px-12 md:text-left lg:px-16">

        {/* Textura topográfica suave no painel */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "url('/images/contour-lines.png')",
            backgroundSize: "cover",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-col items-center gap-5 md:items-start"
        >
          <Logo size="xl" className="drop-shadow-lg" />

          <Badge>{SITE.tagline}</Badge>

          <h1
            className="text-4xl font-bold leading-tight text-white drop-shadow-md sm:text-5xl lg:text-[3.25rem]"
            style={{ fontFamily: "var(--font-display), var(--font-serif), system-ui, sans-serif" }}
          >
            Explore o mundo com autenticidade
          </h1>

          <p className="max-w-sm text-base text-white/75 font-sans leading-relaxed">
            {SITE.shortDescription}
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Button variant="secondary" href="#experiences">
              {CTA_LABELS.seeExperiences}
            </Button>
            <Button variant="ghost" href={waUrl} target="_blank" rel="noopener noreferrer">
              {CTA_LABELS.whatsapp}
            </Button>
          </div>
        </motion.div>

        {/* Scroll indicator — só desktop */}
        <motion.a
          href="#experiences"
          aria-label="Rolar para experiências"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/50 md:flex"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <FaChevronDown className="h-4 w-4" />
        </motion.a>
      </div>

      {/* ── Painel direito — mosaico de vídeos ─────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: 32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex-1 md:min-h-[100svh]"
      >
        {/* ── Desktop: grade assimétrica ──────────────────────── */}
        <div className="hidden h-full w-full gap-2 p-2 md:grid"
          style={{ gridTemplateRows: "60% 40%", gridTemplateColumns: "1fr 1fr" }}
        >
          {/* Vídeo 1 — ocupa a largura toda, linha de cima */}
          <div className="col-span-2 overflow-hidden rounded-2xl">
            <MosaicVideo item={MOSAIC[0]} onClick={() => setActive(MOSAIC[0])} />
          </div>

          {/* Vídeo 2 — inferior esquerdo */}
          <div className="overflow-hidden rounded-2xl">
            <MosaicVideo item={MOSAIC[1]} onClick={() => setActive(MOSAIC[1])} />
          </div>

          {/* Vídeo 3 — inferior direito */}
          <div className="overflow-hidden rounded-2xl">
            <MosaicVideo item={MOSAIC[2]} onClick={() => setActive(MOSAIC[2])} />
          </div>
        </div>

        {/* ── Mobile: dois vídeos lado a lado abaixo do texto ─── */}
        <div className="grid h-52 grid-cols-2 gap-2 px-2 pb-2 md:hidden">
          <div className="overflow-hidden rounded-xl">
            <MosaicVideo item={MOSAIC[0]} onClick={() => setActive(MOSAIC[0])} />
          </div>
          <div className="overflow-hidden rounded-xl">
            <MosaicVideo item={MOSAIC[1]} onClick={() => setActive(MOSAIC[1])} />
          </div>
        </div>
      </motion.div>

      {/* ── Lightbox de vídeo em tela cheia ─────────────────── */}
      <AnimatePresence>
        {active && <VideoLightbox item={active} onClose={() => setActive(null)} />}
      </AnimatePresence>

    </section>
  );
}
