import Image from "next/image";
import types from "./_lists/category-listing";
import Link from "next/link";

const CategoryList = () => {
  return (
    <div className="grid grid-cols-2 gap-4 ">
      {types.map(({ name, icons, id, url }) =>
        url ? (
          <Link href={url} key={id}>
            <div
              className="flex items-center justify-center gap-3 rounded-full bg-white px-4 py-3 shadow-md"
              key={id}
            >
              <Image src={icons} alt={`${name} icon`} width={40} height={40} />
              <span className="font-bold text-sm">{name}</span>
            </div>
          </Link>
        ) : (
          <div
            className="flex items-center justify-center gap-3 rounded-full bg-white px-4 py-3 shadow-md"
            key={id}
          >
            <Image src={icons} alt={`${name} icon`} width={40} height={40} />
            <span className="font-bold text-sm">{name}</span>
          </div>
        )
      )}
      <div></div>
    </div>
  );
};

export default CategoryList;
