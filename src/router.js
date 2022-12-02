import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <Detail />,
      },
    ],
  },
]);

export default router;
