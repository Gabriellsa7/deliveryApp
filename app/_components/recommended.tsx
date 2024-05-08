import { ArrowDown, ChevronRightIcon } from "lucide-react";
import products from "./_lists/recommended-listing";
import Image from "next/image";

const Recommended = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-base font-bold leading-6">
          Recommended Orders
        </span>
        <div className="flex items-center hover:cursor-pointer">
          <p className="text-xs font-normal text-[#EA1D2C]">see all</p>
          <ChevronRightIcon color="#EA1D2C" size={16} />
        </div>
      </div>
      <div className="flex overflow-scroll">
        {products.map((product) => (
          <div key={product.name}>
            <div className="relative">
              <Image src={product.img} alt="Logo" width={500} height={500} />
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
              <span className="font-normal text-xs text-nowrap">
                {product.name}
              </span>
              <div>
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
    </div>
  );
};

export default Recommended;
