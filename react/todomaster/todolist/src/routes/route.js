import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/layout";
import MainPage from "../pages/main";
import Todopage from "../pages/todo";

// v6
// import를 하기 위해 해당 모듈(컴포넌트)를 export 하는 방법
// 1. export const router = createBrowserRouter([
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        // "/todo/3" --> 3 -> todoId
        path: "/todo/:todoId",
        element: <Todopage />,
      },
      {
        path: "/mypage",
        // element: <HeaderLayout/>
      },
    ],
  },
  // {
  //   path: "/mypage",
  //   // element: <HeaderLayout/>
  // },
]);

// 2. export default router(어떤 값을 내보낼 것 인지)
export default router;

// 내보내는 타입이 객체인가 값인가의 차이가 존재함

// 객체면 키 값에 의존하기 때문에 키값(변수명)을 지켜줘야함
// 값이면 어떠한 변수에도 담을 수 있기 때문에 마음대로
