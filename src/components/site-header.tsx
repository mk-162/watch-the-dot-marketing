'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './logo';
import { cn } from '@/lib/cn';

const nav = [
  { label: 'Organizers', href: '/organizers' },
  { label: 'Athletes', href: '/athletes' },
  { label: 'Spectators', href: '/spectators' },
  { label: 'Pricing', href: '/pricing' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-ink-950/70 border-b border-ink-800/60">
      <div className="container-x flex items-center justify-between h-16">
        <Link href="/" aria-label="Aster home">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-300 hover:text-ink-50 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="https://app.watchthedot.cc" className="btn-ghost h-10 px-4 text-sm">
            Sign in
          </Link>
          <Link href="/download" className="btn-primary h-10 px-4 text-sm">
            Get the app
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-ink-700 text-ink-200"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        className={cn(
          'md:hidden overflow-hidden border-t border-ink-800/60 transition-[max-height,opacity] duration-300',
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="container-x py-6 flex flex-col gap-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg text-ink-200 hover:text-ink-50"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-3">
            <Link href="https://app.watchthedot.cc" className="btn-ghost flex-1 h-11">
              Sign in
            </Link>
            <Link href="/download" className="btn-primary flex-1 h-11">
              Get the app
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
