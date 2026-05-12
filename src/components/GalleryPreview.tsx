"use client";

import { motion } from "motion/react";

const frames = [
  { label: "FRAME 001", gradient: "from-[var(--bruise)] to-[var(--bg)]" },
  { label: "FRAME 002", gradient: "from-[var(--panel)] to-[var(--bg-soft)]" },
  { label: "FRAME 003", gradient: "from-[var(--panel-2)] to-[var(--violet)]/20" },
  { label: "FRAME 004", gradient: "from-[var(--bg-soft)] to-[var(--panel)]" },
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
                className={`flex aspect-square items-end justify-start bg-gradient-to-br p-4 ${frame.gradient}`}
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

                <span className="relative font-mono text-[10px] tracking-[0.25em] text-[var(--muted)] md:text-xs">
                  {frame.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
