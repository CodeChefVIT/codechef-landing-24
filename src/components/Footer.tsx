"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import DiscordIcon from "./../assets/images/Discord.svg";
import FacebookIcon from "./../assets/images/Facebook.svg";
import InstagramIcon from "./../assets/images/Instagram.svg";
import LinkedInIcon from "./../assets/images/LinkedIn.svg";
import TwitterIcon from "./../assets/images/Twitter.svg";
import YouTubeIcon from "./../assets/images/Youtube.svg";

const Footer: React.FC = () => {
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
  }, []);

  return (
    <footer className="bg-black text-white pt-10">
      <div className="text-center mb-4 mt-44 font-enigma">
        <span
          className={`text-5xl sm:text-7xl md:text-8xl ${isAtBottom ? "text-[#FF3B00]" : "text-white"
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
            <FooterButton label={"HOME"} redirect={"#"} />
            <FooterButton label={"PROJECTS"} redirect={"#"} />
          </div>

          <div className="grid-item grid grid-cols-2  w-full  h-[50px]">
            <FooterButton label={"BOARD"} redirect={"#"} />
            <FooterButton label={"DEVSOC"} redirect={"#"} />
          </div>

          <div className="grid-item grid grid-cols-2   w-full  h-[50px]">
            <FooterButton label={"EVENTS"} redirect={"#"} />
            <FooterButton label={"BLOG"} redirect={"#"} />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center border-t border-white py-4">
        <div className="text-gray-400 text-sm lg:text-base ml-10 mb-4 lg:mb-0">
          © 2024 CODECHEF
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <div className="rounded-full p-3">
              <Image
                src={FacebookIcon}
                alt="facebook-icon"
                height={20}
                width={20}
                className="h-auto w-auto"
              />
            </div>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <div className="rounded-full p-3">
              <Image
                src={TwitterIcon}
                alt="twitter-icon"
                height={20}
                width={20}
                className="h-auto w-auto"
              />
            </div>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <div className="rounded-full p-3">
              <Image
                src={YouTubeIcon}
                alt="youtube-icon"
                height={20}
                width={20}
                className="h-auto w-auto"
              />
            </div>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <div className="rounded-full p-3">
              <Image
                src={InstagramIcon}
                alt="instagram-icon"
                height={20}
                width={20}
                className="h-auto w-auto"
              />
            </div>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <div className="rounded-full p-3">
              <Image
                src={LinkedInIcon}
                alt="linkedin-icon"
                height={20}
                width={20}
                className="h-auto w-auto"
              />
            </div>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <div className="rounded-full p-3">
              <Image
                src={DiscordIcon}
                alt="discord-icon"
                height={20}
                width={20}
                className="h-auto w-auto"
              />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const FooterButton = ({
  label,
  redirect,
}: {
  label: string;
  redirect: string;
}) => {
  return (
    <Link href={redirect}>
      <div className="h-full relative">
        <div className="absolute w-full bg-white  rounded transition hex4 p-2 sm:p-4 ">
          p
        </div>
        <div className="absolute w-full right-[5px] top-[-5px] bg-gray-800 text-white p-2 py-[11px] sm:p-4 text-center rounded hover:bg-[#FF3B00] transition hex4 text-xs sm:text-base">
          {label}
        </div>
      </div>
    </Link>
  );
};

