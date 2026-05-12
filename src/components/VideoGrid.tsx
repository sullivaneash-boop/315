"use client";

import { motion } from "motion/react";
import { videos } from "@/data/videos";

export default function VideoGrid() {
  return (
    <section
      id="videos"
      className="relative bg-[var(--bg)] py-[clamp(4rem,10vw,9rem)]"
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <p className="text-misregister font-mono text-xs tracking-[0.3em] text-[var(--muted)]">
            VIDEOS
          </p>
          <h2 className="mt-2 font-display text-4xl text-[var(--chalk)] md:text-5xl">
            OFFICIAL VISUALS
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {videos.map((video, i) => (
            <motion.a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative block overflow-hidden border border-[var(--border)] bg-[var(--panel)] ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.4,
                delay: i * 0.08,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              whileHover={{ scale: 1.015 }}
            >
              {/* Thumbnail */}
              <div
                className={`relative w-full overflow-hidden ${
                  i === 0 ? "aspect-video" : "aspect-video"
                }`}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={`${video.title} thumbnail`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30 transition-opacity duration-200 group-hover:bg-black/10" />

                {/* Static flash on hover */}
                <div className="pointer-events-none absolute inset-0 bg-white/0 transition-all duration-75 group-hover:bg-white/5" />

                {/* Play icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    width={i === 0 ? 64 : 44}
                    height={i === 0 ? 64 : 44}
                    viewBox="0 0 44 44"
                    fill="none"
                    className="opacity-70 drop-shadow-lg transition-opacity group-hover:opacity-100"
                  >
                    <polygon
                      points="16,10 36,22 16,34"
                      fill="var(--chalk)"
                      strokeWidth="1.5"
                      stroke="var(--chalk)"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Label bar */}
              <div className="border-t border-[var(--border)] px-4 py-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.2em] text-[var(--muted)]">
                    {video.title}
                  </span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="opacity-30"
                  >
                    <path
                      d="M3 9L9 3M9 3H4M9 3V8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <p className={`mt-1 font-display text-[var(--chalk)] ${i === 0 ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>
                  {video.song}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
