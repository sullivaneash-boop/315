"use client";

import dynamic from "next/dynamic";
import { brandAssets } from "@/data/brandAssets";
import DecorativeMark from "./DecorativeMark";

const ASCIIText = dynamic(() => import("./ASCIIText"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 30% 70%, rgba(75,44,100,0.25) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 20%, rgba(155,17,30,0.12) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, var(--bg-soft) 0%, var(--bg) 100%)
        `,
      }}
    >
      {/* Paranoid cover art background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: "url(/assets/paranoid-cover.jpg)" }}
      />

      {/* Dark pocket behind center content */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 50% 48%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 40%, transparent 70%)",
        }}
      />

      {/* Brand marks — repositioned to avoid center content */}
      <DecorativeMark
        src={brandAssets.marks.star01}
        className="top-[14%] right-[5%] w-[90px] opacity-[0.10] md:w-[140px]"
      />
      <DecorativeMark
        src={brandAssets.marks.tag31501}
        className="bottom-[12%] left-[3%] w-[80px] opacity-[0.08] md:w-[120px]"
      />
      <DecorativeMark
        src={brandAssets.marks.crack01}
        className="top-[25%] right-[2%] hidden w-[160px] opacity-[0.07] md:block"
      />

      {/* ── Hero content panel ── */}
      <div className="hero-content relative z-10 flex w-full max-w-[420px] flex-col items-center px-6 text-center md:max-w-[640px]">

        {/* Status label */}
        <p className="hero-status font-mono text-[10px] tracking-[0.3em] text-[var(--muted)] uppercase md:text-[11px]">
          <span className="text-[var(--infrared)] opacity-70">&#x25CF;</span>
          &nbsp;&nbsp;TRACK_001 / PARANOID
        </p>

        {/* ASCII Wordmark */}
        <div
          className="relative mt-3 w-full md:mt-4"
          style={{
            height: "clamp(140px, 26vw, 300px)",
            maxWidth: "800px",
          }}
        >
          <ASCIIText
            text="315MIKE"
            enableWaves={false}
            asciiFontSize={5}
            textFontSize={200}
            textColor="#f4f1e8"
            planeBaseHeight={8}
          />
          {/* Subtle glow behind wordmark */}
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(39,22,47,0.35) 0%, transparent 65%)",
            }}
          />
        </div>

        {/* Subtitle */}
        <p className="-mt-1 font-label text-lg font-bold tracking-[0.22em] text-[var(--chalk)] md:mt-0 md:text-xl">
          PARANOID OUT NOW
        </p>

        {/* CTAs — corrupted control style */}
        <div className="mt-6 flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center sm:gap-3 md:mt-8">
          <a
            href="https://open.spotify.com/artist/3QDBbWIix21H4AiOAJ6QJn?si=riHZHoTgT2iwCRidJg1Fyw"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta group"
          >
            <span className="hero-cta-index">01</span>
            <span className="hero-cta-sep">/</span>
            <span className="hero-cta-label">LISTEN NOW</span>
          </a>
          <a
            href="https://youtu.be/T-RfOVuJh2s?si=k8mDusuYOVToMD7k"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta group"
          >
            <span className="hero-cta-index">02</span>
            <span className="hero-cta-sep">/</span>
            <span className="hero-cta-label">WATCH VIDEO</span>
          </a>
        </div>

        {/* Metadata strip */}
        <div className="hero-meta mt-8 flex w-full flex-col items-center gap-1.5 md:mt-10">
          <div className="h-px w-12 bg-[var(--chalk)] opacity-[0.08]" aria-hidden="true" />
          <p className="font-mono text-[10px] tracking-[0.25em] text-[var(--muted)] uppercase md:text-[11px]">
            ATLANTA, GA / ALL PLATFORMS
          </p>
          <p className="hero-signal font-mono text-[9px] tracking-[0.3em] text-[var(--muted)] uppercase opacity-40 md:text-[10px]">
            SIGNAL ACTIVE / 03:15
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg)] to-transparent" />
    </section>
  );
}
