"use client";
import { getInitials } from "@/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import LogoutBtn from "./LogoutBtn";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";

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
