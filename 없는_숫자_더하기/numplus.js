const numbers = [1, 2, 3, 4, 6, 7, 8, 0];

function solution(numbers) {
  const x = [];
  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(num[i])) {
      x.push(num[i]);
    }
  }
  return x.reduce((sum, value) => {
    return sum + value;
  }, 0);
}

//좀더 간단히
function solution2(numbers) {
  let answer = 0;
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }
  return answer;
}

//reduce
function solution3(numbers) {
  return (
    45 -
    numbers.reduce((sum, value) => {
      return sum + value;
    }, 0)
  );
}

console.log(solution3(numbers));
