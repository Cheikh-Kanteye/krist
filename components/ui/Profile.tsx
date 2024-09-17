"use client";
import { getInitials } from "@/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import LogoutBtn from "../LogoutBtn";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

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
