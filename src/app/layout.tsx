import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kostic-jovic.rs"),
  title: {
    default: "Адвокатска канцеларија Костић Јовић и партнери — Ниш",
    template: "%s · Костић Јовић и партнери",
  },
  description:
    "Адвокатска канцеларија Костић Јовић и партнери — прекршајно, одштетно и кривично право, непокретности. Заступамо клијенте широм Србије.",
  openGraph: {
    title: "Костић Јовић и партнери",
    description:
      "Адвокатска канцеларија из Ниша — прекршајно, одштетно, кривично право и непокретности.",
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
