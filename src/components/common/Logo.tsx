import Image from "next/image";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
};

const sizes = {
  sm: { width: 160, height: 90  },
  md: { width: 240, height: 135 },
  lg: { width: 360, height: 202 },
  xl: { width: 700, height: 393 },
};

export function Logo({ className = "", size = "md" }: LogoProps) {
  const { width, height } = sizes[size];
  return (
    <Image
      src="/images/logo_concreta.png"
      alt="Sick Nomads"
      width={width}
      height={height}
      className={`object-contain max-w-full h-auto ${className}`}
      priority
    />
  );
}
