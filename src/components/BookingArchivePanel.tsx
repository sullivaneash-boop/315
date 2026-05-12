import { CornerRoomLines, BoxedStamp } from "./doodles";

export default function BookingArchivePanel() {
  return (
    <div className="relative hidden border border-[var(--border)] bg-[var(--panel-2)] p-6 md:block">
      <CornerRoomLines position="tl" className="absolute top-1 left-1 text-[var(--muted)]" />
      <CornerRoomLines position="br" className="absolute right-1 bottom-1 text-[var(--muted)]" />

      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      <div className="relative flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--muted)]">BOOKING_001</span>
          <BoxedStamp className="text-[var(--muted)]" />
        </div>

        <div className="h-px bg-[var(--border)]" />

        <div className="flex flex-col gap-2.5">
          {[
            ["STATUS", "OPEN"],
            ["RESPONSE", "48-72H"],
            ["CHANNEL", "DIRECT"],
          ].map(([key, val]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="font-mono text-[9px] tracking-[0.15em] text-[var(--muted)] opacity-50">{key}</span>
              <span className="font-mono text-[9px] tracking-[0.15em] text-[var(--chalk)] opacity-60">{val}</span>
            </div>
          ))}
        </div>

        <div className="h-px bg-[var(--border)]" />

        <span className="font-mono text-[8px] tracking-[0.2em] text-[var(--violet)] opacity-60">
          315MIKE // CONTACT SYSTEM
        </span>
      </div>
    </div>
  );
}
