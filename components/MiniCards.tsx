"use client";
import Image from "next/image";
import React, { useState } from "react";

interface IProp {
  src: string;
  alt: string;
  title: string;
  srcLight: string;
}

const MiniCards = ({ src, srcLight, alt, title }: IProp) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`
        ${hover ? "bg-main" : "bg-background"}
        w-full h-62.5
        flex items-center flex-col gap-2 justify-center
        my-3 cursor-pointer transition
      `}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image src={hover ? srcLight : src} alt={alt} width={45} height={45} />
      <p
        className={`text-md md:text-[16px] text-center font-medium font-poppins ${
          hover ? "text-white" : "text-main"
        }`}
      >
        {title}
      </p>
    </div>
  );
};

export default MiniCards;
