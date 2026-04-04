"use client";
import React, { useEffect, useState } from "react";
import TopNav from "../_component/TopNav";
import Link from "next/link";
import { HotelService } from "../../services/hotelService";
import { IHotel, IHotelResponse } from "../utils/types";
import { LuLoaderCircle } from "react-icons/lu";

const Hotels = () => {
  const [hotels, setHotels] = useState<IHotel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchHotel = async () => {
      const res = await HotelService.getHotel();
      const data = res.data;
      setHotels(data);
    };
    fetchHotel();
  }, []);
  return (
    <section>
      <TopNav />
      <section className="rooms px-7 my-7">
        <div className="flex my-7 justify-between items-center">
          <h2 className="font-semibold uppercase text-main">All Hotels</h2>
          <div className="justify-self-end">
            <Link href={"/admin/dashboard/add-hotel"}>
              <button
                className={`bg-main w-38.25 md:w-35.25 h-10.75 text-sm text-white hover:text-main hover:bg-background hover:border-main hover:border rounded-md font-semibold transition-all ease-in-out duration-1000 cursor-posinter cursor-pointer`}
              >
                {"Add Hotel   "}
              </button>
            </Link>
          </div>
        </div>
        <div className="relative overflow-x-auto mb-10 px-3 rounded-xl">
          <div
            className="overflow-y-auto w-full border-collapse"
            style={{ maxHeight: "80vh" }}
          >
            <table className="w-full my-7 ">
              <thead className="">
                <tr className={"text-left my-2 font-medium"}>
                  <th className="p-4">Name</th>
                  <th className="p-4">Description</th>
                  <th className="p-4">Amenities</th>
                </tr>
              </thead>
              <tbody className="py-7 ">
                {loading ? (
                  /* 1. Show loader in a single row that spans the full width */
                  <tr>
                    <td colSpan={5} className="py-10">
                      <div className="flex justify-center items-center flex-col gap-2">
                        <LuLoaderCircle className="animate-spin text-3xl text-main" />
                        <p className="text-sm text-gray-500">
                          Fetching hotels...
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : hotels.length > 0 ? (
                  /* 2. Map the rooms if data exists */
                  hotels.map((hotel) => (
                    <tr
                      key={hotel._id}
                      className="shadow-[0_2px_2px_rgba(0,0,0,0.05)] last:shadow-none hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-5">{hotel.name}</td>
                      <td className="p-5">{hotel.desc}</td>

                      <td className="p-5">
                        {hotel.amenities?.join(", ") || "-"}
                      </td>
                    </tr>
                  ))
                ) : (
                  /* 3. Show empty state if no rooms found */
                  <tr>
                    <td colSpan={6} className="py-10 text-gray-400 italic">
                      No rooms available for these dates.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hotels;
