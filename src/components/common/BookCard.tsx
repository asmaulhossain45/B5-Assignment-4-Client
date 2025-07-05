import type { IBook } from "@/types/books";
import BookActions from "../table/BookActions";
import { cn } from "@/lib/utils";

const BookCard = ({ book }: { book: IBook }) => {
  const { title, author, genre, isbn, copies, available } = book;
  return (
    <div
      className={cn(
        "bg-secondary/20 border text-left rounded-md p-4 space-y-4",
        !available && "border-destructive/20"
      )}
    >
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
      <div className="flex items-center justify-center">
        <BookActions book={book} />
      </div>
    </div>
  );
};

export default BookCard;
