const users = [
  {
    id: 1,
    name: "김사과",
    age: 20,
    height: 190,
  },
  {
    id: 2,
    name: "이수박",
    age: 32,
    height: 185,
  },
  {
    id: 3,
    name: "오렌지",
    age: 20,
    height: 180,
  },
  {
    id: 4,
    name: "이멜론",
    age: 28,
    height: 175,
  },
  {
    id: 5,
    name: "오멜론",
    age: 28,
    height: 175,
  },
  {
    id: 6,
    name: "육멜론",
    age: 28,
    height: 175,
  },
  {
    id: 7,
    name: "칠멜론",
    age: 28,
    height: 175,
  },
  {
    id: 8,
    name: "팔멜론",
    age: 28,
    height: 175,
  },
];

const $info = document.querySelector("#info");
const buttons = document.querySelectorAll("button");
let userIndex = 0;

function user(index) {
  $info.innerHTML = `
      <div>${users[index].name}</div>
      <div>${users[index].age}</div>
      <div>${users[index].height}</div>
    `;
}
user(userIndex);

// next버튼
buttons[1].addEventListener("click", () => {
  if (userIndex === users.length - 1) {
    userIndex = 0;
  } else {
    userIndex++;
  }
  user(userIndex);
});

// prev버튼
buttons[0].addEventListener("click", () => {
  if (userIndex === 0) {
    userIndex = users.length - 1;
  } else {
    userIndex--;
  }
  user(userIndex);
});

/*
유저 목록 순서대로 보여주기
다음 버튼을 누르면 다음 유저가 보여져야합니다. 단, 마지막 유저일 시 다음은 다시 첫번째 유저가 되어야합니다.
이전 버튼을 누르면 이전 유저가 보여져야합니다. 단, 첫번째 유저일 시 이전은 마지막 유저가 되어야합니다.

또한 DOM API와 배열을 다뤄야할 때 인덱스가 필요한 시점이나 상황이 언제일지 고민해보세요 :)
*/
