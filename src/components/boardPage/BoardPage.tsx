
import BoardCard from './BoardCard';
import "./style.css";

export default function BoardPage() {
  return (
    <div className="bg-black flex flex-col items-center">
      <div className=" pt-[5rem] text-center text-white p-parent">
        <p className="sm:text-[2.5rem] text-[1.95rem] uppercase">meet our</p>
        <p className="sm:text-[120px] text-[80px] uppercase font-normal">board</p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-12 gap-y-14 mt-[5rem] ">
        {Array.from({ length: 9 }, (_, index) => (
          <BoardCard key={index} num={index} />
        ))}
      </div>
    </div>
  );
}
