// properties (props)
// 부모 컴포넌트에서 자식 컴포넌트로 전달된 속성 값, 컴포넌트 함수의 전달

import React from "react";
import FormInput from "../../../components/Input";
import { css, styled } from "styled-components";
import { flexCenter } from "../../../styles/common";
import TDButton from "../../../components/Button";

const SignForm = ({ isFromLogin }) => {
  // signFormState = SIGN-UP 회원가입
  // signFormState = SIGN-IN 로그인

  // 공용 컴포넌트
  // Button.js / input.js

  // 중복되는 UI는 배열로 순회하여 제거할 수 있다
  const formArrays = [
    {
      name: "email",
      label: "이메일",
      isVisible: true
    },
    {
      name: "password",
      label: "비밀번호",
      isVisible: true,
    },
    {
      name: "password-confim",
      label: "비밀번호 확인",
      isVisible: !isFromLogin
    }
  ]

  return (
    <Form>
      {formArrays.map(({label, name, isVisible}) => (
          isVisible && <FormInput
          label={label}
          placeholder={name}
          containerStyle={{
            width: "100%",
          }}
        />
      ))}
      <TDButton variant={"primary"} size={"full"}>
        회원가입
      </TDButton>
    </Form>
  );
};
export default SignForm;

const Form = styled.form`
  background-color: "#f000000";
  ${flexCenter}
  flex-direction: column;
  padding: 32px;
`;
