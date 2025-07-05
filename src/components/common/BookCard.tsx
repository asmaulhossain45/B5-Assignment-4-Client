import type { IBook } from "@/types/books";
import { Button } from "../ui/button";

const BookCard = ({ book }: { book: IBook }) => {
  const { title, author, genre, isbn, copies, available } = book;
  return (
    <div>
      <div className="bg-foreground/5 text-left rounded-md p-4 mt-2">
        <div>
          <strong className="text-foreground">{title}</strong>
          <p>By {author}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 my-4">
          <div>
            <strong className="text-foreground">Genre:</strong>
            <p>{genre}</p>
          </div>
          <div>
            <strong className="text-foreground">ISBN:</strong>
            <p>{isbn}</p>
          </div>
          <div>
            <strong className="text-foreground">Copies:</strong>
            <p>{copies}</p>
          </div>
          <div>
            <strong className="text-foreground">Available:</strong>
            <p>{available ? "Yes" : "No"}</p>
          </div>
        </div>
        <Button variant={"outline"} className="w-full">
          Details
        </Button>
      </div>
    </div>
  );
};

export default BookCard;
