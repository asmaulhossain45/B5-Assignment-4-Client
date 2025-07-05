import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { IBook } from "@/types/books";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";

interface DeleteModalProps {
  book: IBook;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DeleteBookModal = ({ book, open, setOpen }: DeleteModalProps) => {
  console.log(book._id);

  const handleDelete = () => {
    toast.success(`Book deleted successfully ${book._id}`);
    setOpen(false);
  };
  return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="!max-w-xs md:!max-w-sm">
          <DialogHeader>
            <div className="flex items-center justify-center">
              <Trash2 size={44} className="text-destructive" />
            </div>
            <DialogTitle className="text-center text-xl lg:text-2xl font-bold">
              Are you sure?
            </DialogTitle>
            <DialogDescription className="text-center max-w-80 mx-auto">
              This action cannot be undone. It will permanently delete this
              Book.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="flex-row items-center !justify-center">
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>
            <Button variant="destructive" onClick={handleDelete}>
              Yes, Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
  );
};

export default DeleteBookModal;
