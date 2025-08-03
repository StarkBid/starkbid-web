import { ChevronLeft, ListFilter, Search, ArrowUpDown } from "lucide-react";
import React from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

interface NftFilterBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  sortOption: string;
  setSortOption: (value: string) => void;
  isFiltersOpen: boolean;
  setIsFiltersOpen: (value: boolean) => void;
}

const NftFilterBar = ({
  searchTerm,
  setSearchTerm,
  sortOption,
  setSortOption,
  isFiltersOpen,
  setIsFiltersOpen,
}: NftFilterBarProps) => {
  return (
    <div className="pb-6">
      <div className="flex flex-row gap-3 lg:gap-4 items-center lg:justify-between">
        <div className="relative flex-1 lg:flex-none lg:max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search by NFTs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#1C1D1F] border border-[#2D2E32] rounded-lg pl-8 pr-4 py-3 text-white placeholder-[#8E9BAE] focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="flex items-center h-11 px-4 rounded-lg bg-[#18181B] border border-[#23232A]">
            <span className="text-[#8E9BAE] text-sm font-medium mr-2 hidden lg:inline">
              Price:
            </span>
            <Select
              defaultValue="price_low"
              value={sortOption}
              onValueChange={setSortOption}
            >
              <SelectTrigger className="w-auto lg:w-28 bg-transparent border-none shadow-none px-0 h-11 text-white text-sm font-medium flex items-center focus:ring-0 focus:outline-none [&>svg]:hidden lg:[&>svg]:block">
                <div className="hidden lg:block">
                  <SelectValue className="text-white" />
                </div>
                <div className="lg:hidden">
                  <ArrowUpDown className="w-4 h-4 text-[#8E9BAE] lg:hidden" />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-[#18181B] border-[#23232A] text-white">
                <SelectItem value="price_low">Low to High</SelectItem>
                <SelectItem value="price_high">High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className={`h-11 px-4 rounded-lg bg-[#18181B] border border-[#23232A] flex items-center text-white text-sm font-medium gap-2 hover:bg-[#23232A] hover:text-white ${
              isFiltersOpen ? "bg-[#23232A]" : ""
            }`}
          >
            {isFiltersOpen ? (
              <ChevronLeft className="w-4 h-4" />
            ) : (
              <ListFilter className="w-4 h-4" />
            )}
            <span className="hidden lg:block">Filters</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NftFilterBar;
