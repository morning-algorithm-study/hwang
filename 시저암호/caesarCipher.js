const s = 'y X Z';
const n = 4;

function solution(s, n) {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    let ascii = s.charCodeAt(i);
    console.log(ascii + n);
    if (ascii === 32) {
      answer += String.fromCharCode(ascii);
    } else if (ascii + n > 122) {
      answer += String.fromCharCode(96 + (ascii + n - 122));
    } else if (ascii + n > 90 && ascii <= 90) {
      answer += String.fromCharCode(64 + (ascii + n - 90));
    } else {
      answer += String.fromCharCode(ascii + n);
    }
  }
  return answer;
}

console.log(solution(s, n));
