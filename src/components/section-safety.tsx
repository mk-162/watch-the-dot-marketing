import { ShieldCheck, Radio, HeartPulse, Phone } from 'lucide-react';

export function SectionSafety() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-[1px] divider-hairline" />
        <div className="absolute inset-x-0 bottom-0 h-[1px] divider-hairline" />
      </div>

      <div className="container-x">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="eyebrow text-signal-live mb-4">
              <span className="live-dot" /> safety stack
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink-50 text-balance leading-[1.05]">
              Safety isn't a feature.{' '}
              <span className="text-ink-500">It's the whole reason.</span>
            </h2>
            <p className="mt-6 text-lg text-ink-300 leading-relaxed max-w-lg">
              Most events hire a medical team and pray the cell coverage holds. Aster assumes the
              coverage won't. We queue pings offline, detect crashes automatically, and ladder the
              response from "are you okay?" to "we're rolling" in a single thread.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <Stat icon={ShieldCheck} value="2-tap" label="SOS confirmation" />
              <Stat icon={Radio} value="87s" label="avg acknowledgement" />
              <Stat icon={HeartPulse} value="auto" label="crash detection" />
              <Stat icon={Phone} value="24/7" label="organizer reachable" />
            </div>
          </div>

          <div className="relative">
            {/* Mock SOS chat card */}
            <div className="absolute -inset-4 bg-signal-live/10 blur-3xl rounded-full pointer-events-none" />
            <div className="relative bg-ink-900 border border-ink-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-5 py-4 bg-ink-950 border-b border-ink-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-signal-sos animate-pulse-live" />
                  <span className="text-sm font-semibold text-signal-sos">SOS ACTIVE</span>
                </div>
                <span className="text-micro font-mono text-ink-500 uppercase tracking-[0.14em]">
                  flint hills 200 · cat 1
                </span>
              </div>

              <div className="p-5 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-400 font-mono text-xs">
                    KH
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-semibold">K. Haywood</span>
                      <span className="text-micro font-mono text-ink-500">14:02:18</span>
                    </div>
                    <div className="mt-1 bg-signal-sos/10 border border-signal-sos/30 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-ink-100">
                      Bike issue, cut on leg — not an emergency. Can someone bring a derailleur
                      hanger? Road 4 &amp; 177th.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-signal-live/20 border border-signal-live/30 flex items-center justify-center text-signal-live font-mono text-xs">
                    MI
                  </div>
                  <div className="flex-1 text-right">
                    <div className="flex items-baseline gap-2 justify-end">
                      <span className="text-micro font-mono text-ink-500">14:02:34</span>
                      <span className="text-sm font-semibold">Marla · RD</span>
                    </div>
                    <div className="mt-1 inline-block text-left bg-signal-live/10 border border-signal-live/30 rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-ink-100">
                      Rolling. ETA 11 min. Sit tight — we have you at 38.9478, -96.3012.
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-ink-800 bg-ink-950 p-3 flex items-center gap-2">
                  <div className="flex-1 text-sm text-ink-500">Message K. Haywood…</div>
                  <button className="h-8 px-3 rounded-full bg-signal-live text-ink-950 text-xs font-semibold">
                    Send
                  </button>
                </div>
              </div>

              <div className="px-5 py-3 border-t border-ink-800 flex items-center justify-between text-xs font-mono text-ink-500">
                <span>auto-logged to event report</span>
                <span>Δ 16s since SOS tap</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof ShieldCheck;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-2xl bg-ink-900 border border-ink-800 flex items-center justify-center text-signal-live">
        <Icon size={16} />
      </div>
      <div>
        <div className="text-xl font-semibold font-mono text-ink-50">{value}</div>
        <div className="text-micro font-mono uppercase tracking-[0.12em] text-ink-500">{label}</div>
      </div>
    </div>
  );
}
