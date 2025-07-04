import { genres } from "@/types/books";
import { z } from "zod";

export const bookFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  genre: z.enum(genres, { required_error: "Genre is required" }),
  isbn: z.string().min(1, "ISBN is required"),
  description: z.string().optional(),
  copies: z.coerce.number().min(0, "Copies must be 0 or more"),
});

export const editBookFormSchema = z.object({
  _id: z.string(),
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  genre: z.enum(genres, { required_error: "Genre is required" }),
  isbn: z.string().min(1, "ISBN is required"),
  description: z.string().optional(),
  copies: z.coerce.number().min(0, "Copies must be 0 or more"),
  available: z.boolean(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

export type BookFormType = z.infer<typeof bookFormSchema>;
export type EditBookFormType = z.infer<typeof editBookFormSchema>;
