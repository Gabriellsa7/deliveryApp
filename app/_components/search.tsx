import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <form className="flex gap-2">
      <Input className="bg-[#F4F4F5]" />
      <Button className="bg-[#EA1D2C]" type="submit">
        <SearchIcon />
      </Button>
    </form>
  );
};

export default Search;
