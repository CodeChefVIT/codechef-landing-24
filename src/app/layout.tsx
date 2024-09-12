// RootLayout.js
"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ReactLenis from "@studio-freight/react-lenis";
import { Inter } from "next/font/google";
import Script from "next/script";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
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

  const [isLoaderActive, setIsLoaderActive] = useState(true); // State to track loader

  useEffect(() => {
    // Simulate loader active state for 15 seconds
    const timer = setTimeout(() => {
      setIsLoaderActive(false);
    }, 15000); // 15 seconds

    return () => clearTimeout(timer);
  }, []);

  const pathname = usePathname();

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
        <body className={`${inter.className} overflow-x-hidden w-screen`}>
          {children}

          {!isLoaderActive && <Footer />}
          {!isLoaderActive && <Navbar />}
        </body>
      </html>
    </ReactLenis>
  );
}
