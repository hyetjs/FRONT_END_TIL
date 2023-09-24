const 국가별메달 = [
  { country: "한국", gold: 0, silver: 0, bronze: 0 },
  { country: "중국", gold: 0, silver: 0, bronze: 0 },
  { country: "일본", gold: 0, silver: 0, bronze: 0 },
  { country: "몽골", gold: 0, silver: 0, bronze: 0 },
  { country: "카자흐스탄", gold: 0, silver: 0, bronze: 0 },
];

const 메달리스트 = [
  { name: "김옥지", country: "한국", gold: 2, silver: 0, bronze: 0 },
  { name: "린자오밍", country: "중국", gold: 0, silver: 0, bronze: 1 },
];

const 메달별점수계산 = (medal) => {
  const ranking = [...medal];

  ranking.sort((a, b) => {
    const totalA = a.gold * 3 + a.silver * 2 + a.bronze;
    const totalB = b.gold * 3 + b.silver * 2 + b.bronze;

    // 같은 순위일 때 어떻게 정렬할지 :
    // localeCompare메서드는 문자열을 비교해서 사전 순서상 먼저 나오는걸 판단해서 정렬 순서를 결정한다고함
    if (totalA === totalB) {
      return a.country.localeCompare(b.country);
    }
    return totalB - totalA;
  });

  // 순위 계산
  let rank = 1;
  ranking[0].rank = rank;
  for (let i = 1; i < ranking.length; i++) {
    if (
      ranking[i].gold === ranking[i - 1].gold &&
      ranking[i].silver === ranking[i - 1].silver &&
      ranking[i].bronze === ranking[i - 1].bronze
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
    국가: el.country,
    금메달: el.gold,
    은메달: el.silver,
    동메달: el.bronze,
    순위: el.rank,
  }));
};

// medalList배열에 선수가 메달을 획득한거를 해당 국가의 메달 수에 업데이트한다
메달리스트.forEach((medal) => {
  const medalUpdate = 국가별메달.find((el) => el.country === medal.country);
  if (medalUpdate) {
    medalUpdate.gold += medal.gold;
    medalUpdate.silver += medal.silver;
    medalUpdate.bronze += medal.bronze;
  }
});

console.log(국가별랭킹(국가별메달));
console.log(메달리스트);
