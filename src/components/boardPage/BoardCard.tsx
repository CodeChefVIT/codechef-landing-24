'use client';
import Image from 'next/image';
import { useState } from 'react';
import hooman from '@/assets/images/hooman.png';
import hooman2 from '@/assets/images/hooman2.png';
import './style.css';



type BoardCardProps = {
  num: number;
};

export default function BoardCard({ num }: BoardCardProps) {
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

        className="h-img transition-all duration-200"
        src={num % 2 === 0 ? hooman : hooman2}
        alt="alt"
        layout="responsive"
        width={1310}
        height={512}
        style={isHovering?{opacity: "0"}:{opacity: "100"}}
      />
      {!isHovering ? <>
        <div className="flex flex-col items-center mt-[-15px] p-parent transition-all duration-300">
          <p className="text-black text-[20px] name">vashistha</p>
          <p className="text-black text-[10px] role">creative lead</p>
        </div></> :
        <div className='cursor-default absolute top-0 p-parent h-[70%] flex justify-center items-center mx-[40px] my-[50px]'><p className='text-white text-[14px] name t-r'>Lorem ipsum dolor sit amet consectetur. Ac ac enim viverra lacus eget a viverra quam. Id ipsum congue purus.</p></div>
      }
    </div>
  );
}
