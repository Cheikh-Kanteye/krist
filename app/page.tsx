import Banner from "@/components/home/Banner";
import BestSeller from "@/components/home/BestSeller";
import Deals from "@/components/home/Deals";
import ShopByCategory from "@/components/home/ShopByCategory";
import Testimonials from "@/components/home/Testimonials";
import React from "react";

const Home = () => {
  return (
    <main>
      <Banner />
      <ShopByCategory />
      <BestSeller />
      <Deals />
      <Testimonials />
    </main>
  );
};

export default Home;
