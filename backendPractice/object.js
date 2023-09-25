const 국가별메달 = [
  { 국가: "한국", 금메달: 0, 은메달: 0, 동메달: 0 },
  { 국가: "중국", 금메달: 0, 은메달: 0, 동메달: 0 },
  { 국가: "일본", 금메달: 0, 은메달: 0, 동메달: 0 },
  { 국가: "몽골", 금메달: 0, 은메달: 0, 동메달: 0 },
  { 국가: "카자흐스탄", 금메달: 0, 은메달: 0, 동메달: 0 },
  { 국가: "인도", 금메달: 0, 은메달: 0, 동메달: 0 },
];

const 메달리스트 = [
  { 이름: "김옥지", 국가: "한국", 금메달: 2, 은메달: 0, 동메달: 0 },
  { 이름: "김빵빵", 국가: "한국", 금메달: 1, 은메달: 0, 동메달: 1 },
  { 이름: "린자오밍", 국가: "중국", 금메달: 0, 은메달: 0, 동메달: 1 },
  { 이름: "야스오", 국가: "일본", 금메달: 0, 은메달: 1, 동메달: 0 },
  { 이름: "몽골사람", 국가: "몽골", 금메달: 1, 은메달: 0, 동메달: 0 },
];

// 메달리스트 배열에 선수가 메달을 획득한거를 국가별메달 배열에 해당 국가의 메달 수에 더한다
메달리스트.forEach((player) => {
  const medalUpdate = 국가별메달.find((el) => el.국가 === player.국가);
  if (medalUpdate) {
    medalUpdate.금메달 += player.금메달;
    medalUpdate.은메달 += player.은메달;
    medalUpdate.동메달 += player.동메달;
  }
});

const 메달별점수계산 = (medal) => {
  const ranking = [...medal];

  // 각 메달에 점수를 줘서 계산 후에 비교해서 정렬한다
  ranking.sort((a, b) => {
    const totalA = a.금메달 * 3 + a.은메달 * 2 + a.동메달;
    const totalB = b.금메달 * 3 + b.은메달 * 2 + b.동메달;

    // 같은 점수일 때 어떻게 정렬할지 :
    // localeCompare메서드는 문자열을 비교해서 사전 순서상 먼저 나오는걸 판단해서 정렬 순서를 결정한다고함
    if (totalA === totalB) {
      return a.국가.localeCompare(b.국가);
    }
    return totalB - totalA;
  });

  // 순위 계산
  let rank = 1;
  ranking[0].rank = rank;
  for (let i = 1; i < ranking.length; i++) {
    if (
      ranking[i].금메달 === ranking[i-1].금메달 &&
      ranking[i].은메달 === ranking[i-1].은메달 &&
      ranking[i].동메달 === ranking[i-1].동메달
    ) {
      ranking[i].rank = rank;
    } else {
      rank++;
      ranking[i].rank = rank;
    }
  }
  return ranking;
};

const 국가별랭킹 = (medal) => {
  const ranking = 메달별점수계산(medal);

  return ranking.map((el) => ({
    순위: el.rank + "등",
    국가: el.국가,
    금메달: el.금메달,
    은메달: el.은메달,
    동메달: el.동메달,
  }));
};

// 콘솔창에 보기 너무 안좋게 찍혀서 검색 -> JSON.stringfy메서드를 사용하면 객체가 문자열로 반환된다
// ()안에 들어가는 인수는 (문자열로 반환할 값,문자열 결과에 포함하지 않을 값,들여쓰기 할 space 수)
console.log("------------ <국가별 메달 순위> -------------");
// console.log(국가별랭킹(국가별메달));
console.log(JSON.stringify(국가별랭킹(국가별메달), null, 2));
console.log("------------ <메달리스트 정보> -------------");
// console.log(메달리스트);
console.log(JSON.stringify(메달리스트, null, 2));

// 태형님거 보고 제거랑 합쳐서 만들어 보았습니다
// 여기서 메달리스트,국가별메달 배열에 직접 작성하지 말고 내장 함수를 사용해서
// 추가, 삭제, 수정을 해보면 어떨까요??
// 그 외에 다른 연습 방법도 생각나는게 있으면 알려주세요!
