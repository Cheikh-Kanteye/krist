import { useProductFilterContext } from "@/hooks/useProductFilterContext";
import ProductHroizontalCard from "./ProductHorizontalCard";

const ProductGrid = () => {
  const { filteredProducts } = useProductFilterContext();

  return (
    <div className="grid lg:grid-cols-2 gap-2 lg:gap-4">
      {filteredProducts.map((product, index) => (
        <ProductHroizontalCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
