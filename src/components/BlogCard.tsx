'use client';
import Image from 'next/image';
import React, { useState } from 'react';
interface BlogCardProps {
  title: string;
  description: string;
  image: {
    src: string;
  };
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, image, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={`bg-white rounded-md z-10 ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <a href={link}>
        <div className=' flex flex-col p-2 sm:flex-row'>
          <Image
            src={`/assets/images/${image.src}`}
            alt={title}
            width={200}
            height={200}
            className="p-2 justify-center lg:w-400 lg:h-400 sm:w-200 sm:h-200"
          />
          <div className="p-3 flex flex-col sm:flex-col">
            <h2 className="py-2 font-bold">{title}</h2>
            <p className="">{description}</p>
            <p className="pt-10 pl-100" style={{ color: isHovered ? 'red' : 'black', fontWeight: isHovered ? '600' : '400' }}>Read More </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BlogCard;