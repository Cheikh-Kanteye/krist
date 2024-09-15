"use client";
import React, { useCallback, useState } from "react";
import ProductFilter from "@/components/product/ProductFilter";
import ProductViewToggle from "@/components/product/ProductViewToggle";
import { Product, ProductLists } from "@/constants";
import { BsChevronRight } from "react-icons/bs";
import ProductGrid from "@/components/product/ProductGrid";
import ProductList from "@/components/product/ProductList";
import { BiChevronDown } from "react-icons/bi";

const ProductListing = () => {
  const [products, setProducts] = useState<Product[]>(ProductLists);
  const [isGridView, setIsGridView] = useState(true);

  const handleProductFilter = useCallback((filteredProducts: Product[]) => {
    setProducts(filteredProducts);
  }, []);

  return (
    <main className="min-h-screen">
      <div className="container">
        <div className="flex gap-2 items-center py-10 px-4">
          <span className="text-lg text-black">Shop</span>
          <BsChevronRight size={20} />
          <span className="text-lg text-black">All Products</span>
        </div>
        <div className="flex">
          <ProductFilter handleFilterProduct={handleProductFilter} />
          <section className="flex-1 flex flex-col p-4">
            <div className="flex items-center justify-between mb-6">
              <ProductViewToggle
                isGridView={isGridView}
                toggleGrid={() => setIsGridView(true)}
                toggleList={() => setIsGridView(false)}
              />
              <div className="flex flex-col gap-3">
                <div className="flex gap-1 cursor-pointer items-center">
                  <span>Short by latest</span>
                  <BiChevronDown size={24} color="black" />
                </div>
              </div>
            </div>
            {isGridView ? (
              <ProductGrid products={products} />
            ) : (
              <ProductList products={products} />
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default ProductListing;
