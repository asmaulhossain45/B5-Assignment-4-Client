import type { IBook, IBookInput } from "@/types/books";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type ApiResponse<T> = {
  success: boolean;
  message: string;
  data?: T;
  error?: string | object;
};

type BookResponse = ApiResponse<IBook>;
type BooksResponse = ApiResponse<IBook[]>;

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  tagTypes: ["Book"],
  endpoints: (builder) => ({
    getBooks: builder.query<IBook[], void>({
      query: () => "/books",
      providesTags: ["Book"],
      transformResponse: (res: BooksResponse) => res.data ?? [],
    }),
    getBook: builder.query<IBook, string>({
      query: (id) => `/books/${id}`,
      transformResponse: (res: BookResponse) => res.data!,
    }),
    addBook: builder.mutation<IBook, IBookInput>({
      query: (book) => ({
        url: "/books",
        method: "POST",
        body: book,
      }),
      invalidatesTags: ["Book"],
    }),
    editBook: builder.mutation<IBook, IBook>({
      query: (book) => ({
        url: `/books/${book._id}`,
        method: "PUT",
        body: book,
      }),
      invalidatesTags: ["Book"],
    }),
    deleteBook: builder.mutation<IBook, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Book"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useAddBookMutation,
  useEditBookMutation,
  useDeleteBookMutation,
} = booksApi;
