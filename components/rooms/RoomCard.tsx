import { images } from "@/utils/images";
import Image from "next/image";
import React from "react";

interface IProp {
  src: string;
  text: string;
  heading: string;
}
const RoomCard = ({ src, text, heading }: IProp) => {
  return (
    <div className="card bg-white rounded-lg w-full 2xl:h-[60vh] md:h-[50vh] h-auto  xl:w-[25%]">
      <div className="rounded-md">
        <Image
          src={src}
          alt="Hybrid hotel & suites"
          className="w-[82%] py-5 m-auto h-auto rounded-lg "
          height={250}
          width={270}
        />
      </div>
      <h3 className="font-semibold text-main text-xl">{heading}</h3>
      <p className="py-3 text-[17px] font-regular w-[82%] m-auto">{text}</p>
    </div>
  );
};

export default RoomCard;
