import Home from "@/pages/Home";
import AllBook from "@/pages/AllBook";
import RootLayout from "@/RootLayout";
import AddBook from "@/pages/AddBook";
import NotFound from "@/pages/NotFound";
import BorrowSummery from "@/pages/BorrowSummery";
import { createBrowserRouter } from "react-router";
import BookDetails from "@/pages/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "/books",
        Component: AllBook,
      },
      {
        path: "/books/:bookId",
        Component: BookDetails,
      },
      {
        path: "/add-book",
        Component: AddBook,
      },
      {
        path: "/borrow-summary",
        Component: BorrowSummery,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;
