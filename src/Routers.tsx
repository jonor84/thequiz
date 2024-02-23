import { createBrowserRouter } from "react-router-dom";
import { Home } from "./components/HomePage";
import { Quiz } from "./components/Quiz";
import { NotFound } from "./components/NotFound";
import { Layout } from "./components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
    ],
  },
]);
