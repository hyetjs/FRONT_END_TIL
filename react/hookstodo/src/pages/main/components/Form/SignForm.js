import { flexCenter } from "../../../../styles/common";
import styled from "styled-components";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

// setSignFormState는 SingUpForm component에 전달하기 위한 값으로
// SingUpForm component의 상위 컴포넌트인 SignForm 컴포넌트는
// 전달을 해주기 위해서 값을 props로 전달 받아야한다

// 이러한 현상을 프롭스 드릴링 현상
// index -> signUpFrom , index -> signForm(전달하기 위해서 전달) -> signUpFrom

// 전역 상태 관리로 해소가 가능합니다.

const SignForm = ({ isSignFromLogin, setSignFormState }) => {
  const formArrays = [
    {
      name: "email",
      label: "이메일",
      isVisible: true,
    },
    {
      name: "password",
      label: "비밀번호",
      isVisible: true,
    },
    {
      name: "password-confim",
      label: "비밀번호 확인",
      isVisible: !isSignFromLogin,
    },
  ];

  return (
    <Form>
      {isSignFromLogin && <SignInForm formArrays={formArrays} />}
      {!isSignFromLogin && (
        <SignUpForm
          formArrays={formArrays}
          setSignFormState={setSignFormState}
        />
      )}
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
