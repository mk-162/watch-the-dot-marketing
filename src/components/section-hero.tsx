import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { HeroLiveMap } from './hero-live-map';

export function SectionHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-spot pointer-events-none" />
      <div className="absolute inset-0 bg-grid mask-fade-y pointer-events-none" />
      <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-[0.35] pointer-events-none" />

      <div className="container-x relative pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="grid md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-12 md:gap-16 items-center">
          <div className="max-w-2xl">
            <div className="eyebrow mb-6">
              <span className="live-dot" />
              Built for gravel, road, and everything unmarked
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-ink-50 leading-[0.95]">
              <span className="block">Watch</span>
              <span className="block">the <span className="gradient-brand">dot</span>.</span>
            </h1>

            <p className="mt-7 text-lg text-ink-300 max-w-xl leading-relaxed text-pretty">
              Aster turns every race, group ride, and grand départ into a live, watchable event.
              Real-time GPS, route-snapped leaderboards, and SOS — built for the sport, not shoehorned into it.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link href="/download" className="btn-primary h-12">
                <span>Get the app</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/organizers" className="btn-ghost h-12">
                Host an event
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
              <Metric value="127" label="riders live" />
              <Metric value="1.4M" label="miles tracked" />
              <Metric value="0.4s" label="update latency" />
            </div>

            <div className="mt-10 flex items-center gap-2 text-xs font-mono text-ink-500">
              <ShieldCheck size={14} className="text-signal-live" />
              Emergency SOS responded to in under 90 seconds, on average.
            </div>
          </div>

          <div className="relative h-[460px] md:h-[560px]">
            <div className="absolute -inset-6 bg-brand-500/10 blur-3xl rounded-full pointer-events-none" />
            <HeroLiveMap />
          </div>
        </div>
      </div>

      {/* Marquee of partners / events */}
      <div className="relative border-y border-ink-800/60 py-6 bg-ink-900/40 backdrop-blur">
        <div className="container-x flex items-center gap-10 overflow-hidden">
          <span className="text-micro font-mono uppercase tracking-[0.22em] text-ink-500 whitespace-nowrap">
            Events tracked →
          </span>
          <div className="flex items-center gap-10 text-sm font-semibold tracking-tight text-ink-400 whitespace-nowrap overflow-hidden">
            {[
              'Gravel Worlds',
              'Unbound Gravel',
              'SBT GRVL',
              'Belgian Waffle Ride',
              'Rift Iceland',
              'Traka',
              'Rule of Three',
              'Mid South',
            ].map((e) => (
              <span key={e} className="flex items-center gap-10">
                {e}
                <span className="text-ink-700">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-semibold text-ink-50 font-mono tracking-tight">{value}</div>
      <div className="mt-1 text-xs font-mono uppercase tracking-[0.14em] text-ink-500">{label}</div>
    </div>
  );
}
