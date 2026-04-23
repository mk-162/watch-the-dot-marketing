import Link from 'next/link';
import { PageHero } from '@/components/page-hero';
import { SectionCTA } from '@/components/section-cta';
import { ArrowRight, Flag, Siren, Users, Trophy, Map, ClipboardList, Clock } from 'lucide-react';

export const metadata = {
  title: 'For organizers — Aster',
  description: 'Run a race you can see. Live tracking, SOS, and cutoff workflow — built for race directors.',
};

const deck = [
  {
    icon: Map,
    title: 'Course intelligence, not just a map',
    body:
      'Upload a GPX and Aster extracts the route, elevation, switchbacks, laps, and checkpoints. Set a finish line with radius and detection — we handle split timing, DNFs, and off-course alerts.',
  },
  {
    icon: Siren,
    title: 'The inbox that actually matters',
    body:
      'SOS alerts route to a dedicated organizer dashboard. Acknowledge, respond in-thread, and mark resolved — all attached to the event record. No more "who called it in?"',
  },
  {
    icon: Clock,
    title: 'Cutoff worker, always on',
    body:
      'Define a cutoff, walk away. At the moment you specified, Aster flips outstanding riders to DNF or finished — automatically, transactionally, and with notifications sent the way you configured.',
  },
  {
    icon: Users,
    title: 'Participants, without the spreadsheet',
    body:
      'QR invites, team registration, category assignment, bib numbers. Import a CSV from Bikereg, Racenet, or SignupGenius. Or hand out QR codes at the start line.',
  },
  {
    icon: Trophy,
    title: 'Broadcast-ready leaderboards',
    body:
      'Filter by category, compare riders head-to-head, and embed the board on your event site. Sponsors get branding. Media gets a feed. Fans get the story.',
  },
  {
    icon: ClipboardList,
    title: 'Reports you\'d actually read',
    body:
      'Post-event exports for results, incidents, and safety. CSV, PDF, and a permalink. Renewing a permit? Your insurer is going to thank you.',
  },
];

export default function OrganizersPage() {
  return (
    <>
      <PageHero
        eyebrow="For organizers"
        title={
          <>
            Run a race <span className="gradient-brand">you can see.</span>
          </>
        }
        description="The command deck for race directors. Live dots, safety inbox, cutoff automation, and post-event reporting — in the hands of the person actually standing in a parking lot at 5 AM."
        accent="brand"
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/download" className="btn-primary h-12">
            Host a free event
            <ArrowRight size={16} />
          </Link>
          <Link href="mailto:hello@watchthedot.cc" className="btn-ghost h-12">
            Talk to our team
          </Link>
        </div>
      </PageHero>

      {/* Product deck */}
      <section className="relative py-20">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-px bg-ink-800 border border-ink-800 rounded-3xl overflow-hidden">
            {deck.map((item) => (
              <article key={item.title} className="bg-ink-950 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400">
                    <item.icon size={18} />
                  </div>
                  <Flag size={14} className="text-ink-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-ink-50 mb-3">
                  {item.title}
                </h3>
                <p className="text-ink-400 leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Playbook */}
      <section className="relative py-20 md:py-28 bg-ink-900/30 border-y border-ink-800/60">
        <div className="container-x">
          <div className="eyebrow mb-4">Race-day playbook</div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-ink-50 max-w-3xl leading-tight mb-14">
            A sensible default for people{' '}
            <span className="text-ink-500">who already have enough to worry about.</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { t: 'T-14 days', b: 'Upload GPX. Set categories, cutoff, and privacy. Generate QR invites.' },
              { t: 'T-24 hours', b: 'Publish rider list. Enable tracking. Ping your volunteers.' },
              { t: 'T-0', b: 'Riders start. Leaderboard lights up. SOS and stoppage alerts route to inbox.' },
              { t: 'T+∞', b: 'Cutoff fires. Reports export. Event archived to permanent record.' },
            ].map((p, i) => (
              <div key={p.t} className="relative bg-ink-950 border border-ink-800 rounded-3xl p-6">
                <div className="absolute -top-3 left-6 px-2 py-1 rounded-md bg-brand-500 text-white text-micro font-mono uppercase tracking-[0.14em]">
                  step {i + 1}
                </div>
                <div className="text-micro font-mono uppercase tracking-[0.14em] text-brand-400 mb-2 mt-2">
                  {p.t}
                </div>
                <p className="text-sm text-ink-300 leading-relaxed">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA />
    </>
  );
}
