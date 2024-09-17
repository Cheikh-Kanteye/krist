"use client";
import { getInitials } from "@/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
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
