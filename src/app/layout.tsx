
"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ReactLenis } from "@studio-freight/react-lenis";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [changes, setChanges] = useState(0);

  useEffect(() => {
    console.log(`Route changed to: ${pathname}`);
    setChanges((prev) => prev + 1);
  }, [pathname]);



  const lenisOptions = {
    lerp: 1,
    duration: 1.5,
    smoothTouch: false,
    smooth: true,
  };

  const [isLoaderActive, setIsLoaderActive] = useState<boolean | null>(true);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasLoadedBefore2 = sessionStorage.getItem("hasLoadedBefore2");

      if (hasLoadedBefore2) {
        setIsLoaderActive(false);
      } else {
        setIsLoaderActive(true);
        const timer = setTimeout(() => {
          setIsLoaderActive(false);

          sessionStorage.setItem("hasLoadedBefore2", "true");
        }, 15000);

        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <ReactLenis root options={lenisOptions}>
      <html lang="en">
        <head></head>
        <body
          className={`${inter.className} overflow-x-hidden w-screen  bg-black overflow-y-auto  mx-auto`}
        >
          {children}

          {!isLoaderActive && pathname !== "/" && <Footer />}
          {!isLoaderActive && <Navbar />}
          <Script src="/assets/navbar/js/demo1.js" strategy="lazyOnload" />
          <Script
            src="/assets/navbar/js/modernizr-2.6.2.min.js"
            strategy="lazyOnload"
          />
          <Script src="/assets/navbar/js/polyfills.js" strategy="lazyOnload" />
        </body>
      </html>
    </ReactLenis>
  );
}
