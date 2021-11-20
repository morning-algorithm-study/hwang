const n = 12345;

function solution(n) {
  const num = String(n);
  const numArr = num.split('').reverse();
  return numArr.map((value) => +value);
}
