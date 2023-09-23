import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";

import Details from "../pages/Details/Details";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "details/:id",
        element: <Details />,
      },
    ],
  },
]);

export default router;
