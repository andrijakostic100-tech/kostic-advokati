export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[11px] uppercase tracking-eyebrow text-gold-deep">
      <span className="h-px w-10 bg-gold-deep" />
      <span>{children}</span>
    </div>
  );
}
