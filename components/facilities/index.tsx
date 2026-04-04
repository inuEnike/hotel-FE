import React from "react";
import MiniCards from "../MiniCards";
import { IconLight, Icons } from "@/utils/icons";

const Facilities = () => {
  return (
    <section className=" xl:px-30 lg:px-20 md:px-8 px-5 my-15">
      <div className="text-center my-7">
        <h2 className="text-black text-[40px] font-medium font-poppins">
          Our Facilities
        </h2>
        <p className="text-[15px] font-medium font-poppins py-3">
          We offer modern (5 star) hotel facilities for your comfort.
        </p>
      </div>
      <div className="grid grid-cols-2 place-items-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:gap-7 xl:gap-7 lg:gap-5 md:gap-5 gap-3 ">
        <MiniCards
          alt="Swimming Pool"
          src={Icons.Pool}
          title="Swimming Pool"
          srcLight={IconLight.Pool}
        />
        <MiniCards
          alt="Wifi"
          src={Icons.Wifi}
          title="WIFI"
          srcLight={IconLight.Wifi}
        />
        <MiniCards
          alt="Breakfast"
          src={Icons.Breakfast}
          title="Breakfast"
          srcLight={IconLight.Breakfast}
        />
        <MiniCards
          alt="Gym"
          src={Icons.Gym}
          title="Gym"
          srcLight={IconLight.Gym}
        />
        <MiniCards
          alt="Game"
          src={Icons.Game}
          title="Game Center"
          srcLight={IconLight.Game}
        />
        <MiniCards
          alt="Light"
          src={Icons.Light}
          title="24/7 Light"
          srcLight={IconLight.Light}
        />
        <MiniCards
          alt="Laundry"
          src={Icons.Laundry}
          title="Laundry"
          srcLight={IconLight.Laundry}
        />
        <MiniCards
          alt="Parking Space"
          src={Icons.Park}
          title="Parking Space"
          srcLight={IconLight.Park}
        />
      </div>
    </section>
  );
};

export default Facilities;
