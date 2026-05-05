"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { EXPERIENCE_DESTINATIONS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

type Filter = "alternativo" | "esportiva";

const FILTERS: { label: string; value: Filter }[] = [
  { label: "Roteiros Alternativos", value: "alternativo" },
  { label: "Viagens Esportivas", value: "esportiva" },
];

export function Experiences() {
  const [filter, setFilter] = useState<Filter>("alternativo");

  const visible = EXPERIENCE_DESTINATIONS.filter((d) => d.category === filter);

  return (
    <section
      id="experiences"
      className="relative overflow-hidden bg-[#F7E196] py-8 sm:py-10"
    >
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        aria-hidden
        style={{
          backgroundImage: "url('/images/contour-lines.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          opacity: 0.12,
          mixBlendMode: "multiply",
        }}
      />

      <Container className="relative z-10">
        {/* Cabeçalho */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45 }}
            className="mb-2 flex items-center justify-center gap-3"
          >
            <div className="h-px w-10 bg-[#646a26]/50" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#646a26] font-sans">
              Já realizamos
            </span>
            <div className="h-px w-10 bg-[#646a26]/50" aria-hidden />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-2xl font-bold sm:text-3xl"
            style={{
              color: "#1a1f16",
              fontFamily: "var(--font-display), var(--font-serif), system-ui, sans-serif",
              textShadow: "0 2px 24px rgba(255,255,255,0.35)",
            }}
          >
            Viagens que já realizamos
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14, duration: 0.45 }}
            className="mt-3 text-base text-[#1a1f16] font-sans leading-relaxed"
          >
            Veja algumas das experiências incríveis que já realizamos com nossos viajantes.
          </motion.p>

          {/* Abas de filtro */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.22, duration: 0.4 }}
            className="mt-6 inline-flex items-center gap-1 rounded-full bg-[#1a1f16]/10 p-1"
            role="tablist"
            aria-label="Filtrar viagens"
          >
            {FILTERS.map(({ label, value }) => (
              <button
                key={value}
                role="tab"
                aria-selected={filter === value}
                onClick={() => setFilter(value)}
                className={`relative rounded-full px-5 py-1.5 text-sm font-semibold font-sans transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#646a26] ${
                  filter === value
                    ? "text-[#fffdf7]"
                    : "text-[#1a1f16]/60 hover:text-[#1a1f16]"
                }`}
              >
                {filter === value && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-[#646a26]"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                )}
                <span className="relative">{label}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid de cards */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((dest, idx) => (
              <motion.div
                key={dest.title}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -10 }}
                transition={{ duration: 0.35, delay: idx * 0.06, ease: "easeOut" }}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                  <Image
                    src={dest.image}
                    alt={dest.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Badge esportiva */}
                  {dest.category === "esportiva" && (
                    <span className="absolute left-3 top-3 rounded-full bg-[#646a26] px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white shadow">
                      Esportiva
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <h3
                    className="mb-1.5 text-lg font-bold text-[#1a1f16]"
                    style={{
                      fontFamily: "var(--font-display), var(--font-serif), system-ui, sans-serif",
                    }}
                  >
                    {dest.title}
                  </h3>
                  <p className="text-[13px] text-[#646a26] font-sans leading-relaxed">
                    {dest.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
