import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import "./App.css";

// import pages
import Home from "./pages/home/Home";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
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
