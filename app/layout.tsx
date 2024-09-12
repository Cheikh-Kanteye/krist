import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./_app";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Krist - Online Ethnic, Festive, Men's, Women's & Kids Clothing & Shoes",
  description:
    "Discover Krist, your online destination for ethnic and festive clothing for men, women, and kids. Shop a wide range of trendy outfits and shoes that celebrate style and diversity. Free shipping & easy returns!",
  keywords:
    "Ethnic clothing, festive wear, men's fashion, women's fashion, kids' clothing, trendy shoes, online boutique, ethnic shoes, fashion for men, fashion for women, fashion for kids, Krist fashion, ethnic outfits, festive fashion",
  openGraph: {
    title: "Krist - Ethnic & Festive Clothing",
    description:
      "Explore stylish ethnic and festive clothing for men, women, and kids at Krist. Shop our latest collections with free shipping and easy returns.",
    url: "https://www.krist.com",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <App>{children}</App>
      </body>
    </html>
  );
}
