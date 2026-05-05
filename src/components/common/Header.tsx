"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
import { Logo } from "@/components/common/Logo";

export function Header() {
  const lastScrollY = useRef(0);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    lastScrollY.current = scrollY.get();
  }, [scrollY]);

  /** Esconde ao descer, mostra ao subir */
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = lastScrollY.current;
    if (y < 72) {
      setHidden(false);
    } else if (y > prev) {
      setHidden(true);
    } else if (y < prev) {
      setHidden(false);
    }
    lastScrollY.current = y;
  });

  return (
    <motion.header
      initial={false}
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-black/40 to-transparent backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 border-b border-white/5">
        {/* Logo em amarelo #FFD700 */}
        <Link href="/" className="text-[#FFD700] shrink-0" aria-label="Início">
          <Logo size="sm" />
        </Link>

        {/* Navegação desktop — texto branco */}
        <nav
          aria-label="Principal"
          className="hidden md:flex flex-wrap items-center justify-end gap-8 text-sm font-semibold text-white"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative group px-2 py-1 transition-colors duration-300 hover:text-white/90"
            >
              {item.label}
              <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#FFD700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </Link>
          ))}
        </nav>

        {/* Menu mobile */}
        <details className="relative md:hidden group">
          <summary className="list-none cursor-pointer rounded-full border border-white/50 bg-white/5 hover:bg-white/10 px-3 py-1.5 text-sm font-medium text-white shadow-sm backdrop-blur transition-all duration-200">
            Menu
          </summary>
          <div className="absolute right-0 z-50 mt-2 min-w-[220px] rounded-xl border border-white/20 bg-black/85 p-3 shadow-2xl backdrop-blur-md">
            <ul className="flex flex-col gap-2 text-sm text-white">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block rounded-lg px-3 py-2 hover:bg-white/15 transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </details>
      </div>
    </motion.header>
  );
}
