import Books from "@/pages/dashboard/Books";
import DashLayout from "@/pages/DashLayout";
import NotFound from "@/pages/NotFound";
import LandingPage from "@/pages/root/LandingPage";
import RootLayout from "@/pages/RootLayout";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [{ path: "/", index: true, Component: LandingPage }],
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
