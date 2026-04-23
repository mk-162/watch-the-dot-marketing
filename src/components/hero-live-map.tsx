'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * A stylized, self-contained live-tracking visualization.
 * Draws a gravel course, an elevation profile, and a peloton of riders
 * that progress along the route — no Mapbox key required.
 */

type Rider = {
  id: number;
  name: string;
  team: string;
  progress: number;    // 0–1
  speedJitter: number; // base m/s offset
  color: string;
  isLeader?: boolean;
};

const COURSE = [
  { x: 0.04, y: 0.82 },
  { x: 0.12, y: 0.74 },
  { x: 0.2, y: 0.78 },
  { x: 0.27, y: 0.62 },
  { x: 0.34, y: 0.68 },
  { x: 0.42, y: 0.48 },
  { x: 0.5, y: 0.56 },
  { x: 0.58, y: 0.38 },
  { x: 0.66, y: 0.44 },
  { x: 0.74, y: 0.26 },
  { x: 0.82, y: 0.32 },
  { x: 0.9, y: 0.18 },
  { x: 0.96, y: 0.26 },
];

const RIDERS: Rider[] = [
  { id: 1, name: 'K. Haywood', team: 'ASTR-PRO', progress: 0.62, speedJitter: 0.0, color: '#EF4444', isLeader: true },
  { id: 2, name: 'M. Okafor', team: 'ASTR-PRO', progress: 0.58, speedJitter: -0.00002, color: '#FF6B6B' },
  { id: 3, name: 'L. Sato', team: 'VELOCIO', progress: 0.54, speedJitter: -0.00003, color: '#3B82F6' },
  { id: 4, name: 'A. Dupont', team: 'RAPHA', progress: 0.46, speedJitter: -0.00004, color: '#22C55E' },
  { id: 5, name: 'J. Reinholt', team: 'SRAM-CX', progress: 0.42, speedJitter: -0.00006, color: '#F97316' },
  { id: 6, name: 'R. Singh', team: 'SPECIALIZD', progress: 0.38, speedJitter: -0.00005, color: '#A855F7' },
  { id: 7, name: 'T. Nakamura', team: 'ENVE', progress: 0.28, speedJitter: -0.00008, color: '#EAB308' },
  { id: 8, name: 'E. García', team: 'MOXIE', progress: 0.21, speedJitter: -0.0001, color: '#06B6D4' },
];

function catmullRom(points: { x: number; y: number }[], samples = 200) {
  const out: { x: number; y: number }[] = [];
  const p = [points[0], ...points, points[points.length - 1]];
  for (let i = 0; i < p.length - 3; i++) {
    for (let t = 0; t < samples; t++) {
      const s = t / samples;
      const s2 = s * s;
      const s3 = s2 * s;
      const x =
        0.5 *
        ((2 * p[i + 1].x) +
          (-p[i].x + p[i + 2].x) * s +
          (2 * p[i].x - 5 * p[i + 1].x + 4 * p[i + 2].x - p[i + 3].x) * s2 +
          (-p[i].x + 3 * p[i + 1].x - 3 * p[i + 2].x + p[i + 3].x) * s3);
      const y =
        0.5 *
        ((2 * p[i + 1].y) +
          (-p[i].y + p[i + 2].y) * s +
          (2 * p[i].y - 5 * p[i + 1].y + 4 * p[i + 2].y - p[i + 3].y) * s2 +
          (-p[i].y + 3 * p[i + 1].y - 3 * p[i + 2].y + p[i + 3].y) * s3);
      out.push({ x, y });
    }
  }
  return out;
}

