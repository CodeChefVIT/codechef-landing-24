"use client";

import headImage from "@/assets/images/image.png";
import people from "@/assets/images/people.png";
import Card from "@/components/Card";
import { motion, useMotionValue, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Component1 = () => {
  const { scrollYProgress } = useScroll();
  const pathRef = useRef<SVGPathElement | null>(null);

  const progressX = useMotionValue(0);
  const progressY = useMotionValue(0);
  const strokeDashoffset = useMotionValue(1);
  const circleRadius = 40;
  const circleOffset = circleRadius / 20;

  useEffect(() => {
    if (pathRef.current) {
      const pathElement = pathRef.current;
      const totalPathLength = pathElement.getTotalLength();

      const updateCirclePosition = (scrollPercent: number) => {
        const progress = scrollPercent * totalPathLength;
        const point = pathElement.getPointAtLength(progress);
        progressX.set(point.x);
        progressY.set(point.y);
        strokeDashoffset.set(1 - scrollPercent); // Update stroke offset for the red transition
      };

      updateCirclePosition(scrollYProgress.get());
      const unsubscribe = scrollYProgress.onChange((scrollPercent) => {
        updateCirclePosition(scrollPercent);
      });

      return () => unsubscribe();
    }
  }, [scrollYProgress, progressX, progressY, strokeDashoffset]);

  return (
    <div className="bg-black min-h-screen w-full font-enigma">
      {/* Header Section */}
      <div className="relative h-3/4 w-5/6 mx-auto">
        <Image
          src={headImage}
          alt="Header Image"
          layout="responsive"
          width={1310}
          height={512}
        />
        <div className="absolute top-0 left-0 p-4 flex flex-col">
          <h1 className="text-white xs:text-4xl lg:text-6xl font-bold">Our</h1>
          <h1 className="text-red-600 xs:text-6xl lg:text-8xl font-bold">
            Events
          </h1>
        </div>
      </div>

      {/* SVG Section */}
      <div className="relative hidden lg:block">
        <svg
          className="absolute left-1/2 transform -translate-x-1/2 w-full h-[2300px] z-0"
          viewBox="0 0 800 2200"
          preserveAspectRatio="xMidYMid meet"
        >
          <motion.path
            ref={pathRef}
            d="M 650, 0
              L 650, 100 
              L 650, 500  
              L 100, 500  
              L 100, 1000  
              L 670, 1000  
              L 670, 1450 
              L 100, 1450
              L 100, 2000"
            stroke="url(#gradient)" // Add a gradient for color transition
            strokeWidth="2"
            fill="transparent"
            strokeDashoffset={strokeDashoffset} // Animate based on scroll
          />

          <defs>
            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="red" />
            </linearGradient>
          </defs>
          <motion.circle
            cx={progressX}
            cy={progressY}
            r={circleRadius}
            fill="#FF3B00"
            style={{
              x: -circleOffset,
              y: -circleOffset,
            }}
          />
        </svg>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center ">
        <Card
          title="Devsoc'24"
          description="Events and hackathons are the two cornerstones that make CodeChef-VIT one of the campus' most reputed chapters. Our teamwork, dedication, and determination propel and inspire our events to achieve greater heights."
          imageSrc={people}
          imageAlt="People"
          reverse
        />
        <Card
          title="Cook-Off 8.0"
          description="Events and hackathons are the two cornerstones that make CodeChef-VIT one of the campus' most reputed chapters. Our teamwork, dedication, and determination propel and inspire our events to achieve greater heights."
          imageSrc={people}
          imageAlt="People"
        />
        <Card
          title="Cookoff 9.0"
          description="Events and hackathons are the two cornerstones that make CodeChef-VIT one of the campus' most reputed chapters. Our teamwork, dedication, and determination propel and inspire our events to achieve greater heights."
          imageSrc={people}
          imageAlt="People"
          reverse
        />
        <Card
          title="Devsoc'25"
          description="Devsoc'25 promises to bring another wave of innovation and collaboration, allowing students to participate in hackathons that challenge their creativity and problem-solving abilities."
          imageSrc={people}
          imageAlt="People"
        />
      </div>
    </div>
  );
};

export default Component1;
