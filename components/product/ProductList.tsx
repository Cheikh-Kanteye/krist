import { Product } from "@/constants";
import ProductHroizontalCard from "./ProductHorizontalCard";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((product, index) => (
        <ProductHroizontalCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
