import type { ExperienceCard } from "@/types";

export const SITE = {
  name: "Sick Nomads",
  shortDescription:
    "Experiências autênticas de viagem para quem quer ir além do turismo.",
  tagline: "Não seja um turista, seja um viajante",
} as const;

export const CONTACT = {
  founderName: "José Chedid",
  whatsappDigits: "5511919662784",
  /** Exibição igual ao cartão / materiais impressos */
  whatsappDisplay: "+55 11 91966-2784",
  /** Link `tel:` internacional sem espaços */
  phoneTel: "+5511919662784",
  email: "jose@sicknomads.com",
  websiteUrl: "https://www.sicknomads.com",
  websiteDisplay: "www.sicknomads.com",
  instagramHandle: "@sicknomads",
  instagramUrl: "https://www.instagram.com/sicknomads/",
  // TODO: substituir pelo URL real do canal quando o José enviar
  youtubeHandle: "@sicknomads",
  youtubeUrl: "https://www.youtube.com/@sicknomads",
  /** Mensagem pré-preenchida para wa.me */
  whatsappMessage:
    "Olá! Vim pelo site da Sick Nomads e quero planejar uma experiência.",
} as const;

export const waUrl = `https://wa.me/${CONTACT.whatsappDigits}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;

/** Qualquer mensagem custom para links `wa.me` (ex.: CTA de seção). */
export function waUrlWithText(message: string) {
  return `https://wa.me/${CONTACT.whatsappDigits}?text=${encodeURIComponent(message)}`;
}

/** Gera URL do WhatsApp com mensagem personalizada por destino */
export function waUrlForDestination(destination: string): string {
  const msg = `Oi! Vi a viagem para ${destination} no site da Sick Nomads e gostaria de entender mais sobre ela — datas disponíveis, valores e como funciona. 🌍`;
  return `https://wa.me/${CONTACT.whatsappDigits}?text=${encodeURIComponent(msg)}`;
}

export const NAV_ITEMS = [
  { label: "Experiências", href: "#experiences" },
  { label: "Possibilidades", href: "#possibilidades" },
  { label: "O que somos", href: "#how-it-works" },
  { label: "Depoimentos", href: "#testimonials" },
] as const;

export const CTA_LABELS = {
  planTrip: "Começar a planejar",
  seeExperiences: "Ver experiências",
  whatsapp: "Falar no WhatsApp",
  wantToKnowMore: "Quero saber mais",
} as const;

/** Mesmo conjunto nos dois contextos até haver lista por tipo — briefing §4.3 */
export const EXPERIENCE_DESTINATIONS: ExperienceCard[] = [
  {
    title: "Fernando de Noronha",
    image: "/images/experiences/noronha.jpg",
    alt: "Pôr do sol com Morro do Pico ao fundo em Fernando de Noronha",
    caption:
      "Águas cristalinas, o Morro do Pico tingido de laranja e praias sem multidão — Noronha vivida com calma e com tempo para mergulhar fundo no lugar.",
    category: "alternativo",
  },
  {
    title: "Costa Rica",
    image: "/images/experiences/costa-rica.jpg",
    alt: "Pôr do sol na praia de Pavones com coqueiros e prancha de surf",
    caption:
      "Ondas longas em Pavones, floresta atlântica e pores do sol que param o grupo na areia — surf, natureza e ritmo caribenho num roteiro feito para desacelerar.",
    category: "esportiva",
  },
  {
    title: "Serra da Mantiqueira",
    image: "/images/experiences/pico-itaguare.jpg",
    alt: "Silhuetas de viajantes assistindo ao nascer do sol sobre mar de nuvens na Serra da Mantiqueira",
    caption:
      "Neblina que abraça os picos, frio de verdade e trilhas que testam o quanto você aguenta. A Mantiqueira guarda cachoeiras, florestas e um silêncio que só a altitude entrega — aventura nacional com profundidade de sobra.",
    category: "esportiva",
  },
  {
    title: "China & Macau",
    image: "/images/experiences/china.jpg",
    alt: "Skyline de Macau à noite com a Torre de Macau iluminada",
    caption:
      "De Hong Kong ao Templo A-Ma: história milenar, gastronomia de rua e a energia única de uma cidade onde Oriente e Ocidente se encontram em cada esquina.",
    category: "alternativo",
  },

  {
    title: "Chapada dos Guimarães — Rapel & Canyoning",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=85",
    alt: "Cânion com cachoeira na Chapada dos Guimarães",
    caption:
      "Descidas em cachoeiras, trilhas de borda de cânion e mergulhos em piscinas naturais — aventura vertical no coração do Brasil com guias especializados e ritmo sob medida para o grupo.",
    category: "esportiva",
  },
  {
    title: "El Salvador — Surf & Vulcões",
    image: "/images/experiences/el-salvador.jpg",
    alt: "Ondas perfeitas de Punta Roca em El Salvador com vulcão ao fundo",
    caption:
      "Punta Roca, ondas que chegam com força e uma cultura de surf que não tem nada de turismo de cartão-postal. Vulcões, lagos de cratera e uma América Central que poucos param pra conhecer de verdade.",
    category: "esportiva",
  },
  {
    title: "Ushuaia — Fim do Mundo",
    image: "/images/experiences/ushuaia.jpg",
    alt: "Canal Beagle com picos nevados ao fundo em Ushuaia, Argentina",
    caption:
      "Canal Beagle, picos nevados e o Parque Nacional Tierra del Fuego com a sensação de que você chegou onde poucos chegam — kayak, trekking e paisagem que não precisa de filtro.",
    category: "esportiva",
  },
  {
    title: "Patagônia",
    image: "/images/experiences/patagonia.jpg",
    alt: "Torres del Paine com lago turquesa na Patagônia chilena",
    caption:
      "Gelo, vento e silêncio que param o grupo no meio do caminho. Torres del Paine, El Chaltén e lagos turquesa que só fazem sentido quando você está na frente deles — escala real de paisagem, sem atalho.",
    category: "alternativo",
  },
  {
    title: "Deserto do Atacama",
    image: "/images/experiences/atacama.jpg",
    alt: "Paisagem árida do Deserto do Atacama com montanhas ao fundo no Chile",
    caption:
      "Salares que viram espelho, géiseres ao amanhecer e o céu mais cheio de estrelas que você vai ver na vida. Valle de la Luna, lagunas altiplânicas e silêncio de deserto — fotografia e contemplação em paisagem extrema.",
    category: "alternativo",
  },
  {
    title: "Salar de Uyuni — Bolívia",
    image: "/images/experiences/salar-uyuni.jpg",
    alt: "Salar de Uyuni espelhando o céu azul na Bolívia",
    caption:
      "Uyuni espelhando o céu inteiro, altiplano boliviano e contrastes enormes em cada curva. Um dos cenários mais fora da caixa do continente — com história, vilas e aquele pôr do sol que virou símbolo de uma era de viagens.",
    category: "alternativo",
  },
];

