"use client";
import headImage from "@/assets/images/image.png";
import people from "@/assets/images/people.png";
import { motion, useMotionValue, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Component1 = () => {
  const { scrollYProgress } = useScroll();
  const pathRef = useRef<SVGPathElement | null>(null);

  const progressLength = useMotionValue(0);
  const progressX = useMotionValue(0);
  const progressY = useMotionValue(0);

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
      };

      const initialScrollPosition = scrollYProgress.get();
      updateCirclePosition(initialScrollPosition);

      const unsubscribe = scrollYProgress.onChange((scrollPercent) => {
        updateCirclePosition(scrollPercent);
      });

      return () => unsubscribe();
    }
  }, [scrollYProgress, progressX, progressY]);

  return (
    <div className="bg-black h-full w-full overflow-x-hidden">
      <div className="relative h-3/4 w-5/6 lg:ml-28 xs:ml-8 laptop:ml-24 surface:ml-16 2xl:ml-[210px]">
        <Image
          src={headImage}
          alt="Header Image"
          layout="responsive"
          width={1310}
          height={512}
        />
        <div className="absolute inset-0 flex flex-col justify-start items-start">
          <h1 className="text-white xs:text-4xl lg:text-6xl font-bold">Our</h1>
          <h1 className="text-red-600 xs:text-6xl lg:text-8xl font-bold">Events</h1>
        </div>
      </div>
      <div className="relative">
        <svg
          className="absolute left-1/2 transform -translate-x-1/2 w-full h-[2300px] z-0"
          viewBox="0 0 800 2200"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
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
            stroke="white"
            strokeWidth="2"
            fill="transparent"
          />
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
      <div className="flex mt-20 laptop:ml-10 relative z-10 flex-wrap">
        <div className="ml-5  2xl:ml-[400px]">
          <div className="text-white border lg:mt-10 lg:w-48 lg:ml-24 flex xs:w-20 xs:ml-4 justify-center">
            <h1 className="lg:text-3xl xs:text-xs">Devsoc'24</h1>
          </div>
          <p className="text-white xs:w-36 lg:w-96 lg:ml-14 mt-1 xs:text-3xs lg:text-xl">
            Events and hackathons are the two cornerstones that make CodeChef-VIT
            one of the campus' most reputed chapters. Our teamwork, dedication,
            and determination propel and inspire our events to achieve greater heights.
          </p>
        </div>
        <Image
          src={people}
          alt="People"
          width={500}
          height={500}
          className="xs:w-40 2xl:w-[600px] 2xl:h-[400px] laptop:ml-40 laptop:h-computer laptop:w-computer promax:ml-14 xs:ml-5 lg:ml-56 lg:h-computer lg:w-computer surface:h-56 surface:ml-14 surface:w-72 surface:mt-10 2xl:ml-[500px]"
        />
      </div>

      <div className="flex mt-44 2xl:ml-72 2xl:mt-28 laptop:ml-24 relative z-10 flex-wrap">
        <Image
          src={people}
          alt="People"
          width={500}
          height={500}
          className="xs:w-40 2xl:w-[600px] 2xl:h-[400px] laptop:ml-1 laptop:h-computer laptop:w-computer promax:ml-5 xs:ml-5 lg:ml-56 lg:h-computer lg:w-computer surface:h-56 surface:ml-14 surface:w-72 surface:mt-10"
        />
        <div className=" 2xl:ml-72 2xl:mt-8 ">
          <div className="text-white border lg:mt-10 lg:w-48 lg:ml-64 flex justify-center xs:w-20 xs:ml-14 promax:ml-20 laptop:ml-72 ">
            <h1 className="lg:text-3xl xs:text-xs">Cook-Off 8.0</h1>
          </div>
          <p className="text-white xs:w-36 lg:w-96 lg:ml-48 mt-1 xs:text-3xs xs:ml-10 lg:text-xl promax:ml-14 surface:ml-40 laptop:ml-56">
            Events and hackathons are the two cornerstones that make CodeChef-VIT
            one of the campus' most reputed chapters. Our teamwork, dedication, 
            and determination propel and inspire our events to achieve greater heights.
          </p>
        </div>
      </div>

      <div className="flex mt-44 laptop:ml-10 relative z-10 flex-wrap 2xl:mt-24">
        <div className="ml-5  2xl:ml-[400px]">
          <div className="text-white border lg:mt-10 lg:w-48 lg:ml-24 flex xs:w-20 xs:ml-4 justify-center">
            <h1 className="lg:text-3xl xs:text-xs">Cook-Off 9.0</h1>
          </div>
          <p className="text-white xs:w-36 lg:w-96 lg:ml-14 mt-1 xs:text-3xs lg:text-xl">
            CodeChef's Cook-Off 9.0 brings programmers together to showcase their talent
            and skills. Through this competition, students learn problem-solving, teamwork, 
            and creative thinking.
          </p>
        </div>
        <Image
          src={people}
          alt="alt"
          width={500}
          height={500}
          className="xs:w-40 2xl:w-[600px] 2xl:h-[400px] laptop:ml-40 laptop:h-computer laptop:w-computer promax:ml-14 xs:ml-5 lg:ml-56 lg:h-computer lg:w-computer surface:h-56 surface:ml-14 surface:w-72 surface:mt-10 2xl:ml-[500px]"
        />
      </div>
      
      <div className="flex mt-40 2xl:ml-72 2xl:mt-28 laptop:ml-24 relative z-10 flex-wrap">
        <Image
          src={people}
          alt="alt"
          width={500}
          height={500}
          className="xs:w-40 2xl:w-[600px] 2xl:h-[400px] laptop:ml-1 laptop:h-computer laptop:w-computer promax:ml-5 xs:ml-5 lg:ml-56 lg:h-computer lg:w-computer surface:h-56 surface:ml-14 surface:w-72 surface:mt-10"
        />
       <div className=" 2xl:ml-72 2xl:mt-8 ">
          <div className="text-white border lg:mt-10 lg:w-48 lg:ml-64 flex justify-center xs:w-20 xs:ml-14 promax:ml-20 laptop:ml-72">
            <h1 className="lg:text-3xl xs:text-xs">Devsoc'25</h1>
          </div>
          <p className="text-white xs:w-36 lg:w-96 lg:ml-48 mt-1 xs:text-3xs xs:ml-10 lg:text-xl promax:ml-14 surface:ml-40 laptop:ml-56">
            Devsoc'25 promises to bring another wave of innovation and collaboration, 
            allowing students to participate in hackathons that challenge their creativity 
            and problem-solving abilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Component1;
