import React, { useState } from "react";
import FilterLayout from "./FilterLayout";
import SliderRange from "../SliderRange";
import { ProductLists } from "@/constants";

interface ProductPriceFilterProps extends FilterProps {}
const ProductPriceFilter: React.FC<ProductPriceFilterProps> = ({
  handleFilterProduct,
}) => {
  // const prices = ProductLists.map((p) => p.currentPrice);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);
  return (
    <FilterLayout label="price">
      <SliderRange
        label="Price"
        symbol="$"
        priceCap={200}
        initialMin={0}
        initialMax={2000}
        min={minPrice}
        max={maxPrice}
        handleMaxChange={(price) => setMaxPrice(price)}
        handleMinChange={(price) => setMinPrice(price)}
      />
    </FilterLayout>
  );
};

export default ProductPriceFilter;
