const steps = [
  {
    n: '01',
    title: 'Spin up the event',
    body: 'Create event, upload GPX, set categories and a cutoff. Aster builds the route, elevation, laps, and checkpoints.',
    stat: 'Fast',
    statLabel: 'setup',
  },
  {
    n: '02',
    title: 'Riders tap start',
    body: 'Athletes open app, tap Start, battery mode kicks in, organizers see every dot in real-time.',
    stat: 'Efficient',
    statLabel: 'battery use',
  },
  {
    n: '03',
    title: 'Fans watch',
    body: 'Spectators share a link, follow a rider, see the live map without the SOS panel.',
    stat: 'Live',
    statLabel: 'updates',
  },
  {
    n: '04',
    title: 'Safety built in',
    body: 'Athlete taps SOS, gets instant broadcast to organizers, two-way chat for coordination.',
    stat: 'Real-time',
    statLabel: 'communication',
  },
];

export function SectionHowItWorks() {
  return (
    <section className="relative py-28 md:py-36 bg-ink-900/30 border-y border-ink-800/60">
      <div className="container-x">
        <div className="max-w-2xl mb-16">
          <div className="eyebrow mb-4">How it works</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink-50 text-balance">
            From GPX to live broadcast{' '}
            <span className="text-ink-500">in the time it takes to make coffee.</span>
          </h2>
        </div>

        <ol className="space-y-px bg-ink-800 border border-ink-800 rounded-3xl overflow-hidden">
          {steps.map((s) => (
            <li
              key={s.n}
              className="grid grid-cols-1 md:grid-cols-[120px_minmax(0,1fr)_240px] gap-6 md:gap-10 bg-ink-950 p-8 md:p-10"
            >
              <div className="text-5xl font-mono font-semibold text-brand-500/70 tabular-nums">
                {s.n}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-ink-50 mb-2">
                  {s.title}
                </h3>
                <p className="text-ink-400 leading-relaxed max-w-xl">{s.body}</p>
              </div>
              <div className="md:text-right space-y-1">
                <div className="text-3xl font-semibold font-mono text-ink-50 tracking-tight">
                  {s.stat}
                </div>
                <div className="text-micro font-mono uppercase tracking-[0.14em] text-ink-500">
                  {s.statLabel}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
