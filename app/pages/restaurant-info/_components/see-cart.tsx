"use client";
import { Button } from "@/app/_components/ui/button";
import Image from "next/image";
import { useState } from "react";
import x from "@/assets/Close.svg";
import ShoppingCart from "./shopping-cart";

const AddCartComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuHamburguer = () => {
    setIsOpen(!isOpen);
    document.body.classList.add("overflow-hidden");
  };

  const handleCloseMenu = () => {
    setIsOpen((isOpen) => !isOpen);
    document.body.classList.remove("overflow-hidden");
  };
  return (
    <div className="relative">
      {isOpen ? (
        <>
          <div
            className={
              "fixed top-0 left-0 h-screen w-[20%] bg-black opacity-50 z-50 transition-opacity"
            }
            onClick={handleCloseMenu}
          ></div>
          <div className="fixed top-0 right-0 flex flex-col h-screen w-4/5 overflow-y-auto touch-auto bg-white items-center justify-start transform transition-transform duration-300 ease-in-out translate-x-0 z-50">
            <div className="flex items-center justify-between w-full pt-6 px-5">
              <h2>Shopping Cart</h2>
              <button onClick={handleCloseMenu}>
                <Image src={x} alt="close" width={20} height={20} />
              </button>
            </div>
            <ShoppingCart />
          </div>
        </>
      ) : (
        <div className="flex bg-white w-full justify-between items-center py-4 px-6 fixed bottom-0 z-30">
          <div>
            <span>Total without delivery</span>
            <div className="flex items-center gap-1 ">
              <span>R$ 30,00</span>
              <span>/ 1 item</span>
            </div>
          </div>
          <div>
            <Button className="bg-[#EA1D2C]" onClick={handleMenuHamburguer}>
              See Cart
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCartComponent;