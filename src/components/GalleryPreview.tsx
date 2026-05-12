"use client";

import { motion } from "motion/react";

const frames = [
  { label: "FRAME_001", src: "/assets/photos/photo-01.png" },
  { label: "FRAME_002", src: "/assets/photos/photo-02.png" },
  { label: "FRAME_003", src: "/assets/photos/photo-03.png" },
  { label: "FRAME_004", src: "/assets/photos/photo-04.png" },
];

export default function GalleryPreview() {
  return (
    <section id="photos" className="relative overflow-hidden bg-[var(--bg-soft)] py-[clamp(4rem,10vw,9rem)]">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <p className="text-misregister font-mono text-xs tracking-[0.3em] text-[var(--muted)]">PHOTOS</p>
          <h2 className="mt-2 font-display text-4xl text-[var(--chalk)] md:text-5xl">PHOTO ARCHIVE</h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {frames.map((frame, i) => (
            <motion.div
              key={frame.label}
              className="group relative overflow-hidden border border-[var(--border)]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={frame.src}
                  alt={frame.label}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  draggable={false}
                />
                {/* Subtle grain texture */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.06]"
                  aria-hidden="true"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    backgroundSize: "128px 128px",
                  }}
                />
                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 pb-2.5 pt-6">
                  <span className="font-mono text-[9px] tracking-[0.25em] text-[var(--chalk)] opacity-60">{frame.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
