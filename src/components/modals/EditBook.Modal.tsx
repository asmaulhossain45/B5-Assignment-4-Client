import { genres, type Genre, type IBook } from "@/types/books";
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
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  editBookFormSchema,
  type EditBookFormType,
} from "@/validations/bookForm.schema";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { getErrorMessage } from "@/lib/getErrorMessage";
import { useEditBookMutation } from "@/redux/api/bookApi";
import { useNavigate } from "react-router";

interface EditModalProps {
  book: IBook;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const EditBookModal = ({ book, open, setOpen }: EditModalProps) => {
  const navigate = useNavigate();
  const [editBook, { isLoading }] = useEditBookMutation();
  const bookForm = useForm<EditBookFormType>({
    resolver: zodResolver(editBookFormSchema),
    defaultValues: {
      _id: book?._id,
      title: book?.title || "",
      author: book?.author || "",
      genre: book?.genre || ("" as unknown as Genre),
      isbn: book?.isbn || "",
      description: book?.description || "",
      copies: book?.copies || ("" as unknown as number),
      available: book?.available,
    },
  });

  const handleBookEdit = async (book: EditBookFormType) => {
    try {
      await editBook(book).unwrap();
      toast.success(`Book updated successfully.`);
      setOpen(false);
      navigate("/books");
      bookForm.reset();
    } catch (error) {
      toast.error(getErrorMessage(error, "Failed to update book"));
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="lg:!max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl lg:text-2xl font-bold">
            Edit Book
          </DialogTitle>
          <DialogDescription>
            Update the book details below. Make sure all fields are accurate
            before saving.
          </DialogDescription>
        </DialogHeader>

        <Form {...bookForm}>
          <form
            onSubmit={bookForm.handleSubmit(handleBookEdit)}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4"
          >
            <FormField
              control={bookForm.control}
              name="title"
              render={({ field }) => (
                <FormItem className="lg:col-span-2">
                  <div className="flex items-start justify-between gap-4">
                    <FormLabel>Title</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input placeholder="e.g. The Great Gatsby" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={bookForm.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-start justify-between gap-4">
                    <FormLabel>Author</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input placeholder="e.g. F. Scott Fitzgerald" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={bookForm.control}
              name="genre"
              rules={{ required: true }}
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-start justify-between gap-4">
                    <FormLabel>Genre</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a Genre" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Select a Genre</SelectLabel>
                          {genres.map((genre, index) => (
                            <SelectItem key={index} value={genre}>
                              {genre}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={bookForm.control}
              name="isbn"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-start justify-between gap-4">
                    <FormLabel>ISBN</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input
                      placeholder="e.g. 978-3-16-148410-0"
                      {...field}
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={bookForm.control}
              name="copies"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-start justify-between gap-4">
                    <FormLabel>Copies</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="e.g. 10"
                      {...field}
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={bookForm.control}
              name="description"
              render={({ field }) => (
                <FormItem className="lg:col-span-2">
                  <div className="flex items-start justify-between gap-4">
                    <FormLabel>Description</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Textarea
                      placeholder="e.g. This book is about..."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <DialogFooter className="lg:col-span-2">
              <DialogClose asChild>
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">{isLoading ? "Saving..." : "Save"}</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditBookModal;
