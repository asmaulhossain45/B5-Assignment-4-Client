import { ArrowLeft, ArrowRight } from "lucide-react";

interface BookPaginationProps {
  limit: number;
  totalBooks: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const BookPagination = ({
  limit,
  totalBooks: totalBooks,
  currentPage: currentPage,
  setCurrentPage: setCurrentPage,
}: BookPaginationProps) => {
  const totalPages = Math.ceil(totalBooks / limit);
  return (
    <div className="flex items-center justify-between gap-4">
      <p>
        Page {currentPage} of {totalPages}
      </p>

      <div className="flex items-center gap-2 lg:gap-4">
        <button
          disabled={currentPage <= 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="bg-primary/5 hover:bg-primary/10 border rounded-full p-3 lg:p-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowLeft size={16} />
        </button>
        <button
          disabled={currentPage >= totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="bg-primary/5 hover:bg-primary/10 border rounded-full p-3 lg:p-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default BookPagination;
