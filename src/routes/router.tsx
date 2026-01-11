import { authGuard } from "@/guards/AuthGuard";
import { nonAuthGuard } from "@/guards/nonAuthGuard";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NotFound />,
  },
  {
    path: "/login",
    loader: nonAuthGuard,
    element: <Home />,
  },
  {
    path: "/home",
    loader: authGuard,
    element: <Home />,
  },
]);