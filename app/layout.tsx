import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diarra Konte | Portfolio BUT Informatique",
  description: "Portfolio et bilan de compétences BUT Informatique de Diarra Konte : développement fullstack, projets, stage IFFP et analyse réflexive.",
  openGraph: {
    title: "Diarra Konte | Développeur Fullstack",
    description: "Étudiant en BUT Informatique,futur alternant en cycle ingenieur à l'ESIEA. React, Next.js, TypeScript, Flutter.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
