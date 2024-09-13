import Image from "next/image";
import Link from "next/link";

export const Logo = ({ inverted }: { inverted?: boolean }) => {
  return (
    <Link href={"/"}>
      <Image
        src={"/images/logo.png"}
        alt="logo"
        width={150}
        height={80}
        className={`w-28 md:w-32 h-auto object-fit ${inverted ? "invert" : ""}`}
      />
    </Link>
  );
};
