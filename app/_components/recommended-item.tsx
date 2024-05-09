import Image from "next/image";
import products from "./_lists/recommended-listing";
import { ArrowDown } from "lucide-react";

const RecommendedItem = () => {
  return (
    <div className="flex gap-4 overflow-x-auto">
      {products.map((product) => (
        <div key={product.name} className="w-full space-y-3">
          <div className="relative w-full">
            <Image
              src={product.img}
              alt="Logo"
              width={200}
              height={200}
              className="rounded-lg object-cover shadow-md"
            />
            {product.discount === true ? (
              <div className="flex items-center bg-[#EA1D2C] py-[2px] px-2 rounded-xl absolute top-2 left-2">
                <ArrowDown size={7} />
                <span className="text-xs font-bold">
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
      ))}
    </div>
  );
};

export default RecommendedItem;
