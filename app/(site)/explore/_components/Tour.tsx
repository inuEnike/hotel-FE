import { images } from "@/utils/images";
import Image from "next/image";
import React from "react";

const Tour = () => {
  return (
    <div className="my-10 pb-5 xl:px-30 lg:px-20 md:px-8 px-5">
      <h2 className="text-supportDark font-semibold text-[40px] text-center">
        Take a tour
      </h2>
      <section className="my-10">
        <div className=" flex flex-col justify-center gap-7">
          <div className="flex flex-col justify-center items-center relative mb-7">
            <div className="relative rounded-xl w-full h-[70vh]">
              <Image
                src={images.Room3}
                alt="room1"
                fill
                className="rounded-xl object-cover bg-center"
              />
            </div>
            <div className="bg-white md:w-187.5 w-auto mx-5 lg:w-197.5 h-auto md:h-57.5 xl:w-250.5 shadow  m-auto text-center absolute -bottom-15 rounded-lg">
              <div className="bg-main h-5 w-full rounded-t-lg"></div>
              <div className="flex justify-center flex-col items-center">
                <h3 className="font-semibold text-[24px] text-main py-5">
                  Luxurious rooms
                </h3>
                <p className="not-md:text-sm py-3 text-black px-3 text-[15px] font-medium">
                  The elegant luxury bedrooms in this gallery showcase custom
                  interior designs & decorating ideas. View pictures and find
                  your perfect luxury bedroom design.Luxurious bedrooms that
                  will make you never want to leave your room again. See more
                  ideas about luxurious bedrooms, bedroom design
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center relative my-7">
            <div className="relative rounded-xl w-full h-[70vh]">
              <Image
                src={images.Room1}
                alt="room1"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <div className="bg-white md:w-187.5 w-auto mx-5 lg:w-197.5 h-auto md:h-57.5 xl:w-250.5 shadow  m-auto text-center absolute -bottom-15 rounded-lg">
              <div className="bg-main h-5 w-full"></div>
              <div className="flex justify-center flex-col items-center">
                <h3 className="font-semibold text-[24px] text-main py-5">
                  Gym center
                </h3>
                <p className="not-md:text-sm py-3 text-black text-[15px] font-medium">
                  The elegant luxury bedrooms in this gallery showcase custom
                  interior designs & decorating ideas. View pictures and find
                  your perfect luxury bedroom design.Luxurious bedrooms that
                  will make you never want to leave your room again. See more
                  ideas about luxurious bedrooms, bedroom design
                </p>
              </div>
            </div>
            <div className="bg-white md:w-187.5 w-auto mx-5 lg:w-197.5 h-auto md:h-57.5 xl:w-250.5 shadow  m-auto text-center absolute -bottom-15 rounded-lg">
              <div className="bg-main h-5 w-full rounded-t-lg"></div>
              <div className="flex justify-center flex-col items-center">
                <h3 className="font-semi px-3bold text-[24px] text-main py-5">
                  Gym center
                </h3>
                <p className="not-md:text-sm py-3 text-black px-3 text-[15px] font-medium">
                  The elegant luxury bedrooms in this gallery showcase custom
                  interior designs & decorating ideas. View pictures and find
                  your perfect luxury bedroom design.Luxurious bedrooms that
                  will make you never want to leave your room again. See more
                  ideas about luxurious bedrooms, bedroom design
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center relative my-7">
            <div className="relative rounded-xl w-full h-[70vh]">
              <Image
                src={images.Room1}
                alt="room1"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <div className="bg-white md:w-187.5 w-auto mx-5 lg:w-197.5 h-auto md:h-57.5 xl:w-250.5 shadow  m-auto text-center absolute -bottom-15 rounded-lg">
              <div className="bg-main h-5 w-full rounded-t-lg"></div>
              <div className="flex justify-center flex-col items-center">
                <h3 className="font-semibold text-[24px] text-main py-5">
                  Gym center
                </h3>
                <p className="not-md:text-sm py-3 text-black px-3 text-[15px] font-medium">
                  The elegant luxury bedrooms in this gallery showcase custom
                  interior designs & decorating ideas. View pictures and find
                  your perfect luxury bedroom design.Luxurious bedrooms that
                  will make you never want to leave your room again. See more
                  ideas about luxurious bedrooms, bedroom design
                </p>
              </div>
            </div>
            <div className="bg-white md:w-187.5 w-auto mx-5 lg:w-197.5 h-auto md:h-57.5 xl:w-250.5 shadow  m-auto text-center absolute -bottom-15 rounded-lg">
              <div className="bg-main h-5 w-full rounded-t-lg"></div>
              <div className="flex justify-center flex-col items-center">
                <h3 className="font-semibold text-[24px] text-main py-5">
                  Restaurant
                </h3>
                <p className="not-md:text-sm py-3 text-black px-3 text-[15px] font-medium">
                  The elegant luxury bedrooms in this gallery showcase custom
                  interior designs & decorating ideas. View pictures and find
                  your perfect luxury bedroom design.Luxurious bedrooms that
                  will make you never want to leave your room again. See more
                  ideas about luxurious bedrooms, bedroom design
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tour;
