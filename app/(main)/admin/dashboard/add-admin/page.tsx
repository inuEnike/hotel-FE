import React from "react";
import TopNav from "../_component/TopNav";

const AddAdmin = () => {
  const handleSubmit = (e: React.FormEvent) => {};
  const handleChange = () => {};
  return (
    <section>
      <TopNav />
      <section className="rooms px-7 my-7">
        <h2 className="font-semibold uppercase text-main">Add an Admin</h2>

        <form action="" className="my-7 text-sm">
          <div className="flex flex-col w-full">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              className=" px-3 py-4 my-4 rounded-md shadow focus:outline-0"
              placeholder="Full Name"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="fullName">Email</label>
            <input
              type="text"
              name="roomCode"
              className=" px-3 py-4 my-4 rounded-md shadow focus:outline-0"
              placeholder="Email"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="fullName">Password</label>
            <input
              type="text"
              name="password"
              className=" px-3 py-4 my-4 rounded-md shadow focus:outline-0"
              placeholder="Password"
            />
          </div>

          <div className="">
            <button
              className={`bg-main w-38.25 md:w-41.25 h-10.75 text-center flex justify-center items-center text-sm text-white hover:text-main hover:bg-background hover:border-main hover:border rounded-md font-semibold transition-all ease-in-out duration-1000 cursor-posinter cursor-pointer`}
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default AddAdmin;
