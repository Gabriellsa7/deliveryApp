"use client";
import restaurants from "@/app/_components/_lists/recommended-restaurant-listing";
import { Button } from "@/app/_components/ui/button";
import { ChevronLeftIcon, Star, StarIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ProductPageProps {
  id: number;
  name?: string;
  description?: string;
  img?: string | StaticImageData;
}

const Infos = () => {
  const [restaurant, setRestaurants] = useState<ProductPageProps | null>(null);

  const router = useRouter();

  const handleBackClick = () => router.back();

  useEffect(() => {
    // Function to search recipe data
    const fetchRecipeData = async () => {
      try {
        // Get the URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get("name") || restaurant?.name;

        // Combine recipes and recentRecipes into one array
        const generalRecipes: ProductPageProps[] = [...restaurants];

        // Find the recipe based on the name in the combined list
        const productData = generalRecipes.find(
          (product) => product.name === name
        );

        if (productData) {
          // Define product data in the state
          setRestaurants(productData);
        } else {
          console.error("Recipe not found");
        }
      } catch (error) {
        console.error("Error fetching recipe data:", error);
      }
    };

    // Call the data fetch function when the component mounts
    fetchRecipeData();
  }, [restaurant?.name]);

  if (!restaurant?.name) {
    return <main>Loading...</main>;
  }

  return (
    <div>
      <div>
        <div className="relative h-[360px] w-full">
          <Image
            src={restaurant?.img as string}
            alt="Product image"
            sizes="100%"
            className="object-cover"
            fill
          />
          <Button
            className="absolute left-4 top-4 rounded-full bg-white text-foreground hover:text-white"
            size="icon"
            onClick={handleBackClick}
          >
            <ChevronLeftIcon />
          </Button>
        </div>
      </div>
      <div className="relative z-50 mt-[-4.5rem] rounded-tl-3xl rounded-tr-3xl bg-white py-5 flex items-center justify-between">
        <div className="flex items-center gap-3 mx-5">
          <Image
            src={restaurants[restaurant.id].img}
            alt="Logo"
            width={30}
            height={30}
            className="rounded-full object-cover"
          />
          <span className="font-bold text-lg text-[#323232]">
            {restaurant.name}
          </span>
        </div>
        <div className="flex items-center gap-1 mx-5 py-1 px-[10px] bg-[#323232] rounded-2xl ">
          <StarIcon color="#FFB100" size={20} />
          <span className="font-bold text-base text-[#FFF]">5.0</span>
        </div>
      </div>
    </div>
  );
};

export default Infos;
