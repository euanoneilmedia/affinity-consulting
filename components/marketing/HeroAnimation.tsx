"use client";

import { useEffect, useState } from "react";

const TARGET_PERCENT = 100;
const BAR_HEIGHTS = [44, 62, 52, 78];

export function HeroAnimation() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let animationFrame = 0;
    let startTime = 0;
    const durationMs = 1400;

    const animate = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / durationMs, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCounter(Math.round(TARGET_PERCENT * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-card-lg border border-brand-primary/20 bg-gradient-to-br from-brand-primary-dark via-brand-primary to-brand-primary-light p-8 shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10" />

      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(circle at 22% 18%, rgba(255, 255, 255, 0.2), transparent 54%), radial-gradient(circle at 82% 72%, rgba(63, 169, 168, 0.3), transparent 50%)",
        }}
      />

      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255, 255, 255, 0.75) 1px, transparent 1px), radial-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px)",
            backgroundPosition: "0 0, 12px 12px",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="absolute right-6 top-6 z-10 hero-float-slow">
        <div className="relative h-10 w-10 rounded-full border border-white/35 bg-white/10">
          <span className="absolute left-1/2 top-1/2 h-5 w-[2px] -translate-x-1/2 -translate-y-1/2 rounded bg-white/85" />
          <span className="absolute left-1/2 top-1/2 h-[2px] w-5 -translate-x-1/2 -translate-y-1/2 rounded bg-white/85" />
        </div>
      </div>

      <div className="absolute left-[14%] top-[16%] h-24 w-24 rounded-full border border-white/20 hero-pulse-soft" />
      <div className="absolute left-[64%] top-[28%] h-3 w-3 rounded-full bg-white/80 hero-float-fast" />
      <div className="absolute left-[72%] top-[34%] h-2 w-2 rounded-full bg-brand-primary-light/90 hero-float-slow" />
      <div className="absolute left-[78%] top-[38%] h-4 w-4 rounded-full border border-white/35 bg-white/10 hero-float-slower" />

      <div className="relative z-10 max-w-[16rem] rounded-2xl border border-white/30 bg-white/12 p-5 hero-enter-text backdrop-blur-[1px]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">
          Insight Snapshot
        </p>
        <div className="mt-2 flex items-end gap-1 text-white">
          <span className="text-5xl font-semibold leading-none sm:text-6xl">{counter}</span>
          <span className="pb-1 text-2xl font-semibold leading-none">%</span>
        </div>
        <p className="mt-2 text-sm font-medium text-white/85">Sector focused</p>
      </div>

      <div className="absolute bottom-6 right-6 z-10 w-[10.5rem] rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur-[1px] sm:bottom-8 sm:right-8">
        <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70">
          Service Momentum
        </div>
        <div className="flex h-24 items-end gap-2">
          {BAR_HEIGHTS.map((height, index) => (
            <div
              key={height}
              className={`hero-bar-rise-${index + 1} w-6 rounded-t-md bg-white/85`}
              style={{ height }}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-16 left-8 h-8 w-8 rounded-full border border-white/30 bg-white/10 hero-float-slow" />
      <div className="absolute bottom-20 left-20 h-2 w-2 rounded-full bg-white/85 hero-float-fast" />
      <div className="absolute right-24 top-1/2 h-16 w-16 rounded-full border border-white/20" />
      <div className="absolute right-[5.6rem] top-[56%] h-1.5 w-1.5 rounded-full bg-white/90 hero-pulse-soft" />
    </div>
  );
}
