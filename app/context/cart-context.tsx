"use client";
import { StaticImageData } from "next/image";
import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Product {
  id: number;
  name?: string;
  img?: string | StaticImageData;
  price?: number;
  quantity?: number;
}

interface CartContextType {
  cart?: Product[];
  addToCart: (product: Product) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
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
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
