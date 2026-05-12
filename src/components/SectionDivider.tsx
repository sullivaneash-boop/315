import { ChalkStar } from "./doodles";

export default function SectionDivider({
  label = "ARCHIVE_004",
  code = "315",
}: {
  label?: string;
  code?: string;
}) {
  return (
    <div className="relative mx-auto max-w-[1440px] px-4 md:px-8" aria-hidden="true">
      <div className="tape-lift-hover relative flex items-center gap-4 py-1">
        <div className="h-px flex-1 bg-[var(--border)]" />
        <div className="flex items-center gap-3">
          <ChalkStar size={8} className="text-[var(--infrared)] opacity-60" />
          <span className="font-mono text-[9px] tracking-[0.2em] text-[var(--muted)] opacity-40">
            {label} — {code}
          </span>
        </div>
        <div className="h-px flex-1 bg-[var(--border)]" />
      </div>
    </div>
  );
}
