"use client";
import { signOut } from "next-auth/react";
import { LuLogOut } from "react-icons/lu";

const LogoutBtn = () => {
  return (
    <button
      type="button"
      onClick={() => {
        signOut();
      }}
      className="text-lg text-black flex items-center gap-2"
    >
      <LuLogOut size={22} /> Sign out
    </button>
  );
};

export default LogoutBtn;
