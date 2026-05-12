import type { Metadata } from "next";
import TextureOverlay from "@/components/TextureOverlay";
import StartHereForm from "./StartHereForm";

const PAYPAL_INVOICE_URL = "https://www.paypal.com/invoice/p/#6TKGFGLX73LUZXP3";
const DROPBOX_PHOTOS_URL = "https://www.dropbox.com/request/k1jrl4fv73hsonfyg8w7";
const DROPBOX_VIDEOS_URL = "https://www.dropbox.com/request/eub9azsspfczgai7v4pe";
const DROPBOX_COVER_ART_URL = "https://www.dropbox.com/request/b0hquyhphzgpqt7itp63";
const DROPBOX_OTHER_ASSETS_URL = "https://www.dropbox.com/request/fu8dj3851742p85zyc1j";

const launchSteps = [
  "Submit info and upload the best available files",
  "I refine the private preview into the final version",
  "Final preview is sent for review",
  "One round of small tweaks is included before launch",
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

const goodToKnowItems = [
  {
    question: "What should I do first?",
    answer:
      "Handle the deposit, submit the info form, and upload the best files you have. Anything missing can be cleaned up later.",
  },
  {
    question: "What domain should I buy?",
    answer:
      "A short .com is best if available. Avoid hyphens, long names, or weird spellings unless they are part of the artist brand.",
  },
  {
    question: "Do I own the domain?",
    answer:
      "Yes. The domain should be bought under your own account. I only help connect it to the finished site.",
  },
  {
    question: "What files should I upload?",
    answer:
      "Clean photos, videos, cover art, graphics, or anything you want considered for the final site. Original files are better than screenshots or reposts.",
  },
  {
    question: "When does the site go live?",
    answer:
      "After the final preview is approved and the remaining balance is handled.",
  },
  {
    question: "Can the site be updated later?",
    answer:
      "Yes. New songs, videos, photos, booking info, and links can be updated after launch.",
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
          {/* Header */}
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

          {/* Start Here action card */}
          <Card>
            <SectionLabel>START HERE</SectionLabel>
            <h2 className="mt-2 font-display text-4xl text-[var(--chalk)] uppercase md:text-5xl">
              First things to handle
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              Three simple things get the final build moving.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Deposit", "Info", "Uploads", "Domain", "Preview"].map((chip) => (
                <span
                  key={chip}
                  className="border border-[var(--border)] bg-[var(--bg)] px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] text-[var(--muted)] uppercase"
                >
                  {chip}
                </span>
              ))}
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              <a
                href={PAYPAL_INVOICE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 border border-[var(--border)] bg-[var(--bg)] p-4 transition-colors hover:border-[var(--chalk)]"
              >
                <span className="font-mono text-[10px] tracking-[0.22em] text-[var(--infrared)]">01</span>
                <span className="font-label text-xl font-bold tracking-[0.08em] text-[var(--chalk)] uppercase">Pay Deposit</span>
                <span className="text-sm leading-6 text-[var(--muted)]">Starts the final build.</span>
              </a>
              <a
                href="#intake-form"
                className="flex flex-col gap-2 border border-[var(--border)] bg-[var(--bg)] p-4 transition-colors hover:border-[var(--chalk)]"
              >
                <span className="font-mono text-[10px] tracking-[0.22em] text-[var(--infrared)]">02</span>
                <span className="font-label text-xl font-bold tracking-[0.08em] text-[var(--chalk)] uppercase">Submit Info</span>
                <span className="text-sm leading-6 text-[var(--muted)]">Send links, domain ideas, contact info, and notes.</span>
              </a>
              <a
                href={DROPBOX_OTHER_ASSETS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 border border-[var(--border)] bg-[var(--bg)] p-4 transition-colors hover:border-[var(--chalk)]"
              >
                <span className="font-mono text-[10px] tracking-[0.22em] text-[var(--infrared)]">03</span>
                <span className="font-label text-xl font-bold tracking-[0.08em] text-[var(--chalk)] uppercase">Upload Assets</span>
                <span className="text-sm leading-6 text-[var(--muted)]">Send photos, videos, cover art, and larger files.</span>
              </a>
            </div>
          </Card>

          {/* Payment + Uploads */}
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <Card>
              <SectionLabel>BUILD PAYMENT</SectionLabel>
              <h2 className="mt-2 font-display text-4xl text-[var(--chalk)] uppercase md:text-5xl">
                Website launch build
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
                Deposit starts the final build. The remaining balance is due
                before the site goes live on the official domain.
              </p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                Payment is handled through PayPal invoice. Card and other
                payment options should be available through PayPal checkout.
              </p>
            </Card>

            <Card>
              <SectionLabel>UPLOADS</SectionLabel>
              <h2 className="mt-2 font-display text-4xl text-[var(--chalk)] uppercase md:text-5xl">
                Send files
              </h2>
              <p className="mt-4 text-sm leading-6 text-[var(--muted)] md:text-base">
                Use these buttons to send the cleanest photos, videos, cover
                art, or visuals you want considered for the final site. IG
                photos are fine for the preview, but original files usually
                look better.
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

          {/* Intake Form */}
          <StartHereForm />

          {/* Domain */}
          <Card>
            <SectionLabel>DOMAIN</SectionLabel>
            <h2 className="mt-2 font-display text-4xl text-[var(--chalk)] uppercase md:text-5xl">
              How the domain works
            </h2>
            <div className="mt-5 grid gap-4 text-sm leading-6 text-[var(--muted)] md:grid-cols-3 md:text-base">
              <p>You own the domain. I connect it to the site.</p>
              <p>
                The domain is the website name people type in, like
                315mike.com. Buy it under your own account, then send me the
                domain name. I&apos;ll help point it to the finished website.
              </p>
              <p>
                Domain cost is separate from the website build and is usually
                paid yearly.
              </p>
            </div>
          </Card>

          <DetailCard title="Need to buy your domain?">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-sm leading-6 text-[var(--muted)] md:text-base">
                  If you do not already have a domain, you&apos;ll need to buy
                  one under your own account so you fully own it. This does not
                  have to be handled immediately for me to keep working on the
                  build, but it does need to be done before the site can fully
                  go live on the official domain. Once it&apos;s purchased,
                  I&apos;ll help connect it to the website.
                </p>
                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  <PrimaryLink href="https://www.namecheap.com/domains/domain-name-search/">
                    Search on Namecheap
                  </PrimaryLink>
                  <SecondaryLink href="https://www.namecheap.com">
                    Open Namecheap
                  </SecondaryLink>
                </div>
                <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                  Namecheap is a solid option because it is simple to use,
                  beginner-friendly, and easy to manage later. The main thing
                  is buying the domain under your own account so you keep
                  ownership of it.
                </p>
              </div>
              <div className="border border-[var(--border)] bg-[var(--bg)] p-4">
                <ol className="space-y-3 text-sm leading-6 text-[var(--paper)]">
                  {[
                    "Click \"Search on Namecheap\"",
                    "Search the domain name you want",
                    "Try to get the .com if it is available",
                    "Pick the cleanest option, not the longest or weirdest one",
                    "Add the domain to your cart",
                    "Create a Namecheap account using your own email",
                    "Skip extra add-ons unless we talk about them first",
                    "Checkout and save your login info",
                    "Send me the domain name after it's purchased",
                    "I'll help connect it to the finished website before launch",
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
                  <li>Avoid hyphens if possible</li>
                  <li>Avoid long names</li>
                  <li>Avoid extra words unless needed</li>
                  <li>Keep it easy to say out loud</li>
                  <li>Keep it close to the artist name</li>
                  <li>Good examples: 315mike.com, 315mikeofficial.com, official315mike.com</li>
                  <li>Domain cost is separate from the website build and is usually paid yearly</li>
                </ul>
              </div>
              <div className="border border-[var(--border)] bg-[var(--bg)] p-4">
                <h3 className="font-label text-2xl font-bold tracking-[0.08em] text-[var(--chalk)] uppercase">
                  Skip the add-ons
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  When checking out, you do not need to buy a website builder,
                  logo maker, marketing package, hosting plan, or extra email
                  package right now. For now, just buy the domain unless we
                  talk about something else first.
                </p>
              </div>
            </div>
            <p className="mt-4 border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm leading-6 text-[var(--muted)]">
              This part is not blocking the current build. It only needs to be
              done before the finished site goes live on the official domain.
            </p>
          </DetailCard>

          {/* Review + Launch */}
          <Card>
            <SectionLabel>FINAL CHECK</SectionLabel>
            <h2 className="mt-2 font-display text-4xl text-[var(--chalk)] uppercase md:text-5xl">
              Before it goes live
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

          {/* After Launch */}
          <Card>
            <SectionLabel>AFTER LAUNCH</SectionLabel>
            <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-start">
              <div>
                <h2 className="mt-2 font-display text-4xl text-[var(--chalk)] uppercase md:text-5xl">
                  After launch
                </h2>
                <p className="mt-4 text-sm leading-6 text-[var(--muted)] md:text-base">
                  Once the site is live, small updates can be handled as
                  needed. Monthly support is available if the site needs to
                  stay current with new releases, videos, photos, or booking
                  info.
                </p>
                <p className="mt-5 inline-flex border border-[var(--border)] bg-[var(--bg)] px-4 py-3 font-mono text-sm tracking-[0.08em] text-[var(--muted)]">
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

          {/* Good to Know */}
          <section className="space-y-2">
            <SectionLabel>GOOD TO KNOW</SectionLabel>
            <div className="space-y-2">
              {goodToKnowItems.map((item) => (
                <DetailCard key={item.question} title={item.question}>
                  <p className="text-sm leading-6 text-[var(--muted)] md:text-base">
                    {item.answer}
                  </p>
                </DetailCard>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="border border-[var(--border)] bg-[rgba(5,5,5,0.62)] p-5 text-center md:p-8">
            <SectionLabel>NEXT STEPS</SectionLabel>
            <h2 className="mt-2 font-display text-4xl text-[var(--chalk)] uppercase md:text-5xl">
              Start here
            </h2>
            <div className="mt-6 grid gap-2 sm:grid-cols-3">
              <PrimaryLink href={PAYPAL_INVOICE_URL}>Pay Deposit</PrimaryLink>
              <a
                href="#intake-form"
                className="inline-flex min-h-12 items-center justify-center border border-[var(--border)] bg-[var(--panel-2)] px-5 py-3 font-label text-sm font-bold tracking-[0.14em] text-[var(--chalk)] uppercase transition-all duration-[var(--fast)] hover:border-[var(--infrared)] hover:text-[var(--infrared)]"
              >
                Submit Info
              </a>
              <SecondaryLink href={DROPBOX_OTHER_ASSETS_URL}>
                Upload Assets
              </SecondaryLink>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
