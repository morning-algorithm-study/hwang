const s = 'one4seveneight';

function solution(s) {
  const num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  for (let i = 0; i < num.length; i++) {
    const a = s.split(num[i]);
    s = a.join(i);
  }
  return Number(s);
}

//안되는 풀이(일부만 풀어짐)
function solution2(s) {
  const num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const numS = num.map((el, i) => {
    if (s.includes(el)) {
      return s.replace(el, i);
    }
  });
  console.log(numS);
  const numArray = [];
  for (let i = 0; i < numS.length; i++) {
    if (numS[i] !== undefined) {
      numArray.push(numS[i].replace(/[^0-9]/g, ''));
    }
  }
  console.log(numArray);
  const ss = numArray.join('');
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (ss.indexOf(ss[i]) === i) result += ss[i];
  }
  return Number(result);
}

console.log(solution(s));
