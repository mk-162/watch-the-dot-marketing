import Link from 'next/link';
import { PageHero } from '@/components/page-hero';
import { Apple, Smartphone, Globe, QrCode } from 'lucide-react';

export const metadata = {
  title: 'Download Aster',
  description: 'Get Aster on iOS, Android, or in any browser.',
};

export default function DownloadPage() {
  return (
    <>
      <PageHero
        eyebrow="Download"
        title={
          <>
            Put a dot <span className="gradient-brand">on the map.</span>
          </>
        }
        description="Install the native app, or just open the web version — both sync to the same account and same ride history."
      />

      <section className="py-20">
        <div className="container-x">
          <div className="grid md:grid-cols-3 gap-6">
            <DownloadCard
              icon={Apple}
              label="iOS"
              sub="iPhone + iPad"
              href="https://apps.apple.com/app/aster"
              cta="App Store"
            />
            <DownloadCard
              icon={Smartphone}
              label="Android"
              sub="Phone + Tablet"
              href="https://play.google.com/store/apps/details?id=cc.watchthedot.aster"
              cta="Google Play"
            />
            <DownloadCard
              icon={Globe}
              label="Web"
              sub="Any modern browser"
              href="https://app.watchthedot.cc"
              cta="Open web app"
              highlight
            />
          </div>

          <div className="mt-16 bg-ink-900/60 border border-ink-800 rounded-3xl p-8 md:p-10 grid md:grid-cols-[200px_minmax(0,1fr)] gap-8 items-center">
            <div className="w-40 h-40 rounded-2xl bg-ink-50 p-3 flex items-center justify-center mx-auto">
              <QrCode size={120} className="text-ink-900" />
            </div>
            <div>
              <div className="eyebrow mb-3">scan to install</div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink-50 mb-3">
                Scan the code on your phone — we'll send you to the right store.
              </h2>
              <p className="text-ink-400 max-w-lg leading-relaxed">
                Or just open{' '}
                <Link
                  href="https://app.watchthedot.cc"
                  className="text-ink-100 underline decoration-ink-600 hover:decoration-brand-400"
                >
                  app.watchthedot.cc
                </Link>{' '}
                in any browser. The PWA installs in a tap.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function DownloadCard({
  icon: Icon,
  label,
  sub,
  href,
  cta,
  highlight,
}: {
  icon: typeof Apple;
  label: string;
  sub: string;
  href: string;
  cta: string;
  highlight?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative rounded-3xl p-8 flex flex-col gap-6 transition-colors ${
        highlight
          ? 'bg-ink-900 border-2 border-brand-500'
          : 'bg-ink-900/60 border border-ink-800 hover:border-ink-700'
      }`}
    >
      <div
        className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
          highlight
            ? 'bg-brand-500/15 border border-brand-500/30 text-brand-400'
            : 'bg-ink-800 border border-ink-700 text-ink-100'
        }`}
      >
        <Icon size={20} />
      </div>
      <div>
        <div className="text-2xl font-semibold text-ink-50 tracking-tight">{label}</div>
        <div className="text-sm font-mono text-ink-500 mt-1">{sub}</div>
      </div>
      <div className={`text-sm font-medium ${highlight ? 'text-brand-400' : 'text-ink-300'} group-hover:translate-x-1 transition-transform inline-flex items-center gap-2`}>
        {cta} →
      </div>
    </Link>
  );
}
