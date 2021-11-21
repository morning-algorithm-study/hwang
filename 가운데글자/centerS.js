const s = 'qw';

function solution(s) {
  var answer = '';
  const odd = s[Math.floor(s.length / 2)];
  const even = s[s.length / 2 - 1] + s[s.length / 2];
  answer = s.length % 2 !== 0 ? odd : even;
  return answer;
}

console.log(solution(s));
