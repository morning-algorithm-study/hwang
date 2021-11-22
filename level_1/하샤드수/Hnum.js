const x = 11;

function solution(x) {
  var answer = true;
  const Sx = String(x);
  let sum = 0;
  for (let i = 0; i < 5; i++) {
    sum += Number(Sx.charAt(i));
  }
  answer = x % sum === 0 ? true : false;
  return answer;
}

console.log(solution(x));
