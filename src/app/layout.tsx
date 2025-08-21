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
  title: "ভেলকি এজেন্ট লিস্ট | Velki Live Agent List 2025",
  description: "সর্বশেষ ভেলকি এজেন্ট লিস্ট, Velki Live 123 Agent List, Winpbu Agent এবং Velki Master Agent List দেখতে এখানে ক্লিক করুন।",
  keywords: [
    "ভেলকি এজেন্ট লিস্ট",
    "Velki Live Agent List 2025",
    "Velki 123 Agent List",
    "Velki Master Agent",
    "Winpbu Agent",
    "Velki Agent Bangladesh",
    "Velki Live 123",
    "ভেলকি লাইভ এজেন্ট লিস্ট",
    "Velki Bet Agent",
    "Velki Agent List Update",
  ],
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
