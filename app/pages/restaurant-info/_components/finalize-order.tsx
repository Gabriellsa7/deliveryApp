"use client";
import { Button } from "@/app/_components/ui/button";
import OrderPlaced from "./order-placed";
import { useState } from "react";

const FinalizeOrder = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleFinalizeOrder = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="mx-5 mb-8">
      <div className="mb-6">
        <div className="flex items-center justify-between p-5">
          <span className="text-xs text-[#7E8392]">Subtotal</span>
          <span className="text-xs">R$</span>
        </div>
        <div className="flex items-center justify-between p-5">
          <span className="text-xs text-[#7E8392]">Delivery</span>
          <span className="text-xs text-[#EA1D2C]">FREE</span>
        </div>
        <div className="flex items-center justify-between p-5">
          <span className="text-xs text-[#7E8392]">Discount</span>
          <span className="text-xs"> - R$</span>
        </div>
        <div className="flex items-center justify-between p-5">
          <span className="text-xs font-bold text-[#323232]">Total</span>
          <span className="text-xs font-bold text-[#323232]">R$</span>
        </div>
      </div>
      <Button className="w-full bg-[#EA1D2C]" onClick={handleFinalizeOrder}>
        <span className="font-bold text-white text-sm">Finalize Order</span>
      </Button>
      <OrderPlaced isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default FinalizeOrder;
