import Link from 'next/link';
import { PageHero } from '@/components/page-hero';
import { SectionCTA } from '@/components/section-cta';
import {
  ArrowRight,
  BatteryCharging,
  Zap,
  Heart,
  Wifi,
  Share2,
  Clock,
  Activity,
} from 'lucide-react';

export const metadata = {
  title: 'For athletes — Aster',
  description: 'Ride. Don\'t manage a livestream. One-tap start, smart battery, crash detection.',
};

const features = [
  {
    icon: Zap,
    title: 'One tap to start',
    body:
      'Open the app. Tap Start. Put the phone in your pocket. We handle route snapping, lap detection, and leaderboards without you touching it again.',
  },
  {
    icon: BatteryCharging,
    title: 'Battery that lasts the distance',
    body:
      'Smart Battery Mode adapts GPS ping rate to your pace, cell signal, and remaining charge. A 12-hour gravel race costs about 12% of a modern phone battery.',
  },
  {
    icon: Heart,
    title: 'Crash detection + two-tap SOS',
    body:
      'Sudden stops with jarring movement trigger a 30-second countdown. Not okay? We fire an SOS. False alarm? Tap cancel. You never have to touch the phone to get help.',
  },
  {
    icon: Wifi,
    title: 'Works when the cell tower doesn\'t',
    body:
      'Offline queue caches everything you record. As soon as you roll into coverage, it flushes and the leaderboard catches up automatically. No manual uploads.',
  },
  {
    icon: Share2,
    title: 'Share a link, not your account',
    body:
      'Generate a share code for any ride, race or not. Your partner, your sponsor, your kids — everyone watches the same dot, and only the dot.',
  },
  {
    icon: Activity,
    title: 'Ride history worth revisiting',
    body:
      'Every ride is replayable with elevation, splits, grade, and a ghost of anyone who rode the same route. Your race recap writes itself.',
  },
];

export default function AthletesPage() {
  return (
    <>
      <PageHero
        eyebrow="For athletes"
        title={
          <>
            Ride. <span className="text-ink-500">Don't manage a livestream.</span>
          </>
        }
        description="A tracking app built by people who don't like tracking apps. Start in a second. Stays running. Stays honest about where you are. SOS and battery come standard — because they should."
        accent="live"
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/download" className="btn-primary h-12">
            Get the app
            <ArrowRight size={16} />
          </Link>
          <Link href="/free-ride" className="btn-ghost h-12">
            Try Free Ride
          </Link>
        </div>
      </PageHero>

      {/* Feature grid */}
      <section className="relative py-20">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-800 border border-ink-800 rounded-3xl overflow-hidden">
            {features.map((f) => (
              <article key={f.title} className="bg-ink-950 p-8">
                <div className="w-11 h-11 rounded-2xl bg-signal-live/10 border border-signal-live/30 flex items-center justify-center text-signal-live mb-6">
                  <f.icon size={18} />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-ink-50 mb-2">{f.title}</h3>
                <p className="text-sm text-ink-400 leading-relaxed">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Rider UI mock */}
      <section className="relative py-20 md:py-28">
        <div className="container-x">
          <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-14 items-center">
            <div>
              <div className="eyebrow text-signal-live mb-4">
                <span className="live-dot" />
                tracking view
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink-50 leading-tight text-balance">
                The screen you'll see{' '}
                <span className="text-ink-500">once and then never again, because your phone will be in your jersey pocket.</span>
              </h2>
              <p className="mt-6 text-ink-300 leading-relaxed max-w-lg">
                Everything an athlete needs mid-ride is one tap away. Everything they don't is off screen.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
                <MiniStat value="9h 12m" label="elapsed" />
                <MiniStat value="148 km" label="distance" />
                <MiniStat value="28.4" label="avg km/h" />
              </div>
            </div>

            {/* Phone mock */}
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-8 bg-signal-live/10 blur-3xl rounded-full" />
              <div className="relative rounded-[40px] bg-ink-900 border border-ink-800 overflow-hidden shadow-2xl">
                <div className="bg-gradient-to-br from-ink-900 to-ink-950 px-6 pt-14 pb-8">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-micro font-mono uppercase tracking-[0.18em] text-ink-500">
                      GRAVEL WORLDS · BIB 142
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-mono text-signal-live">
                      <span className="w-1.5 h-1.5 rounded-full bg-signal-live animate-pulse-live" />
                      LIVE
                    </span>
                  </div>

                  <div className="relative w-36 h-36 mx-auto rounded-full flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-2 border-signal-live/30" />
                    <div className="absolute inset-1 rounded-full border-2 border-signal-live/60" />
                    <div className="absolute inset-4 rounded-full bg-signal-live/5 flex flex-col items-center justify-center">
                      <div className="text-xs font-mono uppercase tracking-[0.14em] text-signal-live">
                        tracking
                      </div>
                      <div className="text-3xl font-semibold font-mono text-ink-50 mt-1">28.4</div>
                      <div className="text-xs font-mono text-ink-500">km/h</div>
                    </div>
                    <div className="absolute inset-0 rounded-full animate-pulse-ring bg-signal-live/20" />
                  </div>

                  <div className="grid grid-cols-3 gap-3 mt-8 text-center">
                    <PhoneStat value="9:12" label="ELAPSED" />
                    <PhoneStat value="148" label="KM" />
                    <PhoneStat value="93" label="KM LEFT" />
                  </div>
                </div>

                <div className="p-4 space-y-3 border-t border-ink-800">
                  <button className="w-full h-14 rounded-2xl bg-signal-live text-ink-950 font-semibold flex items-center justify-center gap-2">
                    <Clock size={16} />
                    I'm OK — keep watching
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="h-12 rounded-2xl bg-ink-800/70 border border-ink-700 text-ink-100 text-sm font-medium">
                      Pause
                    </button>
                    <button className="h-12 rounded-2xl bg-signal-sos/10 border border-signal-sos/40 text-signal-sos text-sm font-semibold">
                      SOS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionCTA />
    </>
  );
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-ink-900/60 border border-ink-800 rounded-2xl p-4">
      <div className="text-2xl font-semibold font-mono text-ink-50">{value}</div>
      <div className="text-micro font-mono uppercase tracking-[0.12em] text-ink-500 mt-1">
        {label}
      </div>
    </div>
  );
}

function PhoneStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-lg font-semibold font-mono text-ink-50">{value}</div>
      <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-ink-500 mt-0.5">
        {label}
      </div>
    </div>
  );
}
