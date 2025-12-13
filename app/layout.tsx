import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import { Space_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
  title: "Joseph Doba",
  description: "Freelance Web Developer & Cyber Security Specialist",
  metadataBase: new URL("https://josephdoba.com"),
  openGraph: {
    title: "Joseph Doba — Freelance Web Developer & Cyber Security Specialist",
    description: "Freelance web developer and cyber security specialist building fast, secure applications.",
    url: "/",
    siteName: "Joseph Doba",
    images: [
      {
        url: "/metadata_photo.png",
        width: 1200,
        height: 630,
        alt: "Preview image of Joseph Doba's portfolio website",
      },
    ],
    locale: "en_CA",
    type: "website",
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
        className={`${redHatDisplay.variable} ${spaceMono.variable}  antialiased`}
      >
        <div>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
      
    </html>
  );
}
