import { ProductsCategories } from "@/constants";
import Link from "next/link";
import React from "react";

const ProductList = ({
  products,
}: {
  products: { label: string; url: string }[];
}) => (
  <div className="flex flex-col gap-2">
    {products.map((product, index) => (
      <Link
        href={product.url}
        key={index}
        className="font-medium text-base text-gray-700 hover:text-black capitalize"
      >
        {product.label}
      </Link>
    ))}
  </div>
);

const CategoryItem = ({
  categorie,
  products,
  isLastInRow,
}: {
  categorie: string;
  products: { label: string; url: string }[];
  isLastInRow?: boolean;
}) => (
  <div
    className={`p-4 ${categorie === "Kids" ? "row-span-2" : "row-span-1"} ${
      !isLastInRow ? "border-r border-gray-200" : ""
    }`}
  >
    <h5 className="text-lg font-semibold text-black capitalize mb-2">
      {categorie}
    </h5>
    <ProductList products={products} />
  </div>
);

const NavItemDropDown = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <div
      onClick={handleClose}
      className="absolute inset-0 pt-24 h-screen z-50 flex justify-center bg-black/10 p-4 py-6 dropdowm"
    >
      <div
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
        className="max-w-screen-lg p-4 w-full h-fit bg-white grid grid-cols-4 border rounded-lg border-gray-200 menu"
      >
        {ProductsCategories.map((item, index) => (
          <CategoryItem
            key={`categorie-${index}`}
            categorie={item.categorie}
            products={item.products}
            isLastInRow={(index + 1) % 4 === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default NavItemDropDown;
