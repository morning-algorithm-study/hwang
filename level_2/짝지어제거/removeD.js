const s = 'baabaa';

//효율성 테스트 실패
function solution(s) {
  var answer = -1;
  const regex = /([a-z])\1/g;
  while (s.length > 0) {
    if (regex.test(s)) {
      s = s.replace(regex, '');
    } else {
      answer = 0;
      break;
    }
  }
  if (s.length < 1) {
    answer = 1;
  }
  return answer;
}

//성공
function solution(s) {
  let a = [];
  for (let i = 0; i < s.length; i++) {
    if (a[a.length - 1] !== s[i]) {
      a.push(s[i]);
    } else {
      a.pop();
    }
  }
  return a.length === 0 ? 1 : 0;
}

console.log(solution(s));
