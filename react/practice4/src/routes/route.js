import { createBrowserRouter } from "react-router-dom";
import UseState from "../pages/useState/UseState";
import UseRef from "../pages/useRef/UseRef";
import UseEffect from "../pages/useEffect/UseEffect";

const router = createBrowserRouter([
  {
    path: "",
    element: <UseState />,
  },
  {
    path: "/useref",
    element: <UseRef />,
  },
  {
    path: "/useeffect",
    element: <UseEffect />,
  },
]);
export default router;
