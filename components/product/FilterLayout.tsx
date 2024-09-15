"use client";

import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const FilterLayout = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <div>
        <div className="flex items-center justify-between mb-3">
          <h5 className="text-lg font-medium capitalize">Filter by {label}</h5>
          <button
            onClick={() => setIsCollapse(!isCollapse)}
            className="text-2xl"
          >
            {!isCollapse ? <BiChevronUp /> : <BiChevronDown />}
          </button>
        </div>
        {!isCollapse && (
          <form id={label} className="flex flex-col w-full">
            {children}
          </form>
        )}
      </div>
    </div>
  );
};

export default FilterLayout;
