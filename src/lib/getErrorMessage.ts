import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export function getErrorMessage(
  error: unknown,
  fallbackMessage = "An unknown error occurred"
): string {
  if (typeof error === "object" && error !== null) {
    if ("data" in error) {
      const err = error as FetchBaseQueryError;
      const errorData = err.data as { message?: string };
      return errorData?.message || "Something went wrong";
    }

    if (error instanceof Error) {
      return error.message;
    }
  }

  return fallbackMessage;
}
