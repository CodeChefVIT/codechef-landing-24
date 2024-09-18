"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ReactLenis from "@studio-freight/react-lenis";
import { Inter } from "next/font/google";
import Script from "next/script";
import React from "react";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lenisOptions = {
    lerp: 5,
    duration: 1.2,
    smoothTouch: false,
    smooth: true,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <html lang="en">
        <head>
          <Script src="/assets/navbar/js/demo1.js" strategy="lazyOnload" />
          <Script
            src="/assets/navbar/js/modernizr-2.6.2.min.js"
            strategy="lazyOnload"
          />
          <Script src="/assets/navbar/js/polyfills.js" strategy="lazyOnload" />
        </head>
        <body className={`${inter.className} overflow-x-hidden w-screen  bg-black `}>
          {children}
          <Footer />
          <Navbar />
        </body>
      </html>
    </ReactLenis>
  );
}
