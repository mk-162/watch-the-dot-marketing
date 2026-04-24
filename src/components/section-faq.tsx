'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Do spectators need to download anything?',
    a: 'No. Any share link works in a browser, even old phones. PWA install adds push and speed, but it\'s optional.',
  },
  {
    q: 'What happens when a rider loses signal?',
    a: 'App keeps recording GPS locally, queues pings in IndexedDB. When signal returns, the queue flushes in one batch and the map replays the gap so leaderboards self-correct.',
  },
  {
    q: 'How does SOS actually work?',
    a: 'Athlete taps SOS, types 4-digit code, alert fires over WebSocket and push to every organizer in seconds. Two-way chat opens. Organizers acknowledge, respond, mark resolved with notes in the event report.',
  },
  {
    q: 'Do I need Mapbox or can I use my tiles?',
    a: 'We ship Mapbox because it looks great and caches well offline. Pro plans let you plug in your own tiles, OSM, Carto, whatever your legal team approves.',
  },
  {
    q: 'Can I embed the leaderboard?',
    a: 'Yes. Every public event gets an embeddable widget, clean iframe or Webflow/WordPress block. The dot stays live on pages you don\'t control.',
  },
  {
    q: 'Will battery make it through a long race?',
    a: 'With Smart Battery Mode, Aster throttles GPS and batching to preserve power. The app adjusts to pace, signal, and remaining battery to extend your ride time.',
  },
  {
    q: 'Who owns my data?',
    a: 'You do. Riders own tracks. Organizers own events. GDPR-ready, full export support, permanent deletion on request including position pings.',
  },
];

export function SectionFAQ() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="container-x">
        <div className="grid md:grid-cols-[320px_minmax(0,1fr)] gap-16">
          <div>
            <div className="eyebrow mb-4">Questions we get</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink-50 text-balance leading-tight">
              Answers we give.
            </h2>
            <p className="mt-6 text-ink-400 text-pretty">
              Didn't find yours? Email{' '}
              <a
                href="mailto:hello@watchthedot.cc"
                className="text-ink-100 underline decoration-ink-600 hover:decoration-brand-400"
              >
                hello@watchthedot.cc
              </a>
              .
            </p>
          </div>

          <div className="border-t border-ink-800">
            {faqs.map((f, i) => (
              <FAQItem key={i} {...f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-ink-800">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left gap-6 group"
      >
        <span className="text-lg font-medium text-ink-100 group-hover:text-white transition-colors">
          {q}
        </span>
        <span
          className={`w-8 h-8 rounded-full border border-ink-700 flex items-center justify-center text-ink-400 transition-colors ${
            open ? 'bg-brand-500 border-brand-500 text-white' : 'group-hover:border-ink-500'
          }`}
        >
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-64 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-ink-400 leading-relaxed max-w-3xl">{a}</p>
      </div>
    </div>
  );
}
