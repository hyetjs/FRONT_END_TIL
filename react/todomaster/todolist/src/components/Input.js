import { styled } from "styled-components";
import { flexCenter } from "../styles/common";

const FormInput = ({ label, containerStyle, ...inputProps }) => {
  // 함수의 인자에 ...이 들어가면, 나머지 모든 매개변수(props)를 뜻함
  // 나머지 매개 변수를 쓴 이유는, 수 많은 input의 속성을 모두 명시할 수 없으므로 축약

  return (
    <Wrapper style={containerStyle}>
      <Label>
        {label}
      </Label>
      <Input {...inputProps} />
    </Wrapper>
  );
};
export default FormInput;

const Wrapper = styled.div`
  ${flexCenter}
  position: relative;
  margin-bottom: 16px;
`;

const Input = styled.input`
  border: 1px solid #999;
  width: 100%;
  border-radius: 4px;
  height: 48px;
  padding-left: 16px;
  &::placeholder {
    text-align: center;
  }
`;

const Label = styled.label`
  position: absolute;
  left: 16px;
  top: -6px;
  font-size: 12px;
  background-color: #ffffff;
  z-index: 100;
  padding: 0 4px;
`;
