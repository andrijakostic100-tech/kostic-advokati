export default function SectionDivider({ label }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-4 my-12">
      <span className="h-px w-16 bg-gold/60" />
      <svg width="14" height="14" viewBox="0 0 14 14" className="text-gold">
        <path
          d="M7 0 L9 5 L14 7 L9 9 L7 14 L5 9 L0 7 L5 5 Z"
          fill="currentColor"
          opacity="0.85"
        />
      </svg>
      {label ? (
        <span className="text-[10px] uppercase tracking-eyebrow text-gold">
          {label}
        </span>
      ) : null}
      <svg width="14" height="14" viewBox="0 0 14 14" className="text-gold">
        <path
          d="M7 0 L9 5 L14 7 L9 9 L7 14 L5 9 L0 7 L5 5 Z"
          fill="currentColor"
          opacity="0.85"
        />
      </svg>
      <span className="h-px w-16 bg-gold/60" />
    </div>
  );
}
