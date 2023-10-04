// 콜백(Callback) 함수는 매개변수로 함수 객체를 전달해서 "호출 함수" 내에서 "매개변수 함수를 실행하는 것"
// 매개변수에 함수를 전달해 일회용으로 사용하기 때문에 보통 콜백 함수 형태로 함수를 넘겨줄때 함수의 이름이 없는 '익명 함수' 형태로 넣어준다.
// 뜻하지 않은 개발자의 실수로 인한 함수 이름의 충돌 방지를 위한 이유도 있다.

function sayHello(name, callback) {
  const words = "안녕하세요 내 이름은 " + name + " 입니다.";

  callback(words); // 매개변수의 함수(콜백 함수) 호출
}

sayHello("혜선", function (name) {
  console.log(name); // 안녕하세요 내 이름은 혜선입니다.
});

// 여러 호출 함수에 재이용하는 경우
function introduce(lastName, firstName, callback) {
  var fullName = lastName + firstName;

  callback(fullName);
}

function say_hello(name) {
  console.log("안녕하세요 제 이름은 " + name + "입니다");
}

function say_bye(name) {
  console.log("지금까지 " + name + "이었습니다. 안녕히계세요");
}

introduce("최", "혜선", say_hello);
// 결과 -> 안녕하세요 제 이름은 홍길동입니다

introduce("최", "혜선", say_bye);
// 결과 -> 지금까지 홍길동이었습니다. 안녕히계세요

let button = document.getElementById("button"); // 버튼 요소를 선택

// 버튼에 클릭 이벤트 리스너를 추가
button.addEventListener("click", function () {
  // 콜백 함수
  console.log("Button clicked!");
});

// 고차함수 forEach메서드의 입력값으로 콜백함수를 전달
let numbers = [1, 2, 3, 4, 5]; // 배열 선언
let doubled = []; // 빈 배열 선언

// numbers 배열의 각 요소에 대해 콜백 함수 실행
numbers.forEach(function (num) {
  doubled.push(num * 2); // 콜백 함수로 각 요소를 두 배로 곱해서 doubled 배열에 추가
});

console.log(doubled); // [2, 4, 6, 8, 10]

// for...in문은 객체의 열거가능한 properties를 임의의 순서로 반복, for...of문은 iterable한 객체를 반복
const obj = {
  name: "John",
  age: 30,
  city: "New York",
};

for (let key in obj) {
  console.log(key + ": " + obj[key]);
}

const arrNum = [1, 2, 3, 4, 5];

for (let num of arrNum) {
  console.log(num);
}
