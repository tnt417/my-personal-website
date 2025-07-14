"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ src, alt, onClose }) => {
  const [visible, setVisible] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backdropRef.current) {
      setVisible(false);
      setTimeout(() => onClose(), 200);
    }
  };

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      className={`fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Close button */}
      <button
        className="absolute top-4 right-4 text-white text-3xl z-50"
        onClick={() => {
          setVisible(false);
          setTimeout(() => onClose(), 200);
        }}
        aria-label="Close"
      >
        ✕
      </button>

      {/* Constrained wrapper to enforce consistent sizing */}
      <div className="max-w-[90vw] max-h-[90vh] w-auto h-auto">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={1600}
          className="w-auto h-[80vh] object-contain"
        />
      </div>
    </div>
  );
};

export default Lightbox;
