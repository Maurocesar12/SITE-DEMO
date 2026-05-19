type SectionEyebrowProps = {
  children: string;
  className?: string;
};

export function SectionEyebrow({ children, className = "text-wine" }: SectionEyebrowProps) {
  return (
    <p className={`mb-3 text-xs font-black uppercase tracking-[0.22em] ${className}`}>
      {children}
    </p>
  );
}
