"use client";
import { Button } from "@/app/_components/ui/button";
import { Product } from "@/app/context/cart-context";
import { useEffect, useState } from "react";

const AddCartButton = ({ product }: { product: Product }) => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch initial cart state from localStorage or API (if needed)
    const fetchCart = async () => {
      const cartStr = localStorage.getItem("cart");
      if (cartStr) {
        setCart(JSON.parse(cartStr) as Product[]);
      } else {
        // Optionally fetch cart from server if not in localStorage
        const response = await fetch("/api/products-cart"); // Replace with your API endpoint
        const serverCart = await response.json();
        setCart(serverCart);
      }
    };
    fetchCart();
  }, []);

  const addToCart = async (product: Product) => {
    const { id, name, price, quantity = 1, img, discount } = product;
    const existingProduct = cart.find((item) => item.id === id);

    try {
      const response = await fetch("/api/products-cart", {
        method: existingProduct ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: id,
          name,
          price,
          quantity,
          img: JSON.stringify(img) || null,
          discount,
        }),
      });

      if (response.ok) {
        const updatedCart: Product[] = await response.json();
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      } else {
        const errorData = await response.json();
        console.error("Failed to add to cart:", errorData);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div className="flex items-center w-full justify-center mt-6 mb-3">
      <Button
        onClick={() => addToCart(product)}
        className="bg-[#EA1D2C] w-[90%]"
      >
        Add to cart
      </Button>
    </div>
  );
};

export default AddCartButton;
