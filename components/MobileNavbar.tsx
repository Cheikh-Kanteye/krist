import { IconBtn } from "./IconBtn";
import { IoClose } from "react-icons/io5";
import Button from "./ui/Button";
import { NavItem, NavItemList } from "./Navitem";

export const MobileNavbar = ({
  showMenu,
  toggleMenu,
}: {
  showMenu: boolean;
  toggleMenu: () => void;
}) => {
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-[260px] bg-white shadow-lg duration-300 transition-transform ${
        showMenu ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <nav className="flex flex-col gap-4 p-6 pt-20 relative">
        <IconBtn
          icon={IoClose}
          size={24}
          onClick={toggleMenu}
          className="absolute top-6 right-6 p-2 aspect-square rounded-full bg-slate-50 lg:hover:bg-slate-100 duration-300"
        />
        {NavItemList.map((item, index) => (
          <NavItem label={item.label} href={item.href} key={index} />
        ))}
        <Button label="Login" className="w-fit px-8 h-12" />
      </nav>
    </div>
  );
};
