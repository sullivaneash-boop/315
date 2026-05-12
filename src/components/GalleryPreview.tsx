"use client";

import { motion } from "motion/react";
import { CropMarks, CornerRoomLines } from "./doodles";

const frames = [
  {
    label: "FRAME_001",
    subtitle: "ASSET PENDING",
    style: "missing",
    gradient: "from-[var(--bruise)]/60 via-[var(--panel)] to-[var(--bg)]",
  },
  {
    label: "CONTACT_02A",
    subtitle: "315-CT-02",
    style: "xerox",
    gradient: "from-[var(--panel)] to-[var(--bg-soft)]",
  },
  {
    label: "GHOST_315",
    subtitle: "",
    style: "ghost",
    gradient: "from-[var(--panel-2)] to-[var(--violet)]/10",
  },
  {
    label: "CORRUPT_CONTACT",
    subtitle: "315-CC-06",
    style: "corrupt",
    gradient: "from-[var(--bg-soft)] to-[var(--panel)]",
  },
];

export default function GalleryPreview() {
  return (
    <section
      id="photos"
      className="relative bg-[var(--bg-soft)] py-[clamp(4rem,10vw,9rem)]"
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <p className="text-misregister font-mono text-xs tracking-[0.3em] text-[var(--muted)]">
            PHOTOS
          </p>
          <h2 className="mt-2 font-display text-4xl text-[var(--chalk)] md:text-5xl">
            SELECTED FRAMES
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {frames.map((frame, i) => (
            <motion.div
              key={frame.label}
              className="group relative overflow-hidden border border-[var(--border)]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.4,
                delay: i * 0.06,
                ease: [0.2, 0.8, 0.2, 1],
              }}
            >
              <div
                className={`relative flex aspect-square flex-col items-center justify-center bg-gradient-to-br p-4 ${frame.gradient}`}
              >
                {/* Grain per card */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    backgroundSize: "128px 128px",
                  }}
                />

                {/* Flash on hover */}
                <div className="pointer-events-none absolute inset-0 bg-white/0 transition-all duration-75 group-hover:bg-white/[0.03]" />

                {/* Style: Missing Frame */}
                {frame.style === "missing" && (
                  <>
                    <CropMarks className="text-[var(--chalk)]" />
                    <span className="relative font-mono text-sm tracking-[0.3em] text-[var(--chalk)] opacity-30 md:text-base">
                      {frame.label}
                    </span>
                    <span className="relative mt-2 font-mono text-[8px] tracking-[0.2em] text-[var(--muted)] opacity-40">
                      {frame.subtitle}
                    </span>
                  </>
                )}

                {/* Style: Xerox Contact */}
                {frame.style === "xerox" && (
                  <>
                    <div className="absolute top-2 left-2 font-mono text-[7px] tracking-[0.15em] text-[var(--muted)] opacity-30">
                      {frame.label}
                    </div>
                    <div className="absolute top-2 right-2 font-mono text-[7px] tracking-[0.15em] text-[var(--muted)] opacity-20">
                      {frame.subtitle}
                    </div>
                    {/* Dusty border inner */}
                    <div className="absolute inset-3 border border-dashed border-[var(--muted)]/10" />
                    {/* Contact strip lines */}
                    <div className="absolute bottom-3 left-3 right-3 flex gap-1">
                      {Array.from({ length: 8 }).map((_, j) => (
                        <div key={j} className="h-px flex-1 bg-[var(--muted)] opacity-10" />
                      ))}
                    </div>
                  </>
                )}

                {/* Style: Ghost 315 */}
                {frame.style === "ghost" && (
                  <>
                    <CornerRoomLines position="tl" className="absolute top-1 left-1 text-[var(--muted)] opacity-30" />
                    <CornerRoomLines position="br" className="absolute right-1 bottom-1 text-[var(--muted)] opacity-30" />
                    <span className="pointer-events-none select-none font-display text-[4rem] leading-none text-white opacity-[0.04] md:text-[5rem]">
                      315
                    </span>
                  </>
                )}

                {/* Style: Corrupt Contact */}
                {frame.style === "corrupt" && (
                  <>
                    <div className="absolute top-2 left-2 font-mono text-[7px] tracking-[0.15em] text-[var(--muted)] opacity-25">
                      {frame.label}
                    </div>
                    {/* Scanline band */}
                    <div
                      className="pointer-events-none absolute inset-x-0 top-1/3 h-8 opacity-[0.05]"
                      style={{
                        background: "repeating-linear-gradient(to bottom, transparent, transparent 1px, rgba(255,255,255,0.1) 1px, rgba(255,255,255,0.1) 2px)",
                      }}
                    />
                    {/* Timestamp */}
                    <span className="relative font-mono text-[8px] tracking-[0.15em] text-[var(--muted)] opacity-25">
                      00:00:00:00
                    </span>
                    <span className="relative mt-1 font-mono text-[7px] tracking-[0.15em] text-[var(--muted)] opacity-15">
                      {frame.subtitle}
                    </span>
                    {/* Broken edge */}
                    <div className="absolute right-0 top-4 bottom-4 w-px bg-[var(--infrared)] opacity-10" />
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
