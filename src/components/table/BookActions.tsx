import { useState } from "react";
import { Button } from "../ui/button";
import type { IBook } from "@/types/books";
import { Eye, SquarePen, Trash2 } from "lucide-react";
import DeleteBookModal from "../modals/DeleteBook.Modal";
import ViewBookModal from "../modals/ViewBook.Modal";
import EditBookModal from "../modals/EditBook.Modal";

const BookActions = ({ book }: { book: IBook }) => {
  const [viewOpen, setViewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <Button onClick={() => setViewOpen(true)} variant={"icon"} size={"icon"}>
        <Eye size={16} />
      </Button>
      <Button onClick={() => setEditOpen(true)} variant={"icon"} size={"icon"}>
        <SquarePen size={16} />
      </Button>
      <Button
        onClick={() => setDeleteOpen(true)}
        variant={"icon"}
        size={"icon"}
      >
        <Trash2 size={16} />
      </Button>

      {/* {viewOpen && <BookView book={book} setOpen={setViewOpen} />} */}
      <ViewBookModal book={book} setOpen={setViewOpen} open={viewOpen} />
      <EditBookModal book={book} setOpen={setEditOpen} open={editOpen} />
      <DeleteBookModal book={book} setOpen={setDeleteOpen} open={deleteOpen} />
    </div>
  );
};

export default BookActions;
