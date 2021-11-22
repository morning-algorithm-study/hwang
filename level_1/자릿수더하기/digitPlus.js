const n = 123;

function solution(n) {
  let num = String(n);
  let answer = 0;
  for (let i = 0; i < num.length; i++) {
    answer += Number(num.charAt(i));
  }
  console.log(answer);
  return answer;
}

function solution2(n) {
  return String(n)
    .split('')
    .reduce((a, b) => a + Number(b), 0);
}

console.log(solution(n));
