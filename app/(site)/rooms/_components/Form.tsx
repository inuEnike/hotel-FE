"use client";
import { IRoom } from "@/app/(main)/admin/dashboard/utils/types";
import { RoomService } from "@/app/(main)/admin/services/roomService";
import MainBtn from "@/components/buttons/MainBtn";
import { images } from "@/utils/images";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { LuLoaderCircle } from "react-icons/lu";

const Form = () => {
  const [availableRooms, setAvailableRooms] = useState<IRoom[]>([]);
  const [loading, setLoading] = useState(false);
  const [roomCount, setRoomCount] = useState<number>(0);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [page, setPage] = useState(1);
  const limit = 8;
  const fetchRooms = async (newPage = 1) => {
    try {
      setLoading(true);

      const rooms = await RoomService.getAvailableRooms({
        checkIn,
        checkOut,
        page: newPage,
        limit,
      });

      setAvailableRooms(rooms.data);
      setRoomCount(rooms.total || 0);
      setPage(newPage);
    } catch (err: any) {
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    fetchRooms(1);
  };

  const totalPages = Math.ceil(roomCount / limit);
  const paginatedRooms = availableRooms.slice((page - 1) * limit, page * limit);

  return (
    <>
      <section className="flex flex-col items-centesr my-7">
        <div className="py-8 xl:w-[30%] lg:w-[70%] not-lg:px-5 w-full flex flex-col items-center justify-center gap-3 text-center">
          <h2 className="text-black text-[20px] text-center md:text-[30px] font-bold capitalize font-poppins">
            Check for available rooms
          </h2>
        </div>
        <form action="" className="w-full lg:px-20 md:px-8 px-5 not-md:py-7">
          <div className="flex not-md:flex-col justify-center gap-8">
            <div className="w-full">
              <label className="text-black/70  text-sm" htmlFor="checkIn">
                Check In
              </label>
              <input
                type="date"
                className="w-full shadow-sm h-16.25 my-3 md:px-7 px-3 text-sm focus:outline-0"
                placeholder="eg input your date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
            <div className="w-full">
              <label className="text-black/70  text-sm" htmlFor="checkOut">
                Check Out
              </label>
              <input
                type="date"
                className="w-full shadow-sm h-16.25 my-3 md:px-7 px-3 text-sm focus:outline-0"
                placeholder="eg input your date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
          </div>

          <MainBtn
            text={
              loading ? (
                <LuLoaderCircle
                  className={
                    "animate-spin flex items-center justify-center flex-col"
                  }
                />
              ) : (
                "Submit"
              )
            }
            onClick={handleCheck}
            radius={"rounded-md"}
          />
        </form>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-4">
        {paginatedRooms.map((room, key) => (
          <div className="py-10  px-5" key={key}>
            <div className="card shadow-sm p-3 rounded-xl" key={key}>
              <div className="image">
                <Image
                  src={images.card1}
                  alt="Hybrid hotel & suites"
                  className="w-full m-auto h-auto rounded-lg "
                  height={250}
                  width={250}
                />
              </div>
              <div className="writeup text-sm py-5">
                <div className="flex justify-between">
                  <p>{room.roomCode}</p>
                  <p>{room.roomType}</p>
                </div>
                <p className="py-3">Single room, compact and affordable.</p>
                <div className="flex justify-between">
                  <p># {room.basePrice}</p>
                  <p>{room.bedSetup}</p>
                </div>

                <div className="flex justify-between py-3">
                  <Link
                    href={`/room/${room._id}?checkIn=${checkIn}&checkOut=${checkOut}`}
                  >
                    <p>Book Now</p>
                  </Link>
                  <p>{room.isActive && "Active"}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {availableRooms.length > 0 && (
        <div className="flex justify-center gap-2 my-10">
          <button
            disabled={page <= 1}
            onClick={() => fetchRooms(page - 1)}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => fetchRooms(i + 1)}
              className={`px-4 py-2 rounded ${
                page === i + 1 ? "bg-black text-white" : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={page >= totalPages}
            onClick={() => fetchRooms(page + 1)}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default Form;
