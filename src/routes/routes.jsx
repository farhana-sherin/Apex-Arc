import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { MainLayout } from "../layouts/MainLayout";
import ServiceDetail from "../pages/ServiceDetail";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "services/:slug",
        element: <ServiceDetail />,
      },
      {
        path: "contact",
        element: <Contact />,
      }
    ],
  },
]);