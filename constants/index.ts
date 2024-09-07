export const NavItemList = [
  { label: "home", href: "/" },
  { label: "shop", action: "openDropdown" },
  { label: "our story", href: "/story" },
  { label: "blog", href: "/blog" },
  { label: "contact us", href: "/contact" },
];

type Product = {
  label: string;
  url: string;
};

type Category = {
  categorie: string;
  products: Product[];
};

export const ProductsCategories: Category[] = [
  {
    categorie: "men",
    products: [
      {
        label: "T-Shirts",
        url: "/product?categorie=men&product=t-shirt",
      },
      {
        label: "Casual Shirts",
        url: "/product?categorie=men&product=casual-shirts",
      },
      {
        label: "Formal Shirts",
        url: "/product?categorie=men&product=formal-shirts",
      },
      {
        label: "Jackets",
        url: "/product?categorie=men&product=jackets",
      },
      {
        label: "Blazers & Coats",
        url: "/product?categorie=men&product=blazers-coats",
      },
    ],
  },
  {
    categorie: "women",
    products: [
      {
        label: "Kurtas & Suits",
        url: "/product?categorie=women&product=kurtas-suits",
      },
      {
        label: "Sarees",
        url: "/product?categorie=women&product=sarees",
      },
      {
        label: "Ethnic Wear",
        url: "/product?categorie=women&product=ethnic-wear",
      },
      {
        label: "Lehenga Cholis",
        url: "/product?categorie=women&product=lehenga-cholis",
      },
      {
        label: "Jackets",
        url: "/product?categorie=women&product=jackets",
      },
    ],
  },
  {
    categorie: "Footwear",
    products: [
      {
        label: "Flats",
        url: "/product?categorie=footwear&product=flats",
      },
      {
        label: "Casual Shoes",
        url: "/product?categorie=footwear&product=casual-shoes",
      },
      {
        label: "Heels",
        url: "/product?categorie=footwear&product=heels",
      },
      {
        label: "Boots",
        url: "/product?categorie=footwear&product=boots",
      },
    ],
  },
  {
    categorie: "Kids",
    products: [
      {
        label: "T-Shirts",
        url: "/product?categorie=kids&product=t-shirts",
      },
      {
        label: "Shirts",
        url: "/product?categorie=kids&product=shirts",
      },
      {
        label: "Jeans",
        url: "/product?categorie=kids&product=jeans",
      },
      {
        label: "Trousers",
        url: "/product?categorie=kids&product=trousers",
      },
      {
        label: "Party Wear",
        url: "/product?categorie=kids&product=party-wear",
      },
      {
        label: "Innerwear & Thermal",
        url: "/product?categorie=kids&product=innerwear-thermal",
      },
      {
        label: "Track Pants",
        url: "/product?categorie=kids&product=track-pants",
      },
      {
        label: "Value Pack",
        url: "/product?categorie=kids&product=value-pack",
      },
    ],
  },
  {
    categorie: "Indian & Festive wear",
    products: [
      {
        label: "Kurtas & Kurta Sets",
        url: "/product?categorie=indian-festive-wear&product=kurtas-kurta-sets",
      },
      {
        label: "Sherwanis",
        url: "/product?categorie=indian-festive-wear&product=sherwanis",
      },
    ],
  },
  {
    categorie: "Western Wear",
    products: [
      {
        label: "Dresses",
        url: "/product?categorie=western-wear&product=dresses",
      },
      {
        label: "Jumpsuits",
        url: "/product?categorie=western-wear&product=jumpsuits",
      },
    ],
  },
  {
    categorie: "Product Features",
    products: [
      {
        label: "360 Product Viewer",
        url: "/product?categorie=product-features&product=360-product-viewer",
      },
      {
        label: "Product with Video",
        url: "/product?categorie=product-features&product=product-with-video",
      },
    ],
  },
];

// Utilitaire pour générer l'URL d'un produit
export const generateProductUrl = (categorie: string, product: string) => {
  const baseUrl = "/product";
  const url = `${baseUrl}?categorie=${encodeURIComponent(
    categorie
  )}&product=${encodeURIComponent(product)}`;
  return url;
};

export const CategrorieSlides = [
  {
    label: "Casual wear",
    img: "/images/img1.png",
  },
  {
    label: "Western wear",
    img: "/images/img2.png",
  },
  {
    label: "Ethnic wear",
    img: "/images/img3.png",
  },
  {
    label: "Kids wear",
    img: "/images/img4.png",
  },
  {
    label: "Footwear",
    img: "/images/img1.png",
  },
  {
    label: "Women",
    img: "/images/img2.png",
  },
  {
    label: "men",
    img: "/images/img3.png",
  },
];
