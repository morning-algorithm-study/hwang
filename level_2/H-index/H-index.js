const citations = [3, 0, 6, 1, 5];

function solution(citations) {
  var answer = 0;
  citations.sort((a, b) => b - a);
  let cnt = 1;
  console.log(citations);
  while (cnt <= citations[cnt - 1]) {
    console.log(cnt, citations[cnt - 1]);
    cnt += 1;
  }
  return cnt - 1;
}

console.log(solution(citations));
