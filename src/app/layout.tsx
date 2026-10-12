import type { Metadata } from "next";
import type { ReactNode } from "react";
import { site } from "@/config/site";
import localFont from "next/font/local";
import "./globals.css";

const displayFont = localFont({
  src: "../../public/fonts/space-grotesk.ttf",
  variable: "--font-display",
  display: "swap",
  weight: "300 700",
});

export const metadata: Metadata = {
  title: `${site.name} — Passe de l’idée au projet`,
  description: site.description,
  applicationName: site.name,
  openGraph: {
    title: `${site.name} — Apprends en faisant.`,
    description: site.description,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${site.name} — Apprends en faisant.`,
    description: site.description,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={displayFont.variable}>
      <body>{children}</body>
    </html>
  );
}
