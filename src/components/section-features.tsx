import {
  Radio,
  Route,
  Siren,
  Users,
  BatteryCharging,
  Share2,
  Bell,
  Trophy,
  MapPin,
} from 'lucide-react';

const features = [
  {
    icon: Radio,
    tag: 'Core',
    title: 'Sub-second live tracking',
    body: 'Positions stream every 400 ms via WebSockets with polling fallback. Route-snapped on a PostGIS backend — no wandering dots across the highway.',
  },
  {
    icon: Route,
    tag: 'Courses',
    title: 'GPX in, dots out',
    body: 'Upload a GPX. We extract elevation, switchbacks, laps, and checkpoints automatically. The rest of the app lights up around it.',
  },
  {
    icon: Trophy,
    tag: 'Leaderboards',
    title: 'Live splits and gaps',
    body: 'Distance-along-route leaderboards with gap estimation, category filters, and head-to-head comparison for up to five riders.',
  },
  {
    icon: Siren,
    tag: 'Safety',
    title: 'Two-tap SOS + crash detection',
    body: 'A 4-digit confirmation. Real-time broadcast to organizers. A two-way chat the moment an athlete hits the button — before the radio call is even placed.',
  },
  {
    icon: Users,
    tag: 'Social',
    title: 'Follow the riders you care about',
    body: 'Follow an athlete, a team, or an event. Get notified when they start, make a move, stop moving, or cross the line.',
  },
  {
    icon: BatteryCharging,
    tag: 'Hardware-aware',
    title: 'Smart battery mode',
    body: 'On phones and in the Capacitor app, Aster throttles GPS to battery level, cell signal, and pace — so 200-mile rides don\'t need 200 miles of battery.',
  },
  {
    icon: Share2,
    tag: 'Embeds',
    title: 'Drop-in share links & widgets',
    body: 'Every ride gets a share code. Every event gets an embeddable leaderboard. Every athlete has a profile you can point a sponsor at.',
  },
  {
    icon: Bell,
    tag: 'Notifications',
    title: 'Push built for endurance events',
    body: 'iOS / Android / Web push with quiet hours, stoppage thresholds, and per-rider controls. No spam, no "Someone liked your post."',
  },
  {
    icon: MapPin,
    tag: 'Free Ride',
    title: 'Not racing? Share the ride.',
    body: 'One-tap share link for any ride. Your spouse can watch your gravel suffer-fest from the couch, and SOS works whether or not there\'s a race around you.',
  },
];

export function SectionFeatures() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="eyebrow mb-4">The platform</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink-50 text-balance">
              One platform. <span className="text-ink-500">Three audiences. Zero duct tape.</span>
            </h2>
          </div>
          <p className="text-ink-400 max-w-sm text-pretty">
            Every feature in Aster exists because an organizer, athlete, or fan asked for it at mile 97.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-800 border border-ink-800 rounded-3xl overflow-hidden">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-ink-950 p-8 transition-colors hover:bg-ink-900/80"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-2xl bg-ink-800/70 border border-ink-700 flex items-center justify-center text-brand-400 group-hover:border-brand-500/40 group-hover:bg-brand-500/10 transition-colors">
                  <f.icon size={18} />
                </div>
                <span className="text-micro font-mono uppercase tracking-[0.18em] text-ink-500">
                  {f.tag}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-ink-50 tracking-tight mb-2">{f.title}</h3>
              <p className="text-sm text-ink-400 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
