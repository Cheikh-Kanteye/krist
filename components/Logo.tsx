import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export const Logo = ({
  inverted,
  className,
}: {
  inverted?: boolean;
  className?: string;
}) => {
  return (
    <Link href={"/"}>
      <Image
        src={"/images/logo.png"}
        alt="logo"
        width={150}
        height={80}
        className={cn(
          `w-24 lg:w-28 md:w-32 h-auto object-fit ${inverted ? "invert" : ""}`,
          className
        )}
      />
    </Link>
  );
};
