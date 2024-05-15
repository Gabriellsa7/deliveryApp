import Image from "next/image";
import products from "./_lists/recommended-listing";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const RecommendedItem = () => {
  return (
    <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <Link
          href={`/pages/product-info?name=${product.name}`}
          key={product.id}
        >
          <div className="w-full space-y-3">
            <div className="relative w-full">
              <Image
                src={product.img}
                alt="Logo"
                sizes="100%"
                className="rounded-lg object-cover shadow-md min-h-[110px] min-w-[110px]"
              />
              {product.discount === true ? (
                <div className="flex items-center bg-[#EA1D2C] py-[2px] px-2 rounded-xl absolute top-2 left-2">
                  <ArrowDown size={7} color="#FFFFFF" />
                  <span className="text-xs font-bold text-white">
                    {product.discountValue}
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
            <div>
              <span className="font-normal text-sm text-nowrap text-[#323232]">
                {product.name}
              </span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base">
                  R$
                  {product.discount
                    ? (
                        product.price -
                        product.price * product.discountPercent
                      ).toFixed(2)
                    : product.price.toFixed(2)}
                </span>
                <span className="font-normal text-xs line-through text-gray-400">
                  R${product.price}
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecommendedItem;