/** Possibilidades — cards com CTA direto para o WhatsApp com mensagem por destino */
export type TravelIdea = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
  tags: string[];
  duration: string;
};

export const TRAVEL_IDEAS: TravelIdea[] = [
  {
    title: "Patagônia",
    subtitle: "Argentina & Chile",
    description:
      "Gelo, vento e silêncio que arrancam suspiro: trekking entre picos, lagos turquesa e o voo dos condores. Ideal para quem quer escala real de paisagem — Torres del Paine, El Chaltén ou cruza a fronteira com tempo para fotografia e para sentir o ritmo do vento patagônico.",
    image: "/images/possibilidades/patagonia.jpg",
    alt: "Torres del Paine na Patagônia",
    tags: ["Trekking", "Natureza", "Aventura"],
    duration: "12–18 dias",
  },
  {
    title: "Peru & Machu Picchu",
    subtitle: "Cuzco • Vale Sagrado • Inca Trail",
    description:
      "Do Mercado de Pisac ao nascer do sol nas ruínas — altitude, costume vivo e aquele silêncio quando a névoa abre em Machu Picchu. Misturamos cultura andina, gastronomia e trilhas com ritmo seguro para aclimatação: cada dia prepara o próximo sem virar corrida turística.",
    image: "/images/possibilidades/peru.jpg",
    alt: "Machu Picchu ao amanhecer",
    tags: ["Cultura", "Trekking", "História"],
    duration: "10–14 dias",
  },
  {
    title: "Altiplano Andino",
    subtitle: "Peru • Bolívia • Chile",
    description:
      "Montanhas que mudam de cor conforme a luz do dia, lagos com flamingos e aldeias que guardam séculos de cultura viva. O altiplano não é um destino — é uma experiência de altitude, silêncio e paisagem que desafia qualquer noção de grandeza que você trouxer na bagagem.",
    image: "/images/possibilidades/altiplano.jpg",
    alt: "Montanhas coloridas do Altiplano Andino",
    tags: ["Altitude", "Cultura", "Paisagem"],
    duration: "10–15 dias",
  },
  {
    title: "Chapada Diamantina",
    subtitle: "Bahia, Brasil",
    description:
      "Água que corta pedra, gruta que brilha e mirante onde o horizonte não cabe na foto. Morro do Pai Inácio, Poço Encantado, trilhas e pousadas com cara de Serra — viagem nacional com profundidade, para quem prefere vivência a pacote genérico.",
    image: "/images/possibilidades/chapada-diamantina.jpg",
    alt: "Paisagem da Chapada Diamantina",
    tags: ["Nacional", "Cachoeiras", "Gruta"],
    duration: "6–9 dias",
  },
  {
    title: "Indonésia",
    subtitle: "Bali • Komodo • Raja Ampat",
    description:
      "Terraços de arroz que descem montanhas, vulcões ativos ao amanhecer e o mar mais rico em vida que você já viu. A Indonésia tem 17 mil ilhas — cada uma com seu ritmo, sua comida e seu jeito de te surpreender. Roteiros que fogem do circuito badalado e entram fundo na cultura local.",
    image: "/images/possibilidades/indonesia.jpg",
    alt: "Terraços de arroz em Bali, Indonésia",
    tags: ["Cultura", "Natureza", "Mergulho"],
    duration: "14–21 dias",
  },
  // Slot reservado — destino a definir pelo cliente
];
