import type { IBook } from "@/types/books";
import { Button } from "../ui/button";
import { Link } from "react-router";
import { cn } from "@/lib/utils";

interface BookCardProps {
  book: IBook;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <li className="relative bg-secondary flex flex-col gap-4 rounded-xl p-4 border shadow">
      <h6
        className={cn(
          "absolute top-4 right-4 text-[10px] text-white px-2 py-1 rounded-md tracking-wide",
          book.available ? "bg-green-700" : "bg-red-700"
        )}
      >
        {book.available ? "Available" : "Unavailable"}
      </h6>
      <img
        src={book.image}
        alt={book.title || "Book Image"}
        className={cn(
          "mx-auto object-contain",
          !book.available && "grayscale opacity-50"
        )}
      />
      <div className="flex flex-col gap-4 grow">
        <div className="grow">
          <h3 className="font-medium line-clamp-2">{book.title}</h3>
          <p className="text-sm">By {book.author}</p>
        </div>
        <Link to={`/books/${book.id}`}>
          <Button className="w-full cursor-pointer">View Details</Button>
        </Link>
      </div>
    </li>
  );
};

export default BookCard;
