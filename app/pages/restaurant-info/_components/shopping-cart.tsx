"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/app/_components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import FinalizeOrder from "./finalize-order";
import { ProductPageProps } from "../../product-info/page";

const ShoppingCart = () => {
  const [products, setProducts] = useState<ProductPageProps[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products-cart"); // Replace with your API endpoint
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleIncreaseQuantityClick = async (productId: number) => {};

  const handleDecreaseQuantityClick = async (productId: number) => {};

  const handleRemoveProductClick = async (productId: number) => {
    try {
      // Make an asynchronous API call to the backend to remove the product
      const response = await fetch(`/api/products-cart/${productId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Update the local product state if the API call was successful
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== Number(productId))
        );
      } else {
        console.error(
          "Error removing product from database:",
          await response.text()
        );
        // Handle API call error (e.g., display notification to user)
      }
    } catch (error) {
      console.error("Error removing product from database:", error);
      // Handle general error (e.g., network error, display notification to user)
    }
  };
  return (
    <div className="my-6 px-5 w-full flex flex-col justify-between h-full">
      <div className="flex flex-col gap-5 ">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="flex items-center gap-5">
              <div className="relative h-20 w-20">
                {product.img && product.name ? (
                  <Image
                    src={product.img}
                    alt={product.name}
                    className="rounded-lg"
                    width={300}
                    height={300}
                  />
                ) : (
                  <div className="bg-gray-200 rounded-lg h-full w-full">
                    img not found
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <div className="min-w-[112px]">
                  <span className="text-xs font-normal">{product.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-sm">
                    R${product.price?.toFixed(2)}
                  </span>
                  {product.discount === true ? (
                    <span className="font-bold text-xs">
                      R${product.price?.toFixed(2)}
                    </span>
                  ) : (
                    ""
                  )}
                  {/* Optional: Discounted price logic */}
                </div>
                <div className="flex items-center gap-3 text-center">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-7 w-7 border border-solid border-muted-foreground"
                    onClick={() => handleDecreaseQuantityClick(product.id)}
                  >
                    <ChevronLeftIcon />
                  </Button>
                  <span className="block w-8 text-xs">{product.quantity}</span>
                  <Button
                    className="bg-[#EA1D2C] h-7 w-7"
                    size="icon"
                    onClick={() => handleIncreaseQuantityClick(product.id)}
                  >
                    <ChevronRightIcon />
                  </Button>
                </div>
              </div>
              <div>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-7 w-7 border border-solid border-muted-foreground"
                  onClick={() => handleRemoveProductClick(product.id)}
                >
                  <TrashIcon size={16} />
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p>No products in your cart.</p>
        )}
      </div>
      <FinalizeOrder />
    </div>
  );
};

export default ShoppingCart;
