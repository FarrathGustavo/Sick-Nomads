type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-wide text-white backdrop-blur ${className}`}
    >
      {children}
    </span>
  );
}
