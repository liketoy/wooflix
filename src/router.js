import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:pk",
    element: <Detail />,
  },
]);

export default router;
