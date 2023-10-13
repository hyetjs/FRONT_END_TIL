// 4번 문제 
const inputElement = document.getElementById("te_input");

inputElement.addEventListener("input", function (event) {
  const inputValue = event.target.value;

  // .test() 함수는 해당하는 값이 있는지 찾는다
  // /\d/ 이게 정규표현식으로 숫자를 뜻한다고함
  const number = /\d/.test(inputValue);

  if (number) {
    alert("숫자는 입력할 수 없습니다!");
    event.target.value = "";

    // const numDel = inputValue.replace(/\d/g, '');
    // event.target.value = numDel;
  }
});

// 5-6번 문제
// 필요한 요소들 가져온다
const list = document.getElementById("list");
const listData = document.getElementById("list_data");
const addBtn = document.getElementById("send");
const resetBtn = document.getElementById("reset");
const deleteBtn = document.createElement("button");
const updateBtn = document.createElement("button");
const $form = document.getElementById("form");

// Form태그의 action속성을 막기위해
$form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// button 생성
deleteBtn.innerText = "삭제";
$form.append(deleteBtn);
updateBtn.innerText = "수정";
$form.append(updateBtn);

// 리스트가 추가되거나 수정할 때 필요한 요소 만들기
function createLi(text) {
  const li = document.createElement("li");
  li.className = "liclass";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const label = document.createElement("label");
  label.innerText = text;

  li.append(checkbox, label);
  return li;
}

// 저장버튼 눌렀을 때
addBtn.addEventListener("click", () => {
  if (!listData.value.trim()) {
    return alert("내용을 입력해주세요");
  }

  // listData input으로 받은값을 넣어준다
  const newLi = createLi(listData.value);
  // 저장누르고, 지우고 다시 쓰기 귀찮아서
  listData.value = "";

  // 삭제 버튼 눌렀을 때
  deleteBtn.addEventListener("click", () => {
    if (newLi.querySelector("input[type=checkbox]").checked) {
      list.removeChild(newLi);
    }
  });

  // 수정버튼 누르면 input으로 바꿔주기 위해 생성
  let input = document.createElement("input");
  input.placeholder = newLi.innerText;
  // 처음 수정 버튼 눌렀을 때 input으로 바뀐다
  function edit() {
    if (newLi.querySelector("input[type=checkbox]").checked) {
      newLi.replaceWith(input);
      updateBtn.removeEventListener("click", edit);
      updateBtn.addEventListener("click", update);
    }
  }
  // 두번째 수정버튼 눌렀을 때 입력된 값을 넣어준다
  function update() {
    const updatedText = input.value;
    const updatedLi = createLi(updatedText);
    // console.log(updatedLi);
    input.replaceWith(updatedLi);
    //수정된 글도 삭제할 수 있게하기 위해
    deleteBtn.addEventListener("click", () => {
      if (updatedLi.querySelector("input[type=checkbox]").checked) {
        list.removeChild(updatedLi);
      }
    });
    updateBtn.removeEventListener("click", update);
    updateBtn.addEventListener("click", edit);
  }

  updateBtn.addEventListener("click", edit);
  list.append(newLi);
  //   console.log(newLi)
});

// 초기화 버튼
resetBtn.addEventListener("click", () => {
  list.innerHTML = "";
});
