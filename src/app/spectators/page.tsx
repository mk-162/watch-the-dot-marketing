import Link from 'next/link';
import { PageHero } from '@/components/page-hero';
import { SectionCTA } from '@/components/section-cta';
import {
  ArrowRight,
  Bell,
  Eye,
  Users,
  LayoutGrid,
  Flag,
  Smartphone,
} from 'lucide-react';

export const metadata = {
  title: 'For spectators — Aster',
  description: 'Follow the story, not the thumbnail. Watch every rider, every dot, in real time.',
};

const features = [
  {
    icon: Eye,
    title: 'A map worth staring at',
    body:
      'Smooth, interpolated rider dots. Color-coded by category. Live elevation. Click a dot, get splits, gaps, and a link to the athlete\'s story.',
  },
  {
    icon: Bell,
    title: 'Notifications, opinionated defaults',
    body:
      'When your rider starts, makes a move, stops for more than 15 minutes, or finishes — we tell you. Per-rider quiet hours and thresholds respected.',
  },
  {
    icon: Users,
    title: 'Follow riders, teams, entire events',
    body:
      'Build a feed of the people you care about. The activity feed blends race updates, athlete stories, and organizer announcements so you never miss the moment.',
  },
  {
    icon: LayoutGrid,
    title: 'Head-to-head up to five',
    body:
      'Pick up to five riders. Compare their gaps, paces, and splits on one chart. Perfect for team tactics or just watching your friend group suffer together.',
  },
  {
    icon: Flag,
    title: 'No account required',
    body:
      'Share links work for everyone — no Aster account needed to watch. Install the PWA if you want push notifications, but it\'s never a wall.',
  },
  {
    icon: Smartphone,
    title: 'Embed on any site',
    body:
      'Club website? Sponsor\'s page? A local paper covering the race? Grab the embed code. The dots stay live wherever you put them.',
  },
];

export default function SpectatorsPage() {
  return (
    <>
      <PageHero
        eyebrow="For spectators"
        title={
          <>
            Follow the <span className="gradient-brand">story.</span>
            <br />
            <span className="text-ink-500">Not the thumbnail.</span>
          </>
        }
        description="Every race is actually 47 races happening at once. Aster gives you the one you care about — your partner, your team, your favorite pro — and the context to understand what you're looking at."
        accent="info"
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/" className="btn-primary h-12">
            Watch a live event
            <ArrowRight size={16} />
          </Link>
          <Link href="/athletes" className="btn-ghost h-12">
            Are you the one riding?
          </Link>
        </div>
      </PageHero>

      {/* Feature grid */}
      <section className="relative py-20">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-800 border border-ink-800 rounded-3xl overflow-hidden">
            {features.map((f) => (
              <article key={f.title} className="bg-ink-950 p-8">
                <div className="w-11 h-11 rounded-2xl bg-signal-info/10 border border-signal-info/30 flex items-center justify-center text-signal-info mb-6">
                  <f.icon size={18} />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-ink-50 mb-2">{f.title}</h3>
                <p className="text-sm text-ink-400 leading-relaxed">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard mock */}
      <section className="relative py-20 md:py-28">
        <div className="container-x">
          <div className="eyebrow mb-4">What you see</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink-50 max-w-3xl leading-tight mb-14 text-balance">
            The leaderboard, but live.{' '}
            <span className="text-ink-500">And opinionated.</span>
          </h2>

          <div className="relative bg-ink-900 border border-ink-800 rounded-3xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 bg-ink-950 border-b border-ink-800">
              <div className="flex items-center gap-3">
                <span className="chip bg-signal-live/10 border-signal-live/30 text-signal-live">
                  <span className="live-dot" />
                  LIVE · GRAVEL WORLDS 2026
                </span>
                <span className="hidden sm:inline text-micro font-mono text-ink-500 uppercase tracking-[0.14em]">
                  241 km · Cat 1 Elite
                </span>
              </div>
              <span className="text-micro font-mono text-ink-500 uppercase tracking-[0.14em]">
                updated 0.4s ago
              </span>
            </div>

            <table className="w-full text-sm">
              <thead className="bg-ink-950 text-micro font-mono uppercase tracking-[0.14em] text-ink-500 border-b border-ink-800">
                <tr>
                  <th className="text-left px-6 py-3">Pos</th>
                  <th className="text-left py-3">Rider</th>
                  <th className="text-right py-3">Split</th>
                  <th className="text-right py-3">Gap</th>
                  <th className="text-right px-6 py-3">Pace</th>
                </tr>
              </thead>
              <tbody className="text-ink-100">
                {[
                  { p: 1, n: 'K. Haywood', t: 'ASTR-PRO', s: '08:47:12', g: '—', pace: '32.4', trend: 'up' },
                  { p: 2, n: 'M. Okafor', t: 'ASTR-PRO', s: '08:47:58', g: '+46s', pace: '31.9', trend: 'down' },
                  { p: 3, n: 'L. Sato', t: 'VELOCIO', s: '08:49:11', g: '+1:59', pace: '31.6', trend: 'up' },
                  { p: 4, n: 'A. Dupont', t: 'RAPHA', s: '08:54:02', g: '+6:50', pace: '30.7', trend: 'flat' },
                  { p: 5, n: 'J. Reinholt', t: 'SRAM-CX', s: '08:56:34', g: '+9:22', pace: '30.2', trend: 'down' },
                ].map((r) => (
                  <tr
                    key={r.p}
                    className="border-b border-ink-800 hover:bg-ink-900/60 transition-colors"
                  >
                    <td className="px-6 py-4 font-mono font-semibold text-ink-200">{r.p}</td>
                    <td className="py-4">
                      <div className="font-semibold">{r.n}</div>
                      <div className="text-micro font-mono text-ink-500 uppercase tracking-[0.12em] mt-0.5">
                        {r.t}
                      </div>
                    </td>
                    <td className="py-4 text-right font-mono text-ink-200">{r.s}</td>
                    <td
                      className={`py-4 text-right font-mono ${
                        r.p === 1 ? 'text-signal-live' : 'text-ink-400'
                      }`}
                    >
                      {r.g}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span
                        className={`inline-flex items-center gap-1.5 font-mono ${
                          r.trend === 'up'
                            ? 'text-signal-live'
                            : r.trend === 'down'
                            ? 'text-signal-warn'
                            : 'text-ink-400'
                        }`}
                      >
                        {r.trend === 'up' ? '↑' : r.trend === 'down' ? '↓' : '·'}
                        {r.pace}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="px-6 py-3 bg-ink-950 border-t border-ink-800 flex items-center justify-between text-xs font-mono text-ink-500">
              <span>showing 5 of 127 riders</span>
              <span>sync via websocket · polling fallback</span>
            </div>
          </div>
        </div>
      </section>

      <SectionCTA />
    </>
  );
}