export function HeroLiveMap() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const ridersRef = useRef<Rider[]>(RIDERS.map((r) => ({ ...r })));
  const [tick, setTick] = useState(0);
  const [leaderDistance, setLeaderDistance] = useState(148.2);
  const [activeRiders] = useState(127);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const smooth = catmullRom(COURSE, 80);

    let last = performance.now();
    let clock = 0;
    let positionBroadcastAcc = 0;

    const render = (now: number) => {
      const dt = Math.min(50, now - last);
      last = now;
      clock += dt;
      positionBroadcastAcc += dt;

      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      // Background gradient
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, 'rgba(239,68,68,0.04)');
      grad.addColorStop(1, 'rgba(5,5,4,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Grid
      ctx.save();
      ctx.globalAlpha = 0.07;
      ctx.strokeStyle = '#9A9A95';
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x < w; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      ctx.restore();

      // Route glow
      ctx.save();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = 'rgba(239,68,68,0.18)';
      ctx.lineWidth = 18;
      ctx.beginPath();
      smooth.forEach((p, i) => {
        const x = p.x * w;
        const y = p.y * h;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
      ctx.restore();

      // Route line — with traveled/untraveled split
      const leader = ridersRef.current[0];
      const leaderIdx = Math.floor(leader.progress * smooth.length);

      ctx.save();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // Untraveled
      ctx.strokeStyle = '#4A4A46';
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      smooth.slice(leaderIdx).forEach((p, i) => {
        const x = p.x * w;
        const y = p.y * h;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();

      // Traveled
      ctx.setLineDash([]);
      ctx.strokeStyle = '#EF4444';
      ctx.lineWidth = 3;
      ctx.beginPath();
      smooth.slice(0, leaderIdx + 1).forEach((p, i) => {
        const x = p.x * w;
        const y = p.y * h;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
      ctx.restore();

      // Start & finish markers
      const start = smooth[0];
      const finish = smooth[smooth.length - 1];
      drawMarker(ctx, start.x * w, start.y * h, '#22C55E', 'START');
      drawMarker(ctx, finish.x * w, finish.y * h, '#EAB308', 'FINISH');

      // Checkpoint labels on route
      [0.25, 0.5, 0.75].forEach((p) => {
        const idx = Math.min(smooth.length - 1, Math.floor(p * smooth.length));
        const pt = smooth[idx];
        ctx.save();
        ctx.fillStyle = 'rgba(244,244,243,0.6)';
        ctx.beginPath();
        ctx.arc(pt.x * w, pt.y * h, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.font = '10px ui-monospace, JetBrains Mono, monospace';
        ctx.fillStyle = 'rgba(154,154,149,0.7)';
        ctx.fillText(`CP${Math.round(p * 3)}`, pt.x * w + 8, pt.y * h - 6);
        ctx.restore();
      });

      // Update rider positions (slow progress over time)
      for (const r of ridersRef.current) {
        r.progress = Math.min(0.99, r.progress + (0.000035 + r.speedJitter) * dt);
      }

      // Draw riders
      for (let i = ridersRef.current.length - 1; i >= 0; i--) {
        const r = ridersRef.current[i];
        const idx = Math.min(smooth.length - 1, Math.floor(r.progress * smooth.length));
        const pt = smooth[idx];
        const x = pt.x * w;
        const y = pt.y * h;

        // Pulse ring for leader
        if (r.isLeader) {
          const t = (clock / 2000) % 1;
          ctx.save();
          ctx.globalAlpha = 0.6 - t * 0.6;
          ctx.strokeStyle = r.color;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(x, y, 6 + t * 22, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }

        // Outer glow
        const glow = ctx.createRadialGradient(x, y, 2, x, y, 14);
        glow.addColorStop(0, `${r.color}CC`);
        glow.addColorStop(1, `${r.color}00`);
        ctx.fillStyle = glow;
        ctx.fillRect(x - 14, y - 14, 28, 28);

        // Ring
        ctx.beginPath();
        ctx.arc(x, y, 6.5, 0, Math.PI * 2);
        ctx.fillStyle = '#050504';
        ctx.fill();

        // Dot
        ctx.beginPath();
        ctx.arc(x, y, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = r.color;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    // Broadcast tick every 800ms for overlay updates
    const interval = window.setInterval(() => {
      setTick((t) => t + 1);
      setLeaderDistance((d) => +(d + 0.07 + Math.random() * 0.08).toFixed(1));
    }, 800);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.clearInterval(interval);
    };
  }, []);

  const leader = ridersRef.current[0];
  const second = ridersRef.current[1];
  const gap = leader && second ? Math.round((leader.progress - second.progress) * 241_000) : 0;

  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl border border-ink-800 bg-ink-900 shadow-2xl">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Top overlay: live chip + event name */}
      <div className="absolute top-4 left-4 right-4 flex items-start justify-between pointer-events-none">
        <div className="flex items-center gap-3">
          <span className="chip bg-signal-live/10 border-signal-live/30 text-signal-live">
            <span className="live-dot" />
            LIVE
          </span>
          <div className="chip">
            <span className="font-mono text-ink-300">{activeRiders} dots</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs font-mono text-ink-400 uppercase tracking-[0.16em]">
            GRAVEL WORLDS · KS
          </div>
          <div className="text-sm font-semibold text-ink-100 mt-0.5 font-mono">
            241 km · 2 480 m ↑
          </div>
        </div>
      </div>

      {/* Bottom overlay: leader / gap */}
      <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
        <div className="flex items-end justify-between gap-4">
          <div className="bg-ink-900/80 backdrop-blur-md border border-ink-800 rounded-2xl p-3 min-w-[180px]">
            <div className="text-micro font-mono uppercase tracking-[0.18em] text-ink-500">
              Race leader
            </div>
            <div className="mt-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse-live" />
              <span className="text-sm font-semibold text-ink-50">K. Haywood</span>
            </div>
            <div className="mt-1 flex items-center gap-2 text-xs font-mono">
              <span className="text-ink-400">{leaderDistance.toFixed(1)} km</span>
              <span className="text-ink-700">·</span>
              <span className="text-signal-live">+{(32.4 + Math.sin(tick / 3) * 1.8).toFixed(1)} km/h</span>
            </div>
          </div>
          <div className="hidden sm:block bg-ink-900/80 backdrop-blur-md border border-ink-800 rounded-2xl p-3">
            <div className="text-micro font-mono uppercase tracking-[0.18em] text-ink-500">
              Gap to P2
            </div>
            <div className="text-sm font-semibold text-ink-50 mt-1 font-mono">+{gap}m</div>
            <div className="text-xs font-mono text-signal-warn mt-0.5">closing</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function drawMarker(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  color: string,
  label: string
) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, 6, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.strokeStyle = '#050504';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.font = '10px ui-monospace, JetBrains Mono, monospace';
  ctx.fillStyle = color;
  ctx.fillText(label, x + 10, y + 3);
  ctx.restore();
}
