"use client";

import { motion } from "motion/react";
import { socials } from "@/data/socials";
import { SignalTicks } from "./doodles";

export default function SocialLinks() {
  return (
    <section
      id="socials"
      className="relative bg-[var(--bg)] py-[clamp(4rem,10vw,9rem)]"
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative"
        >
          {/* Scanline pulse bar behind heading */}
          <div
            className="pointer-events-none absolute -inset-x-4 inset-y-0 opacity-[0.03]"
            aria-hidden="true"
            style={{
              background: "repeating-linear-gradient(to bottom, transparent, transparent 2px, rgba(255,255,255,0.06) 2px, rgba(255,255,255,0.06) 3px)",
            }}
          />
          <p className="text-misregister relative font-mono text-xs tracking-[0.3em] text-[var(--muted)]">
            FOLLOW
          </p>
          <h2 className="relative mt-2 font-display text-4xl text-[var(--chalk)] md:text-5xl">
            315 everywhere.
          </h2>
        </motion.div>

        <div className="mt-10 border-t border-[var(--border)]">
          {socials.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-[var(--border)] py-5 transition-colors duration-[var(--fast)] hover:bg-[var(--infrared)]/10 md:py-6"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                duration: 0.35,
                delay: i * 0.06,
                ease: [0.2, 0.8, 0.2, 1],
              }}
            >
              <span className="font-label text-2xl font-black tracking-[0.1em] text-[var(--chalk)] transition-colors duration-[var(--fast)] group-hover:text-[var(--infrared)] md:text-4xl">
                {social.label.toUpperCase()}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 12 12"
                fill="none"
                className="text-[var(--muted)] transition-colors duration-[var(--fast)] group-hover:text-[var(--infrared)]"
              >
                <path
                  d="M3 9L9 3M9 3H4M9 3V8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </motion.a>
          ))}
        </div>

        {/* Signal tick row */}
        <div className="mt-6 flex justify-center">
          <SignalTicks className="text-[var(--muted)]" />
        </div>
      </div>
    </section>
  );
}
