import React from "react";
import Button from "./Button";
import Image from "next/image";

const ProductCard = ({
  src,
  label,
  className,
}: {
  src: string;
  label: string;
  className?: string;
}) => {
  return (
    <div className={`default-card-style ${className}`}>
      <span className="absolute top-4 text-5xl font-bold text-white/70 uppercase text-balance -z-20">
        {label}
      </span>
      <Image
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

export default ProductCard;
