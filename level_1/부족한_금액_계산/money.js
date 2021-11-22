const price = 3;
const money = 20;
const count = 4;

function solution(price, money, count) {
  let total = 0;
  for (let i = 1; i <= count; i++) {
    total += price * i;
  }
  let answer = total - money;
  if (answer < 1) {
    answer = 0;
  }
  return answer;
}

console.log(solution(price, money, count));
