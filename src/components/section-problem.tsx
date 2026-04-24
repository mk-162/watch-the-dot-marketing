export function SectionProblem() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="container-x">
        <div className="max-w-4xl">
          <div className="eyebrow mb-6">the problem</div>
          <p className="text-3xl md:text-5xl font-semibold text-ink-50 tracking-tight leading-[1.1] text-balance">
            It is almost impossible to track riders in remote locations.{' '}
            <span className="text-ink-500">
              Event managers, team managers and spectators miss the action and cannot play back how the event unfolded.
            </span>
          </p>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-px bg-ink-800 border border-ink-800 rounded-3xl overflow-hidden">
          {[
            {
              k: 'For organizers',
              h: 'Safety is someone else\'s problem.',
              p: 'Radio, spreadsheet, WhatsApp group with 200 people. Nobody knows where anyone is until someone crashes.',
            },
            {
              k: 'For athletes',
              h: '"Send me your Garmin link."',
              p: 'Tracking apps kill your battery, drop you off-grid, and don\'t know which way the course goes.',
            },
            {
              k: 'For fans',
              h: 'Refresh. Refresh. Refresh.',
              p: 'One pixelated stream at the finish while your rider fights a headwind 137 km out that you can\'t see.',
            },
          ].map((item) => (
            <div key={item.k} className="bg-ink-950 p-8 md:p-10 space-y-4">
              <div className="eyebrow">{item.k}</div>
              <h3 className="text-2xl font-semibold text-ink-50 tracking-tight">{item.h}</h3>
              <p className="text-ink-400 leading-relaxed">{item.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
