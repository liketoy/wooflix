import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Main from './views/Main'
import Detail from './views/Detail'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
            path: "/",
            element: <Main />
            },
            {
                path: ":pk",
                element: <Detail />
            }
        ]
    },
])

export default router;