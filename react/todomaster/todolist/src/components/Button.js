import { css, styled } from "styled-components";

const TDButton = ({ variant, size, shape, children, ...rest }) => {
  return (
    <Button
      variant={variant}
      size={size}
      shape={shape}
      //   {...{ variant, size, shape }}
      {...rest}
    >
      {/* 해당 컴포넌트가 감싸고 있는 모든 노드를 가지고 온다. 내장 기능*/}
      {children}
    </Button>
  );
};
export default TDButton;

// <TDButton variant={"primary"} />;
const variantCSS = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text.white};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
  `,
  "primary-text": css`
    background: none;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  `,
};

const sizeCSS = {
  small: css``,
  medium: css``,
  full: css`
    width: 100%;
    aspect-ratio: 8 / 1; // 종횡비 가로 8 세로 1
  `,
};
// variantCSS['primary']

const shapeCSS = {
  default: css``,
  shape: css`
    border-radius: 8px;
  `,
  round: css`
    border-radius: 50%;
  `,
};

const Button = styled.button`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  ${({ shape }) => shapeCSS[shape]}
  cursor: pointer;
  border: none;
  &:hover {
    opacity: 0.7;
    scale: calc(1.3);
  }
`;
