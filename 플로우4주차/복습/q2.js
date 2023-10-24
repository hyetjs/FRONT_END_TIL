const users = [
  {
    id: 1,
    name: "김성용",
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
];

// 추가 기능
// 랜덤으로 넣고 싶었는데 랜덤으로 넣고 고정되는게 아니라 계속 랜덤으로 들어가서
// 수정 삭제할때 아이디가 뭔지 알수없어 실패!
let userId = users[users.length - 1].id;

const addUser = (userName, userAge, userHeight) => {
  users.push({
    // id: Math.floor(Math.random() * 100),
    id: ++userId,
    name: userName,
    age: userAge,
    height: userHeight,
  });
  console.log(`${userName} 사용자 추가완료! 아이디는 ${userId} 입니다`);
};

addUser("김애용", 2, 24);
addUser("김옥지", 24, 180);

// 삭제 기능
const deleteUser = (userId, userName) => {
  const index = users.findIndex(
    (user) => user.id === userId && user.name === userName
  );

  if (index !== -1) {
    users.splice(index, 1);
    console.log(`${userName} 사용자를 삭제했습니다. (아이디: ${userId} )`);
  } else {
    console.log(`${userName}님과 아이디(${userId})가 일치하지 않습니다`);
  }
};

deleteUser(2, "이수박");
deleteUser(5, "김애용");
deleteUser(3, "김옥지");

// 수정 기능
const updateUser = (userId, userName, newData) => {
  const index = users.findIndex(
    (user) => user.id === userId && user.name === userName
  );

  if (index !== -1) {
    users[index] = { ...users[index], ...newData }; // ...연사자를 사용히면 뒤에 객체가 앞에 객체를 덮어씌운다
    console.log(`${userName} 사용자 정보 수정 완료`);
  } else {
    console.log(`${userName}님과 아이디(${userId})가 일치하지 않습니다`);
  }
};

updateUser(6, "김옥지", { name: "김빵빵", age: 25, height: 190 });
updateUser(11, "오렌지", { age: 25, height: 190 });

console.log(users);

// 키 기준 오름차순
console.log(users.sort((a, b) => a.height - b.height));

// console.log(users.sort((a, b) => a.height - b.height).reverse());

// let arr = [2, 3, 55, 1, 8, 77];
// console.log(arr.sort((a, b) => a - b));

// /*
// CRUD 구현하기
// 배열의 고차함수

// 문제1. 유저 추가하기
//   내가 추가하고자 하는 유저를 추가해야합니다
//   단 id는 고유 번호로 반드시 순서대로일 필요는 없지만, 어떠한 경우에도 겹쳐서 안됩니다

// 문제2. 유저 삭제하기
//   내가 원하는 유저를 삭제할 수 있어야합니다.
//   단, 동일한 유저의 이름이 있더라도 정확히 원하는 유저여야합니다.

// 문제3. 유저 수정하기
//   내가 수정하고자 하는 유저의 개인정보를 수정해야합니다.

// 문제4. 유저 조회하기
//   위의 모든 상황이 적용된 결과를을 콘솔창에 띄울 것
//   단 위의 수정 내용은 모두 적용된 상태여야 한다.

// 문제5. 조회한 유저를 height별 오름 차순으로 정렬하여 조회하기
// */
