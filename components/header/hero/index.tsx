"use client";
import MainBtn from "@/components/buttons/MainBtn";
import { images } from "@/utils/images";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

const Hero = () => {
  const [clicked, setClicked] = useState(false);
  const handleClickedVideo = () => {
    setClicked(!clicked);

    console.log("clicked");
  };
  const slides = [
    <Image
      src={images.Hero}
      alt="Hybrid hotel & suites"
      className="lg:w-156.5 xl:w-176.5 h-175 not-md:h-150 object-cover not-md:rounded-2xl rounded-md"
      height={1000}
      width={1000}
    />,
    <Image
      src={images.Hero2}
      alt="Hybrid hotel & suites"
      className="lg:w-156.5 xl:w-176.5 h-175 not-md:h-150 object-cover not-md:rounded-2xl duration-4000 ease-in-out transition-opacity rounded-md"
      height={1000}
      width={1000}
    />,
    <Image
      src={images.Hero4}
      alt="Hybrid hotel & suites"
      className="lg:w-156.5 xl:w-176.5 h-175 not-md:h-150 object-cover not-md:rounded-2xl duration-4000 ease-in-out transition-opacity rounded-md"
      height={1000}
      width={1000}
    />,
  ];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="bg-background w-full xl:h-175 items-center h-auto grid grid-cols-2 not-md:grid-cols-1 gap-10 justify-between xl:px-30 lg:px-20 md:px-8 px-5 relative ">
        <div className="text w-full flex flex-col lg:gap-5 gap-3 mt-10">
          <h2 className="font-dancing font-semibold text-[30px] md:text-[50px] text-main">
            Hybrid Hotel & Suites
          </h2>
          <h1 className="font-bold not-md:text-[35px] md:text-[40px] lg:text-[40px] xl:w-[60%] w-full">
            Hotel for every moment, filled with{" "}
            <span className="font-dancing text-[1.6em] text-main">E</span>
            motion.
          </h1>
          <p className="text-[15px] font-medium text-supportDark xl:w-[35%]">
            Every moment feels like the first time at hybrid hotel & suites
          </p>

          <div className="flex justify-between items-center 2xl:w-[50%] w-full gap-3">
            <Link href={'/book'}>
            <MainBtn text={"Book Now"} radius={"rounded-full"} />
            </Link>
            <div className="flex justify-center items-center gap-3">
              <div
                className="bg-main rounded-full cursor-pointer w-13.75 h-13.75 flex justify-center items-center"
                onClick={handleClickedVideo}
              >
                <button>
                  {clicked ? (
                    <FaPause size={20} className="text-white" />
                  ) : (
                    <FaPlay size={20} className="text-white" />
                  )}
                </button>
              </div>
              <p className="text-supportDark lg:text-[20px] text-[16px] font-medium">
                Take a tour
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center ">
          {clicked ? (
            <>
              <iframe
                src="https://www.youtube.com/embed/mTRvuEoCVL0"
                className="lg:w-156.5 xl:w-176.5 h-175 w-full not-md:h-150 object-cover not-md:rounded-2xl duration-4000 ease-in-out transition-all rounded-md"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </>
          ) : (
            slides[index]
          )}
        </div>
      </section>
    </>
  );
};

export default Hero;
