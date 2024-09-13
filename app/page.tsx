import Banner from "@/components/home/Banner";
import BestSeller from "@/components/home/BestSeller";
import Deals from "@/components/home/Deals";
import ShopByCategory from "@/components/home/ShopByCategory";
import Stories from "@/components/home/Stories";
import Testimonials from "@/components/home/Testimonials";

const Home = () => {
  return (
    <main>
      <Banner />
      <ShopByCategory />
      <BestSeller />
      <Deals />
      <Testimonials />
      <Stories />
    </main>
  );
};

export default Home;
