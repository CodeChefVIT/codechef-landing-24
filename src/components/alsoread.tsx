'use client';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface AlsoRead {
    title: string;
    image: string;
    slug: string;
}

const AlsoRead: React.FC<AlsoRead> = ({ title, image, slug }) => {
    return (
        <div className="bg-white rounded-lg w-full max-w-md flex flex-col items-center p-3 h-[500px] relative font-enigma">
            <Link href={`/blog/${slug}`} className="flex flex-col items-center space-y-4 h-full">
                <div className="w-full h-[300px] relative overflow-hidden rounded-lg">
                    <Image
                        src={image}
                        alt={title}
                        width={600}
                        height={300}
                        className="object-cover w-full h-full"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <h2 className="font-semibold text-black text-[18px] text-center px-2">{title}</h2>
                <div className="flex flex-row items-center gap-2 hover:text-[#FF3B00] absolute bottom-4 right-4 group">
                    <p className="text-black font-bold group-hover:text-[#FF3B00] text-sm md:text-base">
                        Read More
                    </p>
                    <MoveRight className="h-6 w-6 group-hover:text-[#FF3B00] md:h-8 md:w-8" />
                </div>
            </Link>
        </div>
    );
};

export default AlsoRead;
