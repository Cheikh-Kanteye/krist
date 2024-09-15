import { AvailableColors } from "@/constants";
import React from "react";
import FilterLayout from "./FilterLayout";

interface ProductColorFilterProps extends FilterProps {}
const ProductColorFilter: React.FC<ProductColorFilterProps> = ({
  handleFilterProduct,
}) => {
  return (
    <FilterLayout label="colors">
      {AvailableColors.map((color) => (
        <div className="filter-btn" key={color.name}>
          <div className="flex items-center gap-2">
            <div
              className="w-5 h-5 rounded-[4px]"
              style={{ background: color.name.toLowerCase() }}
            />
            <span>{color.name}</span>
          </div>

          <span>({color.count})</span>
        </div>
      ))}
    </FilterLayout>
  );
};

export default ProductColorFilter;
