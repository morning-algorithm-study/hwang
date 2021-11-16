const n = 5;
let lost = [2, 4];
let reserve = [5, 3];

function solution(n: number, lost: number[], reserve: number[]): number {
  var answer = n;
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  const remain = lost.filter((value) => !lost.includes(value) || !reserve.includes(value));
  reserve = reserve.filter((value) => !lost.includes(value) || !reserve.includes(value));
  answer -= remain.length;
  remain.map((el, i) => {
    for (let i = 0; i < reserve.length; i++) {
      if (el === reserve[i] + 1 || el === reserve[i] - 1) {
        answer++;
        reserve.splice(reserve.indexOf(reserve[i]), 1);
      }
    }
  });
  return answer;
}

console.log(solution(n, lost, reserve));
