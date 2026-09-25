import Heading from "@/components/Heading";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";

const display = localFont({
  src: [
    {
      path: "./fonts/bodoni-moda-normal.woff2",
      weight: "400 700",
      style: "normal",
    },
    {
      path: "./fonts/bodoni-moda-italic.woff2",
      weight: "400 700",
      style: "italic",
    },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
  adjustFontFallback: false,
});

const body = localFont({
  src: [
    { path: "./fonts/spectral-300.woff2", weight: "300", style: "normal" },
    { path: "./fonts/spectral-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/spectral-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/spectral-600.woff2", weight: "600", style: "normal" },
    {
      path: "./fonts/spectral-italic-400.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["Georgia", "serif"],
  adjustFontFallback: false,
});

const sans = localFont({
  src: [
    {
      path: "./fonts/hanken-grotesk.woff2",
      weight: "300 800",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: false,
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1120",
};

export const metadata = {
  title: "Church Street Solicitors | Stratford, East London",
  description:
    "Church Street Solicitors Ltd — trusted Stratford solicitors since 2015. Immigration, Family, Crime, Housing, Employment and Civil Litigation. Fixed fees, honest advice.",
  openGraph: {
    title: "Church Street Solicitors | Stratford, East London",
    description:
      "Immigration, family, crime, housing, employment and civil litigation. Fixed fees agreed in writing, senior-led matters, and advice in plain English.",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${body.variable} ${display.variable} ${body.className} relative bg-parchment text-slatebody antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-claret focus:px-4 focus:py-3 focus:text-[11px] focus:font-semibold focus:uppercase focus:tracking-caps focus:text-parchment"
        >
          Skip to content
        </a>
        <Heading />
        {children}
        <Footer />
        <Copyright />
      </body>
    </html>
  );
}
