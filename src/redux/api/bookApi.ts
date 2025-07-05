import type { IBook, IBookInput } from "@/types/books";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface BooksResponse {
  message: string;
  success: boolean;
  data?: IBook[] | IBook;
  error?: string | object;
  meta?: { page: number; limit: number; total: number };
}

interface BookResponse {
  message: string;
  success: boolean;
  data?: IBook;
  error?: string | object;
}

interface BookQueryParams {
  filter?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
}

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://b5assignment4server.vercel.app/api",
  }),
  tagTypes: ["Book"],
  endpoints: (builder) => ({
    getBooks: builder.query<BooksResponse, BookQueryParams | void>({
      query: (params = {}) => {
        const {
          filter = "",
          sortBy = "title",
          sortOrder = "asc",
          page = 1,
          limit = 10,
        } = params || {};
        return `/books?filter=${filter}&sortBy=${sortBy}&sortOrder=${sortOrder}&page=${page}&limit=${limit}`;
      },
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

export const getTotalBooks = (response?: BooksResponse) => {
  return response?.meta?.total || 0;
};

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useAddBookMutation,
  useEditBookMutation,
  useDeleteBookMutation,
} = booksApi;
