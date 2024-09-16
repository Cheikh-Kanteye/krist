import { AvailableColors, Product } from "@/constants";
import React, { useState } from "react";
import ProductFilterBase from "./ProductFilterBase";

const ProductColorFilter = () => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  return (
    <ProductFilterBase
      label="Colors"
      options={AvailableColors.map((color) => ({
        id: color.name,
        label: color.name,
        value: color.name,
        count: color.count,
        color: color.name,
      }))}
      fillCheckbox
      selectedOptions={selectedColors}
      onChange={setSelectedColors}
    />
  );
};

export default ProductColorFilter;
