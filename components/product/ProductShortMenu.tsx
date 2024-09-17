"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BiChevronDown } from "react-icons/bi";

const ProductShortMenu = () => {
  const [shortKey, setShortKey] = useState("latest");

  const shortKeys = ["latest", "price", "popularity", "rating"];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex gap-4 justify-between items-center">
          <span>Short by {shortKey}</span>
          <BiChevronDown size={24} color="black" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Sort by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {shortKeys.map((key) => (
          <DropdownMenuItem key={key} onClick={() => setShortKey(key)}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProductShortMenu;
