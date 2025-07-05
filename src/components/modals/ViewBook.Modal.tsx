import type { IBook } from "@/types/books";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import BorrowBookModal from "./BorrowBook.Modal";

interface ViewModalProps {
  book: IBook;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ViewBookModal = ({ book, open, setOpen }: ViewModalProps) => {
  const [borrowOpen, setBorrowOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl">Book Details</DialogTitle>
          <DialogDescription asChild>
            <div className="bg-foreground/5 text-left rounded-md p-4 mt-2">
              <div>
                <strong className="text-foreground">{book.title}</strong>
                <p>By {book.author}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 my-4">
                <div>
                  <strong className="text-foreground">Genre:</strong>
                  <p>{book.genre}</p>
                </div>
                <div>
                  <strong className="text-foreground">ISBN:</strong>
                  <p>{book.isbn}</p>
                </div>
                <div>
                  <strong className="text-foreground">Copies:</strong>
                  <p>{book.copies}</p>
                </div>
                <div>
                  <strong className="text-foreground">Available:</strong>
                  <p>{book.available ? "Yes" : "No"}</p>
                </div>
              </div>

              <div>
                <strong className="text-foreground">Description:</strong>
                <p>{book.description}</p>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose>
            <Button variant="outline" type="button" className="w-full">
              Close
            </Button>
          </DialogClose>
          <Button
            onClick={() => {
              setOpen(false);
              setBorrowOpen(true);
            }}
          >
            Borrow Book
          </Button>
        </DialogFooter>
      </DialogContent>
      <BorrowBookModal book={book} open={borrowOpen} setOpen={setBorrowOpen} />
    </Dialog>
  );
};

export default ViewBookModal;
