import japaneseFoods from "@/app/_components/_lists/japanese-listing";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const JapaneseFood = () => {
  return (
    <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden mt-3 mx-6">
      {japaneseFoods.map((japanese) => (
        <Link
          href={`/pages/product-info?name=${japanese.name}`}
          key={japanese.id}
        >
          <div className="w-full space-y-3">
            <div className="relative w-full">
              <Image
                src={japanese.img}
                alt="Logo"
                sizes="100%"
                className="rounded-lg object-cover shadow-md min-h-[140px] min-w-[140px]"
              />
              {japanese.discount === true ? (
                <div className="flex items-center bg-[#EA1D2C] py-[2px] px-2 rounded-xl absolute top-2 left-2">
                  <ArrowDown size={7} color="#FFFFFF" />
                  <span className="text-xs font-bold text-white">
                    {japanese.discountValue}
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
            <div>
              <span className="font-normal text-sm text-nowrap text-[#323232]">
                {japanese.name}
              </span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base">
                  R$
                  {japanese.discountPercent && japanese.discount
                    ? (
                        japanese.price -
                        japanese.price * japanese.discountPercent
                      ).toFixed(2)
                    : japanese.price.toFixed(2)}
                </span>
                <span className="font-normal text-xs line-through text-gray-400">
                  R${japanese.price}
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default JapaneseFood;
