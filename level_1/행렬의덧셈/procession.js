const arr1 = [
  [1, 2],
  [2, 3],
];
const arr2 = [
  [3, 4],
  [5, 6],
];

function solution(arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let arr3 = [];
    for (let j = 0; j < arr2[i].length; j++) {
      arr3.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(arr3);
  }
  return answer;
}

console.log(solution(arr1, arr2));
