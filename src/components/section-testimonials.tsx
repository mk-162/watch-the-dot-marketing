const quotes = [
  {
    body: "We chased riders around a 140-mile course with a radio and spreadsheet. Now we watch the board and jump in on problems. Completely different.",
    name: "Marla Ibanez",
    role: "Race director, Flint Hills 200",
  },
  {
    body: "My wife watched me bonk in real-time from 2,100 miles away. At mile 96 she texted asking if I was okay. I was not.",
    name: "Cam Whitfield",
    role: "Elite gravel racer",
  },
  {
    body: "SOS is the feature I don't talk to sponsors about because nobody wants to sell safety. But it's the one that lets me sleep.",
    name: "Dr. Priya Raman",
    role: "Event medical director",
  },
  {
    body: "Our club started a weekly group ride with embedded tracking on the site. Attendance doubled. Nobody disappears off the front anymore.",
    name: "JB Rocourt",
    role: "Ardennes Cycling Club",
  },
];

export function SectionTestimonials() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <div className="eyebrow mb-4">What organizers and riders say</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink-50 text-balance">
            Used on five continents by people who don't get paid to tweet about tools.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="relative bg-ink-900/60 border border-ink-800 rounded-3xl p-8 md:p-10"
            >
              <div className="absolute top-6 left-6 text-7xl font-display text-brand-500/30 leading-none select-none">
                "
              </div>
              <blockquote className="relative text-lg md:text-xl text-ink-100 leading-relaxed font-medium text-pretty">
                {q.body}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-ink-800/60 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-ink-100">{q.name}</div>
                  <div className="text-xs font-mono text-ink-500 uppercase tracking-[0.12em] mt-0.5">
                    {q.role}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-ink-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal-live" />
                  verified user
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
