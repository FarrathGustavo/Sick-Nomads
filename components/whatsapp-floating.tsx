"use client"

import Image from "next/image"

const WHATSAPP_URL = "https://wa.me/5511919662784?text=Ol%C3%A1!%20Quero%20planejar%20minha%20pr%C3%B3xima%20aventura%20com%20a%20Sick%20Nomads!"

export default function WhatsAppFloating() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-28 w-28 items-center justify-center rounded-full overflow-hidden shadow-[0_4px_24px_rgba(11,97,45,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_32px_rgba(11,97,45,0.5)] md:bottom-8 md:right-8 md:h-32 md:w-32"
      aria-label="Fale conosco no WhatsApp"
    >
      <Image
        src="/images/ChatGPT%20Image%204_03_2026%2C%2015_39_52.png"
        alt="WhatsApp"
        width={128}
        height={128}
        className="h-full w-full object-contain p-2.5"
      />
    </a>
  )
}
