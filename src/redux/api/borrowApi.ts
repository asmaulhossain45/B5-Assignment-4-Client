import type { ISummary } from "@/types/summary";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface BorrowResponse {
  message: string;
  success: boolean;
  data?: ISummary[];
  error?: string | object;
}

export const borrowApi = createApi({
  reducerPath: "borrow",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["Borrow"],
  endpoints: (builder) => ({
    getSummary: builder.query<BorrowResponse, void>({
      query: () => "/borrow",
      providesTags: ["Borrow"],
    }),
  }),
});

export const selectSummary = (response?: BorrowResponse): ISummary[] => {
  return Array.isArray(response?.data) ? response.data : [];
};

export const { useGetSummaryQuery } = borrowApi;
