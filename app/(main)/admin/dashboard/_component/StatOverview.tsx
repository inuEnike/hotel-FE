"use client";
import React, { useEffect, useState } from "react";
import { FaCheckDouble } from "react-icons/fa";
import { BsSendCheckFill } from "react-icons/bs";
import { SiGoogleclassroom } from "react-icons/si";
import { GiOccupy } from "react-icons/gi";
import { FcFeedback } from "react-icons/fc";
import { RoomService } from "@/app/(main)/admin/services/roomService";
import { LuLoaderCircle } from "react-icons/lu";
import { IRoomResponse } from "@/app/(main)/admin/dashboard/utils/types";
import { HotelService } from "../../services/hotelService";

interface IStat {
  totalRooms: number;
  checkIns: number;
  checkOuts: number;
  totalHotels: number;
  feedbacks: number;
}

const StatOverview = () => {
  const [stats, setStats] = useState<IStat>({
    totalRooms: 0,
    checkIns: 23,
    checkOuts: 60,
    totalHotels: 90,
    feedbacks: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const RoomResponse = await RoomService.getRooms();
        const HotelResponse = await HotelService.getHotel();
        console.log(RoomResponse);

        // Map the 'total' from your JSON response to your state
        setStats((prev) => ({
          ...prev,
          totalRooms: RoomResponse?.total ?? 0,
          totalHotels: HotelResponse?.total ?? 0,
        }));
      } catch (err) {
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);
  return (
    <div className="bg-white mx-3 py-3 px-5 rounded-md">
      <h2 className={"text-xl font-medium text-supportDark"}>Overview</h2>
      <div className="grid gap-6 grid-cols-2 lg:grid-cols-5 ">
        <div className="h-auto">
          <div className="bg-linear-to-tr from-blue-600 to-blue-400 shadow-blue-500/40 text-white my-5 grid h-16 w-16 place-items-center rounded-full">
            <FaCheckDouble className={"text-2xl"} />
          </div>
          <div className="">
            <p className={"text-sm text-small"}>Today&#39;s</p>
            <div className="flex items-center gap-3">
              <p className={"pt-2"}>Check-in</p>
              <div className="">
                <h4 className={"text-main text-2xl md:text-3xl font-bold"}>
                  23
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="h-auto">
          <div className="bg-linear-to-tr from-yellow-600 to-yellow-400 shadow-blue-500/40 text-white my-5 grid h-16 w-16 place-items-center rounded-full">
            <BsSendCheckFill className={"text-2xl"} />
          </div>
          <div className="">
            <p className={"text-sm text-small"}>Today&#39;s</p>
            <div className="flex items-center gap-3">
              <p className={"pt-2"}>Check-out</p>
              <div className="">
                <h4 className={"text-main text-2xl md:text-3xl font-bold"}>
                  60
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto">
          <div className="bg-linear-to-tr from-main to-blue-400 shadow-blue-500/40 text-white my-5 grid h-16 w-16 place-items-center rounded-full">
            <SiGoogleclassroom className={"text-2xl"} />
          </div>
          <div className="">
            <p className={"text-sm text-small"}>Total</p>
            <div className="flex items-center gap-3">
              <p className={"pt-2"}> Rooms</p>
              <div className="">
                <h4 className={"text-main text-2xl md:text-3xl font-bold"}>
                  {loading ? (
                    <LuLoaderCircle className="animate-spin" />
                  ) : (
                    stats.totalRooms
                  )}
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="h-auto">
          <div className="bg-linear-to-tr from-pink-600 to-pink-400 shadow-blue-500/40 text-white my-5 grid h-16 w-16 place-items-center rounded-full">
            <GiOccupy className={"text-2xl"} />
          </div>
          <div className="">
            <p className={"text-sm text-small"}>Totals</p>
            <div className="flex items-center gap-3">
              <p className={"pt-2"}> Hotel</p>
              <div className="">
                <h4 className={"text-main text-2xl md:text-3xl font-bold"}>
                  {loading ? (
                    <LuLoaderCircle className="animate-spin" />
                  ) : (
                    stats.totalHotels
                  )}
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="h-auto">
          <div className="bg-linear-to-tr from-gray-600 to-gray-400 shadow-blue-500/40 text-white my-5 grid h-16 w-16 place-items-center rounded-full">
            <FcFeedback className={"text-2xl"} />
          </div>
          <div className="">
            <p className={"text-sm text-small"}>Total</p>
            <div className="flex items-center gap-3">
              <p className={"pt-2"}>Feedbacks</p>
              <div className="">
                <h4 className={"text-main text-2xl md:text-3xl font-bold"}>
                  90
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatOverview;
