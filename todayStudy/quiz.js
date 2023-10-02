/*
배열 나누기
함수 division은 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
이후, 해당 배열들을 요소로 갖는 배열을 반환한다

ex) 길이기 80인 배열은 길이가 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다
    ex) [1...80] => [[1...5], [6...10], [11...15], ... , [76...80]]

*/

const arr = Array.from({ length: 80 }, (_, index) => index + 1);
const divideSize = 5;

function division(arr, divideSize) {
  const dividedArray = [];

  for (let i = 0; i < arr.length; i += divideSize) {
    dividedArray.push(arr.slice(i, i + divideSize));
  }
  return dividedArray;
}

console.log(division(arr, divideSize));

/*
변수 위치 찾기

해당 문제는 해석하기에 따라 답변이 다를 수 있습니다.
본인이 이해한 방향으로 문제를 풀이하셔도 괜찮습니다

변수 a는 main 함수 안에서만 사용된다
변수 b는 해당 js 어디에서든 사용된다
변수 c는 메인 함수 안에서 실행되는 콜백함수 solution의 인자이다

변수 d는 solution에서 전달받은 c를 다른 형태로 바꿔주는 임의의 함수이며 solution 함수의 반환 값이다.
변수 e는 main함수의 최종 반환 값으로 향후 다른 함수에서 재사용된다.
*/

// function solution() {}

// function parse() {}

// function main() {
//   solution();
// }
