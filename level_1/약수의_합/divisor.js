const n = 0;

function solution(n) {
  const numArr = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) numArr.push(i);
  }
  return numArr.reduce((a, b) => a + b, 0);
}

function solution2(n) {
  let num = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) num += i;
  }
  return num;
}

function solution3(n) {
  let num = new Set(); //중복을 제거한 값들의 집합
  for (let i = 0; i < n ** 0.5 + 1; i++) {
    //제곱근으로 for 돌리는 숫자 줄임
    if (n % i === 0) {
      num.add(i);
      num.add(n / i);
    }
  }
  return [...num].reduce((a, b) => a + b, 0);
}

console.log(solution3(n));
