import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import { getPaginationRange } from "@/lib/pagination";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CustomPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  align?: "start" | "center" | "end";
}

const CustomPagination = ({
  currentPage,
  totalPages,
  onPageChange,
  align = "end",
}: CustomPaginationProps) => {
  const pages = getPaginationRange(currentPage, totalPages);

  return (
    <Pagination>
      <PaginationContent className={cn(`w-full justify-${align}`)}>
        {/* Previous */}
        <PaginationItem className={cn(currentPage <= 1 && "hidden")}>
          <button
            className={cn(
              "h-8 w-8 lg:h-10 lg:w-10 flex items-center justify-center bg-primary-foreground hover:bg-secondary border rounded-full cursor-pointer"
            )}
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) onPageChange(currentPage - 1);
            }}
          >
            <ChevronLeft size={16} />
          </button>
        </PaginationItem>

        {/* Page Numbers & Ellipsis */}
        {pages.map((page, index) =>
          page === "..." ? (
            <PaginationItem key={index}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={index}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(Number(page));
                }}
                className={cn(
                  "h-8 w-8 lg:h-10 lg:w-10 flex items-center justify-center bg-primary-foreground hover:bg-secondary text-xs lg:text-sm border rounded-full cursor-pointer",
                  page === currentPage && "border-brand"
                )}
              >
                {page}
              </button>
            </PaginationItem>
          )
        )}

        {/* Next */}
        <PaginationItem className={cn(currentPage === totalPages && "hidden")}>
          <button
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) onPageChange(currentPage + 1);
            }}
            className={cn(
              "h-8 w-8 lg:h-10 lg:w-10 flex items-center justify-center bg-primary-foreground hover:bg-secondary text-xs border rounded-full cursor-pointer"
            )}
          >
            <ChevronRight size={16} />
          </button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
