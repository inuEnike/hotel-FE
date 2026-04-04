import MainBtn from "@/components/buttons/MainBtn";
import React from "react";

const Form = () => {
  return (
    <section className="flex flex-col items-center my-7">
      <div className="py-8 xl:w-[30%] lg:w-[70%] not-lg:px-5 w-full flex flex-col items-center justify-center gap-3 text-center">
        <h2 className="text-black text-[30px] text-center md:text-[40px] font-bold capitalize font-poppins">
          Let's get in touch
        </h2>
        <p>
          Reach out to our team anytime for inquiries, bookings, or support, and
          we’ll be happy to assist you in every way we can.
        </p>
      </div>
      <form action="" className="w-full lg:px-20 md:px-8 px-5 not-md:py-7">
        <div className="flex not-md:flex-col justify-center gap-8">
          <div className="w-full">
            <label
              className="text-black/70 text-md md:text-[20px] "
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              type="text"
              className="w-full shadow-sm h-16.25 my-3 md:px-7 px-3 text-sm focus:outline-0"
              placeholder="eg Anita Baker"
            />
          </div>
          <div className="w-full">
            <label
              className="text-black/70  text-md md:text-[20px] "
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="text"
              className="w-full shadow-sm h-16.25 my-3 md:px-7 px-3 text-sm focus:outline-0"
              placeholder="eg anitabaker@gmail.com"
            />
          </div>
        </div>
        <div className="py-7">
          <label
            className="text-black/70  text-md md:text-[20px] "
            htmlFor="fullName"
          >
            Message
          </label>
          <textarea
            name=""
            id=""
            cols={40}
            rows={20}
            className="w-full shadow-sm py-5 my-3 md:px-7 px-3 text-sm focus:outline-0"
          ></textarea>
        </div>
        <MainBtn text={"Send Message"} radius={"rounded-md"} />
      </form>
    </section>
  );
};

export default Form;
