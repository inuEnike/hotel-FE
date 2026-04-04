import { images } from "@/utils/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ILogo {
  src: string;
}
const Logo = ({ src }: ILogo) => {
  return (
    <div className="">
      <Link href={"/"}>
        <Image
          src={src}
          alt="Hybrid hotel & suite logo"
          width={80}
          height={80}
          loading="eager"
        />
      </Link>
    </div>
  );
};

export default Logo;
