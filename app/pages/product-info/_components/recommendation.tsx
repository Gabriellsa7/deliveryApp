import Image from "next/image";
import juices from "./mocks/juices-list";
import { ArrowDown } from "lucide-react";

const Recommendation = () => {
  return (
    <section className="flex flex-col gap-4 px-5 pt-6 overflow-hidden">
      <h1>Juices</h1>
      <div className="flex gap-4 items-center w-[1000px] ">
        {juices.map((juice) => (
          <div
            key={juice.name}
            className="w-full space-y-2 overflow-x-auto [&::-webkit-scrollbar]:hidden"
          >
            <div className="relative">
              <Image
                width={150}
                height={150}
                src={juice.img}
                alt={juice.name}
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
              <div>
                <span>
                  {juice.discount
                    ? (
                        juice.price -
                        juice.price * juice.discountPercent
                      ).toFixed(2)
                    : ""}
                </span>
                <span>{juice.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommendation;
