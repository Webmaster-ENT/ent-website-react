// layout
import HomeLayout from "@/layouts/HomeLayout";
import RootLayout from "@/layouts/RootLayout";
import GuidebookClosedPage from "@/pages/GuidebookClosedPage";

// page
import HomePage from "@/pages/HomePage";
import RegistrationPage from "@/pages/RegistrationPage";
import SuccessPage from "@/pages/SuccessPage";
import ErrorPage from "@/pages/ErrorPage";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "/guidebook",
            element: <GuidebookClosedPage />,
          },
          {
            path: "/registration",
            element: <RegistrationPage />,
          },
        ],
      },
      {
        path: "/success",
        element: <SuccessPage />,
      },
    ],
  },
]);

export default router;
