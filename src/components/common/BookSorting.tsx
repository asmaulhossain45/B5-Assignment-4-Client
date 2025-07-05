import { ArrowDownNarrowWide } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "@/lib/utils";

interface BookSortingProps {
  sortBy: string;
  sortOrder: "asc" | "desc";
  setSortBy: (sortBy: string) => void;
  setSortOrder: (sortOrder: "asc" | "desc") => void;
}

const BookSorting = ({
  sortBy,
  sortOrder,
  setSortBy,
  setSortOrder,
}: BookSortingProps) => {
  return (
    <div className="flex items-center gap-2">
      <Select value={sortBy} onValueChange={(value) => setSortBy(value)}>
        <SelectTrigger className="w-full md:w-44">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select for sorting</SelectLabel>
            <SelectItem value="title">Title</SelectItem>
            <SelectItem value="author">Author</SelectItem>
            <SelectItem value="genre">Genre</SelectItem>
            <SelectItem value="isbn">ISBN</SelectItem>
            <SelectItem value="copies">Copies</SelectItem>
            <SelectItem value="available">Available</SelectItem>
            <SelectItem value="createdAt">Created Time</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <button
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        className="border p-3 lg:p-4 rounded-md"
      >
        <ArrowDownNarrowWide
          size={16}
          className={cn(
            "transition-all duration-300",
            sortOrder === "asc" ? "rotate-180" : "rotate-0"
          )}
        />
      </button>
    </div>
  );
};

export default BookSorting;
