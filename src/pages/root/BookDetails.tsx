import { useParams } from "react-router";
import dummyBookImage from "@/assets/dummy-book-image.jpg";
import type { IBook } from "@/types/books";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BookDetails = () => {
  const { bookId } = useParams();
  const [quantity, setQuantity] = useState(1);
  console.log(bookId);

  const book: IBook = {
    id: "1",
    title: "The Theory of Everything The Theory of Everything",
    author: "Stephen Hawking",
    image: dummyBookImage,
    genre: "SCIENCE",
    isbn: "9780553380163",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, maiores? Esse illum odio asperiores unde eveniet hic. Sint rerum modi sunt error quam quia ut similique ipsum qui! Est doloribus sequi, molestiae ipsa qui quisquam. Provident quod sunt sit dolorem, numquam architecto eligendi! Cupiditate aliquid velit at quidem hic harum.",
    copies: 55,
    available: true,
  };
  return (
    <main>
      <section className="py-14 lg:py-28 space-y-6 lg:space-y-12">
        <div className="inner-container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 bg-foreground/5 rounded-2xl p-4 md:p-6 lg:p-8">
            <div className="relative bg-background flex items-center justify-center border rounded-md p-4">
              <h6
                className={cn(
                  "absolute top-4 left-4 text-sm text-white px-2 py-1 rounded-md",
                  book.available ? "bg-green-700" : "bg-red-700"
                )}
              >
                {book.available ? "Available" : "Unavailable"}
              </h6>
              <img
                src={book?.image}
                alt={`${book.title || "Book"} Image`}
                className=" m-auto"
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold">{book.title}</h3>
              <p>
                <strong>By</strong> {book.author}
              </p>
              <p className="capitalize">
                <strong>Genre:</strong> {book.genre}
              </p>

              <p className="line-clamp-3">
                <strong>Description:</strong> {book.description}
              </p>

              <div className="space-y-1">
                <h6>
                  <strong>Quantity:</strong>
                </h6>
                <div className="flex items-center bg-background w-fit border rounded-md py-1">
                  <button
                    className="px-4 border-r cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      if (quantity > 1) setQuantity(quantity - 1);
                    }}
                  >
                    -
                  </button>
                  <h5 className="px-4">{quantity}</h5>
                  <button
                    className="px-4 border-l cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      if (quantity < book.copies) setQuantity(quantity + 1);
                    }}
                  >
                    +
                  </button>
                </div>
                <p
                  className={cn(
                    "text-xs",
                    !book.available && "text-destructive"
                  )}
                >
                  {book.available
                    ? `Only ${book.copies} ${
                        book.copies === 1 ? "copy" : "copies"
                      } available`
                    : "Currently Unavailable"}
                </p>
              </div>

              <div className="flex gap-4">
                <Button>Borrow Book</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="inner-container">
          <p className="bg-foreground/5 rounded-2xl p-4 lg:p-8">
            <strong>Description:</strong> {book.description}
          </p>
        </div>
      </section>
    </main>
  );
};

export default BookDetails;
