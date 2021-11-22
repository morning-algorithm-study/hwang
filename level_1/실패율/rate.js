const N = 4;
const stages = [4, 4, 4, 4];

function solution(N, stages) {
  let stageCount = new Array(N);
  let failPer = [];
  stageCount.fill(0);

  let usersNum = stages.length;
  for (let val of stages) {
    stageCount[val - 1]++;
  }

  for (let i = 0; i < N; i++) {
    if (usersNum === 0) {
      failPer.push({ failper: 0, stageNum: i + 1 });
    } else {
      failPer.push({ failper: stageCount[i] / usersNum, stageNum: i + 1 });
    }
    usersNum -= stageCount[i];
  }

  failPer.sort((a, b) => {
    if (a.failper === b.failper) {
      return a.stageNum - b.stageNum;
    }
    return b.failper - a.failper;
  });

  return failPer.map((item) => {
    return item.stageNum;
  });
}

console.log(solution(N, stages));
