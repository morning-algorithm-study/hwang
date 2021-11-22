const arr = [10, 5, 5, 5, 4, 2, 3, 1, 5, 1, 1];

function solution(arr) {
  const min = Math.min(...arr);
  let answer = arr.filter((item) => item !== min);
  //콜백함수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환함.
  return answer.length === 0 ? [-1] : answer;
}

console.log(solution(arr));
