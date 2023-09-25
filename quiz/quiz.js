/*
변수 위치 찾기

해당 문제는 해석하기에 따라 답변이 다를 수 있습니다.
본인이 이해한 방향으로 문제를 풀이하셔도 괜찮습니다

변수 a는 main 함수 안에서만 사용된다
변수 b는 해당 js 어디에서든 사용된다
변수 c는 메인 함수 안에서 실행되는 콜백함수 solution의 인자이다

변수 d는 solution에서 전달받은 c를 다른 형태로 바꿔주는 임의의 함수이며 solution 함수의 반환 값이다.
변수 e는 main함수의 최종 반환 값으로 향후 다른 함수(parse)에서 재사용된다.
*/

// 콜백 함수로 만들려면 main 함수에서 solution 함수를 인자로 받고,
// main 함수 내에서 solution 함수를 호출할 때 해당 함수를 호출하는 대신 콜백 함수로 넘겨야 합니다.
// 아래는 이를 구현한 예제 코드입니다

// let b = 10;

// function main(a,sol) {
//   return solution(a + 2);
// }

// function solution(c) {
//   function d() {
//     return c + b;
//   }
//   return d();
// }

// let e = main(3);

// function parse(f) {
//   return e + f;
// }

// console.log(parse(3));

// let b = 10;

// function main(a, sol) {
//   const result = a + 2;
//   callback(result);
// }

// function solution(c) {
//   function d() {
//     return c + b;
//   }
//   return d();
// }

// console.log(main(3, solution));

// 비동기 함수 예제: 1초 후에 "작업 완료"를 출력하는 함수
// function doAsyncTask(callback) {

//     setTimeout(function() {
//       console.log("작업 완료");
//       callback(); // 콜백 함수 호출
//     }, 1000);
//   }

//   // 비동기 작업 수행
//   console.log("작업 시작");

//   doAsyncTask(function() {
//     console.log("콜백 함수 호출");
//   });

//   console.log("다음 작업");

// 숫자를 더하는 함수
function add(a, b, callback) {
  const result = a + b;
  callback(result); // 콜백 함수 호출
}

// 콜백 함수 정의
function printResult(result) {
  console.log("결과:", result);
}

// add 함수 호출
add(5, 3, printResult);
