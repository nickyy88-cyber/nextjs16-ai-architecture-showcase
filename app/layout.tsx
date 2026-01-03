import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio Showcase",
  description: "A showcase of creative projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} font-sans antialiased min-h-screen`}>
        {children}
        {/* Floating Back Button - only show on demo pages */}
        <BackToHomeButton />
      </body>
    </html>
  );
}

function BackToHomeButton() {
  return (
    <Link
      href="/"
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-5 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 group border border-slate-200/50"
      aria-label="Back to home"
    >
      <svg
        className="w-5 h-5 text-slate-600 group-hover:text-slate-900 transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
      <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
        Home
      </span>
    </Link>
  );
}
