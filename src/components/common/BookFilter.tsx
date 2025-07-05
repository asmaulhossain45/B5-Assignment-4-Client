import { genres } from "@/types/books";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface BookFilterProps {
  filterGenre: string;
  setFilterGenre: (value: string) => void;
}

const BookFilter = ({ filterGenre, setFilterGenre }: BookFilterProps) => {
  return (
    <div>
      <Select
        value={filterGenre}
        onValueChange={(value) => setFilterGenre(value)}
      >
        <SelectTrigger className="w-full md:w-44">
          <SelectValue placeholder="Filter by genre" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select a genre</SelectLabel>
            {genres.map((genreItem, index) => (
              <SelectItem key={index} value={genreItem}>
                {genreItem}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default BookFilter;
