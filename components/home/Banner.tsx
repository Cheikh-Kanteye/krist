"use client";

import Image from "next/image";
import Button from "../ui/Button";
import { BsArrowRight } from "react-icons/bs";
import { useDominantColor } from "@/hooks/useDominantColor";

const Banner = () => {
  const { bgColor, imgRef } = useDominantColor("/images/banner.png");
  return (
    <section className="px-4 h-[45dvh] sm:h-[60dvh] lg:h-[85dvh]">
      <div className="w-full h-full bg-gray-100 rounded-md relative z-0 overflow-hidden">
        <div className="flex items-center  container relative">
          <div className="flex-1 flex flex-col gap-1 lg:pl-12">
            <span className="text-xl sm:text-2xl lg:text-3xl">
              Classic Exclusive
            </span>
            <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl leading-relaxed">
              Woman Collection
            </h1>
            <span className="text-xl sm:text-xl lg:text-3xl">
              up to 40% OFF
            </span>

            <Button
              label="Shop Now"
              iconRight={<BsArrowRight color="white" size={22} />}
              className="!w-fit px-6 self-start mt-6 hover:-translate-y-0.5"
              style={{ backgroundColor: bgColor }}
            />
          </div>

          <div className="flex-1 hidden md:block relative">
            <div className="relative banner-img-layer">
              <Image
                src={"/images/banner.png"}
                ref={imgRef}
                alt="Banner"
                width={700}
                height={800}
                className="w-auto h-full object-contain z-10"
              />
            </div>
          </div>

          <Image
            src={"/images/banner.png"}
            alt="Banner"
            width={700}
            height={800}
            className="w-auto h-full object-contain z-0 absolute -right-32 block md:hidden"
          />
          <span
            className="absolute bottom-0 text-[200px] lg:text-[250px] leading-none text-nowrap font-bold text-white/50 left-32 lg:left-64"
            style={{ zIndex: -1, color: bgColor, opacity: 0.09 }}
          >
            BEST SELLER
          </span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
