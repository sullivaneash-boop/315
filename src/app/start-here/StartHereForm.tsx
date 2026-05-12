"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrejjvrl";
const CURRENT_PREVIEW_URL = "#";

const STORAGE_KEY = "315mike-start-here-intake";

const contactOptions = [
  "Shows",
  "Features",
  "Video / Press",
  "Brand Inquiries",
  "General Business",
  "Other",
];

const previewPrompts = [
  "What parts do you like?",
  "What feels off?",
  "Any photos, videos, or links you want changed?",
  "Any songs/videos that should move higher or lower?",
  "Anything missing?",
  "Anything you definitely do not want on the final site?",
];

type PreviewNoteRow = {
  id: string;
  note: string;
};

type FormState = {
  artistName: string;
  namesToAvoid: string;
  mainProject: string;
  firstChoiceDomain: string;
  backupDomains: string;
  bookingEmail: string;
  contactFor: string[];
  bestMusicOrSocialLink: string;
  musicLinksPaste: string;
  spotify: string;
  appleMusic: string;
  soundCloud: string;
  youtubeLink: string;
  otherMusicLinks: string;
  mainVideo: string;
  otherVideos: string;
  socialLinksPaste: string;
  instagram: string;
  tiktok: string;
  twitter: string;
  otherSocials: string;
  previewNoteRows: PreviewNoteRow[];
  favoriteSection: string;
  mainChangeRequested: string;
  doNotInclude: string;
  finalNotes: string;
};

let previewNoteRowCounter = 0;

function createPreviewNoteRow(note = ""): PreviewNoteRow {
  previewNoteRowCounter += 1;
  return {
    id: `preview-note-${previewNoteRowCounter}`,
    note,
  };
}

function normalizePreviewNoteRows(value: unknown): PreviewNoteRow[] {
  if (!Array.isArray(value)) {
    return [createPreviewNoteRow()];
  }

  const rows = value
    .map((row) => {
      if (!row || typeof row !== "object") return null;
      const candidate = row as Partial<PreviewNoteRow>;
      if (typeof candidate.note !== "string") return null;

      return {
        id: typeof candidate.id === "string" && candidate.id ? candidate.id : createPreviewNoteRow().id,
        note: candidate.note,
      };
    })
    .filter((row): row is PreviewNoteRow => Boolean(row));

  return rows.length > 0 ? rows : [createPreviewNoteRow()];
}

function formatPreviewNoteRows(rows: PreviewNoteRow[]) {
  const notes = rows.map((row) => row.note.trim()).filter(Boolean);

  if (notes.length === 0) {
    return "(blank)";
  }

  return notes.map((note, index) => `${index + 1}. ${note}`).join("\n");
}

const initialFormState: FormState = {
  artistName: "",
  namesToAvoid: "",
  mainProject: "",
  firstChoiceDomain: "",
  backupDomains: "",
  bookingEmail: "",
  contactFor: [],
  bestMusicOrSocialLink: "",
  musicLinksPaste: "",
  spotify: "",
  appleMusic: "",
  soundCloud: "",
  youtubeLink: "",
  otherMusicLinks: "",
  mainVideo: "",
  otherVideos: "",
  socialLinksPaste: "",
  instagram: "",
  tiktok: "",
  twitter: "",
  otherSocials: "",
  previewNoteRows: [createPreviewNoteRow()],
  favoriteSection: "",
  mainChangeRequested: "",
  doNotInclude: "",
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
        (merged as Record<string, unknown>)[key] =
          key === "previewNoteRows" ? normalizePreviewNoteRows(parsed[key]) : parsed[key];
      }
    }
    const legacyYoutubeLinks = [parsed.youtubeMusic, parsed.youtubeSocial]
      .filter((value) => typeof value === "string" && value.trim())
      .join("\n");
    if (!merged.youtubeLink && legacyYoutubeLinks) {
      merged.youtubeLink = legacyYoutubeLinks;
    }
    if (!merged.otherMusicLinks && typeof parsed.audiomack === "string" && parsed.audiomack.trim()) {
      merged.otherMusicLinks = `Audiomack: ${parsed.audiomack}`;
    }
    merged.previewNoteRows = normalizePreviewNoteRows(merged.previewNoteRows);
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
  bestMusicOrSocialLink: "Best link to music/social",
  musicLinksPaste: "Paste any music links here",
  spotify: "Spotify link",
  appleMusic: "Apple Music link",
  soundCloud: "SoundCloud link",
  youtubeLink: "YouTube link",
  otherMusicLinks: "Other music links",
  mainVideo: "Main video to feature",
  otherVideos: "Other videos to include",
  socialLinksPaste: "Paste any social links here",
  instagram: "Instagram",
  tiktok: "TikTok",
  twitter: "X / Twitter",
  otherSocials: "Other socials",
  previewNoteRows: "Preview notes",
  favoriteSection: "Favorite section so far",
  mainChangeRequested: "Main thing you want changed",
  doNotInclude: "Anything that should not be on the final site?",
  finalNotes: "Anything else to know before finalizing?",
};

