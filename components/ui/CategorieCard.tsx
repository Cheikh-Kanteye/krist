"use client";
import Button from "./Button";
import Image from "next/image";
import { useDominantColor } from "@/hooks/useDominantColor";

const CategorieCard = ({
  src,
  label,
  className,
}: {
  src: string;
  label: string;
  className?: string;
}) => {
  const { bgColor, imgRef } = useDominantColor(src);

  return (
    <div
      className={`default-card-style ${className}`}
      style={{ backgroundColor: bgColor || "lightgoldenrodyellow" }}
    >
      <span className="absolute top-4 text-5xl font-bold text-white/70 uppercase text-balance -z-20">
        {label}
      </span>
      <Image
        ref={imgRef}
        src={src}
        alt="products"
        width={1000}
        height={1000}
        className="absolute object-cover inset-0 w-full h-full -z-10"
      />
      <Button
        label={label}
        className="btn bg-white shadow-md items-center justify-center capitalize hover:bg-white/70 backdrop-blur-sm font-semibold !text-black"
      />
    </div>
  );
};

export default CategorieCard;
