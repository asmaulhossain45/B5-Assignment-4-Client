import Books from "@/pages/dashboard/Books";
import DashLayout from "@/pages/DashLayout";
import NotFound from "@/pages/NotFound";
import BookDetails from "@/pages/root/BookDetails";
import LandingPage from "@/pages/root/LandingPage";
import RootLayout from "@/pages/RootLayout";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: LandingPage },
      {
        path: "/books/:bookId",
        Component: BookDetails,
      },
    ],
  },
  {
    path: "/",
    Component: DashLayout,
    children: [{ path: "/books", Component: Books }],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;
