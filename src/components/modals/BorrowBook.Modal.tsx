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
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "../ui/calendar";
import { useState } from "react";
import {
  borrowFormSchema,
  type BorrowFormType,
} from "@/validations/borrowForm.schema";

interface ViewModalProps {
  book: IBook;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const BorrowBookModal = ({ book, open, setOpen }: ViewModalProps) => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const borrowForm = useForm<BorrowFormType>({
    resolver: zodResolver(borrowFormSchema(book.copies)),
    context: {
      copies: book.copies,
    },
    defaultValues: {
      book: book._id,
      quantity: "" as unknown as number,
      dueDate: "" as unknown as Date,
    },
  });
  const handleBorrow = (data: BorrowFormType) => {
    console.log(data);
    toast.success(`${book.title} Book borrowed successfully.`);
    setOpen(false);
    borrowForm.reset();
  };

  if (book.copies === 0 || !book.available) {
    return toast.error(`${book.title} Book is not available.`);
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Borrow Book</DialogTitle>
          <DialogDescription className="text-center max-w-72 mx-auto">
            Please confirm the quantity and return date to proceed with
            borrowing this book.
          </DialogDescription>
        </DialogHeader>

        <Form {...borrowForm}>
          <form
            onSubmit={borrowForm.handleSubmit(handleBorrow)}
            className="space-y-4"
          >
            <FormField
              control={borrowForm.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-start justify-between gap-4">
                    <FormLabel>Quantity</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder={`Min 1 and Max ${book.copies}`}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={borrowForm.control}
              name="dueDate"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-start justify-between gap-4">
                    <FormLabel>Return Date</FormLabel>
                    <FormMessage />
                  </div>
                  <Popover open={openCalendar} onOpenChange={setOpenCalendar}>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a return date</span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent align="center">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => {
                          field.onChange(date);
                          setOpenCalendar(false);
                        }}
                        disabled={(date) => date < new Date()}
                        captionLayout="dropdown"
                      ></Calendar>
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">Confirm</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BorrowBookModal;
