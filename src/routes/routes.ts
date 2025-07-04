import Home from "@/pages/Home";
import RootLayout from "@/RootLayout";
import AddBook from "@/pages/AddBook";
import BookList from "@/pages/BookList";
import NotFound from "@/pages/NotFound";
import EditBook from "@/pages/EditBook";
import BookDetails from "@/pages/BookDetails";
import BorrowSummery from "@/pages/BorrowSummery";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "/books",
        Component: BookList,
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
        path: "/edit-book/:bookId",
        Component: EditBook,
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
