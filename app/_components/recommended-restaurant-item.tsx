import Image from "next/image";
import restaurants from "./_lists/recommended-restaurant-listing";
import Link from "next/link";

const RecommendedRestaurantItem = () => {
  return (
    <div className="flex gap-4 pt-4 overflow-scroll [&::-webkit-scrollbar]:hidden">
      {restaurants.map((restaurant) => (
        <Link
          href={`/pages/restaurant-info?name=${restaurant.name}`}
          key={restaurant.id}
        >
          <div key={restaurant.id}>
            <div className="relative">
              <Image
                src={restaurant.img}
                alt="Logo"
                className="rounded-lg object-cover shadow-md min-h-[110px] min-w-[200px]"
              />
            </div>
            <div>
              <span className="font-bold text-sm text-nowrap text-[#323232]">
                {restaurant.name}
              </span>
              <div className="flex items-center gap-2">
                <span className="font-normal text-xs text-nowrap text-[#7E8392]">
                  {restaurant.shipping}
                </span>
                <span className="font-normal text-xs text-[#7E8392]">
                  {restaurant.deliveryTime}
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecommendedRestaurantItem;
