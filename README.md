# Aster marketing site

Marketing site for Aster (Watch the Dot) — live GPS tracking for cycling events.

## Quick start

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run typecheck # tsc --noEmit
```

## Stack

- Next.js 15 App Router (forward-compatible with Next 16)
- React 19
- Tailwind CSS 3.4 with custom tokens
- `lucide-react` icons
- Inter + JetBrains Mono via `next/font`
- No external UI library — hand-crafted primitives preserve editorial feel

## Pages

- `/` — Homepage (hero canvas + all sections)
- `/organizers` — For race directors
- `/athletes` — For riders
- `/spectators` — For fans
- `/pricing` — 3 tiers + feature matrix
- `/download` — iOS / Android / Web + QR

## Design tokens

All tokens live in `tailwind.config.ts`:

- `brand.*` — warm red primary scale
- `ink.*` — warm neutrals 50–950
- `signal.*` — `live` / `warn` / `sos` / `info`
- `font-display` / `font-sans` / `font-mono`
- Editorial type scale `micro` → `9xl`

Global CSS utilities in `src/app/globals.css`:

- `.container-x`, `.eyebrow`, `.chip`, `.live-dot`
- `.btn-primary`, `.btn-ghost`
- `.bg-grid`, `.bg-radial-spot`, `.bg-noise`
- `.gradient-text`, `.gradient-brand`, `.mask-fade-y`

## Deploy on Vercel

No config needed beyond what's in `next.config.mjs`. The build is fully static — every page prerenders. Point a domain (e.g. `watchthedot.cc`) at the Vercel project and ship.
