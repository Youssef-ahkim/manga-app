import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; // Navbar Component

// Import fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// App metadata
export const metadata: Metadata = {
  title: "MangaDude",
  description: "This is a description for my app.",
  // Add the favicon to the metadata
  icons: {
    icon: "./favicon.jpeg", // Path to the favicon file in the public folder
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        {/* Navbar should be here */}
        <Navbar />

        {/* Main content */}
        <main className="pt-[80px]">{/* Add padding to avoid overlap */}
          {children}
        </main>
      </body>
    </html>
  );
}
