import type { ColumnDef } from "@tanstack/react-table";
import type { ISummary } from "@/types/summary";

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
  // {
  //   accessorKey: "actions",
  //   header: "Actions",
  //   cell: ({ row }) => <BookActions book={row.original} />,
  // },
];
