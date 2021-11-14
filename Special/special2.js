//1번문제
const s = 'ypPy';

function solution(s) {
  var answer = true;
  let p = 0;
  let y = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'p' || s[i] === 'P') {
      p += 1;
    } else if (s[i] === 'y' || s[i] === 'Y') {
      y += 1;
    }
  }
  if (p === y) {
    answer = true;
  } else {
    answer = false;
  }
  return p === y ? true : false;
}

//2번문제
const absolutes = [4, 7, 12];
const signs = [true, false, true];

function solution2(absolutes, signs) {
  var answer = 0;
  absolutes.map((value, index) => {
    if (signs[index] === true) {
      answer += value;
    } else if (signs[index] === false) {
      answer -= value;
    }
  });
  return answer;
}
