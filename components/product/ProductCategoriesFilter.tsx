"use client";
import { Categories, Product } from "@/constants";
import { useState, useEffect } from "react";
import Checkbox from "../ui/Checkbox";
import FilterLayout from "./FilterLayout";
import useProductFilter from "@/hooks/useProductFilter";

interface ProductCategoriesFilterProps {
  handleFilterProduct: (filteredProducts: Product[]) => void;
}

const ProductCategoriesFilter: React.FC<ProductCategoriesFilterProps> = ({
  handleFilterProduct,
}) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const filteredProducts = useProductFilter({ selectedCategories });

  useEffect(() => {
    handleFilterProduct(filteredProducts);
  }, [selectedCategories, filteredProducts]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setSelectedCategories((prevSelected) =>
      checked
        ? [...prevSelected, value]
        : prevSelected.filter((category) => category !== value)
    );
  };

  return (
    <FilterLayout label="categories">
      {Categories.map((cat) => (
        <div key={cat.id} className="filter-btn">
          <Checkbox
            id={cat.category}
            name="category"
            value={cat.category}
            checked={selectedCategories.includes(cat.category)} // Détermine si la checkbox est cochée
            onChange={handleCategoryChange}
          >
            {cat.category}
          </Checkbox>
        </div>
      ))}
    </FilterLayout>
  );
};

export default ProductCategoriesFilter;
