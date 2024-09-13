"use client";
import React, { useState, useEffect } from "react";
import useCountdown from "@/hooks/useCountdown";
import { CounterBox } from "../ui/CounterBox";
import Image from "next/image";

const Deals = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const targetDate = new Date("2024-09-30T23:59:59");
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  if (!isHydrated) {
    return null;
  }

  return (
    <section className="grid-container grid lg:grid-cols-2 gap-6 lg:gap-12 py-12 lg:items-center">
      <div>
        <h2 className="text-3xl font-bold mb-4">Deals of the Month</h2>
        <p className="text-black/70 my-2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </p>
        <div className="grid grid-cols-4 gap-3 py-4">
          <CounterBox label="days" value={days} />
          <CounterBox label="hours" value={hours} />
          <CounterBox label="mins" value={minutes} />
          <CounterBox label="secs" value={seconds} />
        </div>
      </div>
      <div className="w-full aspect-square bg-gray-100 overflow-hidden flex items-center pt-12 lg:pt-24">
        <Image
          src={"/images/deals.jpg"}
          alt="deals"
          width={1000}
          height={1200}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Deals;
