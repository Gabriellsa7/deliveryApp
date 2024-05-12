"use client";
import products from "../../_components/_lists/recommended-listing";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

interface ProductPageProps {
  id: number;
  name?: string;
  description?: string;
  img?: string | StaticImageData;
  price?: number;
  discount?: boolean;
  discountValue?: string;
}

const ProductPageInfo = () => {
  const [product, setProduct] = useState<ProductPageProps | null>(null);

  useEffect(() => {
    // Function to search recipe data
    const fetchRecipeData = async () => {
      try {
        // Get the URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get("name") || product?.name;

        // Combine recipes and recentRecipes into one array
        const generalRecipes = products;

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

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Preço: {product.price}</p>
      {product.discount && <p>Desconto: {product.discountValue}</p>}
      <Image
        src={product?.img as string}
        alt="Produto"
        width={200}
        height={200}
      />
    </div>
  );
};

export default ProductPageInfo;
