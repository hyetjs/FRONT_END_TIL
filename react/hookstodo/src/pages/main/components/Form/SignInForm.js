import React from "react";
// import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "./form.style";
import FormInput from "../../../../components/Input";
import TDButton from "../../../../components/Button";

const SignInForm = () => {
  // const emailInput = useRef();
  const navigate = useNavigate();

  const formArrays = [
    {
      name: "email",
      label: "이메일",
    },
    {
      name: "password",
      label: "비밀번호",
    },
  ];

  const onClickSginInBtn = (e) => {
    e.preventDefault();

    //4 -> forwarRef
    // console.log(emailInput.current.value)

    //8 -> onSubmit
    const { email, password } = e.target;
    console.log(email, password);

    // 1
    // input의 value를 가지고 올 것
    // ref def.current.value
    // onSubmit name property

    // 2
    // 실시간 유효성 검사를 진행해야할 때
    // custom hook hook 함수를 사용하여 만든 모듈 (재사용성)
    // RHF(React-hook-form)

    if (email.value === "test@test.com" && password.value === "test") {
      // ...login
      return navigate("/todo/3");
    }
    alert("이메일 또는 비밀번호를 확인해주세요");
    password.value = "";

    // 10
    // useCase를 생각하자
    // #1 요청중일때는 disabled 시키기
    // #2 유효성 검사를 어겼을 때 disabled 시키거나 alert로 알려주기
    // 불필요한 요청을 줄이기 위함 -> 백엔드에 요청 자체를 안하는 것

    // #3 어떠한 메세지를 보여줄 것인가
    // 프론트에서 사용자가 입력한 이메일이 틀렸는지 암호가 틀렸는지는 확인이 불가
    // 백엔드 -> 실패, 이메일이 양식이 올바르지 않습니다. 존재하지 않는 이메일입니다. 비밀번호를 다시 확인해주세요

    // #4 해당 사용자의 인증
    // todolist -> data 저장 -> 누가 저장했는데? 그걸 백엔드가 어떻게 알아?

    // 백엔드에서 특정한 암호 값(세션id)을 통해 인증
    // 백엔드 서버는 회사 소유 -> 돈 들어요

    // 인증토큰에 사용자의 고유한 id값을 암호화하여 담아서 전송
    // 프론트엔드는 해당 인증토큰은 매번 백엔드 요청할 때마다 실어서 전송
    // 사용자한테 비용을 부담
  };

  return (
    /* 9
    clickEvent가 아닌 formEvent로 동작할 수 있도록 onSubmit event 등록
    */

    <Form onSubmit={onClickSginInBtn}>
      {/*5*/}
      {/* <FormInput
      label={"email"}
      placeholder={"email"}
      containerStyle={{
        width: "100%",
      }}
      ref={emailInput}
      /> */}

      {/*3*/}
      {formArrays.map(({ label, name }) => (
        <FormInput
          name={name}
          label={label}
          placeholder={name}
          containerStyle={{
            width: "100%",
          }}
          // 3
        />
      ))}
      <TDButton variant={"primary"} size={"full"}>
        로그인
      </TDButton>
    </Form>
  );
};
export default SignInForm;