type FieldBadge = "Needed" | "Optional" | "Can update later";

function Badge({ children }: { children: FieldBadge }) {
  return (
    <span className="inline-flex border border-[var(--border)] bg-[var(--bg)] px-2 py-1 font-mono text-[9px] tracking-[0.14em] text-[var(--muted)] uppercase">
      {children}
    </span>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
  badge = "Optional",
}: {
  id: keyof FormState;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  badge?: FieldBadge;
}) {
  return (
    <div>
      <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
        <label
          htmlFor={id}
          className="block font-mono text-[11px] tracking-[0.16em] text-[var(--muted)] uppercase"
        >
          {label}
        </label>
        <Badge>{badge}</Badge>
      </div>
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
  badge = "Optional",
}: {
  id: keyof FormState;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  badge?: FieldBadge;
}) {
  return (
    <div>
      <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
        <label
          htmlFor={id}
          className="block font-mono text-[11px] tracking-[0.16em] text-[var(--muted)] uppercase"
        >
          {label}
        </label>
        <Badge>{badge}</Badge>
      </div>
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
  defaultOpen = false,
  children,
}: {
  title: string;
  helper?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <details
      open={isOpen}
      onToggle={(event) => setIsOpen(event.currentTarget.open)}
      className="group border border-[var(--border)] bg-[var(--bg)] p-4 md:p-5"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
        <span className="font-label text-2xl font-bold tracking-[0.08em] text-[var(--chalk)] uppercase">
          {title}
        </span>
        <span className="font-mono text-xl text-[var(--infrared)] transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      {helper ? (
        <p className="mb-5 mt-1 text-sm leading-6 text-[var(--muted)]">{helper}</p>
      ) : null}
      <div className="grid gap-4 md:grid-cols-2">{children}</div>
    </details>
  );
}

