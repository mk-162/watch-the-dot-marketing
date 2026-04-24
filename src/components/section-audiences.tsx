import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const audiences = [
  {
    tag: 'Organizers',
    title: 'Run a race you can see.',
    body: 'Live command deck. Cutoff worker that quietly moves riders to DNF when time\'s up. Safety inbox that clears itself. Stop radio-ing for positions.',
    bullets: [
      'Live rider map + position map',
      'Finish line config with radius and split detection',
      'Off-course and stoppage alerts',
      'Cutoff automation',
      'Two-way SOS chat with notes',
    ],
    href: '/organizers',
    accent: 'brand',
  },
  {
    tag: 'Athletes',
    title: 'Ride. Don\'t manage a stream.',
    body: 'Open app, tap Start, put phone away. Aster handles laps, checkpoints, off-course alerts, your "I\'m OK" status when the course goes quiet.',
    bullets: [
      'Start/Stop/I\'m OK in one hand',
      'Smart battery throttling',
      'Share link, one tap',
      'Ride history and per-ride replays',
    ],
    href: '/athletes',
    accent: 'live',
  },
  {
    tag: 'Spectators',
    title: 'Follow the story, not the thumbnail.',
    body: 'Watch gaps close. Watch the break go. Watch your rider slip from second to eighth, then claw back to third at mile 180. This is the sport you love.',
    bullets: [
      'Follow riders, teams, or whole events',
      'Notifications when they start, stop, move',
      'Head-to-head for up to 5',
      'Embeddable widgets for club sites',
      'No account needed to watch',
    ],
    href: '/spectators',
    accent: 'info',
  },
];

const accentStyles: Record<string, { glow: string; text: string; border: string }> = {
  brand: {
    glow: 'bg-brand-500/15',
    text: 'text-brand-400',
    border: 'border-brand-500/30',
  },
  live: {
    glow: 'bg-signal-live/15',
    text: 'text-signal-live',
    border: 'border-signal-live/30',
  },
  info: {
    glow: 'bg-signal-info/15',
    text: 'text-signal-info',
    border: 'border-signal-info/30',
  },
};

export function SectionAudiences() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="container-x space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="eyebrow mb-4">Built for everyone at the start line</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink-50 text-balance max-w-3xl">
              Three audiences. <span className="text-ink-500">One live picture.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((a) => {
            const acc = accentStyles[a.accent];
            return (
              <article
                key={a.tag}
                className="group relative overflow-hidden bg-ink-900/60 border border-ink-800 rounded-3xl p-8 flex flex-col transition-colors hover:border-ink-700"
              >
                <div
                  className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl ${acc.glow} opacity-60 group-hover:opacity-100 transition-opacity`}
                />
                <div className="relative flex-1 flex flex-col">
                  <div className={`eyebrow ${acc.text}`}>
                    <span className="live-dot" style={{ background: 'currentColor' }} />
                    {a.tag}
                  </div>
                  <h3 className="mt-4 text-3xl font-semibold tracking-tight text-ink-50 leading-tight">
                    {a.title}
                  </h3>
                  <p className="mt-4 text-ink-400 leading-relaxed">{a.body}</p>

                  <ul className="mt-6 space-y-3 text-sm">
                    {a.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-ink-300">
                        <span className={`mt-[7px] w-1 h-1 rounded-full ${acc.text}`} style={{ background: 'currentColor' }} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={a.href}
                    className={`mt-8 inline-flex items-center gap-1.5 text-sm font-medium ${acc.text} hover:gap-2.5 transition-all`}
                  >
                    Learn more
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
