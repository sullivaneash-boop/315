"use client";

import { motion } from "motion/react";

export default function SpotifySection() {
  return (
    <section
      id="latest"
      className="relative bg-[var(--bg-soft)] py-[clamp(4rem,10vw,9rem)]"
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {/* Section label */}
          <p className="text-misregister font-mono text-xs tracking-[0.3em] text-[var(--muted)]">
            LATEST
          </p>
          <h2 className="mt-2 font-display text-4xl text-[var(--chalk)] md:text-5xl">
            PARANOID OUT NOW
          </h2>

          {/* Spotify embed */}
          <div className="mt-8 w-full max-w-[760px]">
            <iframe
              title="315mike on Spotify"
              style={{ borderRadius: 12 }}
              src="https://open.spotify.com/embed/artist/3QDBbWIix21H4AiOAJ6QJn?utm_source=generator&theme=0"
              width="100%"
              height={352}
              frameBorder={0}
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>

          {/* External Spotify link */}
          <a
            href="https://open.spotify.com/artist/3QDBbWIix21H4AiOAJ6QJn?si=riHZHoTgT2iwCRidJg1Fyw"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 border border-[var(--border)] px-6 py-3 font-label text-sm font-bold tracking-[0.15em] text-[var(--muted)] transition-all duration-[var(--fast)] hover:border-[var(--chalk)] hover:text-[var(--chalk)]"
          >
            OPEN ON SPOTIFY
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="opacity-50"
            >
              <path
                d="M3 9L9 3M9 3H4M9 3V8"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
