import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import PromoBanner from "./_components/promo-banner";
import Recommended from "./_components/recommended";
import Search from "./_components/search";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
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
    </>
  );
}
