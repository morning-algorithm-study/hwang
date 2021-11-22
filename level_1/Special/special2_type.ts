//1번문제
const ss: string = 'pPy';

function solution11(ss: string): boolean {
  var answer: boolean = true;
  let p: number = 0;
  let y: number = 0;
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
  return answer;
}

//2번문제
const absolutes: number[] = [4, 7, 12];
const signs: boolean[] = [true, false, true];

function solution22(absolutes: number[], signs: boolean[]): number {
  var answer: number = 0;
  absolutes.map((value, index) => {
    if (signs[index] === true) {
      answer += value;
    } else if (signs[index] === false) {
      answer -= value;
    }
    console.log(answer);
  });
  return answer;
}

console.log(solution22(absolutes, signs));
