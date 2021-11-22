const num = 626331;

function solution(num) {
  let i = 0;
  while (true) {
    if (num === 1) {
      return i;
    } else if (num % 2 === 1) {
      num = num * 3 + 1;
    } else if (num % 2 === 0) {
      num /= 2;
    }
    if (i === 500) {
      return -1;
    }
    i++;
  }
}

console.log(solution(num));
