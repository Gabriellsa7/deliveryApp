import { ChevronRightIcon } from "lucide-react";
import RecommendedItem from "./recommended-item";

const Recommended = () => {
  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-base font-bold leading-6">
          Recommended Orders
        </span>
        <div className="flex items-center hover:cursor-pointer">
          <p className="text-xs font-normal text-[#EA1D2C]">see all</p>
          <ChevronRightIcon color="#EA1D2C" size={16} />
        </div>
      </div>
      <RecommendedItem />
    </div>
  );
};

export default Recommended;
