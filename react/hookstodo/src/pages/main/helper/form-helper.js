// form helper는

// email, password, passwordConfrim을 인자로 받습니다.
// 반환 값은 dissabled, error 객체이며
// disabled는 email의 value의 @가 포함되지 않고 passwword의길이가 8이상이 아니면
// true여야 하고 password와 passwordComfirm의 일치하지 않아도 true

// error는 email이 @가 포함되어있지 않으면 "이메일 양식을 확인해주세요"
// error.password는 길이가 8이하면 "비밀번호는 8자리 이상이어야 합니다"
// passwordConfim은 password와 일치하지 않으면 "비밀번호를 확인해주세요"
// 가 전달 되어야합니다.

// 이를 시행할 수 있는 함수를 정의해보세요

export const formValidate = ({ email, password, passwordConfirm }) => {
  let disabled =
    !email.includes("@") || password.length < 8 || password !== passwordConfirm;

  // 정규 표현식
  // 내가 정한 규칙에 따라 해당 텍스트가 규칙을 통과했는지 확인하는 표현식
  // let emailRegex = new RegExp(/@{2,}/gmi)
  // emailRegex.test(email)

  let errors = {
    email: !email.includes("@") && "이메일 양식을 확인해주세요",
    password: password.length < 8 && "비밀번호는 8자리 이상이어야합니다",
    passwordConfirm: password !== passwordConfirm && "비밀번호를 확인해주세요",
  };

  return { disabled, errors };
};
