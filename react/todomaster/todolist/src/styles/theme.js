// 디자인 토큰 (시각적 디자인 원자)
// 디자이너가 정의한 디자인과 관련된 일련의 값들을 토큰화 시켜서 변수로 관리하는 것

const colors = {
  primary: "#00C7AE",
  secondary: "#EBF1F4",
  black: "#000000",
  white: "#ffffff",
  text: {
    white: "#FFFFFF",
    black: "#333333",
  },
  gray: {
    100: "#E9E9E9",
    200: "#D9D9D9",
    300: "#656565",
  },
};

const fontSzie = {
  small: "14px",
  meduim: "18px",
  large: "20px",
};

const fontWeight = {
  thin: 300,
  regular: 500,
  bold: 800,
};

// line-height, letter-spacing....
// 객체에서 키와 값이 같으면 축약할 수 있다
const theme = {
  colors: colors,
  fontSzie,
  fontWeight,
};
export default theme;
