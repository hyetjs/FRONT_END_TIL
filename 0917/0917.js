// 84-93 참고
// const generatedMockPosts = require('./module')
// exports된 모듈을 require(import - 참조) 하는 것 변수명은 마음대로
// 모듈 -> 파일이 다른 함수, 변수, ...etc

// reduce
//     줄이다, 누적
//     현재요소와 다음요소의 연산된 누적값을 반환
const numArr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const reduceResult = numArr.reduce((sum, n) => {
  console.log(sum, n);
  return sum + n;
});
console.log(reduceResult);
// reduce ((누적값,현재요소)=>{})
// sum의 기본값은 첫번째 요소인 1이며,n의 기본값은 다음요소인 2부터 시작
// sum에도 기본값을 줄 수 있음 sum에 기본값이 들어가면 n은 첫번째 요소인 1부터 시작

const menus = [
  { title: "상품 목록", isToggle: false },
  { title: "상품 목록", isToggle: true },
  { title: "상품 목록", isToggle: false },
];
// every
// 모든 요소가 조건을 만족하는지 t/f 반환
const everyToggledMenus = menus.every((menu) => menu.isToggled);
console.log(everyToggledMenus); // false

// some
// 어느 한 요소라도 조건을 만족하는지 t/f 반환 --> 모두 만족하고 있지 않은지도 검사할 수 있음
const someToggledMenus = menus.some((menu) => menu.isToggle);
console.log(someToggledMenus); // true

// sort
// 원본 배열의 요소 크기대로 정렬
const sortArr = [5, 3, 1, 2, 4];
sortArr.sort();
console.log(sortArr);
// 유니코드로 계산 - 전 세계의 모든 문자와 숫자에 대해 코드로 기준하는 일종의 국제 표준
// => 다른 코드로 계산되는구나 그래서 결과값이 다르구나 -> 그럼 어떻게?
const sortArr2 = [1, 2, 3, 10, 7, 8, 9];
sortArr2.sort((a, b) => a - b);
console.log(sortArr2);

// 배열의 생성
// Array. from(객체,()=>{ })
// 유사 배열 객체를 배열화
// * 유사 배열 객체
// -> 키 값이 인덱스이고 length 속성을 갖고 있는 배열

// 배열인지 아닌지 검사
console.log(Array.isArray([1, 2, 3]));

//length만으로 배열인지 아닌지 확인이 불가
//배열이 아닌 경우는 length가 없기 때문입니다
if (Array.isArray("a")) {
} else {
}
const obj = {
  0: "a",
  1: "b",
  length: 2,
};
const arr = Array.from(obj);
console.log(arr); // [a,b]

const arr2 = Array.from({ length: 5 }); // 길이가 5인 비어있는 배열이 생성
console.log(arr2);
const arr3 = Array.from({ length: 5 }, (el, index) => {
  return 0;
});
console.log(arr3);
// 설계한 구조에서 필요한 길이만큼 생성해야하는 배열이 있을때 사용

// Array().fill()
// Array(10) -> 배열 생성
// ex) Array(10).fill(0).map(()=>{
// })

// Array().fill().map()
// 함수 표현식의 {}과 객체 표현식의 {}이 겹침으로써 return 생략이 불가
// 이럴 경우 함수 표현식 부분의 {}를 ()로 바꿔주면 return 생략이 가능
// 리턴하는 값이 하나의 실행문이라면 return을 생략하는게 가독성이 좋다.
// 그러나 리턴하는 값외에 로직이 있다면 return을 생략할 수 없음
// + ealry return에서도 return은 탈출문이기 때문에 생략하면 안됨, {}는 생략 가능

const generatedMockPosts = (n) =>
  Array(n)
    .fill()
    .map((_, i) => ({
      id: i + 1,
      title: `title-${i + 1}`,
      content: `content-${i + 1}`,
      isLiked: false,
    }));
console.log(generatedMockPosts(10));
// 이터러블(순회가능 한) 오브젝트
//     객체의 값 중에 Symbol.iterator(반복자) -> next, previous의 명령어
//     가 있는 객체를 이터러블 오브젝트
//     일반 객체는 이터러블하지 않기 때문에 순회가 불가능

// 모듈화 (module.js 참고)
// 모듈 -> 한가지 이상의 기능을 하고 있는 코드 집단
//     * 재사용성 , 유지보수
//     파일 단위로 분리하여, 파일에서 다른 파일로 함수나 객체등을 가지고 오는 것
//     모듈화가 가능하기 때문에 컴포넌트라고 하는 모듈로 이루어진 컴포넌트 기반의 프레임워크인
//     react, vue, next, svelt, quiwck, astro 등이 현재 가장 유명한 프론트엔드 프레임워크로
//     존재할 수 있음

// for (index의 조정지 가능, 요소와 인덱스를 모두 가지고 올 수 있음, 순서 보장)
// -> 내가 필요한 요소만 반복 , 인덱스 값이 필요할 때(순서 보장)
const forArr = [0, 1, 2, 3];
for (let i = 0; i < forArr.length; i += 2) {
  console.log(forArr[i]);
}
// 0, 1, 2, 3
// -,n
// 이터러블하지 않은 상황일 때도 사용이 가능

// forEach (모든 요소의 순회, 요소와 인덱스를 모두 가지고 올 수 있음, 순서 보장, 배열)
// -> 모든 요소를 순회해야하며, 인덱스 값이 필요할 때(순서 보장)
forArr.forEach((el, index, origin) => {
  console.log((el, index, origin));
  // bacend data fetching
});
// 순서 보장 , 모든 요소를 순회, index를 사용할 수 있음

// for ...in (이터러블 하지 않은 객체를 순회, 객체의 key값은 가져올수 있다)
// -> 객체를 순회해야할 때
const hyesun = {
  age: 20,
  height: 190,
};

for (let key in hyesun) {
  console.log(key);
  console.log(hyesun[key]);
}
// age 20, height 190
// 객체를 반복, 순서가 보장되지는 않습니다.
Object.keys(hyesun); // [age, height]
Object.values(hyesun); // [20, 190]
Object.entries(hyesun); // / [age, 20], [hieght, 190 ]
for (let [key, value] of Object.entries(hyesun)) {
  console.log(key, value);
}

// for ...of (모든 요소를 순회, 요소의 값만을 가지고 올 수 있다)
// -> 모든 요소를 순회만 하면 될때 , 순서를 보장하지 않는다
for (let el of forArr) {
  console.log(el);
}
// 순서 보장x, 모든 요소를 순회, 요소의 값만 가지고 올 수 있음
// 배열의 모든 요소의 값만 필요할 때
