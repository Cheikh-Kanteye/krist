import Image from "next/image";
import React from "react";
import { RiStarFill } from "react-icons/ri";

const TestimonialsCard = () => {
  return (
    <div className="p-4 bg-white rounded-sm shadow-md min-w-[20rem]">
      <div>
        <div className="flex gap-1">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <RiStarFill key={index} size={20} className="text-[gold]" />
            ))}
        </div>
        <p className="text-sm lg:text-base text-pretty mt-2 mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis eos
          voluptatum facere. Asperiores voluptate deleniti praesentium
        </p>
      </div>
      <div className="flex gap-2">
        <div className="w-10 aspect-square rounded-full bg-black/5 flex justify-center border border-black/10 items-center overflow-hidden">
          <Image
            src={"/images/deals.jpg"}
            alt="user"
            width={40}
            height={40}
            className="w-full h-auto object-cover"
          />
        </div>
        <div>
          <h5 className="text-base font-medium">Leslie Alexander</h5>
          <p className="text-sm text-black/70">Model</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
