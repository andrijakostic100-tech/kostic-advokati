import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kostic-advokati.rs"),
  title: {
    default: "Advokatska kancelarija Kostić — Tradicija. Diskrecija. Rezultat.",
    template: "%s · Advokatska kancelarija Kostić",
  },
  description:
    "Advokatska kancelarija Kostić — privredno pravo, arbitraža, M&A, nepokretnosti i nasleđe. Decenija iskustva u zastupanju klijenata u zemlji i inostranstvu.",
  openGraph: {
    title: "Advokatska kancelarija Kostić",
    description:
      "Tradicija, diskrecija i merljivi rezultat. Pravno savetovanje za zahtevne klijente.",
    type: "website",
    locale: "sr_RS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
