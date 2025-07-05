import BookFilter from "@/components/common/BookFilter";
import BookSorting from "@/components/common/BookSorting";
import { bookColumns } from "@/components/table/BookColumns";
import { DataTable } from "@/components/table/DataTable";
import {
  getTotalBooks,
  selectBooks,
  useGetBooksQuery,
} from "@/redux/api/bookApi";
import { useState } from "react";
import Loading from "./Loading";
import BookPagination from "@/components/common/BookPagination";

const AllBook = () => {
  const limit = 10;
  const [filterGenre, setFilterGenre] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);

  // Load all Data
  const { data, isLoading } = useGetBooksQuery({
    filter: filterGenre || undefined,
    sortBy: sortBy || undefined,
    sortOrder,
    page: currentPage,
    limit,
  });
  const books = selectBooks(data);
  const totalBooks = getTotalBooks(data);

  return (
    <main>
      <section
        id="books"
        className="inner-container space-y-4 py-8 lg:py-16"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 lg:gap-4">
          <BookFilter
            filterGenre={filterGenre}
            setFilterGenre={setFilterGenre}
          />
          <BookSorting
            sortBy={sortBy}
            setSortBy={setSortBy}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />
        </div>
        {books && isLoading ? (
          <Loading />
        ) : (
          <DataTable columns={bookColumns} data={books} />
        )}
        <BookPagination
          limit={limit}
          totalBooks={totalBooks}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </section>
    </main>
  );
};

export default AllBook;
