"use client";
import ProductCategoriesFilter from "./ProductCategoriesFilter";
import ProductColorFilter from "./ProductColorFilter";
import ProductPriceFilter from "./ProductPriceFilter";
import ProductSizeFilter from "./ProductSizeFilter";
import Button from "../ui/Button";
import { useProductFilterContext } from "@/hooks/useProductFilterContext";
import { cn } from "@/utils";

const ProductFilter = ({
  showMenu,
  closeMenu,
}: {
  showMenu: boolean;
  closeMenu: () => void;
}) => {
  const { setCriteria } = useProductFilterContext();

  function Divider() {
    return <div className="w-full h-px bg-gray-100 my-2" />;
  }
  return (
    <aside
      className={cn(
        "transition-all duration-300 w-60 p-4 flex flex-col gap-3 max-lg:fixed h-screen max-lg:top-0 -left-full max-lg:overflow-y-auto max-lg:py-12 bg-white max-lg:z-50",
        { "max-lg:left-0": showMenu }
      )}
    >
      <ProductCategoriesFilter />
      <Divider />
      <ProductPriceFilter />
      <Divider />
      <ProductColorFilter />
      <Divider />
      <ProductSizeFilter />
      <Divider />
      <Button
        label="Reset filter"
        className="py-3"
        onClick={() =>
          setCriteria({
            selectedCategories: [],
            selectedSizes: [],
          })
        }
      />
      <Button
        label="Hide filter"
        className="py-3"
        onClick={closeMenu}
        variant="outline"
      />
    </aside>
  );
};

export default ProductFilter;
