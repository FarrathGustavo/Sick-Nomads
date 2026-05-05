import type { ComponentType } from "react";

export interface Service {
  title: string;
  description: string;
  icon?: ComponentType<{ className?: string }>;
}

export interface PainPoint {
  title: string;
  description: string;
}

export interface Differential {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ExperienceCard {
  title: string;
  image: string;
  alt: string;
  /** Linha extra sob o nome do destino (Experiences) */
  caption: string;
  category?: "esportiva" | "alternativo";
}
