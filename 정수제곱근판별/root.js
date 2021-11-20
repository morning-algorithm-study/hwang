const n = 121;

function solution(n) {
  let x = n ** 0.5;
  return x % 1 !== 0 ? -1 : (x + 1) ** 2;
}

console.log(solution(n));
