/*
변수 위치 찾기

해당 문제는 해석하기에 따라 답변이 다를 수 있습니다.
본인이 이해한 방향으로 문제를 풀이하셔도 괜찮습니다

변수 a는 main 함수 안에서만 사용된다
변수 b는 해당 js 어디에서든 사용된다
변수 c는 메인 함수 안에서 실행되는 콜백함수 solution의 인자(매개변수)이다

변수 d는 solution에서 전달받은 c를 다른 형태로 바꿔주는 임의의 함수이며 solution 함수의 반환 값이다.
변수 e는 main함수의 최종 반환 값으로 향후 다른 함수(parse)에서 재사용된다.
*/

// let b = 10;

// function main(a) {
//     return solution(a + 2);
//   }

//   function solution(c) {
//     function d() {
//       return c + b;
//     }
//     return d();
//   }

//   let e = main(3);

//   function parse(f) {
//     return e + f;
//   }

//   console.log(parse(3));

let b = 10;

function main(a) {
  let e = a + solution(7);
  function solution(c) {
    let d = (c,b) => {
        c + b
        return d();
    }
  }
  return e;
}

console.log(main(5));

// // 숫자 배열을 순회하면서 각 숫자에 대해 콜백 함수 호출
// function forEachNumber(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//       callback(arr[i]);
//     }
//   }

//   // 콜백 함수 정의
//   function processNumber(number) {
//     console.log(`숫자 ${number}를 처리합니다.`);
//   }

//   // 숫자 배열
//   const numbers = [1, 2, 3, 4, 5];

//   // forEachNumber 함수에 콜백 함수 전달하여 사용
//   forEachNumber(numbers, processNumber);

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
