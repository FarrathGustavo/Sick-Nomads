type Size = "sm" | "md" | "lg";

const widths: Record<Size, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
};

type ContainerProps = {
  children: React.ReactNode;
  size?: Size;
  className?: string;
};

export function Container({
  children,
  size = "lg",
  className = "",
}: ContainerProps) {
  return (
    <div className={`mx-auto w-full px-4 sm:px-6 ${widths[size]} ${className}`}>
      {children}
    </div>
  );
}
