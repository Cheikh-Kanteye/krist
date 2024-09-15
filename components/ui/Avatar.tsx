"use client";
import { getInitials } from "@/utils";
import { signOut } from "next-auth/react";
import randomColor from "randomcolor";
import React from "react";

const Avatar = ({ name }: { name: string }) => {
  const initials = name ? getInitials(name) : "?";
  const color = randomColor({
    luminosity: "light",
    format: "rgba",
    alpha: 0.3,
  });
  return (
    <button
      className="w-10 aspect-square rounded-full text-center justify-center items-center flex"
      style={{ background: color }}
      // TODO add dropdown menu
      onClick={() => signOut()}
    >
      <span>{initials}</span>
    </button>
  );
};

export default Avatar;
