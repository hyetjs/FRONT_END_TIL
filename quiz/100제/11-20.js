// 11
let s = 0;
for (i = 1; i <= 100; i++) {
  s += i;
}
console.log(s);

// 13
let result = (int) => {
  let 행성 = [
    "수성",
    "금성",
    "지구",
    "화성",
    "목성",
    "토성",
    "천왕성",
    "해왕성",
  ];
  return console.log(행성[int]);
};
result(4);

// 14
let 삼의배수 = (num) => {
  if (num % 3 === 0) return console.log("3의배수");
  return console.log(num);
};

삼의배수(10);

// 15
let myName = (name) => {
  console.log(`안녕하세요. 저는 ${name}입니다.`);
};
myName("최혜선");

// 16
let 로꾸거 = (str) => {
  let string = str.split("");
  let rev = string.reverse();
  console.log(rev.join(""));
};
로꾸거("요아맞거된로꾸거");

// 17
let check = (height) => {
  if (height > 150) return console.log("YES");
  return console.log("NO");
};
check(170);

// 18
let average = (num) => {
  let numbers = num.split(" ");
  let sum = 0;
  numbers.forEach((el) => {
    sum += parseInt(el);
  });
  return console.log(sum / numbers.length);
};

average("30 60 80 95");

// 19
let 제곱 = (nums) => {
  let numbers = nums.split(" ");
  let 곱할값 = numbers[0];
  let 곱해지는횟수 = numbers[1];
  let result = 1;

  for (let i = 1; i <= 곱해지는횟수; i++) {
    result *= 곱할값;
  }

  console.log(result);
};

제곱("2 3");

// 20
let 몫과나머지 = (nums) => {
  let numbers = nums.split(" ");
  let 몫 = numbers[0] / numbers[1];
  let 나머지 = numbers[0] % numbers[1];
  console.log(몫, 나머지);
};
몫과나머지("10 2");
