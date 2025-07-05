import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { genres, type Genre } from "@/types/books";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useAddBookMutation } from "@/redux/api/bookApi";
import {
  bookFormSchema,
  type BookFormType,
} from "@/validations/bookForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { getErrorMessage } from "@/lib/getErrorMessage";
import { useNavigate } from "react-router";

const AddBook = () => {
  const navigate = useNavigate();
  const [addBook, { isLoading }] = useAddBookMutation();
  const bookForm = useForm<BookFormType>({
    resolver: zodResolver(bookFormSchema),
    defaultValues: {
      title: "",
      author: "",
      genre: "" as unknown as Genre,
      isbn: "",
      description: "",
      copies: "" as unknown as number,
    },
  });

  const handleAddBook = async (data: BookFormType) => {
    try {
      await addBook(data).unwrap();
      toast.success("Book added successfully");
      bookForm.reset();
      navigate("/books");
    } catch (error) {
      toast.error(getErrorMessage(error, "Failed to add book"));
    }
  };

  return (
    <main>
      <section className="max-w-4xl mx-auto w-full px-4 md:px-6 lg:px-8 py-14 lg:py-28">
        <div className="border rounded-2xl p-4">
          <div className="mb-8 space-y-2">
            <h2 className="text-3xl font-bold text-center">Add a Book</h2>
            <p className="text-center max-w-xl mx-auto">
              Fill in the form below to add a new book to the library. Please
              provide all the required details like title, author, genre, ISBN
              and number of copies.
            </p>
          </div>
          <Form {...bookForm}>
            <form
              onSubmit={bookForm.handleSubmit(handleAddBook)}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4"
            >
              <FormField
                control={bookForm.control}
                name="title"
                rules={{ required: true }}
                render={({ field }) => (
                  <FormItem className="lg:col-span-2">
                    <div className="flex items-start justify-between gap-4">
                      <FormLabel>Title</FormLabel>
                      <FormMessage />
                    </div>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="e.g. The Great Gatsby"
                        {...field}
                      />
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
                      <Input
                        type="text"
                        placeholder="e.g. F. Scott Fitzgerald"
                        {...field}
                        required
                      />
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
                      <Select onValueChange={field.onChange}>
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
              <Button className="lg:col-span-2" type="submit">
                {isLoading ? "Adding Book..." : "Add Book"}
              </Button>
            </form>
          </Form>
        </div>
      </section>
    </main>
  );
};

export default AddBook;
