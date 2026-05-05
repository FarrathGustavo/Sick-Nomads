type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

export function Section({ children, id, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      {children}
    </section>
  );
}
