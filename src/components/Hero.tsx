"use client";

import dynamic from "next/dynamic";
import { brandAssets } from "@/data/brandAssets";
import DecorativeMark from "./DecorativeMark";

const ASCIIText = dynamic(() => import("./ASCIIText"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
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

      {/* Ghosted 315 background mark */}
      <div
        className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden opacity-[0.03]"
        aria-hidden="true"
      >
        <span className="font-display text-[40vw] leading-none text-white">
          315
        </span>
      </div>

      {/* Brand marks */}
      <DecorativeMark
        src={brandAssets.marks.star01}
        className="top-[12%] right-[6%] w-[120px] opacity-[0.14] md:w-[160px]"
      />
      <DecorativeMark
        src={brandAssets.marks.tag31501}
        className="bottom-[18%] left-[4%] w-[100px] opacity-[0.12] md:w-[130px]"
      />
      <DecorativeMark
        src={brandAssets.marks.crack01}
        className="top-[30%] right-[2%] hidden w-[180px] opacity-[0.10] md:block md:w-[220px]"
      />

      {/* Centered content */}
      <div className="relative z-10 flex w-full flex-col items-center px-4 text-center">
        {/* ASCII Wordmark */}
        <div
          className="relative w-full"
          style={{
            height: "clamp(180px, 30vw, 340px)",
            maxWidth: "900px",
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
        </div>

        {/* Subtitle */}
        <p className="mt-4 font-label text-xl font-bold tracking-[0.2em] text-[var(--chalk)] md:text-2xl">
          PARANOID OUT NOW
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href="https://open.spotify.com/artist/3QDBbWIix21H4AiOAJ6QJn?si=riHZHoTgT2iwCRidJg1Fyw"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center border border-[var(--chalk)] bg-transparent px-8 py-3 font-label text-sm font-bold tracking-[0.15em] text-[var(--chalk)] transition-all duration-[var(--fast)] hover:translate-x-[1px] hover:translate-y-[-1px] hover:bg-[var(--chalk)] hover:text-[var(--bg)]"
          >
            LISTEN NOW
          </a>
          <a
            href="https://youtu.be/T-RfOVuJh2s?si=k8mDusuYOVToMD7k"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-[var(--muted)] bg-transparent px-8 py-3 font-label text-sm font-bold tracking-[0.15em] text-[var(--muted)] transition-all duration-[var(--fast)] hover:translate-x-[1px] hover:translate-y-[-1px] hover:border-[var(--chalk)] hover:text-[var(--chalk)]"
          >
            WATCH VIDEO
          </a>
        </div>

        {/* Metadata */}
        <p className="mt-10 font-mono text-xs tracking-[0.2em] text-[var(--muted)]">
          ATL / 315 / ALL PLATFORMS
        </p>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg)] to-transparent" />
    </section>
  );
}
