import Image from "next/image";
import restaurants from "./_lists/recommended-restaurant-listing";

const RecommendedRestaurantItem = () => {
  return (
    <div className="flex gap-4 pt-4 overflow-scroll">
      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <div className="relative">
            <Image
              src={restaurant.img}
              alt="Logo"
              width={200}
              height={200}
              className="rounded-lg object-cover shadow-md"
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
      ))}
    </div>
  );
};

export default RecommendedRestaurantItem;
