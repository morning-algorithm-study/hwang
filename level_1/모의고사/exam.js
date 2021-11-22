const answers = [3, 3, 1, 1, 1, 1, 2, 3, 4, 5];

function solution(answers) {
  var answer = [];
  const answer1 = [1, 2, 3, 4, 5];
  const answer2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let resultArr = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === answer1[0]) {
      resultArr[0]++;
    }
    if (answers[i] === answer2[0]) {
      resultArr[1]++;
    }
    if (answers[i] === answer3[0]) {
      resultArr[2]++;
    }
    let a1 = answer1.shift();
    answer1.push(a1);
    let a2 = answer2.shift();
    answer2.push(a2);
    let a3 = answer3.shift();
    answer3.push(a3);
  }
  const max = Math.max(...resultArr);
  for (let i = 0; i < 3; i++) {
    if (resultArr[i] === max) {
      answer.push(i + 1);
    }
  }
}

console.log(solution(answers));
