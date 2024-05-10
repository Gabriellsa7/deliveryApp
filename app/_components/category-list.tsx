import Image from "next/image";
import types from "./_lists/category-listing";
// import dishIcons from "@/assets/_category_list_icons/dish.svg";

const CategoryList = () => {
  return (
    <div className="grid grid-cols-2 gap-4 ">
      {types.map(({ name, icons, id }) => (
        <div
          className="flex items-center justify-center gap-3 rounded-full bg-white px-4 py-3 shadow-md"
          key={id}
        >
          <Image src={icons} alt="Logo" width={40} height={40} />
          <span className="font-bold text-sm">{name}</span>
        </div>
      ))}
      <div></div>
    </div>
  );
};

export default CategoryList;
