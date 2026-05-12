"use client";

import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from "react";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrejjvrl";

const STORAGE_KEY = "315mike-start-here-intake";

const contactOptions = [
  "Shows",
  "Features",
  "Video / Press",
  "Brand Inquiries",
  "General Business",
  "Other",
];

type FormState = {
  artistName: string;
  namesToAvoid: string;
  mainProject: string;
  firstChoiceDomain: string;
  backupDomains: string;
  bookingEmail: string;
  contactFor: string[];
  spotify: string;
  appleMusic: string;
  soundCloud: string;
  youtubeMusic: string;
  audiomack: string;
  otherMusicLinks: string;
  mainVideo: string;
  otherVideos: string;
  videoOrderNotes: string;
  instagram: string;
  tiktok: string;
  youtubeSocial: string;
  twitter: string;
  otherSocials: string;
  finalNotes: string;
};

const initialFormState: FormState = {
  artistName: "",
  namesToAvoid: "",
  mainProject: "",
  firstChoiceDomain: "",
  backupDomains: "",
  bookingEmail: "",
  contactFor: [],
  spotify: "",
  appleMusic: "",
  soundCloud: "",
  youtubeMusic: "",
  audiomack: "",
  otherMusicLinks: "",
  mainVideo: "",
  otherVideos: "",
  videoOrderNotes: "",
  instagram: "",
  tiktok: "",
  youtubeSocial: "",
  twitter: "",
  otherSocials: "",
  finalNotes: "",
};

function getInitialFormState() {
  if (typeof window === "undefined") {
    return initialFormState;
  }

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return initialFormState;
    const parsed = JSON.parse(saved);
    const merged = { ...initialFormState };
    for (const key of Object.keys(initialFormState) as Array<keyof FormState>) {
      if (key in parsed) {
        (merged as Record<string, unknown>)[key] = parsed[key];
      }
    }
    return merged;
  } catch {
    return initialFormState;
  }
}

const fieldLabels: Record<keyof FormState, string> = {
  artistName: "Artist name exactly how it should appear",
  namesToAvoid: "Any spellings/names to avoid",
  mainProject: "Main song/project to feature right now",
  firstChoiceDomain: "First choice domain",
  backupDomains: "Backup domain ideas",
  bookingEmail: "Best booking email",
  contactFor: "What should people contact you for?",
  spotify: "Spotify link",
  appleMusic: "Apple Music link",
  soundCloud: "SoundCloud link",
  youtubeMusic: "YouTube link",
  audiomack: "Audiomack link",
  otherMusicLinks: "Other music links",
  mainVideo: "Main video to feature",
  otherVideos: "Other videos to include",
  videoOrderNotes: "Notes on video order",
  instagram: "Instagram",
  tiktok: "TikTok",
  youtubeSocial: "YouTube",
  twitter: "X / Twitter",
  otherSocials: "Other socials",
  finalNotes: "Anything else to know before finalizing?",
};

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
}: {
  id: keyof FormState;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block font-mono text-[11px] tracking-[0.16em] text-[var(--muted)] uppercase"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="min-h-12 w-full border border-[var(--border)] bg-[var(--panel-2)] px-4 py-3 text-base text-[var(--chalk)] outline-none transition-colors placeholder:text-[var(--muted)]/40 focus:border-[var(--violet)]"
      />
    </div>
  );
}

function TextArea({
  id,
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
}: {
  id: keyof FormState;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block font-mono text-[11px] tracking-[0.16em] text-[var(--muted)] uppercase"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="w-full resize-y border border-[var(--border)] bg-[var(--panel-2)] px-4 py-3 text-base leading-6 text-[var(--chalk)] outline-none transition-colors placeholder:text-[var(--muted)]/40 focus:border-[var(--violet)]"
      />
    </div>
  );
}

function FormSection({
  title,
  helper,
  children,
}: {
  title: string;
  helper?: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="border border-[var(--border)] bg-[var(--bg)] p-4 md:p-5">
      <legend className="px-2 font-label text-2xl font-bold tracking-[0.08em] text-[var(--chalk)] uppercase">
        {title}
      </legend>
      {helper ? (
        <p className="mb-5 mt-1 text-sm leading-6 text-[var(--muted)]">{helper}</p>
      ) : null}
      <div className="grid gap-4 md:grid-cols-2">{children}</div>
    </fieldset>
  );
}

function buildCopyText(form: FormState) {
  return (Object.keys(fieldLabels) as Array<keyof FormState>)
    .map((key) => {
      const value = Array.isArray(form[key]) ? form[key].join(", ") : form[key];
      return `${fieldLabels[key]}:\n${value || "(blank)"}`;
    })
    .join("\n\n");
}

