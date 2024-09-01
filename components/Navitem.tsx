import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";

export const NavItemList = [
  { label: "home", href: "/" },
  { label: "shop" },
  { label: "our story", href: "/story" },
  { label: "blog", href: "/blog" },
  { label: "contact us", href: "/contact" },
];

export const NavItem = (item: { label: string; href?: string }) => {
  return item.href ? (
    <Link href={item.href} className="text-lg capitalize">
      {item.label}
    </Link>
  ) : (
    <button className="flex items-center gap-2 text-lg capitalize">
      {item.label} <BiChevronDown size={24} />
    </button>
  );
};
