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
    title: 'Live tracking',
    body: 'Real-time positions streamed to the map with route-snapping so your dot stays on course.',
  },
  {
    icon: Route,
    tag: 'Courses',
    title: 'GPX in, dots out',
    body: 'Upload a GPX and Aster extracts elevation, switchbacks, laps, checkpoints. Everything else cascades from there.',
  },
  {
    icon: Trophy,
    tag: 'Leaderboards',
    title: 'Live splits and gaps',
    body: 'Distance-along-route leaderboards with gap estimates, filters by category, head-to-head for up to five riders.',
  },
  {
    icon: Siren,
    tag: 'Safety',
    title: 'Two-tap SOS',
    body: '4-digit confirmation, instant broadcast to organizers, two-way chat for coordination.',
  },
  {
    icon: Users,
    tag: 'Social',
    title: 'Follow riders you care about',
    body: 'Follow an athlete, team, or event and get notified when they start, move, stop, or finish.',
  },
  {
    icon: BatteryCharging,
    tag: 'Hardware-aware',
    title: 'Smart battery mode',
    body: 'Aster throttles GPS to battery level, signal, and pace so 200-mile rides don\'t need 200 miles of battery.',
  },
  {
    icon: Share2,
    tag: 'Embeds',
    title: 'Share codes and widgets',
    body: 'Every ride gets a share code. Every event gets an embeddable leaderboard. Every athlete has a profile for sponsors.',
  },
  {
    icon: Bell,
    tag: 'Notifications',
    title: 'Push for endurance events',
    body: 'iOS, Android, web push with quiet hours, stoppage thresholds, per-rider control. No "someone liked your post" spam.',
  },
  {
    icon: MapPin,
    tag: 'Free Ride',
    title: 'Ride without a race',
    body: 'One-tap share link for any ride. Your spouse watches from the couch while you suffer. SOS works whether there\'s a race or not.',
  },
  {
    icon: Radio,
    tag: 'Organizers',
    title: 'Organizer view',
    body: 'Manage your event, message riders, see live timing. Map all your riders and manage SOS calls from one place.',
  },
  {
    icon: Users,
    tag: 'Teams',
    title: 'Team manager view',
    body: 'See all team members on the course in one view. Compare time gaps, distances to feed zones and the finish, gaps between riders.',
  },
  {
    icon: Radio,
    tag: 'Connectivity',
    title: 'Offline tracking',
    body: 'App records location without connection. When signal returns, all stored data syncs to servers and processes for spectators.',
  },
  {
    icon: MapPin,
    tag: 'Connectivity',
    title: 'Offline start and stop',
    body: 'Start and end any ride type, races included, with zero internet. Everything syncs when you register and get connection at the end.',
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
              One platform. <span className="text-ink-500">Three audiences. No duct tape.</span>
            </h2>
          </div>
          <p className="text-ink-400 max-w-sm text-pretty">
            Every feature here came from someone at mile 97 asking for it.
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
