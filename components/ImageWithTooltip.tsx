// components/ImageWithTooltip.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';

interface ImageWithTooltipProps {
  src: string;
  alt: string;
  tooltipText: string;
}

const ImageWithTooltip: React.FC<ImageWithTooltipProps> = ({ src, alt, tooltipText }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative group overflow-none transform transition duration-500 ${hovered ? 'scale-[103%]' : 'scale-100'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Static image that transitions to a slightly opaque state on hover */}
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={1000}
        className={`w-full aspect-[3/2] object-cover transition-opacity duration-300`}
      />

        {/* Gradient overlay - visible on hover */}
      <div
        className={`absolute bottom-0 left-0 w-full h-[25%] bg-gradient-to-t from-black to-transparent transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Tooltip - visible on hover */}
      <div
        className={`absolute bottom-0 left-0 w-full text-white text-sm p-2 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}
      >
        {tooltipText}
      </div>
    </div>
  );
};

export default ImageWithTooltip;
