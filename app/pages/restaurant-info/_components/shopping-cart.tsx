"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/app/_components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { Product } from "@/app/context/cart-context";

const ShoppingCart = () => {
  const [products, setProducts] = useState<Product[]>([]);

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
  const handleIncreaseQuantityClick = async (productId: number) => {
    try {
      const updatedProduct = {
        ...products.find((product) => product.id === productId),
        quantity: Math.max(
          // products.find((product) => product.id === productId)!.quantity + 1,
          1
        ),
      }; // Safe quantity update and optional chaining

      // Update product quantity in database
      const updateResponse = await fetch(`/api/products/${productId}`, {
        // Replace with your update API endpoint
        method: "PATCH",
        body: JSON.stringify({ quantity: updatedProduct.quantity }),
      });

      if (updateResponse.ok) {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === productId
              ? { ...product, quantity: Math.max(product.quantity ? +1 : 1) } // Spread operator and update quantity
              : product
          )
        );
      } else {
        console.error(
          "Error updating product quantity:",
          await updateResponse.text()
        );
        // Handle update error (e.g., display notification to user)
      }
    } catch (error) {
      console.error("Error updating product quantity:", error);
      // Handle general error (e.g., display notification to user)
    }
  };

  const handleDecreaseQuantityClick = async (productId: number) => {
    try {
      const updatedProduct = {
        ...products.find((product) => product.id === productId),
        quantity: Math.max(
          // products.find((product) => product.id === productId)!.quantity - 1,
          0
        ),
      }; // Safe quantity update and optional chaining

      // Update product quantity in database
      const updateResponse = await fetch(`/api/products/${productId}`, {
        method: "PATCH",
        body: JSON.stringify({ quantity: updatedProduct.quantity }),
      });

      if (updateResponse.ok) {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === productId
              ? { ...product, quantity: Math.max(product.quantity ? +1 : 1) } // Spread operator and update quantity
              : product
          )
        );
      } else {
        console.error(
          "Error updating product quantity:",
          await updateResponse.text()
        );
        // Handle update error (e.g., display notification to user)
      }
    } catch (error) {
      console.error("Error updating product quantity:", error);
      // Handle general error (e.g., display notification to user)
    }
  };
  const handleRemoveProductClick = (productId: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== Number(productId))
    );
  };
  return (
    <div className="my-6 px-5 w-full min-w-[280px]">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="flex items-center gap-5 mb-5">
            <div className="relative h-20 w-20">
              {product.img && product.name && (
                <Image
                  src={product.img} // Replace with dynamic image URL
                  alt={product.name}
                  className="rounded-lg"
                  fill
                  sizes="100%"
                />
              )}
            </div>
            <div className="flex flex-col gap-1">
              <span>{product.name}</span>
              <div className="flex items-center gap-1">
                <span>R${product.price?.toFixed(2)}</span>
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
            <Button
              size="icon"
              variant="ghost"
              className="h-7 w-7 border border-solid border-muted-foreground"
              onClick={() => handleRemoveProductClick(product.id)}
            >
              <TrashIcon size={16} />
            </Button>
          </div>
        ))
      ) : (
        <p>No products in your cart.</p>
      )}
    </div>
  );
};

export default ShoppingCart;
