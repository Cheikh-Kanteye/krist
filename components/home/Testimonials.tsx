"use client";
import Button from "../ui/Button";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { CategrorieSlides } from "@/constants";
import useCarousel from "@/hooks/useCarousel";
import CategorieCard from "../ui/CategorieCard";
import TestimonialsCard from "../TestimonialsCard";

const getButtonClass = (isActive: boolean) =>
  `w-fit px-4 h-11 ${isActive ? "bg-black" : "bg-black/10"}`;

const Testimonials = () => {
  const { hasPrevious, hasNext, scroll, carouselRef, handleScroll } =
    useCarousel();

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-black/5">
      <div className="grid-container">
        <div className="flex items-center justify-between">
          <h3 className="section-title">What our Customer say&apos;s</h3>
          <div className="flex items-center gap-2">
            <Button
              className={getButtonClass(hasPrevious)}
              iconRight={
                <BsArrowLeft
                  color={hasPrevious ? "white" : "black"}
                  size={24}
                />
              }
              disabled={!hasPrevious}
              onClick={() => scroll("left")}
            />
            <Button
              className={getButtonClass(hasNext)}
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
            {Array(5)
              .fill(0)
              .map((_s, index) => (
                <TestimonialsCard key={index} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
