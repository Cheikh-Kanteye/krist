import { Product, ProductLists } from "@/constants";

const useProductFilter = (criteria: FilterCriteria): Product[] => {
  console.log("Current filter criteria:", { criteria });

  const filterProducts = (): Product[] => {
    let filtered = ProductLists;

    // Filtrage par catégories
    if (criteria.selectedCategories && criteria.selectedCategories.length > 0) {
      filtered = filtered.filter((product) => {
        const categoryMatches = criteria.selectedCategories?.includes(
          product.category
        );
        console.log(criteria.selectedCategories?.includes("women"));
        return categoryMatches;
      });
    }

    // Filtrage par tailles
    if (criteria.selectedSizes && criteria.selectedSizes.length > 0) {
      filtered = filtered.filter((product) => {
        const sizeMatches = criteria.selectedSizes?.includes(product.size);
        console.log(
          `Filtering product "${product.label}" by size "${product.size}": ${sizeMatches}`
        );
        return sizeMatches;
      });
    }

    if (criteria.selectedColors && criteria.selectedColors.length > 0) {
      filtered = filtered.filter((product) => {
        // Check if any of the product colors match the selected colors
        const colorMatches = product.colors.some((color) =>
          criteria.selectedColors?.includes(color)
        );
        return colorMatches;
      });
    }

    return filtered;
  };

  return filterProducts();
};

export default useProductFilter;
