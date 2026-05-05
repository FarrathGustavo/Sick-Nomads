import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Principal — Sick Nomads Brand
        primary: "#0B612D",    // Verde Raíz — cor principal, estrutural
        accent: "#646a26",     // Verde Âmago — secundário, footer
        sol: "#F6A619",        // Sol Nomad — destaque, CTAs, logo em fundo escuro
        amber: "#ff5a12",      // Âmbar Rústico — dinamismo, urgência
        // Paleta de Apoio
        lemon: "#f9dc45",      // Amarelo Limão — fundos, texturas
        sand: "#F7E196",       // Areia Natural — fundo neutro e acolhedor
        terracota: "#BC5217",  // Terracota — acentos sofisticados
        // Utilitários
        surface: "#FFFDF7",
        ink: "#1a1f16",
        neutral: "#6b7280",
        dark: "#0f1410",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "topo-light":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72'%3E%3Cpath fill='%23646a26' fill-opacity='0.07' d='M0 36 Q18 28 36 36 T72 36'/%3E%3Cpath fill='%23646a26' fill-opacity='0.06' d='M0 48 Q24 40 48 48 T72 48'/%3E%3Cpath fill='%23646a26' fill-opacity='0.06' d='M0 24 Q20 16 44 24 T72 24'/%3E%3C/svg%3E\")",
        "topo-dark":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72'%3E%3Cpath fill='%23ffffff' fill-opacity='0.06' d='M0 36 Q18 28 36 36 T72 36'/%3E%3Cpath fill='%23ffffff' fill-opacity='0.05' d='M0 48 Q24 40 48 48 T72 48'/%3E%3Cpath fill='%23ffffff' fill-opacity='0.05' d='M0 24 Q20 16 44 24 T72 24'/%3E%3C/svg%3E\")",
      },
      backgroundSize: {
        topo: "72px 72px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
        /** Brilho que atravessa o card no hover (Experiences) */
        "card-shine": {
          "0%": { transform: "translateX(-140%) skewX(-14deg)" },
          "100%": { transform: "translateX(140%) skewX(-14deg)" },
        },
        /** Possibilidades — halo dourado que pulsa no hover (impacto sem faixa lateral) */
        possImpactPulse: {
          "0%, 100%": {
            boxShadow:
              "0 28px 58px -20px rgba(0,0,0,0.58), 0 0 0 0 rgba(255,215,0,0)",
          },
          "50%": {
            boxShadow:
              "0 36px 72px -18px rgba(0,0,0,0.62), 0 0 36px 8px rgba(255,215,0,0.32)",
          },
        },
        /** Slide in effects */
        slideInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInDown: {
          "0%": { opacity: "0", transform: "translateY(-40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        /** Pulse with glow */
        pulseGlow: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        /** Rotate entrance */
        rotateIn: {
          "0%": { opacity: "0", transform: "rotate(-10deg)" },
          "100%": { opacity: "1", transform: "rotate(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "bounce-soft": "bounceSoft 2s ease-in-out infinite",
        "card-shine": "card-shine 0.85s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "poss-impact-pulse": "possImpactPulse 2.6s ease-in-out infinite",
        "slide-in-up": "slideInUp 0.7s ease-out",
        "slide-in-down": "slideInDown 0.7s ease-out",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "rotate-in": "rotateIn 0.6s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
