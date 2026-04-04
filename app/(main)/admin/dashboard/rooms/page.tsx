"use client";
import React, { useEffect, useState } from "react";
import TopNav from "@/app/(main)/admin/dashboard/_component/TopNav";
import Link from "next/link";
import { IRoom, IRoomResponse } from "@/app/(main)/admin/dashboard/utils/types";
import { RoomService } from "@/app/(main)/admin/services/roomService";
import { LuLoaderCircle } from "react-icons/lu";

const Room = () => {
  const [roomCount, setRoomCount] = useState<number>(0);
  const [availableRooms, setAvailableRooms] = useState<IRoom[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response: IRoomResponse = await RoomService.getRooms();
        console.log(response);
        setRoomCount(response.total ?? 0);
        setAvailableRooms(response.data);
        // Map the 'total' from your JSON response to your state
      } catch (err) {
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [roomCount]);
  return (
    <section>
      <TopNav />
      <section className="rooms px-7 my-7">
        <h2 className={"text-sm"}>Rooms</h2>
        <div className="flex my-7 justify-between items-center">
          <div className="border-main border py-2 px-7 text-center text-sm bg-primary50 rounded-full">
            <p>
              All Rooms <span>{roomCount}</span>
            </p>
          </div>
          <div className="justify-self-end">
            <Link href={"/admin/dashboard/add-room"}>
              <button
                className={`bg-main w-38.25 md:w-35.25 h-10.75 text-sm text-white hover:text-main hover:bg-background hover:border-main hover:border rounded-md font-semibold transition-all ease-in-out duration-1000 cursor-posinter cursor-pointer`}
              >
                {"Add Room"}
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
                  <th className="p-4">Room Code</th>
                  <th className="p-4">Description</th>
                  <th className="p-4">Room Type</th>
                  <th className="p-4">Max Occupancy</th>
                  <th className="p-4">Base Price</th>
                  <th className="p-4">Bed Setup</th>
                  <th className="p-4">Active</th>
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
                          Fetching rooms...
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : availableRooms.length > 0 ? (
                  /* 2. Map the rooms if data exists */
                  availableRooms.map((room) => (
                    <tr
                      key={room._id}
                      className="shadow-[0_2px_2px_rgba(0,0,0,0.05)] last:shadow-none hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-5">{room.roomCode}</td>
                      <td className="p-5">{room.desc}</td>
                      <td className="p-5">{room.roomType}</td>
                      <td className="p-5">
                        {room.capacity.maxOccupancy} Persons
                      </td>
                      <td className="p-5">
                        ₦{room.basePrice.toLocaleString()}
                      </td>
                      <td className="p-5">

                      {room.bedSetup?.join(", ") || "-"}
                      </td>
                      <td className="p-5">
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                          {room.isActive ? "Active" : "Inactive"}
                        </span>
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

export default Room;
