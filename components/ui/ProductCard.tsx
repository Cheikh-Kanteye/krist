"use client";
import Button from "./Button";
import { RiArrowLeftRightLine, RiEyeLine, RiStarLine } from "react-icons/ri";
import Image from "next/image";
import { Product } from "@/constants";

const ProductCard = ({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) => {
  return (
    <div className="flex flex-col gap-2 product">
      <div
        className={`default-card-style grid place-items-center p-4 ${className}`}
      >
        <Image
          src={product.src}
          alt="products"
          width={1000}
          height={1000}
          className="w-auto h-[90%] object-fit"
        />
        <Button
          label={"Add to Cart"}
          className="btn absolute bottom-4 left-4 right-4 w-auto"
        />
        <div className="action">
          <Button iconRight={<RiStarLine />} className="icon-btn" />
          <Button iconRight={<RiArrowLeftRightLine />} className="icon-btn" />
          <Button iconRight={<RiEyeLine />} className="icon-btn" />
        </div>
      </div>

      <div>
        <h5 className="text-lg font-semibold">{product.label}</h5>
        <p className="text-base text-black/70">{product.description}</p>
        <div className="flex gap-2">
          <strong className="text-black">${product.currentPrice}</strong>
          <strong className="line-through text-black/20">
            ${product.originalPrice}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
