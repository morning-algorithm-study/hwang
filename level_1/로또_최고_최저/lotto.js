const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];

function solution(lottos, win_nums) {
  var answer = [];

  const correct = lottos.filter((lotto) => win_nums.includes(lotto)).length; //확정맞은갯수
  const zeros = lottos.filter((lotto) => lotto === 0).length; //0의 갯수
  console.log(correct, zeros);

  let min = 7 - correct >= 6 ? 6 : 7 - correct; //1개나 2개가 일치하면 6등. 아니면 순위
  let max = min - zeros < 1 ? 1 : min - zeros; //0이 다 맞을경우 추가로 빼줌 다맞으면 1위

  answer = [max, min];
  return answer;
}

console.log(solution(lottos, win_nums));
