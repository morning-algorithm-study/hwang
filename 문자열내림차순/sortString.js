const s = 'Zbcdefg';

function solution(s) {
  var answer = '';
  const splitedS = s.split('').sort().reverse().join('');
  answer += splitedS;
  return answer;
}

function solution2(s) {
  let splitedS = s.split('');
  splitedS.sort((a, b) => {
    if (a === a.toUpperCase() && b === b.toUpperCase()) {
      return -a.localeCompare(b);
    } else if (a === a.toUpperCase() && b === b.toLowerCase()) {
      return 1;
    } else if (a === a.toLowerCase() && b === b.toUpperCase()) {
      return -1;
    } else {
      return -a.localeCompare(b);
    }
  });
  return splitedS.join('');
}

console.log(solution2(s));
