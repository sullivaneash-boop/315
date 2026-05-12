export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)] py-8">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-2 px-4 md:flex-row md:justify-between md:px-8">
        <div className="flex items-center gap-3">
          <img
            src="/assets/brand/315-mark-clean.png"
            alt="315"
            className="h-8 w-auto opacity-70"
            draggable={false}
          />
          <p className="font-mono text-xs tracking-[0.15em] text-[var(--muted)]">
            &copy; 2026
          </p>
        </div>
        <p className="font-mono text-xs tracking-[0.15em] text-[var(--muted)]">
          Atlanta / All platforms
        </p>
      </div>
    </footer>
  );
}
