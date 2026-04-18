"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import MainBtn from "@/components/buttons/MainBtn";
import { Axios } from "@/lib/axios";

const Booking = () => {
  const searchParams = useSearchParams();

  const roomId = searchParams.get("roomId") || "";
  const checkIn = searchParams.get("checkIn") || "";
  const checkOut = searchParams.get("checkOut") || "";
  const hotelId = searchParams.get("hotelId");

  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBooking = async () => {
    try {
      setLoading(true);

      // STEP 1: CREATE BOOKING
      const bookingRes = await Axios.post("/booking", {
        roomId,
        checkIn,
        hotelId,
        checkOut,
        guestName,
        guestEmail,
        guestPhone,
        guests: {
          adult: 2,
          children: 0,
        },
      });

      const booking = bookingRes.data.data;

      console.log("📦 Booking created:", booking);

      // STEP 2: INIT PAYMENT
      const paymentRes = await Axios.post("/payment/initialize", {
        bookingId: booking._id,
      });

      console.log("💳 Payment init response:", paymentRes.data);

      // STEP 3: REDIRECT TO PAYSTACK
      window.location.href = paymentRes.data.authorization_url;
    } catch (err: any) {
      console.error(err.response?.data || err.message);
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center my-7">
      <div className="py-8 xl:w-[30%] lg:w-[70%] w-full text-center">
        <h2 className="text-black text-[30px] font-bold">
          Fill the form to book a spot
        </h2>
        <p>Reserve a spot with us today and experience premium comfort</p>
      </div>

      <div className="w-full lg:px-20 md:px-8 px-5">
        {/* NAME */}
        <div className="my-3">
          <label>Full Name</label>
          <input
            type="text"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            className="focus:outline-none w-full shadow-sm h-16 my-2 px-4"
            placeholder="e.g Anita Baker"
          />
        </div>

        {/* EMAIL */}
        <div className="my-3">
          <label>Email</label>
          <input
            type="email"
            value={guestEmail}
            onChange={(e) => setGuestEmail(e.target.value)}
            className="focus:outline-none w-full shadow-sm h-16 my-2 px-4"
            placeholder="e.g anita@gmail.com"
          />
        </div>

        {/* PHONE */}
        <div className="my-3">
          <label>Phone Number</label>
          <input
            type="text"
            value={guestPhone}
            onChange={(e) => setGuestPhone(e.target.value)}
            className="focus:outline-none w-full shadow-sm h-16 my-2 px-4"
            placeholder="e.g 08012345678"
          />
        </div>

        {/* DATES DISPLAY ONLY */}
        <div className="flex not-md:flex-col gap-4 my-3">
          <div className="w-full">
            <label>Check In</label>
            <input
              type="date"
              value={checkIn}
              disabled
              className="w-full shadow-sm h-16 my-2 px-4"
            />
          </div>

          <div className="w-full">
            <label>Check Out</label>
            <input
              type="date"
              value={checkOut}
              disabled
              className="w-full shadow-sm h-16 my-2 px-4"
            />
          </div>
        </div>

        {/* BOOK BUTTON */}
        <MainBtn
          text={loading ? "Processing..." : "Pay Now"}
          radius="rounded-md"
          onClick={handleBooking}
        />
      </div>
    </section>
  );
};

export default Booking;
