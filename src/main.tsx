import "./index.css";
import { Toaster } from "sonner";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import router from "./routes/routes.ts";
import { store } from "./redux/store.ts";
import { ThemeProvider } from "next-themes";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider attribute={"class"} defaultTheme="system">
        <Toaster position="top-center" richColors={true} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
