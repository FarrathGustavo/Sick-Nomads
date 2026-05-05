"use client";

import { useRef, useState, useEffect, useCallback } from "react";

import { motion, AnimatePresence } from "framer-motion";

const REEL = [
  { src: "/videos/experiences/noronha-1.mp4", destination: "Fernando de Noronha", country: "Brasil", group: 0 },
  { src: "/videos/experiences/noronha-2.mp4", destination: "Fernando de Noronha", country: "Brasil", group: 0 },
  { src: "/videos/experiences/noronha-3.mp4", destination: "Fernando de Noronha", country: "Brasil", group: 0 },
  { src: "/videos/experiences/noronha-4.mp4", destination: "Fernando de Noronha", country: "Brasil", group: 0 },
  { src: "/videos/experiences/noronha-5.mp4", destination: "Fernando de Noronha", country: "Brasil", group: 0 },
  { src: "/videos/experiences/costa-rica-1.mp4", destination: "Costa Rica", country: "América Central", group: 1 },
  { src: "/videos/experiences/costa-rica-2.mp4", destination: "Costa Rica", country: "América Central", group: 1 },
  { src: "/videos/experiences/costa-rica-3.mp4", destination: "Costa Rica", country: "América Central", group: 1 },
  { src: "/videos/experiences/china-1.mp4", destination: "China & Macau", country: "Ásia", group: 2 },
  { src: "/videos/experiences/china-2.mp4", destination: "China & Macau", country: "Ásia", group: 2 },
  { src: "/videos/experiences/china-3.mp4", destination: "China & Macau", country: "Ásia", group: 2 },
  { src: "/videos/experiences/china-4.mp4", destination: "China & Macau", country: "Ásia", group: 2 },
  { src: "/videos/experiences/china-5.mp4", destination: "China & Macau", country: "Ásia", group: 2 },
] as const;

const GROUPS = [
  { label: "Fernando de Noronha", indices: [0, 1, 2, 3, 4] },
  { label: "Costa Rica",          indices: [5, 6, 7] },
  { label: "China & Macau",       indices: [8, 9, 10, 11, 12] },
];

export function ExperienceReel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [current, setCurrent] = useState(0);
  const [fading, setFading]   = useState(false);
  const goTo = useCallback((index: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(index);
      setFading(false);
    }, 380);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.src = REEL[current].src;
    v.load();
    v.play().catch(() => {});

    const timer = setTimeout(() => {
      goTo((current + 1) % REEL.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [current, goTo]);

  const clip = REEL[current];

  return (
    <section id="reel" className="bg-[#0d110a] py-16">
      {/* cabeçalho */}
      <div className="mb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-3 flex items-center justify-center gap-3"
        >
          <div className="h-px w-10 bg-[#F6A619]/50" aria-hidden />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F6A619] font-sans">
            Reviva as experiências
          </span>
          <div className="h-px w-10 bg-[#F6A619]/50" aria-hidden />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="text-3xl font-bold text-white sm:text-4xl md:text-[2.75rem]"
          style={{ fontFamily: "var(--font-display), var(--font-serif), system-ui, sans-serif" }}
        >
          Momentos reais das nossas viagens
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.45 }}
          className="mt-4 font-sans text-base text-white/60 md:text-lg"
        >
          Imagens captadas pelos próprios viajantes — sem filtro, sem roteiro, sem mentira.
        </motion.p>
      </div>

      {/* player */}
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-2xl shadow-[0_32px_80px_-20px_rgba(0,0,0,0.8)]"
          style={{ aspectRatio: "16/9" }}>

          {/* overlay de fade entre clips */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-20 bg-black transition-opacity"
            style={{ opacity: fading ? 1 : 0, transitionDuration: "380ms" }}
          />

          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* gradiente inferior */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-2/5 bg-gradient-to-t from-black/85 to-transparent"
          />

          {/* label do destino */}
          <div className="absolute bottom-5 left-5 z-30">
            <AnimatePresence mode="wait">
              <motion.div
                key={clip.destination}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#F6A619] font-sans">
                  {clip.country}
                </span>
                <span
                  className="block text-xl font-bold text-white sm:text-2xl"
                  style={{ fontFamily: "var(--font-display), var(--font-serif), system-ui, sans-serif" }}
                >
                  {clip.destination}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>


          {/* dots de progresso por destino */}
          <div className="absolute bottom-5 right-5 z-30 flex flex-col items-end gap-2.5">
            {GROUPS.map((group) => (
              <div key={group.label} className="flex items-center gap-1.5">
                {group.indices.map((clipIdx) => {
                  const active  = current === clipIdx;
                  const sameGrp = REEL[clipIdx].group === clip.group;
                  return (
                    <button
                      key={clipIdx}
                      onClick={() => goTo(clipIdx)}
                      aria-label={`${group.label} vídeo ${group.indices.indexOf(clipIdx) + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        active   ? "w-5 bg-[#F6A619]"  :
                        sameGrp  ? "w-2.5 bg-white/55"  :
                                   "w-1.5 bg-white/22"
                      }`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* legenda de destinos clicáveis abaixo do player */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          {GROUPS.map((group) => {
            const active = REEL[current].group === GROUPS.indexOf(group);
            return (
              <button
                key={group.label}
                onClick={() => goTo(group.indices[0])}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] font-sans transition-all duration-200 ${
                  active
                    ? "border-[#F6A619] bg-[#F6A619]/15 text-[#F6A619]"
                    : "border-white/20 bg-transparent text-white/45 hover:border-white/40 hover:text-white/75"
                }`}
              >
                {group.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
