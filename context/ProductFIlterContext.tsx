"use client";

import React, { createContext, useEffect, useState } from "react";
import useProductFilter from "@/hooks/useProductFilter";

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [criteria, setCriteria] = useState<FilterCriteria>({});
  const filteredProducts = useProductFilter(criteria);

  useEffect(() => {
    console.log("Provider:", criteria);
  }, [criteria]);

  return (
    <ProductContext.Provider
      value={{ criteria, setCriteria, filteredProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};
