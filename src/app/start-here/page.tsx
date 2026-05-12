import type { Metadata } from "next";
import TextureOverlay from "@/components/TextureOverlay";
import StartHereForm from "./StartHereForm";

const PAYPAL_INVOICE_URL = "https://www.paypal.com/invoice/p/#6TKGFGLX73LUZXP3";
const DROPBOX_PHOTOS_URL = "https://www.dropbox.com/request/k1jrl4fv73hsonfyg8w7";
const DROPBOX_VIDEOS_URL = "https://www.dropbox.com/request/eub9azsspfczgai7v4pe";
const DROPBOX_COVER_ART_URL = "https://www.dropbox.com/request/b0hquyhphzgpqt7itp63";
const DROPBOX_OTHER_ASSETS_URL = "https://www.dropbox.com/request/fu8dj3851742p85zyc1j";

const projectSteps = [
  "Deposit",
  "Info + Links",
  "Asset Uploads",
  "Final Preview",
  "Final Payment",
  "Domain Launch",
];

const launchSteps = [
  "Submit info and upload assets",
  "I refine the site from the private preview into the final version",
  "Final preview is sent for review",
  "One round of tweaks is included before launch",
  "Final payment is handled",
  "Site goes live on the official domain",
];

const updateItems = [
  "New song links",
  "New video links",
  "Photo swaps",
  "Booking/contact updates",
  "Press/show links",
  "Minor text changes",
  "Platform link updates",
];

const faqItems = [
  {
    question: "Is the preview public?",
    answer: "No. The preview is private unless the link is shared.",
  },
  {
    question: "Do I own the domain?",
    answer:
      "Yes. The artist should own the domain under their own account. I only connect it to the site.",
  },
  {
    question: "Can photos or videos be changed later?",
    answer: "Yes. Small updates can be handled after launch.",
  },
  {
    question: "Can new songs/videos be added later?",
    answer: "Yes. The site is built so new releases can be swapped in over time.",
  },
  {
    question: "When does the official site go live?",
    answer:
      "After the final preview is approved and the remaining balance is handled.",
  },
  {
    question: "What do I need to do first?",
    answer: "Pay the deposit, submit the form, and upload the best available assets.",
  },
];

export const metadata: Metadata = {
  title: "315mike Website Start Page",
  description:
    "Private project start page for the 315mike website build: payment, domain, uploads, intake, review, and launch.",
  robots: {
    index: false,
    follow: false,
  },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-misregister font-mono text-[11px] tracking-[0.28em] text-[var(--muted)] uppercase">
      {children}
    </p>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`border border-[var(--border)] bg-[var(--panel)]/88 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:p-7 ${className}`}
    >
      {children}
    </section>
  );
}

function PrimaryLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center border border-[var(--chalk)] bg-[var(--chalk)] px-5 py-3 font-label text-sm font-bold tracking-[0.14em] text-[var(--bg)] uppercase transition-all duration-[var(--fast)] hover:translate-x-[1px] hover:-translate-y-[1px] hover:bg-transparent hover:text-[var(--chalk)] ${className}`}
    >
      {children}
    </a>
  );
}

function SecondaryLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center border border-[var(--border)] bg-[var(--panel-2)] px-5 py-3 font-label text-sm font-bold tracking-[0.14em] text-[var(--chalk)] uppercase transition-all duration-[var(--fast)] hover:border-[var(--infrared)] hover:text-[var(--infrared)] ${className}`}
    >
      {children}
    </a>
  );
}

function DetailCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group border border-[var(--border)] bg-[var(--panel)]/88 p-5 md:p-7">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-label text-2xl font-bold tracking-[0.08em] text-[var(--chalk)] uppercase">
        <span>{title}</span>
        <span className="font-mono text-xl text-[var(--infrared)] transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="mt-5 border-t border-[var(--border)] pt-5">{children}</div>
    </details>
  );
}

