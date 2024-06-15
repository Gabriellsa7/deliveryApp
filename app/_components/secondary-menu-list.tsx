import {
  CupSodaIcon,
  FishIcon,
  GrapeIcon,
  IceCreamConeIcon,
  PizzaIcon,
  SandwichIcon,
  UtensilsIcon,
} from "lucide-react";

const SecondaryMenuList = () => {
  return (
    <div className="flex flex-col gap-2 px-5 w-full mb-6">
      <div className="flex items-center gap-4 py-3 px-4 rounded-2xl ">
        <UtensilsIcon size={16} color="#323232" />
        <p className="text-[#323232] font-normal text-sm">Dish</p>
      </div>
      <div className="flex items-center gap-4 py-3 px-4 rounded-2xl ">
        <SandwichIcon size={16} color="#323232" />
        <p className="text-[#323232] font-normal text-sm">Lunches</p>
      </div>
      <div className="flex items-center gap-4 py-3 px-4 rounded-2xl ">
        <GrapeIcon size={16} color="#323232" />
        <p className="text-[#323232]  font-normal text-sm">Juice</p>
      </div>
      <div className="flex items-center gap-4 py-3 px-4 rounded-2xl ">
        <PizzaIcon size={16} color="#323232" />
        <p className="text-[#323232]  font-normal text-sm">Pizza</p>
      </div>
      <div className="flex items-center gap-4 py-3 px-4 rounded-2xl ">
        <FishIcon size={16} color="#323232" />
        <p className="text-[#323232]  font-normal text-sm">Japanese</p>
      </div>
      <div className="flex items-center gap-4 py-3 px-4 rounded-2xl ">
        <CupSodaIcon size={16} color="#323232" />
        <p className="text-[#323232]  font-normal text-sm">Soda</p>
      </div>
      <div className="flex items-center gap-4 py-3 px-4 rounded-2xl ">
        <IceCreamConeIcon size={16} color="#323232" />
        <p className="text-[#323232]  font-normal text-sm">Dessert</p>
      </div>
    </div>
  );
};

export default SecondaryMenuList;
