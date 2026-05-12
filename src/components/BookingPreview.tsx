"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { brandAssets } from "@/data/brandAssets";
import DecorativeMark from "./DecorativeMark";

const INQUIRY_TYPES = ["Show", "Feature", "Video", "Brand", "Press", "Other"];

export default function BookingPreview() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="booking" className="relative overflow-hidden bg-[var(--panel)] py-[clamp(4rem,10vw,9rem)]">
      <DecorativeMark src={brandAssets.marks.tallyRed01} className="top-10 left-[5%] w-[50px] opacity-[0.10]" />

      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <img src={brandAssets.dividers.booking} alt="" aria-hidden="true" className="section-divider-accent" draggable={false} />
          <p className="font-mono text-xs tracking-[0.3em] text-[var(--muted)]">BOOKING</p>
          <h2 className="mt-2 font-display text-4xl text-[var(--chalk)] md:text-5xl">Shows. Features. Brand inquiries.</h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.75fr)] md:gap-[clamp(2rem,5vw,5rem)]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {submitted ? (
              <div className="border border-[var(--border)] bg-[var(--panel-2)] px-8 py-12 text-center">
                <p className="font-label text-lg font-bold tracking-[0.15em] text-[var(--chalk)]">Inquiry ready.</p>
                <p className="mt-2 font-mono text-xs text-[var(--muted)]">Preview only — no data was sent.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex max-w-xl flex-col gap-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block font-mono text-xs tracking-[0.15em] text-[var(--muted)]">NAME</label>
                  <input id="name" name="name" type="text" required className="w-full border border-[var(--border)] bg-[var(--panel-2)] px-4 py-3 font-body text-sm text-[var(--chalk)] outline-none transition-colors placeholder:text-[var(--muted)]/40 focus:border-[var(--violet)]" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block font-mono text-xs tracking-[0.15em] text-[var(--muted)]">EMAIL</label>
                  <input id="email" name="email" type="email" required className="w-full border border-[var(--border)] bg-[var(--panel-2)] px-4 py-3 font-body text-sm text-[var(--chalk)] outline-none transition-colors placeholder:text-[var(--muted)]/40 focus:border-[var(--violet)]" />
                </div>
                <div>
                  <label htmlFor="inquiryType" className="mb-1.5 block font-mono text-xs tracking-[0.15em] text-[var(--muted)]">INQUIRY TYPE</label>
                  <select id="inquiryType" name="inquiryType" required className="w-full appearance-none border border-[var(--border)] bg-[var(--panel-2)] px-4 py-3 font-body text-sm text-[var(--chalk)] outline-none transition-colors focus:border-[var(--violet)]">
                    <option value="" disabled>Select type</option>
                    {INQUIRY_TYPES.map((type) => (<option key={type} value={type.toLowerCase()}>{type}</option>))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block font-mono text-xs tracking-[0.15em] text-[var(--muted)]">MESSAGE</label>
                  <textarea id="message" name="message" rows={5} required className="w-full resize-none border border-[var(--border)] bg-[var(--panel-2)] px-4 py-3 font-body text-sm text-[var(--chalk)] outline-none transition-colors placeholder:text-[var(--muted)]/40 focus:border-[var(--violet)]" />
                </div>
                <button type="submit" className="self-start border border-[var(--chalk)] bg-transparent px-8 py-3 font-label text-sm font-bold tracking-[0.15em] text-[var(--chalk)] transition-all duration-[var(--fast)] hover:translate-x-[1px] hover:translate-y-[-1px] hover:bg-[var(--chalk)] hover:text-[var(--bg)]">SEND INQUIRY</button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <img src={brandAssets.booking.support} alt="" className="block w-full h-auto" draggable={false} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
