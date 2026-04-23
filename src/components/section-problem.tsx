export function SectionProblem() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="container-x">
        <div className="max-w-4xl">
          <div className="eyebrow mb-6">the problem</div>
          <p className="text-3xl md:text-5xl font-semibold text-ink-50 tracking-tight leading-[1.1] text-balance">
            A 10-hour gravel race shouldn't end at the finish line.{' '}
            <span className="text-ink-500">
              But most tracking tools were built for marathons, live TV, or neither. Spectators guess.
              Organizers stress. Partners go dark for hours at a time.
            </span>
          </p>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-px bg-ink-800 border border-ink-800 rounded-3xl overflow-hidden">
          {[
            {
              k: 'For organizers',
              h: 'Safety is someone else\'s SaaS.',
              p: 'Radios, spreadsheets, and a WhatsApp group with 200 people. Nobody knows who is where until somebody crashes.',
            },
            {
              k: 'For athletes',
              h: '"Send me your Garmin link."',
              p: 'Tracking apps drain batteries, dump you off-grid, and don\'t even know where the course goes.',
            },
            {
              k: 'For fans',
              h: 'Refresh. Refresh. Refresh.',
              p: 'A single grainy live stream at the finish line while your rider is 137 km out, fighting a headwind you can\'t see.',
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
