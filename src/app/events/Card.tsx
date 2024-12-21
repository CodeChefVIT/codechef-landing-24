import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  reverse?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [grayFilter, setGrayFilter] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(false); // Default to false
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Execute only on the client
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize(); // Check screen size on mount
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Intersection Observer for visibility detection
  useEffect(() => {
    const preloadImage = new window.Image();
    preloadImage.src = imageSrc as string;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        setGrayFilter(!entry.isIntersecting);
      },
      { threshold: 0.3 } // Adjust threshold for better detection
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [imageSrc]);

  const backgroundImageCount = isLargeScreen ? 30 : 10;

  return (
    <div
      ref={cardRef}
      className={`${grayFilter ? "grayscale" : ""} flex lg:flex-row flex-col items-center justify-center sm:mt-20 lg:mt-28 relative z-10 flex-wrap w-full sm:w-[1000px] mb-6 mt-6 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {isVisible && isLargeScreen && (
        <motion.div
          className="absolute inset-0 overflow-hidden"
          style={{ zIndex: -1 }}
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "linear",
          }}
        >
          <div className="flex h-full">
            {Array.from({ length: backgroundImageCount }, (_, index) => (
              <Image
                key={index}
                src={imageSrc}
                alt={`Background SVG ${index}`}
                width={1000}
                height={1000}
                className="mx-2 grayscale opacity-50"
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center md:mb-0">
        <div className={`${grayFilter ? "" : "border border-[#FF3B00]"}`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={300}
            height={300}
            className="lg:h-64 lg:w-96 transition-opacity duration-500"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 px-0 sm:px-12 flex flex-col items-center text-center lg:text-left md:mb-0">
        <div className="text-white max-w-xs sm:max-w-sm lg:w-full flex lg:mx-0">
          <h1
            className={`sm:text-base lg:text-[34.5px] text-left font-enigma ${
              grayFilter ? "text-white" : "text-[#FF3B00]"
            }`}
          >
            {title}
          </h1>
        </div>
        <p className="text-white mt-1 max-w-xs sm:max-w-sm lg:w-96 lg:ml-0 mx-auto text-xs sm:text-sm lg:text-lg p-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
