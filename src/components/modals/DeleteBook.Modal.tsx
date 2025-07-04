import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { IBook } from "@/types/books";
import { toast } from "sonner";

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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. It will permanently delete this Book.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            Yes, Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteBookModal;
