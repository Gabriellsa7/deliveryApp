import { Card } from "@/app/_components/ui/card";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import sushidojo from "@/assets/sushidojo.svg";
import quantity from "@/assets/quantity.svg";
import divider from "@/assets/divider.svg";

const Cards = () => {
  return (
    <Card className="mx-5 flex flex-col gap-4 p-5">
      <div className="h-[22px] bg-[#5DC05B] rounded-[100px] w-2/5 flex items-center justify-center">
        <span className="font-bold text-xs text-white">on carriage</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[6px]">
          <Image src={sushidojo} alt="sushidojo" />
          <span className="font-bold text-sm text-[#323232]">Sushidojo</span>
        </div>
        <ChevronRight size={20} />
      </div>
      <Image src={divider} alt="divider" />
      <div>
        <div className="flex gap-2">
          <Image src={quantity} alt="OrderCard" />
          <span className="text-[#7E8392] font-normal text-xs">
            Classic Ramen
          </span>
        </div>
      </div>
      <Image src={divider} alt="divider" />
      <div className="flex items-center justify-between">
        <div>
          <span className="font-normal text-xs text-[#323232]">R$ 31,50</span>
        </div>
        <button className="px-3 py-1">
          <span className="text-red-400 font-bold text-xs">Add to cart</span>
        </button>
      </div>
    </Card>
  );
};

export default Cards;
