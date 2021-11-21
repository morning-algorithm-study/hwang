const string = ['sun', 'bed', 'car'];
const n = 1;

function solution(strings, n) {
  var answer = [];
  answer = strings.sort((a, b) => {
    console.log(a, b);
    if (a[n] > b[n]) return 1;
    else if (a[n] == b[n]) {
      if (a > b) return 1;
      if (a < b) return -1;
    } else return -1;
  });
  return answer;
}

console.log(solution(string, n));
