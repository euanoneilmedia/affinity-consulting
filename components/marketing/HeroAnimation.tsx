"use client";

export function HeroAnimation() {
  return (
    <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-card-lg border border-neutral-700/60 bg-gradient-to-br from-background-card via-background-primary to-brand-primary/5 p-8 shadow-card">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 78, 90, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 78, 90, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating data nodes */}
      <div className="absolute left-[15%] top-[20%] h-16 w-16 animate-float rounded-full bg-brand-primary/20 backdrop-blur-sm">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-3 w-3 rounded-full bg-brand-primary" />
        </div>
        <div className="absolute -inset-4 animate-pulse-ring rounded-full border-2 border-brand-primary/40" />
      </div>

      <div className="absolute right-[20%] top-[15%] h-20 w-20 animate-float-delayed rounded-full bg-brand-secondary/20 backdrop-blur-sm">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-4 rounded-full bg-brand-secondary" />
        </div>
        <div
          className="absolute -inset-4 animate-pulse-ring rounded-full border-2 border-brand-secondary/40"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div
        className="absolute bottom-[25%] left-[25%] h-14 w-14 animate-float rounded-full bg-brand-primary/20 backdrop-blur-sm"
        style={{ animationDelay: "2s" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-3 w-3 rounded-full bg-brand-primary" />
        </div>
      </div>

      <div className="absolute bottom-[30%] right-[15%] h-12 w-12 animate-float-delayed rounded-full bg-brand-primary/20 backdrop-blur-sm">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-2.5 w-2.5 rounded-full bg-brand-primary-light" />
        </div>
      </div>

      {/* Medical cross icon - center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-32 w-32 animate-pulse opacity-20">
          <div className="absolute left-1/2 top-1/2 h-24 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary" />
          <div className="absolute left-1/2 top-1/2 h-6 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary" />
        </div>
      </div>

      {/* Connecting lines */}
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <line
          x1="20%"
          y1="25%"
          x2="45%"
          y2="45%"
          stroke="rgba(0, 78, 90, 0.3)"
          strokeWidth="2"
          strokeDasharray="5,5"
          className="animate-pulse"
        />
        <line
          x1="75%"
          y1="20%"
          x2="55%"
          y2="55%"
          stroke="rgba(216, 126, 82, 0.3)"
          strokeWidth="2"
          strokeDasharray="5,5"
          className="animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <line
          x1="35%"
          y1="70%"
          x2="50%"
          y2="55%"
          stroke="rgba(0, 78, 90, 0.3)"
          strokeWidth="2"
          strokeDasharray="5,5"
          className="animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </svg>

      {/* Data visualization bars */}
      <div className="absolute bottom-12 right-12 flex items-end gap-2 opacity-40">
        <div
          className="h-8 w-3 animate-pulse rounded-sm bg-brand-primary"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="h-14 w-3 animate-pulse rounded-sm bg-brand-primary"
          style={{ animationDelay: "0.2s" }}
        />
        <div
          className="h-10 w-3 animate-pulse rounded-sm bg-brand-secondary"
          style={{ animationDelay: "0.4s" }}
        />
        <div
          className="h-16 w-3 animate-pulse rounded-sm bg-brand-primary"
          style={{ animationDelay: "0.6s" }}
        />
        <div
          className="h-12 w-3 animate-pulse rounded-sm bg-brand-secondary"
          style={{ animationDelay: "0.8s" }}
        />
      </div>

      {/* Forward arrow indication */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-30">
        <div className="flex items-center gap-2">
          <div className="h-1 w-16 animate-pulse rounded-full bg-brand-primary" />
          <div className="h-0 w-0 border-b-8 border-l-8 border-t-8 border-b-transparent border-l-brand-primary border-t-transparent" />
        </div>
      </div>

      {/* Rotating circle accent */}
      <div className="absolute left-12 top-12 h-24 w-24 animate-rotate-slow rounded-full border-2 border-dashed border-brand-primary/20" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background-primary/60 via-transparent to-transparent" />
    </div>
  );
}
