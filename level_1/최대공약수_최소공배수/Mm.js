const n = 20;
const m = 5254;

function solution(n, m) {
  let a = 0;
  let b = 0;
  let num = n > m ? n : m;
  for (let i = 0; i < num; i++) {
    if (n % i == 0 && m % i == 0) {
      console.log(i);
      a = i;
    }
  }
  //최소공배수 = 두수의 곱 / 최대공약수
  b = (n * m) / a;
  return [a, b];
}

console.log(solution(n, m));
