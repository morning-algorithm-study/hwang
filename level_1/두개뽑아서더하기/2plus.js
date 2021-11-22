const numbers = [2, 1, 3, 4, 1];

function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    let numberI = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numberI + numbers[j]);
    }
  }
  answer = answer.sort((a, b) => a - b);
  return [...new Set(answer)];
}

console.log(solution(numbers));
