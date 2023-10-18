import { BANK_LIST, ACCOUNT_FORM } from "./account.js";

const bankSelector = document.getElementById("bank-selector");
const accountInput = document.getElementById("account-input");
const button = document.querySelector("button");
const $form = document.getElementById("account-send-form");
const accountList = document.getElementById("account-list");

$form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// BANK_LIST값에 select option주기
for (const bank in BANK_LIST) {
  const option = document.createElement("option");
  option.value = bank;
  option.text = BANK_LIST[bank];
  bankSelector.appendChild(option);
}

// 선택한 은행
bankSelector.addEventListener("change", () => {
  let selectedBank = bankSelector.value;
  let selectedAccountValue = ACCOUNT_FORM[selectedBank];
  const li = document.createElement("li");

  // ACCOUNT_FORM에서 받아온 값을(은행별 계좌구조)
  // split으로 배열로 바꿔서 인덱스번호를 사용해 앞에두숫자,뒤에 두숫자, "-"를 빼고 다 "*"로 변환 후 문자열로 반환
  function accountChange(form) {
    return form
      .split("")
      .map((char, index, array) => {
        if (
          index !== 0 &&
          index !== 1 &&
          index !== array.length - 1 &&
          index !== array.length - 2 &&
          char === "0"
        ) {
          return "*";
        }
        return char;
      })
      .join("");
  }

  // 제출 버튼 클릭 시
  button.addEventListener("click", () => {
    const front = accountInput.value.slice(0, 2);
    const back = accountInput.value.slice(-2);
    let AccountValue = accountChange(selectedAccountValue);

    if (BANK_LIST[selectedBank] == "리엑은행") {
      const react = AccountValue.split("");
      react[react.length - 3] = back[0];
      const reactRe = react.join("");
      li.innerText = `${BANK_LIST[selectedBank]} : ${
        front + reactRe.slice(2, -1) + back[1]
      }`;
    } else {
      li.innerText = `${BANK_LIST[selectedBank]} : ${
        front + AccountValue.slice(2, -2) + back
      }`;
    }
    accountList.append(li);
  });
});
