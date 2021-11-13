const s = 'try hello world';
function solution(s: string): string {
  var answer: string = '';
  const splitedS: string[] = s.split(' ');
  splitedS.map((element: string) => {
    const splitedEl: string[] = element.split('');
    splitedEl.map((el, index) => {
      if (index % 2 === 0) {
        answer += el.toUpperCase();
      } else {
        answer += el.toLowerCase();
      }
    });
    answer += ' ';
  });
  return answer.slice(0, answer.length - 1);
}

console.log(solution(s));
