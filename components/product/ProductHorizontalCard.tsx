"use client";
import { RiArrowLeftRightLine, RiEyeLine, RiStarLine } from "react-icons/ri";
import Image from "next/image";
import { Product } from "@/constants";
import { formatPrice } from "@/utils";
import Button from "../ui/Button";

const ProductHroizontalCard = ({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) => {
  return (
    <div className="flex gap-3 rounded-lg w-full p-3 h-40 bg-gray-50 overflow-hidden">
      <div className="h-full aspect-square">
        <Image
          src={product.src}
          alt={product.label}
          width={100}
          height={100}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h5 className="text-lg truncate font-semibold">{product.label}</h5>
          <p className="truncate  md:text-base text-black/70">
            {product.description}
          </p>
          <div className="flex gap-2">
            <strong className="text-black">
              {formatPrice(product.currentPrice)}
            </strong>
            <strong className="line-through text-black/20">
              {formatPrice(product.originalPrice)}
            </strong>
          </div>
        </div>

        <div className="flex w-full items-center justify-between">
          <div className="flex gap-2 items-center">
            <Button
              iconRight={<RiStarLine />}
              className="horizontal-card-icon"
            />
            <Button
              iconRight={<RiArrowLeftRightLine />}
              className="horizontal-card-icon"
            />
            <Button
              iconRight={<RiEyeLine />}
              className="horizontal-card-icon"
            />
          </div>
          <Button label={"Add to Cart"} className="px-4 w-fit" />
        </div>
      </div>
    </div>
  );
};

export default ProductHroizontalCard;
