import { useParams } from "react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useGetBookQuery } from "@/redux/api/bookApi";
import { skipToken } from "@reduxjs/toolkit/query";
import Loading from "./Loading";

const BookDetails = () => {
  const { bookId } = useParams();
  const { data: book, isLoading } = useGetBookQuery(bookId ?? skipToken);

  if (isLoading) return <Loading />;

  if (!book) return <div>Book not found</div>;

  return (
    <main>
      <section className="py-14 lg:py-28 space-y-6 lg:space-y-12">
        <div className="inner-container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 bg-foreground/5 rounded-2xl p-4 md:p-6 lg:p-8">
            <div className="relative bg-background flex items-center justify-center border rounded-md p-4">
              <h6
                className={cn(
                  "absolute top-4 left-4 text-sm text-white px-2 py-1 rounded-md",
                  book?.available ? "bg-green-700" : "bg-red-700"
                )}
              >
                {book?.available ? "Available" : "Unavailable"}
              </h6>
              <img
                src={book?.image}
                alt={`${book?.title || "Book"} Image`}
                className=" m-auto"
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold">{book?.title}</h3>
              <p>
                <strong>By</strong> {book?.author}
              </p>
              <p className="capitalize">
                <strong>Genre:</strong> {book?.genre}
              </p>

              <p className="line-clamp-3">
                <strong>Description:</strong> {book?.description}
              </p>

              <div className="flex gap-4">
                <Button>Borrow Book</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="inner-container">
          <p className="bg-foreground/5 rounded-2xl p-4 lg:p-8">
            <strong>Description:</strong> {book?.description}
          </p>
        </div>
      </section>
    </main>
  );
};

export default BookDetails;
