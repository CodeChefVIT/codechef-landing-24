'use client';
import hooman from '@/assets/images/hooman.png';
import Image from 'next/image';
import { useState } from 'react';
import './style.css';
// import nishant from "@/assets/images/nishant.png";

type BoardCardProps = {
  num: number;
  boardName: string;
  boardDesc: string;
  boardPos: string;
};

export default function BoardCard({ num, boardName, boardDesc, boardPos }: BoardCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  const cardHoverStyle = {
    transform: "rotateY(180deg)",
    backgroundImage: "url('/revCard.png')",
    backgroundSize: "250px 350px !important"
  }
  const cardNotHover = {
    // transform: "rotateY(180deg)",
    backgroundImage: "url('/bCard.png')",
    backgroundSize: "250px 350px !important"
  }
  return (
    <div onMouseEnter={() => {
      setIsHovering(true)
      console.log("mouse come")
    }} onMouseLeave={() => {
      setIsHovering(false)
      console.log("mouse go")
    }} className="transition-all duration-500 bg-no-repeat bg-cover h-[340px] w-[250px] card " style={isHovering ? cardHoverStyle : cardNotHover}>

      <Image

        className="h-img transition-all duration-200 bottom-[-14px]"
        src={hooman}
        alt="alt"
        layout="responsive"
        width={1310}
        height={512}
        style={isHovering?{opacity: "0"}:{opacity: "100"}}
      />
      {!isHovering ? <>
        <div className="flex flex-col items-center mt-[-25px] p-parent transition-all duration-300 ">
          <p className="text-black text-[16px] name mx-6 text-center pt-1">{boardName}</p>
          <p className="text-black text-[10px] text-center mx-5 role">{boardPos}</p>
        </div></> :
        <div className='cursor-default absolute top-0  p-parent h-[70%] flex justify-center items-center mx-[40px] my-[50px]'><p className='text-white text-[13px] name t-r'>{boardDesc}</p></div>
      }
    </div>
  );
}
