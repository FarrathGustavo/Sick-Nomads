import type { Metadata, Viewport } from "next";
import { Inter, Fredoka } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";

/**
 * Fonte de corpo: Inter
 * Escolhida no Manual de ID Sick Nomads para leitura fluida em web.
 * Substituiu DM Sans para fidelidade ao manual.
 */
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

/**
 * Fonte de display/títulos: Fredoka (peso 700)
 * A mais próxima da "Super Active Sans" disponível no Google Fonts.
 * Formas orgânicas, arredondadas, vibrantes — espírito da marca.
 * Usada em H1–H6, logo wordmark e chamadas.
 */
const display = Fredoka({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-display",
  display: "swap",
});

/**
 * Mantém a variável --font-serif apontando para Fredoka também,
 * pois os componentes existentes usam font-serif para headings.
 */
const serif = Fredoka({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sicknomads.com"),
  title: {
    default: `${SITE.name} — Viagens com autenticidade`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.shortDescription,
  openGraph: {
    title: `${SITE.name} — Viagens com autenticidade`,
    description: SITE.shortDescription,
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B612D",   /* Verde Raíz */
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${sans.variable} ${display.variable} ${serif.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
