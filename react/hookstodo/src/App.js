import { RouterProvider } from "react-router-dom";

import 라우터 from "./routes/route"; // export default 되어있는 값이 import 사용
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
// 기본 값으로 내보낸 값이기 때문에, 내보낼 때부터 값이 누구인지 정의, import명을 마음대로
// export default router

// import { router } from "./routes/route"; 객체로 받아온 모듈을 구조분해할당하여 사용
// 객체이기 때문에 반드시 키 값을 지켜야함 exprot const { router }

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={라우터} />
    </ThemeProvider>
  );
  /*
    v5
    <Routes>
      <Route path="/" eleent={<div>Hello, word!</div>} />
      <Route />
    </Routes>
  */
}
export default App;
