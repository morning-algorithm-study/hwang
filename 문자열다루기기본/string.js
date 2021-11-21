const s = '1234';

function solution(s) {
  let reS = s.replace(/[^0-9]/, '');
  let answer = true;
  if (s.length === 4 || s.length === 6) {
    answer = true;
    answer = reS.length === s.length ? true : false;
    return answer;
  } else {
    return false;
  }
}

console.log(solution(s));
