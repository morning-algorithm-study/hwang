const a = 3;
const b = 5;

function solution(a, b) {
  var answer = 0;
  const num = a > b ? b : a;
  const num2 = a > b ? a : b;
  for (let i = num; i <= num2; i++) {
    answer += i;
  }
  return answer;
}

function solution(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}
