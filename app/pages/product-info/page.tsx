"use client";
import { Button } from "@/app/_components/ui/button";
import products from "../../_components/_lists/recommended-listing";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { ArrowDown, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import restaurants from "@/app/_components/_lists/recommended-restaurant-listing";
import DeliveryInfo from "./_components/delivery-info";
import About from "./_components/about";
import Recommendation from "./_components/recommendation";

interface ProductPageProps {
  id: number;
  name?: string;
  description?: string;
  img?: string | StaticImageData;
  price?: number;
  discount?: boolean;
  discountValue?: string;
  discountPercent?: number;
}

const ProductPageInfo = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<ProductPageProps | null>(null);

  const router = useRouter();

  const handleBackClick = () => router.back();

  useEffect(() => {
    // Function to search recipe data
    const fetchRecipeData = async () => {
      try {
        // Get the URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get("name") || product?.name;

        // Combine recipes and recentRecipes into one array
        const generalRecipes: ProductPageProps[] = [
          ...products,
          ...restaurants,
        ];

        // Find the recipe based on the name in the combined list
        const productData = generalRecipes.find(
          (product) => product.name === name
        );

        if (productData) {
          // Define product data in the state
          setProduct(productData);
        } else {
          console.error("Recipe not found");
        }
      } catch (error) {
        console.error("Error fetching recipe data:", error);
      }
    };

    // Call the data fetch function when the component mounts
    fetchRecipeData();
  }, [product?.name]);

  if (!product?.name) {
    return <main>Loading...</main>;
  }

  const handleIncreaseQuantityClick = () =>
    setQuantity((currentState) => currentState + 1);
  const handleDecreaseQuantityClick = () =>
    setQuantity((currentState) => {
      if (currentState === 1) return 1;

      return currentState - 1;
    });

  return (
    <div>
      <div className="relative h-[360px] w-full">
        <Image
          src={product?.img as string}
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
      <div className="relative z-50 mt-[-1.5rem] rounded-tl-3xl rounded-tr-3xl bg-white py-5">
        <div className="flex items-center gap-3 mx-5">
          <div>
            <Image
              src={restaurants[product.id].img}
              alt="Logo"
              width={30}
              height={30}
              className="rounded-full object-cover"
            />
          </div>
          <span className="font-normal text-xs">
            {restaurants[product.id].name}
          </span>
        </div>
        <div className="mx-5 mt-2 mb-3">
          <h1 className="text-xl font-bold">{product.name}</h1>
        </div>
        <div className="flex items-center justify-between mx-5">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-bold text-xl">
                R$
                {product.discount
                  ? (
                      product.price! -
                      product.price! * product.discountPercent!
                    ).toFixed(2)
                  : (product.price || 0).toFixed(2)}
              </span>
              {product.discount === true ? (
                <div className="flex items-center bg-[#EA1D2C] py-[2px] px-2 rounded-xl">
                  <ArrowDown size={12} color="#FFFFFF" />
                  <span className="text-xs font-bold text-white">
                    {product.discountValue}
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
            <span className="font-normal text-sm  text-gray-400">
              De: R${product.price}
            </span>
          </div>
          <div className="flex items-center gap-3 text-center">
            <Button
              size="icon"
              variant="ghost"
              className="border border-solid border-muted-foreground"
              onClick={handleDecreaseQuantityClick}
            >
              <ChevronLeftIcon />
            </Button>
            <span className="w-4">{quantity}</span>
            <Button
              className="bg-[#EA1D2C]"
              size="icon"
              onClick={handleIncreaseQuantityClick}
            >
              <ChevronRightIcon />
            </Button>
          </div>
        </div>
      </div>
      <DeliveryInfo />
      <About />
      <Recommendation />
    </div>
  );
};

export default ProductPageInfo;
