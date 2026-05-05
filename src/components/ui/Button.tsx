import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  /** CTA principal — Verde Escuro #646a26 */
  primary:
    "bg-[#646a26] text-white font-bold shadow-lg hover:shadow-xl hover:bg-[#555a1f] active:scale-95 transition-all duration-200 focus-visible:ring-[#646a26]",
  secondary:
    "bg-primary text-white font-bold shadow-lg hover:shadow-xl hover:bg-primary/90 active:scale-95 transition-all duration-200 focus-visible:ring-primary",
  ghost:
    "border border-white/60 bg-white/5 text-white backdrop-blur-md hover:bg-white/15 hover:border-white/80 active:scale-95 transition-all duration-200 focus-visible:ring-white",
};

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: Variant;
  href?: never;
};

type LinkButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: Variant;
  href: string;
};

export function Button(props: ButtonProps | LinkButtonProps) {
  const variant = props.variant ?? "primary";
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  if ("href" in props && props.href) {
    const { variant: v, className = "", ...rest } = props;
    return (
      <Link
        className={`${base} ${variants[variant]} ${className}`}
        {...rest}
      />
    );
  }

  const { className = "", ...rest } = props as ButtonProps;
  return (
    <button
      type="button"
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    />
  );
}
