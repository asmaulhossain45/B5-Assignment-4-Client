import type { IBook, IBookInput } from "@/types/books";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface BooksResponse {
  message: string;
  success: boolean;
  data?: IBook[] | IBook;
  error?: string | object;
}

interface BookResponse {
  message: string;
  success: boolean;
  data?: IBook;
  error?: string | object;
}

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  tagTypes: ["Book"],
  endpoints: (builder) => ({
    getBooks: builder.query<BooksResponse, void>({
      query: () => "/books",
      providesTags: ["Book"],
    }),
    getBook: builder.query<BookResponse, string>({
      query: (id) => `/books/${id}`,
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

export const selectBooks = (response?: BooksResponse): IBook[] => {
  return Array.isArray(response?.data) ? response.data : [];
};

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useAddBookMutation,
  useEditBookMutation,
  useDeleteBookMutation,
} = booksApi;
