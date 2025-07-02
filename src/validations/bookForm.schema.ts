import { genres } from "@/types/books";
import { z } from "zod";

export const BookFormSchema = z.object({
  title: z.string().min(2, { message: "Title must be at least 2 characters." }),

  author: z.string().min(2, { message: "Author must be at least 2 characters." }),

  image: z
    .union([
      z
        .instanceof(File)
        .refine(
          (file) => ["image/png", "image/jpeg", "image/jpg"].includes(file.type),
          "Only .jpg, .jpeg and .png files are allowed"
        ),
      z.string().url("Image must be a valid URL"),
    ])
    .optional(),

  genre: z.enum(genres, { required_error: "Genre is required" }),

  isbn: z.string().min(10).max(20, { message: "ISBN must be between 10–20 chars." }),

  description: z.string().max(1000).optional(),

  copies: z
    .number({ required_error: "Copies is required" })
    .int()
    .min(0, { message: "Copies must be 0 or more." }),
});

export type BookFormValues = z.infer<typeof BookFormSchema>;
