const array = [1, 5, 2, 6, 3, 7, 4];
const commends = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

function solution(array, commends) {
  const answer = [];
  for (let commend of commends) {
    const slicedArray = array.slice(commend[0] - 1, commend[1]);
    // console.log(slicedArray);
    const sortedArray = slicedArray.sort((a, b) => {
      // console.log(a, b);
      // console.log(a - b);
      // console.log('------');
      return a - b;
    });
    // console.log(sortedArray);
    const K = sortedArray[commend[2] - 1];
    // console.log(K);
    // console.log('==============================');
    answer.push(K);
  }
  return answer;
}

//위에 걸 간결하게 한 함수
function solution2(array, commends) {
  const answer = [];
  for (let commend of commends) {
    const K = array.slice(commend[0] - 1, commend[1]).sort((a, b) => a - b)[commend[2] - 1];
    answer.push(K);
  }
  return answer;
}

console.log(solution(array, commends));
console.log(solution2(array, commends));
/*
5263
2563
2563
2563
2356
2356
*/
/*
1526374
1526374
1256374
1256374
1256374
1256374
1235674
1235674
1235674
1235674
1234567
1234567
1234567
*/
