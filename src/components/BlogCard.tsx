'use client'; 
import Link from 'next/link';
import React, { useState } from 'react';
interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, image, slug }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={`card bg-white rounded-md z-10 ${isHovered ? 'hovered' : ''}`} 
    onMouseEnter={() => setIsHovered(true)} 
    onMouseLeave={() => setIsHovered(false)}>
      <Link href={`/blog/${slug}`}>
        <div className=' flex p-2'>
          <img src={image} alt={title} className="card-image p-3 rounded-md h-200 flex-col sm:flex-row" />
          <div className="card-content p-3 flex flex-col sm:flex-col">
            <h2 className="card-title py-2 font-bold">{title}</h2>
            <p className="card-description">{description}</p>
            <p className="read-more pt-10 pl-100" style={{ color: isHovered ? 'red' : 'black', fontWeight: isHovered ? '600' : '400' }}>Read More </p> 
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;