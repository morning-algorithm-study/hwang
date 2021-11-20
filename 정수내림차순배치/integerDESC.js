const n = 118372;

function solution(n) {
  let num = String(n);
  return +num //단항연산자 +를 통해 숫자로 변환 가능.
    .split('')
    .sort((a, b) => b - a)
    .join('');
}

console.log(solution(n));
