"use client";

import { motion } from "motion/react";
import { ChalkStar, CornerRoomLines } from "./doodles";

const EXTERNAL_ARROW = (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-50">
    <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

function PlatformCard({
  label,
  sublabel,
  variant = "default",
  children,
  delay = 0,
}: {
  label: string;
  sublabel: string;
  variant?: "spotify" | "apple" | "soundcloud" | "default";
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      className="platform-card relative overflow-hidden border border-[var(--border)] bg-[var(--panel)] transition-colors duration-[var(--fast)] hover:border-[var(--muted)]/30"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {/* Grain on card background */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* Variant-specific corner accents */}
      {variant === "spotify" && (
        <>
          <ChalkStar size={10} className="pointer-events-none absolute top-2 right-2 z-[3] text-[var(--violet)] opacity-40" />
          <span className="metadata-crawl pointer-events-none absolute bottom-1 left-3 z-[3] font-mono text-[7px] tracking-[0.15em] text-[var(--muted)] opacity-20">
            ARCHIVE_PLAYER_315
          </span>
          <span className="pointer-events-none absolute right-3 bottom-1 z-[3] font-mono text-[7px] tracking-[0.15em] text-[var(--muted)] opacity-20">
            VOL_01
          </span>
        </>
      )}

      {variant === "apple" && (
        <>
          <div className="pointer-events-none absolute top-0 left-0 z-[3] flex h-full w-5 items-center justify-center border-r border-[var(--border)]">
            <span className="origin-center -rotate-90 whitespace-nowrap font-mono text-[6px] tracking-[0.25em] text-[var(--muted)] opacity-30">
              APPLE MUSIC
            </span>
          </div>
          <ChalkStar size={6} className="pointer-events-none absolute top-2 right-2 z-[3] text-[var(--infrared)] opacity-50" />
        </>
      )}

      {variant === "soundcloud" && (
        <>
          <CornerRoomLines position="tl" className="pointer-events-none absolute top-0 left-0 z-[3] text-[var(--muted)] opacity-40" />
          <CornerRoomLines position="br" className="pointer-events-none absolute right-0 bottom-0 z-[3] text-[var(--muted)] opacity-40" />
          <span className="pointer-events-none absolute bottom-1 left-3 z-[3] font-mono text-[7px] tracking-[0.15em] text-[var(--infrared)] opacity-25">
            INFRARED SIGNAL
          </span>
          <span className="pointer-events-none absolute right-3 bottom-1 z-[3] font-mono text-[7px] tracking-[0.15em] text-[var(--muted)] opacity-20">
            SC_315
          </span>
          {/* Scanline band at bottom */}
          <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-[3] h-4 opacity-[0.06]"
            style={{
              background: "repeating-linear-gradient(to bottom, transparent, transparent 1px, rgba(255,255,255,0.08) 1px, rgba(255,255,255,0.08) 2px)",
            }}
          />
        </>
      )}

      {/* Meta strip */}
      <div className="relative z-[2] flex items-center justify-between gap-4 border-b border-[var(--border)] px-4 py-3">
        <span className="metadata-crawl font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--muted)]">
          {label}
        </span>
        <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--muted)] opacity-60">
          {sublabel}
        </span>
      </div>

      {/* Embed */}
      <div className="relative z-[2] w-full">{children}</div>
    </motion.div>
  );
}

export default function ReleaseWall() {
  return (
    <section
      id="latest"
      className="relative overflow-hidden bg-[var(--bg-soft)] py-[clamp(4rem,10vw,9rem)]"
    >
      {/* Ghosted background mark */}
      <div
        className="pointer-events-none absolute top-8 right-[4vw] select-none font-display leading-none text-white opacity-[0.025]"
        style={{ fontSize: "clamp(8rem, 22vw, 24rem)" }}
        aria-hidden="true"
      >
        315
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <p className="text-misregister font-mono text-xs tracking-[0.3em] text-[var(--muted)]">
            LATEST
          </p>
          <h2 className="mt-2 font-display text-4xl text-[var(--chalk)] md:text-5xl">
            PARANOID OUT NOW
          </h2>
          <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-1">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--muted)]">
              TRACK_001 / 315MIKE
            </span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--muted)] opacity-50">
              ATL / 315 / ALL PLATFORMS
            </span>
          </div>
          <p className="mt-4 font-body text-sm text-[var(--muted)]">
            Listen on Spotify, Apple Music, and SoundCloud.
          </p>
        </motion.div>

        {/* Release wall grid */}
        <div className="mt-10 grid grid-cols-1 items-start gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] md:gap-[clamp(1rem,2vw,1.5rem)]">
          {/* Left: Spotify */}
          <PlatformCard label="TRACK_001 / SPOTIFY" sublabel="315MIKE" variant="spotify" delay={0}>
            <iframe
              title="Spotify player for Paranoid by 315mike"
              src="https://open.spotify.com/embed/track/5kIx8hmh1W1PtxMAbY2LJB?utm_source=generator&theme=0"
              width="100%"
              height={352}
              frameBorder={0}
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="block w-full border-0"
            />
          </PlatformCard>

          {/* Right: Apple Music + SoundCloud stacked */}
          <div className="flex flex-col gap-4">
            <PlatformCard label="APPLE MUSIC" sublabel="PARANOID" variant="apple" delay={0.08}>
              <div className="relative h-[175px] w-full">
                <iframe
                  title="Apple Music player for Paranoid by 315mike"
                  src="https://embed.music.apple.com/us/album/paranoid-single/1896101664?i=6765852929"
                  className="absolute inset-0 block h-full w-full border-0"
                  allowFullScreen
                  allow="encrypted-media *; fullscreen *; clipboard-write *;"
                  loading="lazy"
                />
              </div>
            </PlatformCard>

            <PlatformCard label="SOUNDCLOUD" sublabel="PARANOID" variant="soundcloud" delay={0.14}>
              <div className="relative h-[400px] w-full">
                <iframe
                  title="SoundCloud player for Paranoid by 315mike"
                  src="https://w.soundcloud.com/player/?url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2Fsoundcloud%253Atracks%253A2311543091&auto_play=false&show_artwork=true&visual=true&origin=iframely&show_comments=false"
                  className="absolute inset-0 block h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </PlatformCard>
          </div>
        </div>

        {/* External platform buttons */}
        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.4, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <a
            href="https://open.spotify.com/track/5kIx8hmh1W1PtxMAbY2LJB"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--border)] px-5 py-2.5 font-label text-xs font-bold tracking-[0.15em] text-[var(--muted)] transition-all duration-[var(--fast)] hover:border-[var(--chalk)] hover:text-[var(--chalk)]"
          >
            OPEN ON SPOTIFY {EXTERNAL_ARROW}
          </a>
          <a
            href="https://embed.music.apple.com/us/album/paranoid-single/1896101664?i=6765852929"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--border)] px-5 py-2.5 font-label text-xs font-bold tracking-[0.15em] text-[var(--muted)] transition-all duration-[var(--fast)] hover:border-[var(--chalk)] hover:text-[var(--chalk)]"
          >
            OPEN ON APPLE MUSIC {EXTERNAL_ARROW}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
