"use client";

import dynamic from "next/dynamic";
import { FaEnvelope, FaInstagram, FaPhone, FaYoutube } from "react-icons/fa";
import { CONTACT } from "@/lib/constants";

/* Three.js só roda no cliente — carregamento dinâmico evita erro no SSR */
const LogoSymbol3D = dynamic(
  () => import("@/components/common/LogoSymbol3D").then((m) => ({ default: m.LogoSymbol3D })),
  { ssr: false, loading: () => <SymbolFallback /> }
);

/** Placeholder estático exibido enquanto o canvas carrega */
function SymbolFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <svg
        viewBox="0 0 100 84"
        fill="#F6A619"
        aria-hidden
        className="h-[68%] w-[68%] opacity-60"
      >
        <g transform="matrix(1 0 0 0.93 0 3.05)">
          <circle cx="50" cy="12" r="9.5" />
          <rect x="15" y="48" width="70" height="10" rx="5" transform="rotate(-60 50 53)" />
          <rect x="15" y="48" width="70" height="10" rx="5" transform="rotate(0 50 53)" />
          <rect x="15" y="48" width="70" height="10" rx="5" transform="rotate(60 50 53)" />
        </g>
      </svg>
    </div>
  );
}

type FounderBusinessCardProps = {
  className?: string;
};

export function FounderBusinessCard({ className = "" }: FounderBusinessCardProps) {
  return (
    <article
      aria-label={`Cartão de visitas de ${CONTACT.founderName}, Sick Nomads`}
      className={`flex w-full max-w-[min(40rem,100%)] flex-col overflow-hidden rounded-2xl border-2 border-[#F6A619] bg-[#fffdf7] shadow-[0_14px_40px_-14px_rgba(15,20,16,0.22)] ${className}`}
    >
      {/* ── Corpo do cartão ─────────────────────────────────────── */}
      <div className="topo-pattern flex min-h-0 flex-1 flex-col items-center gap-4 px-3 py-2 sm:flex-row sm:items-stretch sm:gap-5 sm:px-5 sm:py-3">

        {/* Coluna esquerda — canvas Three.js */}
        <div className="flex w-full shrink-0 items-center justify-center sm:w-[52%]">
          {/* Container quadrado que mantém o aspect-ratio e delimita o canvas */}
          <div
            className="relative aspect-square w-[min(12rem,calc((100vw-3rem)*0.55))] max-w-[15rem] overflow-hidden sm:w-full"
            aria-hidden
          >
            {/* Halo dourado atrás do canvas (CSS, não WebGL) */}
            <span
              className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_45%_35%,rgba(255,215,0,0.38),transparent_68%)] blur-2xl"
            />
            <LogoSymbol3D />
          </div>
        </div>

        {/* Coluna direita — contatos */}
        <div className="flex min-w-0 w-full flex-1 flex-col justify-center gap-1 py-1">

          {/* Label da marca */}
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F6A619] font-sans">
            Sick Nomads
          </p>

          {/* Itens de contato */}
          {[
            {
              href: CONTACT.instagramUrl,
              icon: <FaInstagram className="size-3 text-[#F6A619]" aria-hidden />,
              label: CONTACT.instagramHandle,
              as: "a" as const,
              external: true,
            },
            {
              href: CONTACT.youtubeUrl,
              icon: <FaYoutube className="size-3 text-[#F6A619]" aria-hidden />,
              label: `${CONTACT.youtubeHandle} no YouTube`,
              as: "a" as const,
              external: true,
            },
            {
              href: `mailto:${CONTACT.email}`,
              icon: <FaEnvelope className="size-3 text-[#F6A619]" aria-hidden />,
              label: CONTACT.email,
              as: "a" as const,
            },
            {
              href: `tel:${CONTACT.phoneTel}`,
              icon: <FaPhone className="size-3 text-[#F6A619]" aria-hidden />,
              label: CONTACT.whatsappDisplay,
              as: "a" as const,
            },
          ].map(({ href, icon, label, external }, i) => (
            <a
              key={i}
              href={href}
              className="block"
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <span className="group flex items-center gap-2.5 rounded-lg px-2 py-1.5 transition-colors hover:bg-[#F6A619]/10">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#F6A619]/12 ring-1 ring-[#F6A619]/25">
                  {icon}
                </span>
                <span className="truncate font-sans text-[0.75rem] text-[#2c2c2c] transition-colors group-hover:text-[#c47e00]">
                  {label}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Faixa inferior */}
      <div className="h-2.5 shrink-0 bg-accent sm:h-3" aria-hidden />
    </article>
  );
}
