import React from 'react';
import BoardCard from './BoardCard';

export default function BoardPage() {
  return (
    <div className="bg-black flex flex-col items-center">
      <div className="pt-12 text-center text-white">
        <p className="text-4xl uppercase">meet our</p>
        <p className="text-[150px] uppercase font-normal">board</p>
      </div>
      <div className="grid grid-cols-3 gap-x-12 gap-y-14 mt-12 max-w-[75%]">
        {Array.from({ length: 9 }, (_, index) => (
          <BoardCard key={index} num={index} />
        ))}
      </div>
    </div>
  );
}
