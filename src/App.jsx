import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <h1>Home Page</h1>,
        },
        {
          path: "services",
          element: <h1>Services Page</h1>,
        },
        {
          path: "guide",
          element: <h1>Guide Page</h1>,
        },
        {
          path: "about",
          element: <h1>about Page</h1>,
        },
        {
          path: "sales",
          element: <h1>sales Page</h1>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
