// hooks/useProductFilterContext.ts

import { ProductContext } from "@/context/ProductFIlterContext";
import { useContext } from "react";

export const useProductFilterContext = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error(
      "useProductFilterContext doit être utilisé dans un ProductProvider"
    );
  }

  return context;
};
