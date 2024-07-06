"use client";
import { ChangeEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";
import FilteredSearch from "./filtered-searches";
import generalFoods from "./_lists/general-foods-list";
import products from "./_lists/recommended-listing";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearch(query);
  };

  const filteredRecipes =
    search != ""
      ? generalFoods.filter((food) =>
          food.name.toLowerCase().includes(search.toLowerCase()).valueOf()
        )
      : [];
  return (
    <main className="flex flex-col gap-1 relative">
      <form className="flex gap-2">
        <Input className="bg-[#F4F4F5]" onChange={handleSearchInput} />
        <Button className="bg-[#EA1D2C]" type="submit">
          <SearchIcon />
        </Button>
      </form>
      <div
        className={` ${
          search === "" ? "hidden" : "block"
        } border-t-[3px] border-b-[1px] border-x-[3px] border-red-300 absolute top-[80px] w-[245px] overflow-auto overflow-x-hidden bg-white rounded-md z-10 min-[320px]:top-[50px] min-[320px]:w-[300px] min-[320px]:max-h-[250px] min-[320px]: min-[768px]:top-[120px] min-[1024px]:top-[80px]`}
      >
        <FilteredSearch filteredRecipes={filteredRecipes} />
      </div>
    </main>
  );
};

export default Search;
