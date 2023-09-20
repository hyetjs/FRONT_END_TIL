function solution(n, k) {
  let count = Math.floor(n / 10);
  let 양꼬치 = n * 12000;
  let 음료수 = (k - count) * 2000;
  let answer = 양꼬치 + 음료수;

  return answer;
}
console.log(solution(64, 6));

function letter(message) {
  let msg = message.split("");
  answer = msg.length * 2;
  return console.log(answer);
}
letter("happy birthday!");

function cafe(money) {
  let americano = 5500;
  let cup = Math.floor(money / americano);
  let change = money - americano * cup;
  answer = [cup, change];
  return answer;
}
console.log(cafe(5500));
