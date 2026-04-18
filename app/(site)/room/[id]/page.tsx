"use client";

import { RoomService } from "@/app/(main)/admin/services/roomService";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IRoom } from "@/app/(main)/admin/dashboard/utils/types";

const Room = () => {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [room, setRoom] = useState<IRoom | null>(null);
  const [loading, setLoading] = useState(true);

  const checkIn = searchParams.get("checkIn") || "";
  const checkOut = searchParams.get("checkOut") || "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await RoomService.getRoomById(params.id as string);
        setRoom(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  const handleBook = () => {
    // validation
    if (!checkIn || !checkOut) {
      alert("Missing check-in or check-out");
      return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      alert("Invalid date range");
      return;
    }

    router.push(
      `/booking?roomId=${params.id}&checkIn=${checkIn}&checkOut=${checkOut}&hotelId=${room?.hotelId}`,
    );
  };

  if (loading) return <p>Loading...</p>;
  if (!room) return <p>Room not found</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{room.roomCode}</h1>

      <p>Type: {room.roomType}</p>
      <p>Price: ₦{room.basePrice}</p>
      <p>Bed: {room.bedSetup}</p>

      <div className="my-5 p-3 bg-gray-100 rounded">
        <p>Check-in: {checkIn || "Not selected"}</p>
        <p>Check-out: {checkOut || "Not selected"}</p>
      </div>

      <button
        onClick={handleBook}
        className="bg-black text-white px-6 py-3 rounded"
      >
        Book This Room
      </button>
    </div>
  );
};

export default Room;
