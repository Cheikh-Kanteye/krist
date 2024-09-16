"use client";
import { RiArrowLeftRightLine, RiEyeLine, RiStarLine } from "react-icons/ri";
import Image from "next/image";
import { Product } from "@/constants";
import { cn, formatPrice } from "@/utils";
import Button from "../ui/Button";

type IconType = "star" | "arrow" | "eye";

const iconComponents: Record<IconType, JSX.Element> = {
  star: <RiStarLine />,
  arrow: <RiArrowLeftRightLine />,
  eye: <RiEyeLine />,
};

interface ProductHorizontalCardProps {
  product: Product;
  className?: string;
}

const ProductHorizontalCard = ({
  product,
  className,
}: ProductHorizontalCardProps) => {
  return (
    <div
      className={cn(
        "flex gap-3 p-3 rounded-lg bg-gray-50 overflow-hidden",
        className
      )}
    >
      <div className="aspect-square h-full">
        <Image
          src={product.src}
          alt={product.label}
          width={100}
          height={100}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 justify-between">
        <div>
          <h5 className="text-lg font-semibold truncate w-full">
            {product.label}
          </h5>
          <p className="text-black/70 truncate md:text-base max-w-[15ch]">
            {product.description}
          </p>
          <div className="flex gap-2">
            <strong className="text-black">
              {formatPrice(product.currentPrice)}
            </strong>
            {product.originalPrice && (
              <strong className="line-through text-black/20">
                {formatPrice(product.originalPrice)}
              </strong>
            )}
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center gap-2 justify-between">
          <div className="gap-1 lg:gap-2 items-center flex">
            {(["star", "arrow", "eye"] as IconType[]).map((icon) => (
              <button
                key={icon}
                className="p-2 bg-black/5 rounded hover:bg-black/10"
              >
                {iconComponents[icon]}
              </button>
            ))}
          </div>

          <Button
            label="Add to Cart"
            className="px-3 lg:px-4 h-11 w-full text-sm md:text-base"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductHorizontalCard;