export default function StartHereForm() {
  const [form, setForm] = useState<FormState>(getInitialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    } catch {
      // Autosave is a convenience only; Formspree submit still works without it.
    }
  }, [form]);

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

  function updatePreviewNoteRow(id: string, note: string) {
    setSubmitted(false);
    setForm((current) => ({
      ...current,
      previewNoteRows: current.previewNoteRows.map((row) =>
        row.id === id ? { ...row, note } : row,
      ),
    }));
  }

  function addPreviewNoteRow() {
    setSubmitted(false);
    setForm((current) => ({
      ...current,
      previewNoteRows: [...current.previewNoteRows, createPreviewNoteRow()],
    }));
  }

  function removePreviewNoteRow(id: string) {
    setSubmitted(false);
    setForm((current) => {
      const nextRows = current.previewNoteRows.filter((row) => row.id !== id);
      return {
        ...current,
        previewNoteRows: nextRows.length > 0 ? nextRows : [createPreviewNoteRow()],
      };
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    const payload: Record<string, string> = {};
    for (const [key, value] of Object.entries(form)) {
      const label = fieldLabels[key as keyof FormState] ?? key;
      payload[label] =
        key === "previewNoteRows"
          ? formatPreviewNoteRows(form.previewNoteRows)
          : Array.isArray(value)
            ? value.join(", ")
            : value;
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => null);
        setSubmitError(data?.errors?.[0]?.message ?? "Something went wrong. Try again in a minute.");
      }
    } catch {
      setSubmitError("Could not reach the server. Check your connection and try again.");
    } finally {
      setSubmitting(false);
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
            INFO FORM
          </p>
          <h2 className="mt-2 font-display text-4xl text-[var(--chalk)] uppercase md:text-5xl">
            Fill this out when you can
          </h2>
        </div>
        <p className="max-w-[380px] font-mono text-xs leading-5 text-[var(--muted)]">
          You do not need every answer right now. Fill out what you have and submit.
          Anything missing can be cleaned up later.
        </p>
      </div>

      <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
        Use this form for links, contact info, and notes. Use the upload buttons for photos, videos, cover art, and bigger files.
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
        <div className="border border-[var(--border)] bg-[var(--bg)] p-4 md:p-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--muted)] uppercase">
                Minimum to start
              </p>
              <h3 className="mt-1 font-label text-2xl font-bold tracking-[0.08em] text-[var(--chalk)] uppercase">
                Just the basics are enough.
              </h3>
            </div>
            <p className="max-w-[340px] text-sm leading-6 text-[var(--muted)]">
              Everything else can be added below or sent later.
            </p>
          </div>
          <ul className="mt-5 grid gap-x-6 gap-y-3 text-sm leading-6 text-[var(--paper)] sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Artist name",
              "Best contact/booking email",
              "Main song/project",
              "Best link to music/social",
            ].map((item, index) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 font-mono text-[10px] tracking-[0.18em] text-[var(--infrared)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
            Doesn&apos;t need to be organized. Blank is fine if you don&apos;t have it yet.
          </p>
        </div>

        <FormSection
          title="Artist Info"
          helper="Start with the basics. Domain ideas are helpful, but they can update later."
          defaultOpen
        >
          <Field
            id="artistName"
            label={fieldLabels.artistName}
            value={form.artistName}
            onChange={updateField}
            placeholder="315mike"
            required
            badge="Needed"
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
            badge="Needed"
          />
          <Field
            id="firstChoiceDomain"
            label={fieldLabels.firstChoiceDomain}
            value={form.firstChoiceDomain}
            onChange={updateField}
            placeholder="315mike.com"
            badge="Can update later"
          />
          <Field
            id="backupDomains"
            label={fieldLabels.backupDomains}
            value={form.backupDomains}
            onChange={updateField}
            placeholder="315mikeofficial.com, official315mike.com"
            badge="Can update later"
          />
        </FormSection>

        <FormSection
          title="Contact / Booking"
          helper="Needed if people should be able to reach out from the site."
          defaultOpen
        >
          <Field
            id="bookingEmail"
            label={fieldLabels.bookingEmail}
            value={form.bookingEmail}
            onChange={updateField}
            type="email"
            placeholder="booking@example.com"
            badge="Needed"
          />
          <Field
            id="bestMusicOrSocialLink"
            label={fieldLabels.bestMusicOrSocialLink}
            value={form.bestMusicOrSocialLink}
            onChange={updateField}
            placeholder="Spotify, Instagram, YouTube, Linktree, etc."
            badge="Needed"
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

        <FormSection title="Music Links" helper="Paste full links if you have them. Rough links are fine - I'll clean them up.">
          <div className="md:col-span-2">
            <TextArea
              id="musicLinksPaste"
              label={fieldLabels.musicLinksPaste}
              value={form.musicLinksPaste}
              onChange={updateField}
              rows={4}
              placeholder="Paste any music links here - Spotify, Apple Music, SoundCloud, Audiomack, YouTube, Linktree, anything from Notes or messages."
            />
          </div>
          <Field id="spotify" label={fieldLabels.spotify} value={form.spotify} onChange={updateField} placeholder="https://open.spotify.com/..." />
          <Field id="appleMusic" label={fieldLabels.appleMusic} value={form.appleMusic} onChange={updateField} placeholder="https://music.apple.com/..." />
          <Field id="soundCloud" label={fieldLabels.soundCloud} value={form.soundCloud} onChange={updateField} placeholder="https://soundcloud.com/..." />
          <TextArea id="otherMusicLinks" label={fieldLabels.otherMusicLinks} value={form.otherMusicLinks} onChange={updateField} rows={3} placeholder="Audiomack, Bandcamp, Linktree, or anything else." />
        </FormSection>

        <FormSection title="Video Links" helper="Blank is fine if you do not have video links ready yet.">
          <Field id="mainVideo" label={fieldLabels.mainVideo} value={form.mainVideo} onChange={updateField} placeholder="YouTube video URL" />
          <TextArea id="otherVideos" label={fieldLabels.otherVideos} value={form.otherVideos} onChange={updateField} rows={3} placeholder="Paste links in the order you want them shown." />
        </FormSection>

        <FormSection title="Social Links" helper="Drop the main socials people should visit from the site. A messy list is fine.">
          <div className="md:col-span-2">
            <TextArea
              id="socialLinksPaste"
              label={fieldLabels.socialLinksPaste}
              value={form.socialLinksPaste}
              onChange={updateField}
              rows={4}
              placeholder="Paste any social links here - Instagram, TikTok, YouTube, X, Linktree, anything."
            />
          </div>
          <Field id="instagram" label={fieldLabels.instagram} value={form.instagram} onChange={updateField} placeholder="https://instagram.com/..." />
          <Field id="tiktok" label={fieldLabels.tiktok} value={form.tiktok} onChange={updateField} placeholder="https://tiktok.com/@..." />
          <Field id="youtubeLink" label={fieldLabels.youtubeLink} value={form.youtubeLink} onChange={updateField} placeholder="https://youtube.com/..." />
          <Field id="twitter" label={fieldLabels.twitter} value={form.twitter} onChange={updateField} placeholder="https://x.com/..." />
          <TextArea id="otherSocials" label={fieldLabels.otherSocials} value={form.otherSocials} onChange={updateField} rows={3} />
        </FormSection>

        <FormSection
          title="Preview Notes"
          helper="Open the preview, look through the site, and drop any quick notes here. It does not need to be perfect or organized. Raw thoughts are fine - I'll use them to refine the final version."
        >
          <div className="md:col-span-2">
            <p className="mb-2 font-mono text-[11px] tracking-[0.16em] text-[var(--muted)] uppercase">
              Private preview link
            </p>
            <a
              href={CURRENT_PREVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center border border-[var(--border)] bg-[var(--panel-2)] px-6 py-3 font-label text-sm font-bold tracking-[0.14em] text-[var(--chalk)] uppercase transition-all duration-[var(--fast)] hover:border-[var(--infrared)] hover:text-[var(--infrared)] sm:w-auto"
            >
              Open Current Preview
            </a>
          </div>

          <div className="md:col-span-2">
            <ul className="grid gap-2 text-sm leading-6 text-[var(--muted)] sm:grid-cols-2">
              {previewPrompts.map((prompt) => (
                <li
                  key={prompt}
                  className="border border-[var(--border)] bg-[var(--panel-2)] px-4 py-3"
                >
                  {prompt}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[11px] tracking-[0.16em] text-[var(--muted)] uppercase">
                  Quick preview notes
                </p>
                <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                  Add notes as you go through the preview. They do not need to be organized.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {form.previewNoteRows.map((row, index) => (
                <div
                  key={row.id}
                  className="border border-[var(--border)] bg-[var(--panel-2)] p-3"
                >
                  <label
                    htmlFor={row.id}
                    className="mb-2 block font-mono text-[10px] tracking-[0.16em] text-[var(--muted)] uppercase"
                  >
                    Note {index + 1}
                  </label>
                  <textarea
                    id={row.id}
                    value={row.note}
                    onChange={(event) => updatePreviewNoteRow(row.id, event.target.value)}
                    rows={3}
                    placeholder="Example: Move this video higher / swap this photo / change this wording..."
                    className="w-full resize-y border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-base leading-6 text-[var(--chalk)] outline-none transition-colors placeholder:text-[var(--muted)]/40 focus:border-[var(--violet)]"
                  />
                  {form.previewNoteRows.length > 1 ? (
                    <button
                      type="button"
                      onClick={() => removePreviewNoteRow(row.id)}
                      className="mt-2 inline-flex min-h-10 items-center justify-center border border-[var(--border)] px-4 py-2 font-label text-xs font-bold tracking-[0.14em] text-[var(--muted)] uppercase transition-colors hover:border-[var(--infrared)] hover:text-[var(--infrared)]"
                    >
                      Remove
                    </button>
                  ) : null}
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addPreviewNoteRow}
              className="mt-3 inline-flex min-h-12 w-full items-center justify-center border border-[var(--border)] bg-[var(--panel-2)] px-6 py-3 font-label text-sm font-bold tracking-[0.14em] text-[var(--chalk)] uppercase transition-all duration-[var(--fast)] hover:border-[var(--infrared)] hover:text-[var(--infrared)] sm:w-auto"
            >
              Add another note
            </button>
          </div>

          <Field
            id="favoriteSection"
            label={fieldLabels.favoriteSection}
            value={form.favoriteSection}
            onChange={updateField}
            placeholder="Homepage, videos, photos, booking, etc."
            badge="Can update later"
          />
          <TextArea
            id="mainChangeRequested"
            label={fieldLabels.mainChangeRequested}
            value={form.mainChangeRequested}
            onChange={updateField}
            rows={3}
            placeholder="Biggest thing that feels off or needs adjusting"
            badge="Can update later"
          />
          <TextArea
            id="doNotInclude"
            label={fieldLabels.doNotInclude}
            value={form.doNotInclude}
            onChange={updateField}
            rows={3}
            placeholder="Any photos, videos, wording, links, or details to avoid"
            badge="Can update later"
          />

          <p className="md:col-span-2 border border-[var(--border)] bg-[var(--panel-2)] px-4 py-3 text-sm leading-6 text-[var(--muted)]">
            These notes are just for direction before final polish. One round of small tweaks is included before launch.
          </p>
        </FormSection>

        <FormSection title="Final Notes" helper="Loose extra notes. You can submit now and update later.">
          <TextArea
            id="finalNotes"
            label={fieldLabels.finalNotes}
            value={form.finalNotes}
            onChange={updateField}
            rows={5}
            placeholder="Anything else you want me to know. Doesn't need to be organized."
            badge="Can update later"
          />
        </FormSection>

        <div className="flex flex-col gap-3 border border-[var(--border)] bg-[var(--bg)] p-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex min-h-12 items-center justify-center border border-[var(--chalk)] bg-[var(--chalk)] px-6 py-3 font-label text-sm font-bold tracking-[0.14em] text-[var(--bg)] uppercase transition-all duration-[var(--fast)] hover:translate-x-[1px] hover:-translate-y-[1px] hover:bg-transparent hover:text-[var(--chalk)] disabled:pointer-events-none disabled:opacity-50"
          >
            {submitting ? "Sending..." : "Submit Info"}
          </button>
        </div>
      </form>
    </section>
  );
}
