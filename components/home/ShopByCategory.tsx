"use client";

import React from "react";
import Button from "../ui/Button";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ProductCard from "../ui/ProductCard";
import { CategrorieSlides } from "@/constants";
import useCarousel from "@/hooks/useCarousel"; // Importer le hook

const ShopByCategory = () => {
  const { hasPrevious, hasNext, scroll, carouselRef, handleScroll } =
    useCarousel(); // Utiliser le hook

  return (
    <section className="grid-container py-8 md:py-12 lg:py-16">
      <div className="flex items-center justify-between">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-medium">
          Shop by Categories
        </h3>
        <div className="flex items-center gap-2">
          <Button
            className={`w-fit px-4 h-11 ${
              hasPrevious ? "bg-black" : "bg-black/10"
            }`}
            iconRight={
              <BsArrowLeft color={hasPrevious ? "white" : "black"} size={24} />
            }
            disabled={!hasPrevious}
            onClick={() => scroll("left")}
          />
          <Button
            className={`w-fit px-4 h-11 ${
              hasNext ? "bg-black" : "bg-black/10"
            }`}
            iconRight={
              <BsArrowRight color={hasNext ? "white" : "black"} size={24} />
            }
            disabled={!hasNext}
            onClick={() => scroll("right")}
          />
        </div>
      </div>

      <div className="py-6 overflow-hidden">
        <div
          className="flex gap-4 w-full overflow-x-scroll carousel scroll-smooth scrollbar-hide"
          ref={carouselRef}
          onScroll={handleScroll}
        >
          {CategrorieSlides.map((category, index) => (
            <ProductCard
              key={index}
              src={category.img}
              label={category.label}
              className="w-[80vw] md:w-[40vw] lg:w-[25vw]" // Taille des produits selon la taille de l'écran
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
