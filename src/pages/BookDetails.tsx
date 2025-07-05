import { useParams } from "react-router";
import { useGetBookQuery } from "@/redux/api/bookApi";
import { skipToken } from "@reduxjs/toolkit/query";
import Loading from "./Loading";
import BookActions from "@/components/table/BookActions";

const BookDetails = () => {
  const { bookId } = useParams();
  const { data, isLoading } = useGetBookQuery(bookId ?? skipToken);

  if (isLoading) return <Loading />;

  const book = data?.data;

  if (!book)
    return (
      <div className="text-xl lg:text-2xl font-bold flex items-center justify-center min-h-96">
        Book not found
      </div>
    );

  return (
    <section className="max-w-lg mx-auto w-full px-4 md:px-6 lg:px-8 py-12 lg:py-28">
      <div className="border rounded-md bg-primary/5 space-y-6 p-4">
        <div className="text-left rounded-md mt-2">
          <div>
            <strong className="text-foreground">{book.title}</strong>
            <p>By {book.author}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 my-4">
            <div>
              <strong className="text-foreground">Genre:</strong>
              <p>{book.genre}</p>
            </div>
            <div>
              <strong className="text-foreground">ISBN:</strong>
              <p>{book.isbn}</p>
            </div>
            <div>
              <strong className="text-foreground">Copies:</strong>
              <p>{book.copies}</p>
            </div>
            <div>
              <strong className="text-foreground">Available:</strong>
              <p>{book.available ? "Yes" : "No"}</p>
            </div>
          </div>

          <div>
            <strong className="text-foreground">Description:</strong>
            <p>{book.description}</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <BookActions book={book} />
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
