import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Detail from "./routes/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:pk",
    element: <Detail />,
  },
]);

export default router;
