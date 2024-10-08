interface FilterProps {
  handleFilterProduct: (product: Product[]) => void;
}

interface FilterCriteria {
  selectedCategories?: string[];
  selectedSizes?: string[];
  selectedColors?: string[];
}

interface ProductContextType {
  criteria: FilterCriteria;
  setCriteria: React.Dispatch<React.SetStateAction<FilterCriteria>>;
  filteredProducts: Product[];
}
