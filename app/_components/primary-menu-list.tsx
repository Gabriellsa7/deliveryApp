import { HeartIcon, HomeIcon, ScrollTextIcon } from "lucide-react";

const PrimaryMenuList = () => {
  return (
    <div className="flex flex-col gap-2 pt-12 px-5 w-full mb-6">
      <div className="flex items-center gap-4 bg-red-600 py-3 px-4 rounded-2xl ">
        <HomeIcon size={16} color="#FFFFFF" />
        <p className="text-white font-bold text-sm">Home</p>
      </div>
      <div className="flex items-center gap-4 py-3 px-4 rounded-2xl ">
        <ScrollTextIcon size={16} color="#323232" />
        <p className="text-[#323232] font-normal text-sm">My requests</p>
      </div>
      <div className="flex items-center gap-4 py-3 px-4 rounded-2xl ">
        <HeartIcon size={16} color="#323232" />
        <p className="text-[#323232] font-normal text-sm">
          Favorite Restaurants
        </p>
      </div>
    </div>
  );
};

export default PrimaryMenuList;
