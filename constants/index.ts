import { CiDollar } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { GoCreditCard } from "react-icons/go";
import { LuMail, LuMapPin } from "react-icons/lu";
import { RiBox2Line, RiHeadphoneLine } from "react-icons/ri";
import { TiLocationOutline } from "react-icons/ti";

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
    label: "Western wear",
    img: "/images/img2.png",
  },
  {
    label: "Women",
    img: "/images/img7.png",
  },
  {
    label: "men",
    img: "/images/img5.png",
  },
  {
    label: "Festive wear",
    img: "/images/img8.png",
  },
];

export const ProductLists = [
  {
    src: "/images/product-1.png",
    label: "Roadstar",
    description: "Printed Cotton T-Shirt",
    currentPrice: 38.0,
    originalPrice: 40.0,
    category: "men",
    size: "M",
  },
  {
    src: "/images/product-2.png",
    label: "Allen Solly",
    description: "Women Textured Handheld Bag",
    currentPrice: 80.0,
    originalPrice: 100.0,
    category: "bags",
    size: "N/A", // Taille non applicable pour les sacs
  },
  {
    src: "/images/product-3.png",
    label: "Louis Philippe Sport",
    description: "POLO Collar T-Shirt",
    currentPrice: 50.0,
    originalPrice: 55.0,
    category: "men",
    size: "L",
  },
  {
    src: "/images/product-4.png",
    label: "Adidas",
    description: "Men adi-dash Running Shoes",
    currentPrice: 60.0,
    originalPrice: null,
    category: "men",
    size: "42", // Taille pour les chaussures
  },
  {
    src: "/images/product-6.png",
    label: "Trendyol",
    description: "Floral Embroidered Maxi Dress",
    currentPrice: 35.0,
    originalPrice: 45.0,
    category: "women",
    size: "S",
  },
  {
    src: "/images/product-7.png",
    label: "YK Disney",
    description: "Girls Pink Moana Printed Dress",
    currentPrice: 80.0,
    originalPrice: 100.0,
    category: "kids",
    size: "XS",
  },
  {
    src: "/images/product-8.png",
    label: "US Polo",
    description: "Tailored Cotton Casual Shirt",
    currentPrice: 40.0,
    originalPrice: 50.0,
    category: "men",
    size: "M",
  },
  {
    src: "/images/product-5.png",
    label: "zyla",
    description: "Women Sandals",
    currentPrice: 35.0,
    originalPrice: 40.0,
    category: "women",
    size: "38", // Taille pour les sandales
  },
];

export type Product = (typeof ProductLists)[number];

export const storiesData = [
  { src: "/images/story2.jpg", alt: "Story 2", href: "#" },
  { src: "/images/story1.jpg", alt: "Story 1", href: "#" },
  { src: "/images/story3.jpg", alt: "Story 3", href: "#" },
  { src: "/images/story4.jpg", alt: "Story 4", href: "#" },
];

export const infoItems = [
  {
    icon: RiBox2Line,
    title: "Free Shipping",
    description: "Free shipping for order above $150",
  },
  {
    icon: CiDollar,
    title: "Money Guarantee",
    description: "within 30 days for an exchange",
  },
  {
    icon: RiHeadphoneLine,
    title: "Online Support",
    description: "24 hours a day, 7 days a week",
  },
  {
    icon: GoCreditCard,
    title: "Flexible Payment",
    description: "Pay with multiple credit card",
  },
];

export const contactInfos = [
  {
    icon: FiPhoneCall,
    value: "(704) 555-0127",
  },
  {
    icon: LuMail,
    value: "kriSt@example.com",
  },
  {
    icon: TiLocationOutline,
    value: "3891 Ranchview Dr, Richardson, California 62639",
  },
];

export const informationLinks = [
  {
    label: "My Account",
    href: "/account",
  },
  {
    label: "My Cart",
    href: "/cart",
  },
  {
    label: "My Wishlist",
    href: "/wishlist",
  },
  {
    label: "Checkout",
    href: "/checkout",
  },
];

export const serviceLinks = [
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Careers",
    href: "/careers",
  },
  {
    label: "Delivery Information",
    href: "/delivery-information",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
];

export const paymentMethods = [
  "/icons/visa.png",
  "/icons/mastercard.png",
  "/icons/google-pay.png",
  "/icons/amex.png",
  "/icons/pay-pal.png",
];

export const Categories = [
  { id: 1, category: "Women" },
  { id: 2, category: "Kids" },
  { id: 3, category: "Bags" },
  { id: 4, category: "Belts" },
  { id: 5, category: "Wallets" },
  { id: 6, category: "Watches" },
  { id: 7, category: "Accessories" },
  { id: 8, category: "Winter Wear" },
];

export const AvailableColors = [
  { name: "Red", count: 10 },
  { name: "Blue", count: 14 },
  { name: "Orange", count: 8 },
  { name: "Black", count: 9 },
  { name: "Green", count: 4 },
  { name: "Yellow", count: 2 },
];

export const AvailableSizes = [
  { size: "XXI", count: 6 },
  { size: "L", count: 20 },
  { size: "M", count: 7 },
  { size: "S", count: 16 },
  { size: "XS", count: 10 },
  { size: "XXS", count: 2 },
];
