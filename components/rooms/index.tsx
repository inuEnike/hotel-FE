import { images } from "@/utils/images";
import Image from "next/image";
import React from "react";
import RoomCard from "./RoomCard";

const Rooms = () => {
  return (
    <section className="">
      <div className="rooms py-7 ">
        <div className="text-center flex flex-col gap-3 justify-center items-center ">
          <h2 className="text-[30px] md:text-[40px] lg:text-[50px] font-medium text-white">
            Luxurious Rooms
          </h2>
          <div className="bg-white md:w-[10%] w-[30%] p-0.5 "></div>
          <p className="text-white font-medium text-[15px]">
            All our room are design for your comfort
          </p>
        </div>

        <div className="cards flex not-md:flex-col justify-between gap-3 text-center items-center xl:px-30 lg:px-20 md:px-8 px-5 my-10">
          <RoomCard
            heading="Homeland Executive"
            src={images.card1}
            text="Television set, Extra sheets and Breakfast"
          />
          <RoomCard
            heading="Harmony Superior
"
            src={images.card2}
            text="Television set, Extra sheets, Breakfast, and 
fireplace"
          />{" "}
          <RoomCard
            heading="Homeland Executive"
            src={images.card3}
            text="Television set, Extra sheets, Breakfast, and 
fireplace, Console and bed rest"
          />
        </div>
      </div>
    </section>
  );
};

export default Rooms;
