import { Product, ProductLists } from "@/constants";

type FilterCriteria = {
  selectedCategories?: string[];
  selectedSizes?: string[];
};

const useProductFilter = (criteria: FilterCriteria): Product[] => {
  // Encapsuler le filtrage dans une fonction pour éviter des effets secondaires inattendus
  const filterProducts = (): Product[] => {
    let filtered = ProductLists;

    if (criteria.selectedCategories && criteria.selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        criteria.selectedCategories!.includes(product.category)
      );
    }

    if (criteria.selectedSizes && criteria.selectedSizes.length > 0) {
      filtered = filtered.filter((product) =>
        criteria.selectedSizes!.includes(product.size)
      );
    }

    return filtered;
  };

  return filterProducts();
};

export default useProductFilter;
