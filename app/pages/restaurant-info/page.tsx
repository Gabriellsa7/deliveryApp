import DeliveryInfo from "../product-info/_components/delivery-info";
import Category from "./_components/category";
import Infos from "./_components/infos";
import MoreOrders from "./_components/more-orders";
import Juices from "@/app/_components/juices";
import JapaneseFood from "./_components/japanese-food";

const RestaurantInfo = () => {
  return (
    <div>
      <Infos />
      <DeliveryInfo />
      <Category />
      <div className="flex  mt-6 mx-6 ">
        <h1 className="font-bold text-base">More Orders</h1>
      </div>
      <MoreOrders />
      <div className="flex  mt-6 mx-6 ">
        <h1 className="font-bold text-base">Japanese food</h1>
      </div>
      <JapaneseFood />
      <div className="flex  mt-6 mx-6 ">
        <h1 className="font-bold text-base">Juices</h1>
      </div>
      <Juices />
    </div>
  );
};

export default RestaurantInfo;
