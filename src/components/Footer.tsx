export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)] py-8">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-2 px-4 md:flex-row md:justify-between md:px-8">
        <div className="flex flex-col items-center gap-0.5 md:items-start">
          <p className="font-mono text-xs tracking-[0.15em] text-[var(--muted)]">
            315mike &copy; 2026
          </p>
          <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--muted)] opacity-50">
            All rights reserved.
          </p>
        </div>
        <p className="font-mono text-xs tracking-[0.15em] text-[var(--muted)]">
          Atlanta / All platforms
        </p>
      </div>
    </footer>
  );
}
