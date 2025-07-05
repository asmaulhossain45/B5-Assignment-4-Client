import { type IBorrowInput, type ISummary } from "@/types/borrow";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface BorrowResponse {
  message: string;
  success: boolean;
  data?: ISummary[];
  error?: string | object;
}

export const borrowApi = createApi({
  reducerPath: "borrow",
  baseQuery: fetchBaseQuery({ baseUrl: "https://b5assignment4server.vercel.app/api" }),
  tagTypes: ["Borrow"],
  endpoints: (builder) => ({
    getSummary: builder.query<BorrowResponse, void>({
      query: () => "/borrow",
      providesTags: ["Borrow"],
    }),
    borrowBook: builder.mutation<BorrowResponse, IBorrowInput>({
      query: (book) => ({
        url: "/borrow",
        method: "POST",
        body: book,
      }),
      invalidatesTags: ["Borrow"],
    }),
  }),
});

export const selectSummary = (response?: BorrowResponse): ISummary[] => {
  return Array.isArray(response?.data) ? response.data : [];
};

export const { useGetSummaryQuery, useBorrowBookMutation } = borrowApi;
