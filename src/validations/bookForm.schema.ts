import { genres } from "@/types/books";
import { z } from "zod";

export const BookFormSchema = z.object({
  _id: z.string().optional(),
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  genre: z.enum(genres, { required_error: "Genre is required" }),
  isbn: z.string().min(1, "ISBN is required"),
  description: z.string().optional(),
  copies: z.coerce.number().min(0, "Copies must be 0 or more"),
  available: z.boolean().optional(),
});

export type BookFormValues = z.infer<typeof BookFormSchema>;
