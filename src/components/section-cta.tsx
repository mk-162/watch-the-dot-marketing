import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function SectionCTA() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 p-10 md:p-16">
          <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-25 pointer-events-none" />
          <div className="absolute -right-40 -top-40 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />

          <div className="relative grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 items-end">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-micro font-mono uppercase tracking-[0.18em] text-white mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse-live" />
                ready when you are
              </div>

              <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[0.95]">
                Put a dot
                <br />
                on the map.
              </h2>

              <p className="mt-6 text-lg text-white/85 max-w-lg leading-relaxed">
                Free for athletes. Free for riders up to 25. Paid plans start where most trackers
                give up. Thirty-day money-back, no call required.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/download"
                  className="btn h-12 px-6 rounded-full bg-ink-950 text-white hover:bg-ink-900 text-sm font-medium"
                >
                  <span>Get the app</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/organizers"
                  className="btn h-12 px-6 rounded-full bg-white/10 border border-white/30 text-white hover:bg-white/15 text-sm font-medium"
                >
                  Host a free event
                </Link>
              </div>
            </div>

            <div className="hidden md:grid grid-cols-2 gap-4">
              {[
                { v: 'iOS · Android', l: 'PWA + native' },
                { v: 'Offline', l: 'queued pings' },
                { v: 'GDPR', l: 'ready' },
                { v: 'API', l: 'for integrators' },
              ].map((s) => (
                <div
                  key={s.v}
                  className="bg-black/25 border border-white/15 rounded-2xl p-4 backdrop-blur-sm"
                >
                  <div className="text-xl font-semibold font-mono text-white">{s.v}</div>
                  <div className="text-micro font-mono uppercase tracking-[0.12em] text-white/70 mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
