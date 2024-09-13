"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiHeart, BiSearch, BiShoppingBag } from "react-icons/bi";
import Button from "./ui/Button";
import { IoMenu } from "react-icons/io5";
import { IconBtn } from "./IconBtn";
import { MobileNavbar } from "./MobileNavbar";
import { NavItem } from "./Navitem";
import NavItemDropDown from "./NavItemDropDown";
import { NavItemList } from "@/constants";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getInitials } from "@/utils";
import randomcolor from "randomcolor";

const ActionGroup = () => {
  const actions = [
    { icon: BiSearch, action: "toggleSearch" },
    { icon: BiHeart, action: "showFavorites" },
    { icon: BiShoppingBag, action: "displayCart" },
  ];

  return (
    <div className="flex gap-4 items-center">
      {actions.map(({ icon, action }, index) => (
        <IconBtn key={index} icon={icon} size={24} />
      ))}
    </div>
  );
};

const Avatar = ({ name }: { name: string }) => {
  const initials = name ? getInitials(name) : "?";
  const color = randomcolor({
    luminosity: "light",
    format: "rgba",
    alpha: 0.3,
  });
  return (
    <button
      className="w-10 aspect-square rounded-full text-center justify-center items-center flex"
      style={{ background: color }}
    >
      <span>{initials}</span>
    </button>
  );
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropDowm] = useState(false);

  const { status, data } = useSession();

  const router = useRouter();

  function toggleMenu() {
    setShowMenu((prev) => !prev);
  }
  function toggleDropDown(action: string) {
    if (action === "openDropdown") setShowDropDowm((prev) => !prev);
  }

  return (
    <header className="px-[2rem] sm:px-[6vw] lg:px-[9vw] sticky top-0 z-50 bg-white flex justify-between items-center h-20">
      <Link href={"/"}>
        <Image
          src={"/images/logo.png"}
          alt="logo"
          width={150}
          height={80}
          className="w-28 md:w-32 h-auto object-fit"
        />
      </Link>

      {/* NAVIGATION MENU */}
      <div className="hidden lg:flex gap-4 items-center">
        {NavItemList.map((item, index) => (
          <NavItem
            label={item.label}
            href={item.href}
            key={index}
            onClick={() => toggleDropDown(item.action!)}
          />
        ))}
      </div>

      <MobileNavbar
        showMenu={showMenu}
        toggleMenu={toggleMenu}
        toggleDropdown={toggleDropDown}
      />

      {showDropdown && (
        <NavItemDropDown handleClose={() => setShowDropDowm(false)} />
      )}

      <div className="flex items-center gap-4">
        <ActionGroup />
        <IconBtn
          icon={IoMenu}
          size={24}
          onClick={toggleMenu}
          className="block lg:hidden p-2 aspect-square rounded-full bg-slate-50 lg:hover:bg-slate-100 duration-300"
        />
        {status === "unauthenticated" ? (
          <Button
            label={"Login"}
            className="w-fit px-6 h-12 hidden lg:block"
            onClick={() => router.push("/login")}
          />
        ) : (
          <Avatar name={data?.user?.email!} />
        )}
      </div>
    </header>
  );
};

export default Header;