export default function StartHereForm() {
  const [form, setForm] = useState<FormState>(getInitialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [copyStatus, setCopyStatus] = useState("");

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    } catch {
      // Autosave is a convenience only; the manual copy fallback still works.
    }
  }, [form]);

  const copyText = useMemo(() => buildCopyText(form), [form]);

  function updateField(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;
    setSubmitted(false);
    setForm((current) => ({ ...current, [name]: value }));
  }

  function updateContactOption(event: ChangeEvent<HTMLInputElement>) {
    const { value, checked } = event.target;
    setSubmitted(false);
    setForm((current) => {
      const nextContactFor = checked
        ? [...current.contactFor, value]
        : current.contactFor.filter((option) => option !== value);

      return { ...current, contactFor: nextContactFor };
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    const payload: Record<string, string> = {};
    for (const [key, value] of Object.entries(form)) {
      const label = fieldLabels[key as keyof FormState] ?? key;
      payload[label] = Array.isArray(value) ? value.join(", ") : value;
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
        setCopyStatus("");
      } else {
        const data = await res.json().catch(() => null);
        setSubmitError(data?.errors?.[0]?.message ?? "Something went wrong. Try again or use the copy button below.");
      }
    } catch {
      setSubmitError("Could not reach the server. Check your connection or use the copy button below.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleCopyResponses() {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopyStatus("Responses copied. You can paste them into a text or email.");
    } catch {
      setCopyStatus("Copy did not work in this browser. Select the text below and copy it manually.");
    }
  }

  return (
    <section
      id="intake-form"
      className="border border-[var(--border)] bg-[var(--panel)]/88 p-5 md:p-7"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-misregister font-mono text-[11px] tracking-[0.28em] text-[var(--muted)] uppercase">
            INTAKE
          </p>
          <h2 className="mt-2 font-display text-4xl text-[var(--chalk)] uppercase md:text-5xl">
            Submit info
          </h2>
        </div>
        <p className="max-w-[380px] font-mono text-xs leading-5 text-[var(--muted)]">
          Fill out what you have now. Anything missing can be cleaned up later.
        </p>
      </div>

      <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
        Use this for links, contact info, and notes. Use the upload buttons above for photos, videos, cover art, and larger files.
      </p>

      {submitted ? (
        <div className="mt-6 border border-[rgba(75,200,120,0.3)] bg-[rgba(40,120,60,0.08)] p-4">
          <p className="font-label text-2xl font-bold tracking-[0.08em] text-[var(--chalk)] uppercase">
            Info submitted.
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
            Your responses have been sent. You can still update and resubmit if anything changes.
          </p>
        </div>
      ) : null}

      {submitError ? (
        <div className="mt-6 border border-[rgba(255,43,43,0.3)] bg-[rgba(155,17,30,0.08)] p-4">
          <p className="font-label text-lg font-bold tracking-[0.08em] text-[var(--chalk)] uppercase">
            Submission failed
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
            {submitError}
          </p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="mt-7 space-y-4">
        <FormSection
          title="Artist Info"
          helper="Exact spelling matters here. This is how the name and current release focus will show on the site."
        >
          <Field
            id="artistName"
            label={fieldLabels.artistName}
            value={form.artistName}
            onChange={updateField}
            placeholder="315mike"
            required
          />
          <Field
            id="namesToAvoid"
            label={fieldLabels.namesToAvoid}
            value={form.namesToAvoid}
            onChange={updateField}
            placeholder="Old spelling, nicknames, etc."
          />
          <Field
            id="mainProject"
            label={fieldLabels.mainProject}
            value={form.mainProject}
            onChange={updateField}
            placeholder="Song, EP, video, or campaign"
          />
        </FormSection>

        <FormSection title="Domain" helper="Drop the domain ideas you like. If nothing is purchased yet, that's fine.">
          <Field
            id="firstChoiceDomain"
            label={fieldLabels.firstChoiceDomain}
            value={form.firstChoiceDomain}
            onChange={updateField}
            placeholder="315mike.com"
          />
          <Field
            id="backupDomains"
            label={fieldLabels.backupDomains}
            value={form.backupDomains}
            onChange={updateField}
            placeholder="315mikeofficial.com, official315mike.com"
          />
        </FormSection>

        <FormSection
          title="Booking / Contact"
          helper="Pick what people should be able to reach out about through the site."
        >
          <Field
            id="bookingEmail"
            label={fieldLabels.bookingEmail}
            value={form.bookingEmail}
            onChange={updateField}
            type="email"
            placeholder="booking@example.com"
          />
          <div className="md:col-span-2">
            <p className="mb-2 block font-mono text-[11px] tracking-[0.16em] text-[var(--muted)] uppercase">
              {fieldLabels.contactFor}
            </p>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {contactOptions.map((option) => (
                <label
                  key={option}
                  className="flex min-h-12 items-center gap-3 border border-[var(--border)] bg-[var(--panel-2)] px-4 py-3 text-sm text-[var(--paper)]"
                >
                  <input
                    type="checkbox"
                    name="contactFor"
                    value={option}
                    checked={form.contactFor.includes(option)}
                    onChange={updateContactOption}
                    className="h-4 w-4 accent-[var(--infrared)]"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        </FormSection>

        <FormSection title="Music Links" helper="Paste full links if you have them. If not, usernames or platform names are fine.">
          <Field id="spotify" label={fieldLabels.spotify} value={form.spotify} onChange={updateField} placeholder="https://open.spotify.com/..." />
          <Field id="appleMusic" label={fieldLabels.appleMusic} value={form.appleMusic} onChange={updateField} placeholder="https://music.apple.com/..." />
          <Field id="soundCloud" label={fieldLabels.soundCloud} value={form.soundCloud} onChange={updateField} placeholder="https://soundcloud.com/..." />
          <Field id="youtubeMusic" label={fieldLabels.youtubeMusic} value={form.youtubeMusic} onChange={updateField} placeholder="https://youtube.com/..." />
          <Field id="audiomack" label={fieldLabels.audiomack} value={form.audiomack} onChange={updateField} placeholder="https://audiomack.com/..." />
          <TextArea id="otherMusicLinks" label={fieldLabels.otherMusicLinks} value={form.otherMusicLinks} onChange={updateField} rows={3} />
        </FormSection>

        <FormSection title="Video Links" helper="The main video should be the first one people see.">
          <Field id="mainVideo" label={fieldLabels.mainVideo} value={form.mainVideo} onChange={updateField} placeholder="YouTube video URL" />
          <TextArea id="otherVideos" label={fieldLabels.otherVideos} value={form.otherVideos} onChange={updateField} rows={3} placeholder="Paste one link per line if that is easier" />
          <TextArea id="videoOrderNotes" label={fieldLabels.videoOrderNotes} value={form.videoOrderNotes} onChange={updateField} rows={3} />
        </FormSection>

        <FormSection title="Social Links" helper="Add the main socials people should visit from the site.">
          <Field id="instagram" label={fieldLabels.instagram} value={form.instagram} onChange={updateField} placeholder="https://instagram.com/..." />
          <Field id="tiktok" label={fieldLabels.tiktok} value={form.tiktok} onChange={updateField} placeholder="https://tiktok.com/@..." />
          <Field id="youtubeSocial" label={fieldLabels.youtubeSocial} value={form.youtubeSocial} onChange={updateField} placeholder="https://youtube.com/..." />
          <Field id="twitter" label={fieldLabels.twitter} value={form.twitter} onChange={updateField} placeholder="https://x.com/..." />
          <TextArea id="otherSocials" label={fieldLabels.otherSocials} value={form.otherSocials} onChange={updateField} rows={3} />
        </FormSection>

        <FormSection title="Final Notes" helper="Anything else that would help shape the final version.">
          <TextArea
            id="finalNotes"
            label={fieldLabels.finalNotes}
            value={form.finalNotes}
            onChange={updateField}
            rows={5}
            placeholder="Anything I should know before final polish — wording, links, sections, order, what to avoid, etc."
          />
        </FormSection>

        <div className="flex flex-col gap-3 border border-[var(--border)] bg-[var(--bg)] p-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex min-h-12 items-center justify-center border border-[var(--chalk)] bg-[var(--chalk)] px-6 py-3 font-label text-sm font-bold tracking-[0.14em] text-[var(--bg)] uppercase transition-all duration-[var(--fast)] hover:translate-x-[1px] hover:-translate-y-[1px] hover:bg-transparent hover:text-[var(--chalk)] disabled:opacity-50 disabled:pointer-events-none"
          >
            {submitting ? "Sending..." : "Submit Info"}
          </button>
          <button
            type="button"
            onClick={handleCopyResponses}
            className="inline-flex min-h-12 items-center justify-center border border-[var(--border)] bg-[var(--panel-2)] px-6 py-3 font-label text-sm font-bold tracking-[0.14em] text-[var(--chalk)] uppercase transition-all duration-[var(--fast)] hover:border-[var(--infrared)] hover:text-[var(--infrared)]"
          >
            Save/copy responses
          </button>
        </div>
      </form>

      {copyStatus ? (
        <p className="mt-4 border border-[var(--border)] bg-[var(--bg)] px-4 py-3 font-mono text-xs leading-5 text-[var(--muted)]">
          {copyStatus}
        </p>
      ) : null}

      <details className="mt-4 border border-[var(--border)] bg-[var(--bg)] p-4">
        <summary className="cursor-pointer font-mono text-[11px] tracking-[0.18em] text-[var(--muted)] uppercase">
          Manual copy text
        </summary>
        <textarea
          readOnly
          value={copyText}
          rows={8}
          className="mt-4 w-full border border-[var(--border)] bg-[var(--panel-2)] px-4 py-3 font-mono text-xs leading-5 text-[var(--paper)] outline-none"
        />
      </details>
    </section>
  );
}
