import { HeartIcon, HomeIcon, ScrollTextIcon } from "lucide-react";
import Link from "next/link";

const PrimaryMenuList = () => {
  return (
    <div className="flex flex-col gap-2 pt-12 px-5 w-full mb-6">
      <Link href="/">
        <div className="flex items-center gap-4 bg-red-600 py-3 px-4 rounded-2xl ">
          <HomeIcon size={16} color="#FFFFFF" />
          <p className="text-white font-bold text-sm">Home</p>
        </div>
      </Link>
      <Link href="/pages/my-requests">
        <div className="flex items-center gap-4 py-3 px-4 rounded-2xl ">
          <ScrollTextIcon size={16} color="#323232" />
          <p className="text-[#323232] font-normal text-sm">My requests</p>
        </div>
      </Link>
      <Link href="/pages/favorite-restaurants">
        <div className="flex items-center gap-4 py-3 px-4 rounded-2xl ">
          <HeartIcon size={16} color="#323232" />
          <p className="text-[#323232] font-normal text-sm">
            Favorite Restaurants
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PrimaryMenuList;
