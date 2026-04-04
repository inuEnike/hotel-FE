import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[80vh] w-full text-center overflow-hidden flex-col flex gap-2 items-center justify-center hero3">
      <h2 className="font-extrabold text-[40px] md:text-[60px] text-white uppercase">
        About us
      </h2>
      <div className="flex items-center gap-2 text-white">
        <Link href={"/public"} className="font-semibold">
          Home
        </Link>
        <span>|</span>
        <Link href={"/contact"} className="font-semibold">
          About
        </Link>
      </div>
    </div>
  );
};

export default Hero;
