const s = '-1 -5 -4';

function solution(s) {
  var answer = '';
  const splited = s.split(' ').sort((a, b) => a - b);
  answer = [Math.min(...splited), Math.max(...splited)].join(' ');
  return answer;
}

function solution(s) {
  const arr = s.split(' ');

  return Math.min(...arr) + ' ' + Math.max(...arr);
}

console.log(solution(s));
