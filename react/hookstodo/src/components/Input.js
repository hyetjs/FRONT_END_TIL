import { styled } from "styled-components";
import { flexCenter } from "../styles/common";
import { forwardRef } from "react";

const FormInput = forwardRef(
  ({ label, containerStyle, error, ...inputProps }, ref) => {
    // 함수의 인자에 ...이 들어가면, 나머지 모든 매개변수(props)를 뜻함
    // 나머지 매개 변수를 쓴 이유는, 수 많은 input의 속성을 모두 명시할 수 없으므로 축약

    // 6
    // component화 시킨 요소에 ref를 부여할 때 forwardRef
    // ref는 html의 접근을 위해 사용할 수 있는 특수한 속성으로
    // 일반적인 방법으로는 props로 전달할 수 없습니다
    // const FormInput = forwardRef((props,ref))
    // const FormInput = forwardRef(({ label, containerStyle, ...inputProps },ref)) = > {
    //})

    // 기존의 컴포넌트에 forwardRef()를 감싸는 것
    // 매개변수 뒤에 ref 작성
    return (
      <>
        <Wrapper style={containerStyle}>
          <Label>{label}</Label>
          {/* 7 ref 속성전달 */}
          <Input {...inputProps} ref={ref} />
        </Wrapper>
        <p
          style={{
            color: "red",
            fontSize: 10,
            visibility: error ? "visible" : "hidden",
          }}
        >
          {error}
        </p>
      </>
    );
  }
);
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
