const arrayT: number[] = [1, 5, 2, 6, 3, 7, 4];
const commendsT: number[][] = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

function solutionT(arrayT: number[], commendsT: number[][]): number[] {
  const answer: number[] = [];
  for (let commend of commendsT) {
    const slicedArray = arrayT.slice(commend[0] - 1, commend[1]);
    // console.log(slicedArray);
    const sortedArray = slicedArray.sort((a, b) => a - b);
    // console.log(sortedArray);
    const K = sortedArray[commend[2] - 1];
    // console.log(K);
    // console.log('==============================');
    answer.push(K);
  }
  return answer;
}

function solutionT2(arrayT: number[], commendsT: number[][]): number[] {
  const answer: number[] = [];
  for (let commend of commendsT) {
    const K = arrayT.slice(commend[0] - 1, commend[1]).sort((a, b) => a - b)[commend[2] - 1];
    answer.push(K);
  }
  return answer;
}

console.log(solutionT(arrayT, commendsT));
console.log(solutionT2(arrayT, commendsT));
