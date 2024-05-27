"use client";
import { Button } from "@/app/_components/ui/button";
import { Product } from "@/app/context/cart-context";
import { useState } from "react";

const AddCartButton = ({ product }: { product: Product }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = async (product: Product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );
    let updatedCart;

    const productQuantity = product.quantity ?? 1;

    if (existingProductIndex >= 0) {
      updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity =
        (updatedCart[existingProductIndex].quantity ?? 0) + productQuantity;
    } else {
      updatedCart = [...cart, { ...product, quantity: productQuantity }];
    }

    try {
      const response = await fetch("/api/products-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        const updatedCartFromServer = await response.json();
        setCart(updatedCartFromServer);
      } else {
        console.error("Failed to add to cart");
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
