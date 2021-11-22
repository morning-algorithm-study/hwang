const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

function solution(n, arr1, arr2) {
  var answer = [];
  let binaryArr = [];
  let binaryArr2 = [];
  for (let i = 0; i < arr1.length; i++) {
    let biArr1 = arr1[i].toString(2);
    if (biArr1.length < n) {
      biArr1 = '0'.repeat(n - biArr1.length) + biArr1;
    }
    binaryArr.push(biArr1);
  }
  for (let i = 0; i < arr2.length; i++) {
    let biArr2 = arr2[i].toString(2);
    if (biArr2.length < n) {
      biArr2 = '0'.repeat(n - biArr2.length) + biArr2;
    }
    binaryArr2.push(biArr2);
  }
  for (let i = 0; i < binaryArr.length; i++) {
    let a = '';
    for (let j = 0; j < binaryArr2.length; j++) {
      if (binaryArr[i][j] == 1 || binaryArr2[i][j] == 1) {
        a += '#';
      } else if (binaryArr[i][j] == 0 && binaryArr2[i][j] == 0) {
        a += ' ';
      }
    }
    answer.push(a);
  }
  return answer;
}

console.log(solution(n, arr1, arr2));
