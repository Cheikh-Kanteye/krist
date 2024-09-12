import { ProductLists } from "@/constants";
import ProductCard from "../ui/ProductCard";

const BestSeller = () => {
  return (
    <section className="grid-container py-12">
      <h2 className="section-title text-center">Our Bestseller</h2>
      <div className="py-6 overflow-hidden">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 md:gap-4 lg:gap-5 w-full flex-wrap">
          {ProductLists.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
