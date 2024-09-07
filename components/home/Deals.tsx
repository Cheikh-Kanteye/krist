"use client";
import React, { useEffect, useState } from "react";
import useCountdown from "@/hooks/useCountdown";
import { CounterBox } from "../ui/CounterBox";

const Deals = () => {
  const targetDate = new Date("2024-09-30T23:59:59");
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <section className="grid-container grid lg:grid-cols-2 py-12">
      <div>
        <h2 className="text-3xl font-bold mb-4">Deals of the Month</h2>
        <p className="text-black/70 my-2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </p>
        <div className="grid grid-cols-4 gap-3 py-4 max-w-sm">
          <CounterBox label="days" value={days.toString()} />
          <CounterBox label="hours" value={hours.toString()} />
          <CounterBox label="mins" value={minutes.toString()} />
          <CounterBox label="secs" value={seconds.toString()} />
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Deals;
