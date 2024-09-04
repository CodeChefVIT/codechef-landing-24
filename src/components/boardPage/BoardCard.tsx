import React from 'react';
import hooman from '../images/hooman.png';
import hooman2 from '../images/hooman2.png';
import Image from 'next/image';

type BoardCardProps = {
  num: number;
};

export default function BoardCard({ num }: BoardCardProps) {
  return (
    <div className="bg-no-repeat bg-cover h-[340px] w-[250px] card">
      <Image
        className="h-img"
        src={num % 2 === 0 ? hooman : hooman2}
        alt="alt"
        layout="responsive"
        width={1310}
        height={512}
      />
      <div className="flex flex-col items-center mt-[-20px]">
        <p className="text-black text-[26px]">vashistha</p>
        <p className="text-black text-[13px]">creative lead</p>
      </div>
    </div>
  );
}
