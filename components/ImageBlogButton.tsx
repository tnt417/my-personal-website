// components/ImageWithTooltip.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ImageBlogButtonProps {
  src: string;
  alt: string;
  destName: string;
  href: string;
}

const ImageBlogButton: React.FC<ImageBlogButtonProps> = ({ src, alt, destName, href}) => {
  const [hovered, setHovered] = useState(false);

  return (
<div
  className={`relative group overflow-hidden transform transition duration-500`}
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
>
  {/* Link wrapping the entire content */}
  <Link href={href} target="_blank" passHref className={`block w-full h-full`}>
    {/* Gradient overlay and image */}
    <div className={`relative w-[500px] h-[200px]`}>
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={1000}
        className={`w-full h-full object-cover transition-opacity duration-300`}
      />
      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          hovered ? 'opacity-80' : 'opacity-40'
        }`}
      ></div>
    </div>
    
    {/* Tooltip - center destName */}
    <div
      className={`absolute inset-0 flex justify-center items-center`}
    >
      <div className={`text-white text-[2rem] z-10`} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
        {destName}
      </div>
    </div>
  </Link>
</div>
  );
};

export default ImageBlogButton;
