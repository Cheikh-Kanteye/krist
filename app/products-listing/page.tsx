"use client";
import { useState } from "react";
import ProductFilter from "@/components/product/ProductFilter";
import ProductViewToggle from "@/components/product/ProductViewToggle";
import { BsChevronRight } from "react-icons/bs";
import ProductGrid from "@/components/product/ProductGrid";
import ProductList from "@/components/product/ProductList";
import { BiChevronDown } from "react-icons/bi";
import { ProductProvider } from "@/context/ProductFIlterContext";
import { FiFilter } from "react-icons/fi";

const ProductListing = () => {
  const [isGridView, setIsGridView] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <ProductProvider>
      <main className="min-h-screen">
        <div className="container">
          <div className="flex gap-2 items-center py-6 sm:px-4">
            <span className="text-lg text-black">Shop</span>
            <BsChevronRight size={20} />
            <span className="text-lg text-black">All Products</span>
          </div>
          {showMenu && (
            <div
              className="absolute inset-0 w-full h-screen bg-black/5"
              onClick={() => setShowMenu(false)}
            />
          )}
          <div className="flex lg:relative">
            <ProductFilter
              showMenu={showMenu}
              closeMenu={() => setShowMenu(false)}
            />
            <section className="flex-1 flex flex-col sm:p-4">
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-3">
                  <button
                    className="block lg:hidden p-2 rounded-md bg-black/5 hover:bg-black/10"
                    onClick={() => setShowMenu(true)}
                  >
                    <FiFilter size={24} color="black" />
                  </button>
                  <ProductViewToggle
                    isGridView={isGridView}
                    toggleGrid={() => setIsGridView(true)}
                    toggleList={() => setIsGridView(false)}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-1 cursor-pointer items-center">
                    <span>Short by latest</span>
                    <BiChevronDown size={24} color="black" />
                  </div>
                </div>
              </div>
              {isGridView ? <ProductGrid /> : <ProductList />}
            </section>
          </div>
        </div>
      </main>
    </ProductProvider>
  );
};

export default ProductListing;
