import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

export const SearchBar = () => {
  return (
    <>
      <Search className="absolute text-gray-500 left-2.5 top-2.5 h-5 w-5" />
      <Input
        type="search"
        placeholder={"Search..."}
        className={cn(
          "w-full rounded-full pl-9 bg-[#EEF2F6] md:w-[300px] lg:w-[336px]"
        )}
        onChange={() => {}}
      />
    </>
  );
};
