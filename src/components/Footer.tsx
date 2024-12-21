"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer: React.FC = ({}) => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const bottomPosition = document.documentElement.scrollHeight;

      if (scrollPosition >= bottomPosition) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // <- Closing the useEffect block here

  return (
    <footer className={`bg-black text-white  ${1}`}>
      <div className="text-center mb-14 mt-24 font-enigma">
        <span
          className={`text-5xl sm:text-7xl md:text-8xl  ${
            isAtBottom ? "text-[#FF3B00]" : "text-white"
          }`}
        >
          CODECHEF
        </span>
      </div>
      <div className="sm:grid grid-cols-2 flex flex-col justify-center items-center border-t-2 border-b-2 border-white font-enigma">
        <p className="sm:text-left text-center sm:text-xl text-base mx-auto p-4">
          CODECHEF-VIT IS A NON-COMMERCIAL ORGANISATION WITH A GOAL TO PROVIDE A
          PLATFORM FOR PROGRAMMERS AND DEVELOPERS EVERYWHERE TO MEET, COMPETE &
          HAVE FUN. AT CODECHEF-VIT, WE BELIEVE IN THE WORDS OF MATT MULLENWEG –
          “TECHNOLOGY IS THE BEST WHEN IT BRINGS PEOPLE TOGETHER”.
        </p>
        <div className="sm:w-auto w-full grid item-center grid-row-3 sm:border-l-2 border-white grid-container sm:h-full">
          <div className="grid-item grid grid-cols-2 w-full h-[50px]">
            <FooterButton newTab={false} label={"HOME"} redirect={"/"} />
            <FooterButton
              newTab={false}
              label={"PROJECTS"}
              redirect={"/projects"}
            />
          </div>

          <div className="grid-item grid grid-cols-2  w-full  h-[50px]">
            <FooterButton newTab={false} label={"BOARD"} redirect={"/board"} />
            <FooterButton
              newTab={true}
              label={"DEVSOC"}
              redirect={"https://devsoc.codechefvit.com/"}
            />
          </div>

          <div className="grid-item grid grid-cols-2   w-full  h-[50px]">
            <FooterButton
              newTab={false}
              label={"EVENTS"}
              redirect={"/events"}
            />
            <FooterButton newTab={false} label={"BLOG"} redirect={"/blog"} />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center border-t border-white py-4">
        <div className="text-gray-400 text-sm lg:text-base ml-10 mb-4 lg:mb-0 font-enigma">
          © 2024 CODECHEF
        </div>
        <div className="flex flex-wrap justify-center gap-12 mr-8">
          <SocialIcon
            href="https://www.facebook.com/codechefvit/"
            icon="./../assets/socialmediaicons/fb.svg"
            altText="Facebook"
          />
          <SocialIcon
            href="https://x.com/codechefvit"
            icon="./../assets/socialmediaicons/twitter.svg"
            altText="Twitter"
          />
          <SocialIcon
            href="https://www.youtube.com/c/CodeChefVIT"
            icon="./../assets/socialmediaicons/yt.svg"
            altText="YouTube"
          />
          <SocialIcon
            href="https://www.instagram.com/codechefvit/"
            icon="./../assets/socialmediaicons/ig.svg"
            altText="Instagram"
          />
          <SocialIcon
            href="https://www.linkedin.com/company/codechefvit/"
            icon="./../assets/socialmediaicons/linkedin.svg"
            altText="LinkedIn"
          />
          <SocialIcon
            href="https://github.com/CodeChefVIT"
            icon="./../assets/socialmediaicons/github.svg"
            altText="Discord"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const FooterButton = ({
  label,
  redirect,
  newTab,
}: {
  label: string;
  redirect: string;
  newTab: boolean;
}) => {
  return (
    <>
      {newTab ? (
        <a href={redirect} target="_blank" rel="noopener noreferrer">
          <div className="h-full relative">
            <div className="absolute w-full bg-white rounded transition hex4 p-2 sm:p-4">
              p
            </div>
            <div className="absolute w-full right-[5px] top-[-5px] bg-gray-800 text-white p-2 py-[11px] sm:p-4 text-center rounded hover:bg-[#FF3B00] transition hex4 text-xs sm:text-base">
              {label}
            </div>
          </div>
        </a>
      ) : (
        <Link href={redirect}>
          <div className="h-full relative">
            <div className="absolute w-full bg-white rounded transition hex4 p-2 sm:p-4">
              p
            </div>
            <div className="absolute w-full right-[5px] top-[-5px] bg-gray-800 text-white p-2 py-[11px] sm:p-4 text-center rounded hover:bg-[#FF3B00] transition hex4 text-xs sm:text-base">
              {label}
            </div>
          </div>
        </Link>
      )}
    </>
  );
};
const SocialIcon = ({
  href,
  icon,
  altText,
}: {
  href: string;
  icon: string;
  altText: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center w-12 h-12 group"
    >
      {/* Shadow Circle */}
      <div className="absolute w-12 h-12  bg-gray-500 rounded-full -bottom-0.5 -right-0.5"></div>
      {/* Main Circle */}
      <div className="relative flex items-center justify-center  w-12 h-12 bg-white rounded-full hover:bg-[#FF3B00] transition transform hover:scale-110">
        <Image
          src={icon}
          alt={altText}
          width={24}
          height={24}
          className="transition group-hover:filter group-hover:invert"
        />
      </div>
    </a>
  );
};
