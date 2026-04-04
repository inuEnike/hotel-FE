import { Icons } from "@/utils/icons";
import { images } from "@/utils/images";
import Image from "next/image";
import React from "react";

interface ITestimonyProp {
  image: string;
  message: string;
  name: string;
}

const TestimonyCard = ({ image, message, name }: ITestimonyProp) => {
  return (
    <div className="bg-background lg:w-111.5 xl:w-131.5 xl:h-125.5 h-auto px-10 py-5 flex flex-col justify-center">
      <div className="heading flex justify-between items-center">
        <p className="text-sm text-aid font-semibold">2 Mar. 2023</p>
        <div className="flex gap-1">
          <span>
            <Image src={Icons.Star} alt="Star Rating" height={15} width={15} />
          </span>
          <span>
            <Image src={Icons.Star} alt="Star Rating" height={15} width={15} />
          </span>{" "}
          <span>
            <Image src={Icons.Star} alt="Star Rating" height={15} width={15} />
          </span>{" "}
          <span>
            <Image src={Icons.Star} alt="Star Rating" height={15} width={15} />
          </span>{" "}
          <span>
            <Image src={Icons.Star} alt="Star Rating" height={15} width={15} />
          </span>
        </div>
      </div>
      <div className="">
        <p className="text-aid text-sm py-7 text-justify flex flex-col">
          <Image
            src={Icons.QuoteUp}
            alt="Quote Rating"
            height={15}
            width={15}
          />
          <span className="ml-5"> {message}</span>
          <Image
            className=""
            src={Icons.QuoteDown}
            alt="Quote Rating"
            height={15}
            width={15}
          />
        </p>
        <div className="flex items-center gap-3 my-5">
          <div className="rounded-full">
            <Image
              className="rounded-full"
              src={image}
              alt="User image"
              height={45}
              width={45}
            />
          </div>
          <p className="font-semibold text-sm">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;
