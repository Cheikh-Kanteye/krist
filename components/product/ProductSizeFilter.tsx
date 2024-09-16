import { AvailableSizes, Product, ProductLists } from "@/constants";
import React, { useEffect, useState } from "react";
import ProductFilterBase from "./ProductFilterBase";

const ProductSizeFilter = () => {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const filteredProducts = selectedSizes.length
    ? ProductLists.filter((product) => selectedSizes.includes(product.size))
    : ProductLists;

  useEffect(() => {}, [selectedSizes, filteredProducts]);

  return (
    <ProductFilterBase
      label="Sizes"
      options={AvailableSizes.map((size) => ({
        id: size.size,
        label: size.size,
        value: size.size,
        count: size.count,
      }))}
      selectedOptions={selectedSizes}
      onChange={setSelectedSizes}
    />
  );
};

export default ProductSizeFilter;
