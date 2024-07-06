import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface GeneralFoods {
  id: number;
  name: string;
  img: StaticImageData;
  price: number;
  discount: boolean;
  discountPercent: number;
  discountValue: string;
}

interface Props {
  filteredRecipes: GeneralFoods[];
}

const FilteredSearch = ({ filteredRecipes }: Props) => {
  return (
    <div>
      {filteredRecipes &&
        filteredRecipes.map((generalFoods) => (
          <Link
            key={generalFoods.id}
            href={`/pages/recipePageInformation?name=${generalFoods.name}&img=${generalFoods.img}`}
          >
            <section
              key={generalFoods.id}
              className="flex gap-4 items-center duration-500 hover:scale-105 cursor-pointer bg-red-600 border-b-2 border-red-300"
            >
              <div>
                <Image
                  className="w-[60px] h-[60px]"
                  src={generalFoods.img}
                  alt="image of recipe"
                />
              </div>
              <div className="">
                <span className="text-white font-medium text-sm">
                  {generalFoods.name}
                </span>
              </div>
            </section>
          </Link>
        ))}
    </div>
  );
};

export default FilteredSearch;
