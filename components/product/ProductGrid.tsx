import ProductCard from "@/components/ui/ProductCard";
import { useProductFilterContext } from "@/hooks/useProductFilterContext";

const ProductGrid = () => {
  const { filteredProducts } = useProductFilterContext();

  return (
    <div className="grid-layout">
      {filteredProducts.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
