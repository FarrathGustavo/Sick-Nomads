import { useRef, useEffect } from "react";
import { useMotionValue, useTransform, useScroll } from "framer-motion";

/**
 * Hook para parallax effect — elemento se move em relação ao scroll
 * @param offset - Multiplicador de movimento (0.5 = 50% da velocidade do scroll)
 */
export function useParallax(offset: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useMotionValue(0);

  const ySmooth = useTransform(scrollY, (latest) => {
    return latest * offset;
  });

  return { ref, y: ySmooth };
}

/**
 * Hook para detectar quando elemento entra na viewport
 */
export function useInView(options = { once: true, rootMargin: "-40px" }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        isInView.current = true;
        if (options.once) {
          observer.unobserve(entry.target);
        }
      } else if (!options.once) {
        isInView.current = false;
      }
    }, {
      rootMargin: options.rootMargin,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return ref;
}
