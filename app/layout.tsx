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
  title: "M - STUDIO | Portfolio",
  description: "Create beautiful, modern websites with M - STUDIO. Explore our portfolio and see how we can bring your vision to life.M.Studio is a premium digital sanctuary where minimalist architecture meets high-end development. Crafting bespoke digital environments for global visionaries. Let's build something amazing together.",
  keywords: [
    "M-Studio",
    "Portfolio Maker",
    "Web Design",
    "Minimalist Web Design",
    "High-End Development",
    "Digital Architecture",
    "Bespoke Websites",
    "Creative Agency",
    "Modern Web Solutions",
    "User-Centric Design",
    "Innovative Web Development",
    "Luxury Digital Experiences",
    "Custom Website Solutions",
    "Professional Web Services",
    "Cutting-Edge Web Design",
  ],
  icons: [
    {
      
      url: "/favicon6.png",
    },
  ],
  authors: [{ name: "M-Studio", url: "https://m-studio-sigma.vercel.app" }],
  openGraph: {
    title: "M - STUDIO | Portfolio",
    description: "Create beautiful, modern websites with M - STUDIO. Explore our portfolio and see how we can bring your vision to life.M.Studio is a premium digital sanctuary where minimalist architecture meets high-end development. Crafting bespoke digital environments for global visionaries. Let's build something amazing together.",
    url: "https://m-studio-sigma.vercel.app",
    siteName: "M - STUDIO",
    
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
