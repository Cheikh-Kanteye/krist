import React from "react";
import ProductCategoriesFilter from "./ProductCategoriesFilter";
import ProductColorFilter from "./ProductColorFilter";
import ProductPriceFilter from "./ProductPriceFilter";
import ProductSizeFilter from "./ProductSizeFilter";
import { Product } from "@/constants";

const ProductFilter = ({ handleFilterProduct }: FilterProps) => {
  function Divider() {
    return <div className="w-full h-px bg-gray-50 my-2" />;
  }
  return (
    <aside className="w-60 p-4 flex flex-col gap-3">
      <ProductCategoriesFilter handleFilterProduct={handleFilterProduct} />
      <Divider />
      <ProductPriceFilter handleFilterProduct={handleFilterProduct} />
      <Divider />
      <ProductColorFilter handleFilterProduct={handleFilterProduct} />
      <Divider />
      <ProductSizeFilter handleFilterProduct={handleFilterProduct} />
    </aside>
  );
};

export default ProductFilter;
