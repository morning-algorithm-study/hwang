const d = [2, 2, 3, 3];
const budget = 10;

function solution(d, budget) {
  var answer = 0;
  const dNum = d.length;
  d.sort((a, b) => a - b);
  while (dNum > 0) {
    if (budget - d[0] >= 0) {
      budget -= d[0];
      d.shift();
    } else {
      break;
    }
  }
  answer = dNum - d.length;
  return answer;
}

console.log(solution(d, budget));
