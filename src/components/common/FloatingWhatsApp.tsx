import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { waUrl } from "@/lib/constants";

export function FloatingWhatsApp() {
  return (
    <Link
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:shadow-xl focus-visible:outline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
    >
      <FaWhatsapp className="h-8 w-8" />
    </Link>
  );
}
