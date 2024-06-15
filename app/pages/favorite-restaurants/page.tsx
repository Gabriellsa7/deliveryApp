import restaurants from "@/app/_components/_lists/recommended-restaurant-listing";
import Header from "@/app/_components/header";
import { AlarmClock, BikeIcon } from "lucide-react";
import Image from "next/image";

const FavoriteRestaurants = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col mt-6 mx-5 gap-6">
        <h1 className="font-bold text-lg text-[#323232]">
          Favorite Restaurants
        </h1>
        <div className="flex gap-3 flex-col">
          <Image
            src={restaurants[0].img}
            alt="Favorite"
            width={350}
            className="rounded-xl max-h-[138px]"
          />
          <div>
            <span className="font-bold text-sm text-[#323232]">
              {restaurants[0].name}
            </span>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-2">
                  <BikeIcon size={12} color="#EA1D2C" />
                </div>
                <span className="font-bold text-xs text-[#7E8392]">Free</span>
              </div>
              <div className="flex  items-center gap-1">
                <div className="flex items-center gap-2">
                  <AlarmClock size={12} color="#EA1D2C" />
                </div>
                <span className="font-bold text-xs text-[#7E8392]">40min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoriteRestaurants;
