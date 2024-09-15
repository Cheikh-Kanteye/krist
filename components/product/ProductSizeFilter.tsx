"use client";

import { AvailableSizes, Categories, ProductLists } from "@/constants";
import React, { useState } from "react";
import Checkbox from "../ui/Checkbox";
import FilterLayout from "./FilterLayout";

interface ProductSizeFilterProps extends FilterProps {}
const ProductSizeFilter: React.FC<ProductSizeFilterProps> = ({
  handleFilterProduct,
}) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Gère le changement de checkbox
  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setSelectedCategories((prevSelected) =>
      checked
        ? [...prevSelected, value]
        : prevSelected.filter((category) => category !== value)
    );
  };

  // Filtrer les produits en fonction des catégories sélectionnées
  const filteredProducts = selectedCategories.length
    ? ProductLists.filter((product) =>
        selectedCategories.includes(product.size)
      )
    : ProductLists;

  return (
    <FilterLayout label="categories">
      {AvailableSizes.map((size, index) => (
        <div key={index} className="filter-btn">
          <Checkbox
            id={size.size}
            name="category"
            value={size.size}
            checked={selectedCategories.includes(size.size)} // Détermine si la checkbox est cochée
            onChange={handleCategoryChange}
          >
            {size.size}
          </Checkbox>

          <span>({size.count})</span>
        </div>
      ))}
    </FilterLayout>
  );
};

export default ProductSizeFilter;
