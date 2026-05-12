import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Barlow_Condensed, Barlow, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["700", "900"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const barlow = Barlow({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
};

export const metadata: Metadata = {
  title: "315mike — Paranoid Out Now",
  description:
    "Official site preview for Atlanta artist 315mike. Listen to music, watch videos, view photos, and send booking inquiries.",
  metadataBase: new URL("https://315mike.com"),
  openGraph: {
    title: "315mike — Paranoid Out Now",
    description:
      "Official site preview for Atlanta artist 315mike. Listen to music, watch videos, view photos, and send booking inquiries.",
    images: ["/assets/paranoid-cover.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${barlowCondensed.variable} ${barlow.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
