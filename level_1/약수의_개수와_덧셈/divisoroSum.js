const left = 13;
const right = 17;

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    let arr = [];
    let num = i;
    for (let j = 0; j <= i; j++) {
      if (num % j === 0) {
        arr.push(j);
      }
    }
    if (arr.length % 2 == 0) {
      answer += num;
    } else {
      answer -= num;
    }
  }
  return answer;
}

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

console.log(solution(left, right));
