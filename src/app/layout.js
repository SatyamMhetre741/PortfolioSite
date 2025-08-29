import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "./components/lenis-provider"
import ScrollGlow from "./components/scroll-glow"
import SiteFooter from "./components/site-footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "satyam's portfolio",
  description: "satyam's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
        <ScrollGlow color="#03b3c3" />
        <SiteFooter />

      </body>
    </html>
  );
}
