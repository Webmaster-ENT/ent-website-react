// layout
import HomeLayout from "@/layouts/HomeLayout";
import RootLayout from "@/layouts/RootLayout";

// page
import HomePage from "@/pages/HomePage";
import RegistrationPage from "@/pages/RegistrationPage";
import SuccessPage from "@/pages/SuccessPage";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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
