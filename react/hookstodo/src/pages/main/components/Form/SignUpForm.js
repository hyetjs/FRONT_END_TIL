import React from "react";
import FormInput from "../../../../components/Input";
import TDButton from "../../../../components/Button";
import { Form } from "./form.style";
import { useInputs } from "../../../../hooks/use-inputs";
import { formValidate } from "../../helper/form-helper";

const SignUpForm = ({ setSignFormState }) => {
  const [{ email, password, passwordConfirm }, onChangeForm] = useInputs({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { disabled, errors } = formValidate({
    email,
    password,
    passwordConfirm,
  });
  // const [{email:"", password: "", passwrodComfrim:""}, setValue] = useState(init)
  // return [value, onChange`]
  // value는 객체이기 때문에 구조분행 할당을 통해 해당 키의 value를 가지고 올 수 있다.

  // email, password, passwordConfirm의 input이 rerender 되어야하는 이유는?
  // 실시간으로 valid check error message render -> state

  // 모든 순간에 rerender 되어야할까?
  // invalid -> RHF(React-Hook-Form)

  console.log({ disabled, errors });

  const formArrays = [
    {
      name: "email",
      label: "이메일",
    },
    {
      name: "password",
      label: "비밀번호",
    },
    {
      name: "passwordConfirm",
      label: "비밀번호 확인",
    },
  ];

  const onClickSginUpBtn = () => {
    alert("환영합니다!");
    setSignFormState("SIGN-IN");
  };

  return (
    <Form>
      {formArrays.map(({ label, name }) => (
        <FormInput
          {...{ name }} // name={name}
          label={label}
          placeholder={name}
          containerStyle={{
            width: "100%",
          }}
          onChange={onChangeForm}
          error={errors[name]}
        />
      ))}
      <TDButton variant={"primary"} size={"full"} onClick={onClickSginUpBtn}>
        회원가입
      </TDButton>
    </Form>
  );
};
export default SignUpForm;
