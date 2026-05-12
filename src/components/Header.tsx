"use client";

import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

const NAV_ITEMS = [
  { label: "MUSIC", href: "#latest" },
  { label: "VIDEOS", href: "#videos" },
  { label: "PHOTOS", href: "#photos" },
  { label: "BOOKING", href: "#booking" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "bg-[var(--bg)]/95 backdrop-blur-sm border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4 md:px-8">
        <a
          href="#"
          className="font-display text-2xl tracking-wide text-[var(--chalk)]"
        >
          315MIKE
        </a>

        {/* Desktop nav */}
        <nav className="hidden gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-label text-sm font-bold tracking-[0.15em] text-[var(--muted)] transition-colors duration-[var(--fast)] hover:text-[var(--chalk)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu */}
        <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
          <Dialog.Trigger asChild>
            <button
              className="flex flex-col gap-1.5 md:hidden"
              aria-label="Open menu"
            >
              <span className="block h-[2px] w-6 bg-[var(--chalk)]" />
              <span className="block h-[2px] w-6 bg-[var(--chalk)]" />
              <span className="block h-[2px] w-4 bg-[var(--muted)]" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md" />
            <Dialog.Content className="fixed inset-0 z-50 flex flex-col items-start justify-center px-8">
              <Dialog.Title className="sr-only">Navigation</Dialog.Title>
              <Dialog.Close asChild>
                <button
                  className="absolute top-6 right-6 font-label text-lg font-bold tracking-widest text-[var(--muted)] hover:text-[var(--chalk)]"
                  aria-label="Close menu"
                >
                  CLOSE
                </button>
              </Dialog.Close>
              <nav className="flex flex-col gap-6">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-5xl text-[var(--chalk)] transition-colors hover:text-[var(--infrared)]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-12 flex gap-6 font-mono text-xs text-[var(--muted)]">
                <span>ATL</span>
                <span>315</span>
                <span>2026</span>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
