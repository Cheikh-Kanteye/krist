"use client";
import React from "react";
import { getInitials } from "@/utils";
import { signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import randomColor from "randomcolor";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import LogoutBtn from "../LogoutBtn";

const Profile = ({ name }: { name: string }) => {
  const initials = name ? getInitials(name) : "?";

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-fit">
        <LogoutBtn />
      </PopoverContent>
    </Popover>
  );
};

export default Profile;
