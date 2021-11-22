const arr = [1, 1, 3, 3, 0, 1, 1];

function solution(arr) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) answer.push(arr[i]);
  }
  return answer;
}

function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