export default function StartHerePage() {
  return (
    <>
      <TextureOverlay />
      <main
        className="min-h-screen bg-[var(--bg)] px-4 py-6 text-[var(--text)] md:px-8 md:py-10"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, rgba(75,44,100,0.22) 0%, transparent 42%), radial-gradient(ellipse at 90% 18%, rgba(155,17,30,0.12) 0%, transparent 38%), var(--bg)",
        }}
      >
        <div className="mx-auto flex max-w-[1120px] flex-col gap-5 md:gap-7">
          <header className="border border-[var(--border)] bg-[rgba(5,5,5,0.58)] p-5 pt-10 md:p-8 md:pt-12">
            <SectionLabel>PRIVATE BUILD PAGE</SectionLabel>
            <h1 className="mt-4 max-w-[780px] font-display text-[clamp(3.4rem,14vw,8rem)] leading-[0.86] tracking-[0.04em] text-[var(--chalk)] uppercase">
              315mike Website Start Page
            </h1>
            <p className="mt-5 max-w-[680px] text-base leading-7 text-[var(--paper)] md:text-lg">
              Everything needed to finish the website build: payment, domain,
              content, uploads, final review, and launch.
            </p>
            <p className="mt-5 inline-flex border border-[var(--border)] bg-[var(--panel)] px-3 py-2 font-mono text-[10px] tracking-[0.2em] text-[var(--muted)] uppercase">
              This page is private and only used to organize the build.
            </p>
          </header>

          <Card>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <SectionLabel>BUILD CHECKLIST</SectionLabel>
                <h2 className="mt-2 font-display text-4xl text-[var(--chalk)] uppercase md:text-5xl">
                  Project steps
                </h2>
              </div>
              <p className="max-w-[320px] font-mono text-xs leading-5 text-[var(--muted)]">
                Static checklist for now. No account or login needed.
              </p>
            </div>
            <ol className="mt-7 grid gap-2 sm:grid-cols-2 lg:grid-cols-6">
              {projectSteps.map((step, index) => (
                <li
                  key={step}
                  className="border border-[var(--border)] bg-[var(--bg)] p-4"
                >
                  <span className="font-mono text-[10px] tracking-[0.22em] text-[var(--infrared)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 font-label text-xl font-bold tracking-[0.08em] text-[var(--chalk)] uppercase">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </Card>

          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <Card>
              <SectionLabel>PAYMENT</SectionLabel>
              <h2 className="mt-2 font-display text-4xl text-[var(--chalk)] uppercase md:text-5xl">
                Website Build
              </h2>
              <dl className="mt-6 space-y-3 border-y border-[var(--border)] py-5">
                <div className="flex items-center justify-between gap-4">
                  <dt className="font-mono text-xs tracking-[0.16em] text-[var(--muted)] uppercase">
                    Total
                  </dt>
                  <dd className="font-label text-3xl font-bold text-[var(--chalk)]">
                    $800
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="font-mono text-xs tracking-[0.16em] text-[var(--muted)] uppercase">
                    Deposit
                  </dt>
                  <dd className="font-label text-2xl font-bold text-[var(--chalk)]">
                    $400 upfront
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="font-mono text-xs tracking-[0.16em] text-[var(--muted)] uppercase">
                    Final Payment
                  </dt>
                  <dd className="text-right font-label text-2xl font-bold text-[var(--chalk)]">
                    $400 before launch
                  </dd>
                </div>
              </dl>
              <PrimaryLink href={PAYPAL_INVOICE_URL} className="mt-6 w-full">
                Pay Deposit
              </PrimaryLink>
              <p className="mt-5 text-sm leading-6 text-[var(--muted)]">
                Payment is handled through PayPal invoice. Card and other
                payment options should be available through PayPal checkout.
              </p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                The remaining balance is due before the site goes live on the
                official domain.
              </p>
            </Card>

            <Card>
              <SectionLabel>UPLOADS</SectionLabel>
              <h2 className="mt-2 font-display text-4xl text-[var(--chalk)] uppercase md:text-5xl">
                Asset uploads
              </h2>
              <p className="mt-4 text-sm leading-6 text-[var(--muted)] md:text-base">
                High-quality photos and videos will make the site feel more
                official. IG photos are fine for preview work, but final assets
                should be the cleanest versions available.
              </p>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                <SecondaryLink href={DROPBOX_PHOTOS_URL}>Upload Photos</SecondaryLink>
                <SecondaryLink href={DROPBOX_VIDEOS_URL}>Upload Videos</SecondaryLink>
                <SecondaryLink href={DROPBOX_COVER_ART_URL}>
                  Upload Cover Art / Graphics
                </SecondaryLink>
                <SecondaryLink href={DROPBOX_OTHER_ASSETS_URL}>
                  Upload Other Assets
                </SecondaryLink>
              </div>
            </Card>
          </div>

          <StartHereForm />

          <Card>
            <SectionLabel>DOMAIN</SectionLabel>
            <h2 className="mt-2 font-display text-4xl text-[var(--chalk)] uppercase md:text-5xl">
              How the domain works
            </h2>
            <div className="mt-5 grid gap-4 text-sm leading-6 text-[var(--muted)] md:grid-cols-2 md:text-base">
              <p>
                You own the domain. I connect it to the site. The domain is the
                website name people type in, like 315mike.com.
              </p>
              <p>
                Buy it under your own account. I do not need to own it. I only
                need to help point/connect it to the finished website. Domain
                cost is separate and usually paid yearly.
              </p>
            </div>
          </Card>

          <DetailCard title="Need to buy your domain?">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-sm leading-6 text-[var(--muted)] md:text-base">
                  The domain is the website name people type in. Buy it under
                  your own account so you fully own it. I do not need to own it.
                  After it is purchased, I will help connect it to the website.
                </p>
                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  <PrimaryLink href="https://porkbun.com">Go to Porkbun</PrimaryLink>
                  <SecondaryLink href="https://www.namecheap.com">
                    Go to Namecheap
                  </SecondaryLink>
                </div>
                <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                  Porkbun is the main recommendation because it is simple,
                  beginner-friendly, and usually avoids aggressive upsells.
                  Namecheap is also fine if you already use it.
                </p>
              </div>
              <div className="border border-[var(--border)] bg-[var(--bg)] p-4">
                <ol className="space-y-3 text-sm leading-6 text-[var(--paper)]">
                  {[
                    "Click \"Go to Porkbun\"",
                    "Search the domain name you want",
                    "Choose a clean option, ideally .com if available",
                    "Add it to cart",
                    "Create an account using your own email",
                    "Checkout and keep the login info saved",
                    "Send me the domain name once it is purchased",
                    "I'll help connect it to the finished site",
                  ].map((step, index) => (
                    <li key={step} className="flex gap-3">
                      <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--infrared)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="border border-[var(--border)] bg-[var(--bg)] p-4">
                <h3 className="font-label text-2xl font-bold tracking-[0.08em] text-[var(--chalk)] uppercase">
                  Domain tips
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--muted)]">
                  <li>Best option is usually a short .com</li>
                  <li>Avoid long names if possible</li>
                  <li>Avoid hyphens</li>
                  <li>Avoid weird spellings unless they match the artist brand</li>
                  <li>Good examples: 315mike.com, 315mikeofficial.com, official315mike.com</li>
                  <li>Domain cost is separate from the website build and is usually paid yearly</li>
                </ul>
              </div>
              <div className="border border-[rgba(255,43,43,0.3)] bg-[rgba(155,17,30,0.08)] p-4">
                <h3 className="font-label text-2xl font-bold tracking-[0.08em] text-[var(--chalk)] uppercase">
                  Quick warning
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  Do not buy extra website builders, email packages, logo tools,
                  or marketing add-ons unless we talk about it first. For now,
                  you only need the domain.
                </p>
              </div>
            </div>
          </DetailCard>

          <Card>
            <SectionLabel>REVIEW</SectionLabel>
            <h2 className="mt-2 font-display text-4xl text-[var(--chalk)] uppercase md:text-5xl">
              Review and launch process
            </h2>
            <ol className="mt-6 grid gap-2 md:grid-cols-2">
              {launchSteps.map((step, index) => (
                <li
                  key={step}
                  className="flex min-h-20 gap-4 border border-[var(--border)] bg-[var(--bg)] p-4"
                >
                  <span className="font-mono text-[10px] tracking-[0.22em] text-[var(--infrared)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-6 text-[var(--paper)]">{step}</span>
                </li>
              ))}
            </ol>
          </Card>

          <Card>
            <SectionLabel>AFTER LAUNCH</SectionLabel>
            <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-start">
              <div>
                <h2 className="mt-2 font-display text-4xl text-[var(--chalk)] uppercase md:text-5xl">
                  Updates
                </h2>
                <p className="mt-4 text-sm leading-6 text-[var(--muted)] md:text-base">
                  After launch, small updates can be handled as needed or
                  through monthly support.
                </p>
                <p className="mt-5 inline-flex border border-[var(--border)] bg-[var(--bg)] px-4 py-3 font-label text-2xl font-bold tracking-[0.08em] text-[var(--chalk)] uppercase">
                  $50/month
                </p>
              </div>
              <ul className="grid gap-2 sm:grid-cols-2">
                {updateItems.map((item) => (
                  <li
                    key={item}
                    className="border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--paper)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          <section className="space-y-2">
            <SectionLabel>FAQ</SectionLabel>
            <div className="space-y-2">
              {faqItems.map((item) => (
                <DetailCard key={item.question} title={item.question}>
                  <p className="text-sm leading-6 text-[var(--muted)] md:text-base">
                    {item.answer}
                  </p>
                </DetailCard>
              ))}
            </div>
          </section>

          <footer className="border border-[var(--border)] bg-[rgba(5,5,5,0.62)] p-5 text-center md:p-8">
            <SectionLabel>FIRST MOVES</SectionLabel>
            <h2 className="mt-2 font-display text-4xl text-[var(--chalk)] uppercase md:text-5xl">
              Ready when you are
            </h2>
            <div className="mt-6 grid gap-2 sm:grid-cols-3">
              <PrimaryLink href={PAYPAL_INVOICE_URL}>Pay Deposit</PrimaryLink>
              <SecondaryLink href={DROPBOX_OTHER_ASSETS_URL}>
                Upload Assets
              </SecondaryLink>
              <a
                href="#intake-form"
                className="inline-flex min-h-12 items-center justify-center border border-[var(--border)] bg-[var(--panel-2)] px-5 py-3 font-label text-sm font-bold tracking-[0.14em] text-[var(--chalk)] uppercase transition-all duration-[var(--fast)] hover:border-[var(--infrared)] hover:text-[var(--infrared)]"
              >
                Submit Info
              </a>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
