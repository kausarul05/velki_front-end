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
  title: "WINPBU তে স্বাগতম - Velki Baajiwala Agent List",
  description: "WINPBU বাংলাদেশ - বাংলাদেশের শীর্ষস্থানীয় অনলাইন গেমিং এবং বেটিং প্ল্যাটফর্ম পরিচালনা প্রতিষ্টান। আমদের সাইট গুলো হচ্ছে এজেন্ট বেইজড সাইট। এই খানে এজেন্ট এর মাধ্যমে লেনদেন করতে হবে। এজেন্ট আপনাকে একাউন্ট খুলে দিবে।",
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
    "ভেলকি এজেন্ট লিস্ট",
    "velki live login",
    "velki live 123 agent list",
    "velki live agent list",
    "velki agent list",
    "velki agent",
    "Velki All Agent BD",
    "Velki123 Live Agent List",
    "velki agent list Canada",
    "Velki Master Agent List",
    "Bhajiwala agent list",
    "winpbu agent list",
    "winpbu agent",
    "9wiket Agent list ",
    "Bajiwola Agent list",
    "ভেলকি এজেন্ট বাংলাদেশ",
    "Winpbu Master Agent ",
    "Winpbu Master",
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
