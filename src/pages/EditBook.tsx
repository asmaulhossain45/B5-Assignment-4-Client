import { z } from "zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { BookFormSchema } from "@/validations/bookForm.schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { genres } from "@/types/books";
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

const EditBook = () => {
  const form = useForm<z.infer<typeof BookFormSchema>>({
    resolver: zodResolver(BookFormSchema),
    defaultValues: {
      title: "",
      author: "",
      genre: genres.map((genre) => genre)[0],
      isbn: "",
      description: "",
      copies: 0,
    },
  });

  const onSubmit = (data: z.infer<typeof BookFormSchema>) => {
    toast.success("Book added successfully");
    console.log(data);
  };

  return (
    <main>
      <section className="max-w-4xl mx-auto w-full px-4 md:px-6 lg:px-8 py-14 lg:py-28">
        <div className="border rounded-2xl p-4">
          <div className="mb-8 space-y-2">
            <h2 className="text-3xl font-bold text-center">Update a Book</h2>
            <p className="text-center max-w-xl mx-auto">
              Fill in the form below to add a new book to the library. Please
              provide all the required details like title, author, genre, ISBN
              and number of copies.
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4"
            >
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="lg:col-span-2">
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. The Great Gatsby" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Author</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. F. Scott Fitzgerald"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="genre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Genre</FormLabel>
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
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isbn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ISBN</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 978-3-16-148410-0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="copies"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Copies</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 10" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="lg:col-span-2">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g. This book is about..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="lg:col-span-2" type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </section>
    </main>
  );
};

export default EditBook;
