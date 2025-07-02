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
  deleteModalOpen: boolean;
  setDeleteModalOpen: (open: boolean) => void;
}

const DeleteModal = ({
  book,
  deleteModalOpen,
  setDeleteModalOpen,
}: DeleteModalProps) => {
  console.log(book.id);

  const handleDelete = () => {
    toast.success(`Book deleted successfully ${book.id}`);
    setDeleteModalOpen(false);
  };
  return (
    <Dialog open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. It will permanently delete this Book.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button variant="outline" onClick={() => setDeleteModalOpen(false)}>
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

export default DeleteModal;
