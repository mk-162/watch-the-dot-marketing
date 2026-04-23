import Link from 'next/link';
import { Logo } from './logo';

export function SiteFooter() {
  const cols = [
    {
      title: 'Product',
      links: [
        { label: 'Organizers', href: '/organizers' },
        { label: 'Athletes', href: '/athletes' },
        { label: 'Spectators', href: '/spectators' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Download', href: '/download' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Manifesto', href: '/manifesto' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press kit', href: '/press' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help center', href: '/help' },
        { label: 'Status', href: 'https://status.watchthedot.cc' },
        { label: 'Safety', href: '/safety' },
        { label: 'Contact', href: 'mailto:hello@watchthedot.cc' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
        { label: 'GDPR', href: '/gdpr' },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-ink-800/60 bg-ink-950 mt-40">
      <div className="container-x py-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2 space-y-6">
            <Logo />
            <p className="text-sm text-ink-400 max-w-xs leading-relaxed">
              Live GPS tracking for the races, group rides, and grand départs that don't fit inside a
              finish-line camera.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-ink-500">
              <span className="live-dot" />
              All systems operational
            </div>
          </div>
          {cols.map((col) => (
            <div key={col.title} className="space-y-4">
              <h4 className="text-micro font-mono uppercase tracking-[0.18em] text-ink-500">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-300 hover:text-ink-50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-ink-800/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs font-mono text-ink-500">
            © {new Date().getFullYear()} Aster. Built in a shed, tested on gravel.
          </p>
          <p className="text-xs font-mono text-ink-500">
            v2.4.1 · 47.89.231.88ºN ride logged
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -top-px h-px divider-hairline" />
    </footer>
  );
}
