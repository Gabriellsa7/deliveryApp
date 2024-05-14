import { Card } from "@/app/_components/ui/card";
import { AlarmClock, BikeIcon } from "lucide-react";

const DeliveryInfo = () => {
  return (
    <Card className="mt-6 mx-6 flex justify-around py-3">
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center gap-2">
          <span className="font-normal text-sm text-gray-400">delivery</span>
          <BikeIcon size={18} color="#9ca3af" />
        </div>
        <span className="font-bold text-base">Free</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center gap-2">
          <span className="font-normal text-sm text-gray-400">delivery</span>
          <AlarmClock size={18} color="#9ca3af" />
        </div>
        <span className="font-bold text-base">40min</span>
      </div>
    </Card>
  );
};

export default DeliveryInfo;
