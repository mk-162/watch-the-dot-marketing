import { cn } from '@/lib/cn';

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  accent?: 'brand' | 'live' | 'info';
  children?: React.ReactNode;
};

const accentMap: Record<NonNullable<Props['accent']>, string> = {
  brand: 'from-brand-500/20',
  live: 'from-signal-live/20',
  info: 'from-signal-info/20',
};

export function PageHero({ eyebrow, title, description, accent = 'brand', children }: Props) {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-28 pb-16">
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-b to-transparent pointer-events-none',
          accentMap[accent]
        )}
      />
      <div className="absolute inset-0 bg-grid mask-fade-y opacity-60 pointer-events-none" />

      <div className="container-x relative">
        <div className="max-w-3xl">
          <div className="eyebrow mb-6">
            <span className="live-dot" />
            {eyebrow}
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-ink-50 leading-[0.95] text-balance">
            {title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink-300 leading-relaxed max-w-2xl text-pretty">
            {description}
          </p>
          {children && <div className="mt-10">{children}</div>}
        </div>
      </div>
    </section>
  );
}
