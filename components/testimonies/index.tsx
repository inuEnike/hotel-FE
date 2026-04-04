import React from "react";
import TestimonyCard from "./TestimonyCard";
import { images } from "@/utils/images";

const Testimonies = () => {
  return (
    <section className="my-10 xl:px-30 lg:px-20 md:px-8 px-5 ">
      <div className="flex justify-center items-center flex-col gap-3 py-5">
        <h2 className="text-[50px] font-medium text-center ">Testimonies</h2>
        <div className="bg-main md:w-[10%] w-[30%] p-0.5 -rotate-2"></div>
      </div>

      <div className="flex not-lg:flex-col items-center justify-between my-5 gap-5">
        <TestimonyCard
          image={images.Person1}
          message={`The service here was outstanding from the very beginning. Every request was handled quickly and professionally, and the team constantly checked in to be sure we were comfortable. The atmosphere was warm and relaxing, the food was great, and the staff truly cared about making our stay enjoyable.`}
          name="Inu Enike"
        />

        <TestimonyCard
          image={images.Person1}
          message={`From the moment we arrived, the hospitality was simply top-notch. The staff anticipated our needs without us even asking and were always willing to help. Everything felt organized, welcoming, and peaceful — the perfect place to unwind while still feeling taken care of.`}
          name="Inu Enike"
        />

        <TestimonyCard
          image={images.Person1}
          message={`I was honestly impressed by how consistent the service was throughout our stay. Everyone was friendly, professional, and genuinely invested in making sure we had a good experience. It’s rare to find a place that balances comfort, quality, and real care this well. I’d gladly recommend it to anyone.`}
          name="Inu Enike"
        />
      </div>
    </section>
  );
};

export default Testimonies;
