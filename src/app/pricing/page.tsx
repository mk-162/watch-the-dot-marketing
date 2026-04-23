import { Fragment } from 'react';
import Link from 'next/link';
import { PageHero } from '@/components/page-hero';
import { SectionFAQ } from '@/components/section-faq';
import { Check, Minus, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Pricing — Aster',
  description: 'Free for athletes. Free for events up to 25 riders. Paid plans for when the race gets serious.',
};

const tiers = [
  {
    name: 'Rider',
    price: 'Free',
    sub: 'forever',
    body: 'Every feature an athlete needs — tracking, SOS, share links, ride history.',
    cta: 'Get the app',
    href: '/download',
    features: [
      'Unlimited rides + replays',
      'Free Ride sharing',
      'Crash detection + SOS',
      'iOS / Android / Web',
      'Push notifications',
    ],
    highlight: false,
  },
  {
    name: 'Event',
    price: '$99',
    sub: '/ event',
    body: 'For race directors putting on a single event — up to 150 riders, full organizer suite.',
    cta: 'Start free (up to 25)',
    href: '/organizers',
    features: [
      'Live command deck',
      'SOS inbox + two-way chat',
      'GPX route + checkpoints',
      'Cutoff automation',
      'Embeddable leaderboard',
      'Post-event reporting',
      'Dedicated event URL',
    ],
    highlight: true,
  },
  {
    name: 'Series',
    price: 'Custom',
    sub: 'annual',
    body: 'For promoters running multiple events, leagues, or year-round clubs. White-label available.',
    cta: 'Talk to us',
    href: 'mailto:hello@watchthedot.cc',
    features: [
      'Unlimited events + riders',
      'Custom branding / domain',
      'API + webhook access',
      'Dedicated CSM',
      'SLA + priority support',
      'Custom data export',
      'SSO / SCIM on request',
    ],
    highlight: false,
  },
];

const matrix = [
  { cat: 'Core tracking', rows: [
    ['Live GPS tracking', true, true, true],
    ['Route snapping (PostGIS)', true, true, true],
    ['Offline ping queue', true, true, true],
    ['SOS + crash detection', true, true, true],
    ['Battery-aware throttling', true, true, true],
  ]},
  { cat: 'Event management', rows: [
    ['Event creation', false, true, true],
    ['GPX route upload', false, true, true],
    ['Categories + bibs', false, true, true],
    ['Cutoff worker', false, true, true],
    ['QR invitations', false, true, true],
  ]},
  { cat: 'Audience', rows: [
    ['Share links (public)', true, true, true],
    ['Embeddable leaderboard', false, true, true],
    ['Follow riders / events', true, true, true],
    ['Head-to-head comparison', true, true, true],
    ['Custom branded pages', false, false, true],
  ]},
  { cat: 'Platform', rows: [
    ['REST API', false, false, true],
    ['Webhooks', false, false, true],
    ['Custom domain', false, false, true],
    ['SSO / SCIM', false, false, true],
    ['SLA', false, '99.5%', '99.9%'],
  ]},
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Priced like{' '}
            <span className="gradient-brand">it's 2026</span>,<br />
            not 2014.
          </>
        }
        description="Athletes ride free. Organizers pay per event — no per-seat fees, no per-minute broadcasting charges, no 'call us for pricing' nonsense."
        accent="brand"
      />

      <section className="relative py-12">
        <div className="container-x">
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-3xl p-8 flex flex-col ${
                  tier.highlight
                    ? 'bg-ink-900 border-2 border-brand-500 shadow-glow-brand'
                    : 'bg-ink-900/60 border border-ink-800'
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-6 bg-brand-500 text-white text-micro font-mono uppercase tracking-[0.14em] px-2.5 py-1 rounded-md">
                    most popular
                  </div>
                )}
                <div className="text-micro font-mono uppercase tracking-[0.18em] text-ink-400 mb-4">
                  {tier.name}
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-semibold tracking-tight text-ink-50">
                    {tier.price}
                  </span>
                  <span className="text-sm font-mono text-ink-500">{tier.sub}</span>
                </div>
                <p className="text-sm text-ink-400 leading-relaxed mb-8">{tier.body}</p>

                <ul className="space-y-3 text-sm flex-1 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-ink-200">
                      <Check size={16} className="mt-0.5 text-brand-400 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.href}
                  className={tier.highlight ? 'btn-primary h-12' : 'btn-ghost h-12'}
                >
                  {tier.cta}
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare plans */}
      <section className="relative py-20">
        <div className="container-x">
          <div className="eyebrow mb-4">Compare plans</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink-50 mb-10 max-w-2xl">
            Every feature, mapped to the plan that ships it.
          </h2>

          <div className="overflow-x-auto -mx-6 md:mx-0 rounded-3xl border border-ink-800 bg-ink-950">
            <table className="w-full min-w-[640px] text-sm">
              <thead className="bg-ink-900 border-b border-ink-800">
                <tr>
                  <th className="text-left px-6 py-4 text-micro font-mono uppercase tracking-[0.14em] text-ink-500">
                    Feature
                  </th>
                  <th className="text-center py-4 text-sm font-semibold text-ink-200">Rider</th>
                  <th className="text-center py-4 text-sm font-semibold text-brand-400">Event</th>
                  <th className="text-center px-6 py-4 text-sm font-semibold text-ink-200">Series</th>
                </tr>
              </thead>
              <tbody>
                {matrix.map((section) => (
                  <Fragment key={section.cat}>
                    <tr className="bg-ink-900/40">
                      <td
                        colSpan={4}
                        className="px-6 py-3 text-micro font-mono uppercase tracking-[0.18em] text-ink-400 border-y border-ink-800"
                      >
                        {section.cat}
                      </td>
                    </tr>
                    {section.rows.map((row, i) => (
                      <tr
                        key={`${section.cat}-${i}`}
                        className="border-b border-ink-800/60 hover:bg-ink-900/40"
                      >
                        <td className="px-6 py-3 text-ink-200">{row[0] as string}</td>
                        <MatrixCell value={row[1] as boolean | string} />
                        <MatrixCell value={row[2] as boolean | string} highlight />
                        <MatrixCell value={row[3] as boolean | string} className="px-6" />
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <SectionFAQ />
    </>
  );
}

function MatrixCell({
  value,
  highlight,
  className = '',
}: {
  value: boolean | string;
  highlight?: boolean;
  className?: string;
}) {
  let content: React.ReactNode;
  if (value === true) {
    content = <Check size={16} className={highlight ? 'text-brand-400' : 'text-ink-200'} />;
  } else if (value === false) {
    content = <Minus size={16} className="text-ink-700" />;
  } else {
    content = (
      <span className={`font-mono text-xs ${highlight ? 'text-brand-400' : 'text-ink-300'}`}>
        {value}
      </span>
    );
  }
  return (
    <td className={`text-center py-3 ${className}`}>
      <div className="inline-flex items-center justify-center">{content}</div>
    </td>
  );
}
