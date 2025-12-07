import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import { Space_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({
  weight: ['700'],
  variable: '--font-red-hat-display',
});

const spaceMono = Space_Mono({
  weight: ['400'],
  variable: '--font-space-mono'

})

export const metadata: Metadata = {
  title: "Joseph AJ Doba",
  description: "Cyber Security Specialist & Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navbar />
      <body
        className={`${redHatDisplay.variable} ${spaceMono.variable}  antialiased`}
      >
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
