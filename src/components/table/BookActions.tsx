import { useAppDispatch } from "@/redux/hooks";
import type { IBook } from "@/types/books";
import { BookOpenCheck, Eye, SquarePen, Trash2 } from "lucide-react";
import { openModal } from "@/redux/slices/modalSlice"; // ✅ import the correct action

const BookActions = ({ book }: { book: IBook }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center gap-2">
      <button
        className="flex flex-col items-center gap-1 bg-foreground/5 hover:bg-foreground/10 p-2 rounded-md cursor-pointer"
        onClick={() => dispatch(openModal({ type: "view", book }))}
      >
        <Eye size={16} />
        <span className="text-xs">View</span>
      </button>

      <button
        className="flex flex-col items-center gap-1 bg-foreground/5 hover:bg-foreground/10 p-2 rounded-md cursor-pointer"
        onClick={() => dispatch(openModal({ type: "borrow", book }))}
      >
        <BookOpenCheck size={16} />
        <span className="text-xs">Borrow</span>
      </button>

      <button
        className="flex flex-col items-center gap-1 bg-foreground/5 hover:bg-foreground/10 p-2 rounded-md cursor-pointer"
        onClick={() => dispatch(openModal({ type: "edit", book }))}
      >
        <SquarePen size={16} />
        <span className="text-xs">Update</span>
      </button>

      <button
        className="flex flex-col items-center gap-1 bg-foreground/5 hover:bg-foreground/10 p-2 rounded-md cursor-pointer"
        onClick={() => dispatch(openModal({ type: "delete", book }))}
      >
        <Trash2 size={16} />
        <span className="text-xs">Delete</span>
      </button>
    </div>
  );
};

export default BookActions;
