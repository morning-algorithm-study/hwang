const n = 45;

function solution(n) {
  const ternery = n.toString(3).split('').reverse().join('');
  const answer = parseInt(ternery, 3);
  return answer;
}

const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(''), 3);
};

console.log(solution(n));
