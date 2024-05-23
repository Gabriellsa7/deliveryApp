import { Button } from "@/app/_components/ui/button";

const AddCartComponent = () => {
  return (
    <div className="relative">
      <div className="flex bg-white w-full justify-between items-center py-4 px-6 fixed bottom-0 z-30">
        <div>
          <span>Total without delivery</span>
          <div className="flex items-center gap-1 ">
            <span>R$ 30,00</span>
            <span>/ 1 item</span>
          </div>
        </div>
        <div>
          <Button className="bg-[#EA1D2C]">See Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default AddCartComponent;
