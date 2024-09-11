"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ReactLenis from "@studio-freight/react-lenis";
import { Inter } from "next/font/google";
import Script from "next/script";
import React from "react";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const lenisOptions = {
    lerp: 5,
    duration: 1.2,
    smoothTouch: false,
    smooth: true,
  };

  const pathname = usePathname();
  const isLoaderPage = pathname === "/loader";

  useEffect(() => {
    
    const script1 = document.createElement("script");
    script1.src = "/assets/navbar/js/demo1.js";
    script1.onload = () => {
     
    };
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "/assets/navbar/js/modernizr-2.6.2.min.js";
    document.body.appendChild(script2);

    const script3 = document.createElement("script");
    script3.src = "/assets/navbar/js/polyfills.js";
    document.body.appendChild(script3);

    return () => {
      
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.body.removeChild(script3);
    };
  }, []);

  return (
    <ReactLenis root options={lenisOptions}>
      <html lang="en">
        <body className={`${inter.className} overflow-x-hidden w-screen`}>
          {children}
          {!isLoaderPage && <Footer />}
          {!isLoaderPage && <Navbar />}
        </body>
      </html>
    </ReactLenis>
  );
}
