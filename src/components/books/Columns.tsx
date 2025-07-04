import type { IBook } from "@/types/books";
import type { ColumnDef } from "@tanstack/react-table";
import BookActions from "./BookActions";

export const bookColumns: ColumnDef<IBook>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "author",
    header: "Author",
  },
  {
    accessorKey: "genre",
    header: "Genre",
  },
  {
    accessorKey: "isbn",
    header: "ISBN",
  },
  {
    accessorKey: "copies",
    header: "Copies",
  },
  {
    accessorKey: "available",
    header: "Available",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => <BookActions book={row.original} />,
  },
];
