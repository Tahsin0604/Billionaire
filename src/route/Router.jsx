import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Details from "../pages/Details/Details";
import Main from "../layout/Main";
// import getUserDetails from "../loaders/getUserDetais";

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
        // loader: getUserDetails,
      },
    ],
  },
]);

export default router;
