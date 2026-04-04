"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import TopNav from "../_component/TopNav";
import { HotelService } from "../../services/hotelService";
import { IHotel } from "../utils/types";
import { RoomService } from "../../services/roomService";
import { LuLoaderCircle } from "react-icons/lu";

const AddRoom = () => {
  const [form, setForm] = useState({
    hotelId: "",
    roomCode: "",
    roomType: "Single",
    basePrice: "",
    adult: 2,
    children: 0,
    maxOccupancy: "",
    bedSetup: "" as string,
    images: [] as File[],
    desc: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      hotelId: form.hotelId,
      roomCode: form.roomCode,
      roomType: form.roomType,
      basePrice: Number(form.basePrice),
      desc: form.desc,
      capacity: {
        adult: Number(form.adult),
        children: Number(form.children),
        maxOccupancy: Number(form.maxOccupancy),
      },
      // Convert your comma-separated string into the array the backend wants
      bedSetup: form.bedSetup
        .split(",")
        .map((bed) => bed.trim())
        .filter((bed) => bed !== ""),
      images: [], // Handle files later once JSON works
    };

    try {
      setLoading(true);
      const res = await RoomService.createRoom(payload);
      console.log("Success:", res);
      setLoading(false);
      alert("Room created successfully!");
      setForm({
        hotelId: "",
        roomCode: "",
        roomType: "Single",
        basePrice: "",
        adult: 2,
        children: 0,
        maxOccupancy: "",
        bedSetup: "" as string,
        images: [] as File[],
        desc: "",
      });
    } catch (error: any) {
      console.error(error);
      setLoading(false);
      alert(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const files = (e.target as HTMLInputElement).files;
      if (files) {
        setForm((prev) => ({ ...prev, images: Array.from(files) }));
      }
    } else {
      // Treat everything else (including bedSetup) as a standard string input
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const [getHotels, setGetHotels] = useState<IHotel[]>([]);
  useEffect(() => {
    const fetchHotels = async () => {
      const res = await HotelService.getHotel();
      console.log(res.data);
      setGetHotels(res?.data);
    };
    fetchHotels();
  }, []);
  return (
    <section>
      <TopNav />
      <section className="rooms px-7 my-7">
        <h2 className="font-semibold uppercase text-main">Add a Room</h2>

        <form action="" className="my-7 text-sm" onSubmit={handleSubmit}>
          <div className="flex not-md:flex-col w-full items-center gap-4 my-3">
            <div className="flex flex-col w-full">
              <label htmlFor="hotelId">Hotel</label>
              <select
                name="hotelId"
                id=""
                value={form.hotelId}
                onChange={handleChange}
                className=" px-3 py-4 my-4 rounded-md shadow focus:outline-0"
              >
                <option value="">Select Hotel</option>
                {getHotels.map((hotel, key) => (
                  <option key={key} value={hotel._id}>
                    {hotel.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="roomCode">Room Code</label>
              <input
                type="text"
                value={form.roomCode}
                name="roomCode"
                onChange={handleChange}
                className=" px-3 py-4 my-4 rounded-md shadow focus:outline-0"
                placeholder="Room code"
              />
            </div>
          </div>

          <div className="flex not-md:flex-col w-full items-center gap-4 my-3">
            <div className="flex flex-col w-full">
              <label htmlFor="roomType">Room Type</label>
              <select
                name="roomType"
                id=""
                value={form.roomType}
                onChange={handleChange}
                className=" px-3 py-4 my-4 rounded-md shadow focus:outline-0"
              >
                <option value="">Room Type</option>
                <option value="Single">Single</option>
                <option value="Double">Double</option>
                <option value="Suite">Suite</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="basePrice">Base Price</label>
              <input
                name="basePrice"
                type="number"
                value={form.basePrice}
                onChange={handleChange}
                className=" px-3 py-4 my-4 rounded-md shadow focus:outline-0"
                placeholder="Base Price"
              />
            </div>
          </div>

          <div className="my-4">
            <h3 className="text-md font-semibold text-main uppercase underline">
              Capacity
            </h3>

            <div className="flex not-md:flex-col w-full items-center gap-4 my-4">
              <div className="flex flex-col w-full">
                <label htmlFor="adult">Adult</label>
                <input
                  type="number"
                  onChange={handleChange}
                  value={form.adult}
                  name="adult"
                  className=" px-3 py-4 my-4 rounded-md shadow focus:outline-0"
                  placeholder="Number of Adults"
                />
              </div>

              <div className="flex flex-col w-full">
                <label htmlFor="children">Children</label>
                <input
                  type="number"
                  onChange={handleChange}
                  value={form.children}
                  name="children"
                  className=" px-3 py-4 my-4 rounded-md shadow focus:outline-0"
                  placeholder="Number of Children"
                />
              </div>

              <div className="flex flex-col w-full">
                <label htmlFor="maxOccupancy">Max Occupancy</label>
                <input
                  type="number"
                  name="maxOccupancy"
                  onChange={handleChange}
                  value={form.maxOccupancy}
                  className=" px-3 py-4 my-4 rounded-md shadow focus:outline-0"
                  placeholder="Max Occupancy"
                />
              </div>
            </div>
          </div>

          <div className="flex not-md:flex-col w-full items-center gap-4 my-3">
            <div className="flex flex-col w-full">
              <label htmlFor="bedSetup">Bed Setup</label>
              <input
                onChange={handleChange}
                name="bedSetup"
                value={form.bedSetup}
                className=" px-3 py-4 my-4 rounded-md shadow focus:outline-0"
                placeholder="Bed Setup"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="roomCode">Room Code</label>

              <input
                name="images"
                type="file"
                multiple
                onChange={handleChange}
                className=" px-3 py-4 my-4 rounded-md shadow focus:outline-0"
              />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="desc">Description</label>

            <textarea
              name="desc"
              value={form.desc}
              className="w-full px-3 py-4 my-4 rounded-md shadow focus:outline-0"
              id=""
              rows={10}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="">
            <button
              className={`bg-main w-38.25 md:w-41.25 h-10.75 text-center flex justify-center items-center text-sm text-white hover:text-main hover:bg-background hover:border-main hover:border rounded-md font-semibold transition-all ease-in-out duration-1000 cursor-posinter cursor-pointer`}
            >
              {loading ? (
                <LuLoaderCircle
                  className={
                    "animate-spin flex items-center justify-center flex-col"
                  }
                />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default AddRoom;
