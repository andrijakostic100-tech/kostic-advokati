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
  title: {
    default: "Advokatska kancelarija Kostić Jović i partneri — Niš",
    template: "%s · Kostić Jović i partneri",
  },
  description:
    "Advokatska kancelarija Kostić Jović i partneri — prekršajno, odštetno i krivično pravo, nepokretnosti. Zastupamo klijente širom Srbije.",
  openGraph: {
    title: "Kostić Jović i partneri",
    description:
      "Advokatska kancelarija iz Niša — prekršajno, odštetno, krivično pravo i nepokretnosti.",
    type: "website",
    locale: "sr_RS",
    images: ["/logo-color.png"],
  },
  icons: {
    icon: "/symbol-color.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr-Latn"
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
