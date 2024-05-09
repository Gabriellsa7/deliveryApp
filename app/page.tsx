import Image from "next/image";
import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import PromoBanner from "./_components/promo-banner";
import Recommended from "./_components/recommended";
import RecommendedRestaurants from "./_components/recommended-restaurants";
import Search from "./_components/search";
import e from "@/assets/recommended/citrus_shrimp.png";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-5 pt-2">
        <Search />
      </div>
      <div className="px-5 pt-6">
        <CategoryList />
      </div>
      <div className="px-5 pt-6">
        <PromoBanner src={"/PromoBanner1.svg"} alt="Up to 30% off" />
      </div>
      <div className="px-5 pt-6">
        <Recommended />
      </div>
      <div className="px-5 pt-6">
        <PromoBanner src={"/PromoBanner2.svg"} alt="From R$17.90 on snacks" />
      </div>
      <div className="px-5 pt-6 pb-9">
        <RecommendedRestaurants />
      </div>
    </>
  );
}
