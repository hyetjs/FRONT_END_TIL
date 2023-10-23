import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World!</div>,
  },
  {
    path: "/todo",
    element: <div>todo page</div>,
  },
]);

export default router;
