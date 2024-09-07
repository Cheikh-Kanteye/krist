export const NavItemList = [
  { label: "home", href: "/" },
  { label: "shop", action: "openDropdown" },
  { label: "our story", href: "/story" },
  { label: "blog", href: "/blog" },
  { label: "contact us", href: "/contact" },
];

type Category = {
  categorie: string;
  products: {
    label: string;
    url: string;
  }[];
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
    img: "/images/img6.png",
  },
  {
    label: "Women",
    img: "/images/img7.png",
  },
  {
    label: "men",
    img: "/images/img5.png",
  },
];

export const ProductLists = [
  {
    src: "/images/product-1.png",
    label: "Roadstar",
    description: "Printed Cotton T-Shirt",
    currentPrice: "$38.00",
    originalPrice: "$40.00",
  },
  {
    src: "/images/product-2.png",
    label: "Allen Solly",
    description: "Women Textured Handheld Bag",
    currentPrice: "$80.00",
    originalPrice: "$100.00",
  },
  {
    src: "/images/product-3.png",
    label: "Louis Philippe Sport",
    description: "POLO Collar T-Shirt",
    currentPrice: "$50.00",
    originalPrice: "$55.00",
  },
  {
    src: "/images/product-4.png",
    label: "Adidas",
    description: "Men adi-dash Running Shoes",
    currentPrice: "$60.00",
    originalPrice: "",
  },
  {
    src: "/images/product-6.png",
    label: "Trendyol",
    description: "Floral Embroidered Maxi Dress",
    currentPrice: "$35.00",
    originalPrice: "$45.00",
  },
  {
    src: "/images/product-7.png",
    label: "YK Disney",
    description: "Girls Pink Moana Printed Dress",
    currentPrice: "$80.00",
    originalPrice: "$100.00",
  },
  {
    src: "/images/product-8.png",
    label: "US Polo",
    description: "Tailored Cotton Casual Shirt",
    currentPrice: "$40.00",
    originalPrice: "$50.00",
  },
  {
    src: "/images/product-5.png",
    label: "zyla",
    description: "Women Sandals",
    currentPrice: "$35.00",
    originalPrice: "$40.00",
  },
];

export type Product = (typeof ProductLists)[number];
