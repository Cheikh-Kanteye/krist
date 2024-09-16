import { Categories } from "@/constants";
import { useState } from "react";
import ProductFilterBase from "./ProductFilterBase";

const ProductCategoriesFilter = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <ProductFilterBase
      label="Categories"
      options={Categories.map((cat) => ({
        id: cat.id.toString(),
        label: cat.category,
        value: cat.category,
      }))}
      selectedOptions={selectedCategories}
      onChange={setSelectedCategories}
    />
  );
};

export default ProductCategoriesFilter;
