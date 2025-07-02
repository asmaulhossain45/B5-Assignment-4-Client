import type { IBook } from "@/types/books";
import { Button } from "../ui/button";
import { Link } from "react-router";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Ellipsis, SquarePen, Trash2 } from "lucide-react";
import DeleteModal from "../modals/DeleteModal";
import { useState } from "react";
import EditModal from "../modals/EditModal";

interface BookCardProps {
  book: IBook;
}

const BookCard = ({ book }: BookCardProps) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  return (
    <li className="relative bg-foreground/5 flex flex-col gap-4 rounded-xl p-4 border shadow">
      <DropdownMenu>
        <DropdownMenuTrigger className="absolute top-2 right-2">
          <button className="bg-background/50 hover:bg-background border rounded-full p-2 cursor-pointer">
            <Ellipsis size={16} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="p-4">
          <DropdownMenuItem
            className="px-4 py-2"
            onClick={() => setEditModalOpen(true)}
          >
            <SquarePen /> Edit Book
          </DropdownMenuItem>
          <DropdownMenuItem
            className="px-4 py-2"
            onClick={() => setDeleteModalOpen(true)}
          >
            <Trash2 /> Delete Book
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <img
        src={book.image}
        alt={book.title || "Book Image"}
        className={cn(
          "mx-auto object-contain",
          !book.available && "grayscale opacity-50"
        )}
      />
      <div className="flex flex-col gap-4 grow">
        <div className="grow">
          <h3 className="font-medium line-clamp-2">{book.title}</h3>
          <p className="text-sm">By {book.author}</p>
        </div>
        <Link to={`/books/${book.id}`}>
          <Button className="w-full cursor-pointer">View Details</Button>
        </Link>
      </div>

      <EditModal
        book={book}
        editModalOpen={editModalOpen}
        setEditModalOpen={setEditModalOpen}
      />
      <DeleteModal
        book={book}
        deleteModalOpen={deleteModalOpen}
        setDeleteModalOpen={setDeleteModalOpen}
      />
    </li>
  );
};

export default BookCard;
