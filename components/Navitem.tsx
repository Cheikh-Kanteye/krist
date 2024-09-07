import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";

export const NavItem = ({
  label,
  href,
  onClick,
}: {
  label: string;
  href?: string;
  onClick?: () => void;
}) => {
  const linkStyle =
    "text-lg capitalize hover:text-black text-gray-500 font-medium";
  return href ? (
    <Link href={href} className={linkStyle}>
      {label}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 ${linkStyle}`}
    >
      {label} <BiChevronDown size={24} />
    </button>
  );
};
