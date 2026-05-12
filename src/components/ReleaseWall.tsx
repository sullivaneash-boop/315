"use client";

import { motion } from "motion/react";
import { brandAssets } from "@/data/brandAssets";
import DecorativeMark from "./DecorativeMark";

function PlatformCard({
  label,
  sublabel,
  children,
  delay = 0,
}: {
  label: string;
  sublabel: string;
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
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />
      <div className="relative z-[2] flex items-center justify-between gap-4 border-b border-[var(--border)] px-4 py-3">
        <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--muted)]">{label}</span>
        <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--muted)] opacity-60">{sublabel}</span>
      </div>
      <div className="relative z-[2] w-full">{children}</div>
    </motion.div>
  );
}

export default function ReleaseWall() {
  return (
    <section id="latest" className="relative overflow-hidden bg-[var(--bg-soft)] py-[clamp(4rem,10vw,9rem)]">
      <div
        className="pointer-events-none absolute top-8 right-[4vw] select-none font-display leading-none text-white opacity-[0.025]"
        style={{ fontSize: "clamp(8rem, 22vw, 24rem)" }}
        aria-hidden="true"
      >
        315
      </div>

      <DecorativeMark src={brandAssets.marks.tag31502} className="top-12 left-[6%] w-[80px] opacity-[0.10] md:w-[100px]" />
      <DecorativeMark src={brandAssets.marks.tally01} className="right-[5%] bottom-16 w-[60px] opacity-[0.08]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <img src={brandAssets.dividers.music} alt="" aria-hidden="true" className="section-divider-accent" draggable={false} />
          <p className="text-misregister font-mono text-xs tracking-[0.3em] text-[var(--muted)]">LATEST</p>
          <h2 className="mt-2 font-display text-4xl text-[var(--chalk)] md:text-5xl">PARANOID OUT NOW</h2>
          <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-1">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--muted)]">TRACK_001 / 315MIKE</span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--muted)] opacity-50">ATL / 315 / ALL PLATFORMS</span>
          </div>
          <p className="mt-4 font-body text-sm text-[var(--muted)]">Listen on Spotify, Apple Music, and SoundCloud.</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 items-start gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] md:gap-[clamp(1rem,2vw,1.5rem)]">
          <PlatformCard label="TRACK_001 / SPOTIFY" sublabel="315MIKE" delay={0}>
            <iframe title="Spotify player for Paranoid by 315mike" src="https://open.spotify.com/embed/track/5kIx8hmh1W1PtxMAbY2LJB?utm_source=generator&theme=0" width="100%" height={352} frameBorder={0} allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" className="block w-full border-0" />
          </PlatformCard>
          <div className="flex flex-col gap-4">
            <PlatformCard label="APPLE MUSIC" sublabel="PARANOID" delay={0.08}>
              <div className="relative h-[175px] w-full">
                <iframe title="Apple Music player for Paranoid by 315mike" src="https://embed.music.apple.com/us/album/paranoid-single/1896101664?i=6765852929" className="absolute inset-0 block h-full w-full border-0" allowFullScreen allow="encrypted-media *; fullscreen *; clipboard-write *;" loading="lazy" />
              </div>
            </PlatformCard>
            <PlatformCard label="SOUNDCLOUD" sublabel="PARANOID" delay={0.14}>
              <div className="relative h-[161px] w-full">
                <iframe title="SoundCloud player for Paranoid by 315mike" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/user-703737967/paranoid-prod-chaos-1&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true&color=%23ff5500" className="absolute inset-0 block h-full w-full border-0" scrolling="no" allow="autoplay" loading="lazy" />
              </div>
            </PlatformCard>
          </div>
        </div>
      </div>
    </section>
  );
}
