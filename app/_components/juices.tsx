import { ArrowDown } from "lucide-react";
import juices from "../pages/product-info/_components/mocks/juices-list";
import Image from "next/image";

const Juices = () => {
  return (
    <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden my-3 mx-6">
      {juices.map((juice) => (
        <div key={juice.name} className="w-full space-y-2">
          <div className="relative w-full">
            <Image
              src={juice.img}
              alt="Logo"
              sizes="100%"
              className="rounded-lg object-cover shadow-md min-h-[140px] min-w-[140px]"
            />
            {juice.discount === true ? (
              <div className="flex items-center bg-[#EA1D2C] py-[2px] px-2 rounded-xl absolute top-2 left-2">
                <ArrowDown size={7} color="#FFFFFF" />
                <span className="text-xs font-bold text-white">
                  {juice.discountPercent * 100}%
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            <h2>{juice.name}</h2>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base">
                R$
                {juice.discount
                  ? (juice.price - juice.price * juice.discountPercent).toFixed(
                      2
                    )
                  : juice.price.toFixed(2)}
              </span>
              <span className="font-normal text-xs line-through text-gray-400">
                R${juice.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Juices;
