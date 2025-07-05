import { z } from "zod";

export const borrowFormSchema = (copies: number) =>
  z.object({
    book: z.string(),
    quantity: z
      .number({ coerce: true })
      .min(1, "Quantity must be 1 or more")
      .max(copies, `Quantity must be less than ${copies}`),
    dueDate: z
      .date({
        coerce: true,
        errorMap: () => ({ message: "Return date is required" }),
      })
      .min(new Date(), "Return date must be in the future"),
  });

export type BorrowFormType = z.infer<ReturnType<typeof borrowFormSchema>>;
