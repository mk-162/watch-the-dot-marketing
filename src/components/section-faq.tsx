'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Do spectators need to download anything?',
    a: 'No. Any share link works in a browser — including the oldest phone your parents still use. Installing the PWA gets you push notifications and faster load, but it\'s optional.',
  },
  {
    q: 'What happens when a rider loses cell signal?',
    a: 'The app keeps recording GPS locally and queues pings to IndexedDB. When signal returns, the queue flushes in a single batch and the map replays the missing segment — so leaderboards self-correct without duplicating distance.',
  },
  {
    q: 'How does the SOS flow actually work?',
    a: 'The athlete taps SOS, types a 4-digit confirmation code, and the alert fires over both WebSocket and a push notification to every organizer in seconds. A two-way chat opens. Organizers acknowledge, respond, and can mark the SOS resolved with notes attached to the event report.',
  },
  {
    q: 'Do I need Mapbox or can I bring my own tiles?',
    a: 'We ship a Mapbox-powered default because it looks great and handles offline caching well. Pro plans let you plug in your own tile provider — OSM, Carto, whatever your legal team approves.',
  },
  {
    q: 'Can I embed the leaderboard on my event site?',
    a: 'Yes. Every public event gets an embeddable widget with a clean iframe or a rich Webflow/WordPress block. The live dot stays live even on pages you don\'t control.',
  },
  {
    q: 'Will the battery survive a 12-hour race?',
    a: 'With Smart Battery Mode enabled: yes. Aster throttles GPS rate and ping batching to the rider\'s pace, signal quality, and remaining battery. Most modern phones report 8–15% battery per hour of continuous tracking, compared to 25–40% with Strava Live or Find My.',
  },
  {
    q: 'Who owns my data?',
    a: 'You do. Riders own their tracks. Organizers own the event. Aster is GDPR-ready, supports full data export, and deletes everything permanently on request — including position pings.',
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
