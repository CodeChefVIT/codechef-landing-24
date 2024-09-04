import lower from "@/assets/images/lower.svg";
import upper from "@/assets/images/upper.svg";
import BlogCard from "@/components/BlogCard";
import Image from "next/image";
import "../../styles/enigma-font.css";

const dummyData = [
  {
    slug: "blog1",
    title: "blog1",
    description:
      "Lorem ipsum dolor sit amet consectetur. Arcu feugiat neque curabitur porttitor viverra nunc laoreet. Tortor neque odio auctor est in egestas arcu mattis enim.",
    image: "https://placehold.co/200x200",
  },
  {
    slug: "blog2",
    title: "blog2",
    description:
      "Lorem ipsum dolor sit amet consectetur. Arcu feugiat neque curabitur porttitor viverra nunc laoreet. Tortor neque odio auctor est in egestas arcu mattis enim.",
    image: "https://placehold.co/200x200",
  },
  {
    slug: "blog3",
    title: "blog3",
    description:
      "Lorem ipsum dolor sit amet consectetur. Arcu feugiat neque curabitur porttitor viverra nunc laoreet. Tortor neque odio auctor est in egestas arcu mattis enim.",
    image: "https://placehold.co/200x200",
  },
  {
    slug: "blog4",
    title: "blog4",
    description:
      "Lorem ipsum dolor sit amet consectetur. Arcu feugiat neque curabitur porttitor viverra nunc laoreet. Tortor neque odio auctor est in egestas arcu mattis enim.",
    image: "https://placehold.co/200x200",
  },
  {
    slug: "blog5",
    title: "blog5",
    description:
      "Lorem ipsum dolor sit amet consectetur. Arcu feugiat neque curabitur porttitor viverra nunc laoreet. Tortor neque odio auctor est in egestas arcu mattis enim.",
    image: "https://placehold.co/200x200",
  },
];

export default function Blog() {
  return (
      <div className="bg-black text-white h-full font-enigma z-0 w- overflow-hidden">
        <h1 className="font-bold pt-8 text-5xl text-center mb-8 font-enigma">
          BLOGS
        </h1>
        <Image src={upper} className=' absolute z-0 -top-[50%] -left-[50%] h-[1148px] w-auto ' height={1000} width={1000} alt='upper-element'/>
        <Image src={lower} className='absolute z-0 -bottom-[90%] -right-[30%] h-[1148px] w-auto' height={1000} width={1000}alt='lower-element'/>
        <div className="svg"></div>

        <div className="container mx-auto z-10">
          <div className="  text-black z-10">
            <div className=" grid grid-cols-1 gap-8 p-5 rounded-lg">
              {dummyData.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  description={post.description}
                  image={post.image}
                  slug={post.slug}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}
