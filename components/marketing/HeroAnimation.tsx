"use client";

export function HeroAnimation() {
  return (
    <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-card-lg border border-neutral-200 bg-white p-8 shadow-md">
      {/* Soft radial gradient - healthcare calm */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(30, 91, 96, 0.12), transparent 55%), radial-gradient(circle at 80% 70%, rgba(242, 153, 74, 0.08), transparent 50%)",
        }}
      />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(30, 91, 96, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 91, 96, 0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Healthcare icon - center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-32 w-32 opacity-10">
          <div className="absolute left-1/2 top-1/2 h-24 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary" />
          <div className="absolute left-1/2 top-1/2 h-6 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary" />
        </div>
      </div>

      {/* Subtle depth circles */}
      <div className="absolute left-[20%] top-[25%] h-20 w-20 rounded-full bg-brand-primary/5" />
      <div className="absolute right-[15%] top-[20%] h-24 w-24 rounded-full bg-brand-secondary/4" />
      <div className="absolute bottom-[25%] left-[30%] h-16 w-16 rounded-full bg-brand-primary/6" />
      <div className="absolute bottom-[30%] right-[20%] h-18 w-18 rounded-full bg-brand-primary-light/5" />

      {/* Simple data visualization bars - very subtle */}
      <div className="absolute bottom-12 right-12 flex items-end gap-2 opacity-15">
        <div className="h-8 w-3 rounded-sm bg-brand-primary" />
        <div className="h-14 w-3 rounded-sm bg-brand-primary" />
        <div className="h-10 w-3 rounded-sm bg-brand-secondary" />
        <div className="h-16 w-3 rounded-sm bg-brand-primary" />
        <div className="h-12 w-3 rounded-sm bg-brand-secondary" />
      </div>
    </div>
  );
}
