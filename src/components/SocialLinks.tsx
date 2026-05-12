"use client";

import { motion } from "motion/react";
import { socialLinks } from "@/data/socials";

export default function SocialLinks() {
  return (
    <section id="socials" className="relative overflow-hidden bg-[var(--bg)] py-[clamp(4rem,10vw,9rem)]">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <p className="text-misregister font-mono text-xs tracking-[0.3em] text-[var(--muted)]">LINKS</p>
          <h2 className="mt-2 font-display text-4xl text-[var(--chalk)] md:text-5xl">ALL PLATFORMS</h2>
          <p className="mt-2 font-mono text-[11px] tracking-[0.2em] text-[var(--muted)] opacity-60">
            Follow, stream, watch.
          </p>
        </motion.div>

        <div className="social-grid mt-10">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card group"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.35, delay: i * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="social-card-top">
                <span>{link.index}</span>
                <span>{link.type.toUpperCase()}</span>
              </div>
              <div className="social-card-main">
                <h3>{link.label.toUpperCase()}</h3>
                <span className="social-arrow" aria-hidden="true">&#x2197;</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
