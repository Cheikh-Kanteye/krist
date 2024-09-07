"use client";
import React from "react";

export const CounterBox = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center aspect-square rounded-md border p-4">
      <h2 className="text-2xl font-bold">{value}</h2>
      <p className="capitalize text-base lg:text-lg">{label}</p>
    </div>
  );
};
