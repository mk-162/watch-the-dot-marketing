import { cn } from '@/lib/cn';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2.5 group', className)}>
      <div className="relative w-8 h-8 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-brand-500/20 blur-md group-hover:bg-brand-500/40 transition-colors" />
        <svg
          viewBox="0 0 32 32"
          className="relative w-8 h-8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="14" stroke="#4A4A46" strokeWidth="1" strokeDasharray="2 3" />
          <circle cx="16" cy="16" r="8" stroke="#9A9A95" strokeWidth="1" />
          <circle cx="16" cy="16" r="4.5" fill="#EF4444" />
          <circle cx="16" cy="16" r="4.5" fill="#EF4444" className="animate-pulse-live" />
          <circle cx="26" cy="10" r="1.5" fill="#22C55E" />
        </svg>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-lg font-semibold tracking-tight text-ink-50">Aster</span>
        <span className="hidden sm:inline text-micro font-mono text-ink-500 uppercase tracking-[0.18em]">
          Watch the Dot
        </span>
      </div>
    </div>
  );
}
