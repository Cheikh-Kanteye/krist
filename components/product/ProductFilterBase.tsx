import React, { useState, useEffect } from "react";
import Checkbox from "../ui/Checkbox";
import FilterLayout from "./FilterLayout";
import { useProductFilterContext } from "@/hooks/useProductFilterContext";

interface FilterOption {
  id: string;
  label: string;
  value: string;
  count?: number;
  color?: string;
}

interface ProductFilterBaseProps {
  label: string;
  options: FilterOption[];
  selectedOptions: string[];
  fillCheckbox?: boolean;
  onChange: (selected: string[]) => void;
}

const ProductFilterBase: React.FC<ProductFilterBaseProps> = ({
  label,
  options,
  selectedOptions,
  fillCheckbox,
  onChange,
}) => {
  const { setCriteria } = useProductFilterContext();
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    // Calculer les nouvelles options sélectionnées
    const updatedSelectedOptions = checked
      ? [...selectedOptions, value]
      : selectedOptions.filter((opt) => opt !== value);

    // Mettre à jour l'état local et aussi les critères
    onChange(updatedSelectedOptions);

    // Mettre à jour les critères de filtrage dans le contexte avec les nouvelles options sélectionnées
    setCriteria((prev) => ({
      ...prev,
      selectedCategories:
        label.toLowerCase() === "categories"
          ? updatedSelectedOptions // Utiliser updatedSelectedOptions pour avoir la bonne valeur
          : prev.selectedCategories,
      selectedSizes:
        label.toLowerCase() === "sizes"
          ? updatedSelectedOptions // Utiliser updatedSelectedOptions pour avoir la bonne valeur
          : prev.selectedSizes,
    }));
  };

  return (
    <FilterLayout label={label}>
      {options.map((option) => (
        <div key={option.id} className="filter-btn">
          <Checkbox
            id={option.value}
            name={label.toLowerCase()} // Nom dynamique basé sur le label
            value={option.value}
            fill={fillCheckbox}
            color={option.color}
            checked={selectedOptions.includes(option.value)} // Détermine si la checkbox est cochée
            onChange={handleCheckboxChange}
          >
            {option.label}
          </Checkbox>
          {option.count !== undefined && <span>({option.count})</span>}
        </div>
      ))}
    </FilterLayout>
  );
};

export default ProductFilterBase;
