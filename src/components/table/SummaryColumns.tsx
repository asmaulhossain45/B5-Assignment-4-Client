import type { ISummary } from "@/types/borrow";
import type { ColumnDef } from "@tanstack/react-table";


export const summaryColumns: ColumnDef<ISummary>[] = [
  {
    accessorKey: "book.title",
    header: "Title",
    cell: ({ row }) => row.original.book.title,
  },
  {
    accessorKey: "book.isbn",
    header: "ISBN",
    cell: ({ row }) => row.original.book.isbn,
  },
  {
    accessorKey: "totalQuantity",
    header: "Quantity",
  },
];
