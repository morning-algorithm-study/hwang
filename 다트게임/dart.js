let dartResult = '1D#2S*3S';

//실패...
function solution(dartResult) {
  var answer = 0;
  const a = [
    dartResult.slice(0, dartResult.indexOf(/\*/g) - 3),
    '*2',
    dartResult.slice(dartResult.indexOf(/\*/g) - 3),
  ].join('');
  const b = a.replace(/\#/g, '(-1)+');
  const c = b.replace(/\*/g, '*2+');
  let result = c.replace(/S/g, '**1+').replace(/D/g, '**2+').replace(/T/g, '**3+');
  answer = result.slice(0, -1);
  const d = answer.replace(/\+(-1)/g, '*(-1)');
  const e = d.replace(/\+\*/g, '*');
  const f = e.replace(/\*+/g, '**');
  console.log(f);
  return eval(f);
}

//다른사람 풀이
function solution(dartResult) {
  let roundScore = [];

  let score = '';
  for (let letter of dartResult) {
    if (letter === 'S' || letter === 'D' || letter === 'T') {
      let basicScore = applyBonus(score, letter);
      roundScore.push(basicScore);
      score = '';
    } else if (letter === '*' || letter === '#') {
      let curRoundIndex = roundScore.length - 1;
      applyOption(roundScore, curRoundIndex, letter);
    } else {
      score += letter;
    }
  }

  return roundScore.reduce((a, c) => a + c);
}

function applyBonus(score, bonus) {
  if (bonus === 'S') return Math.pow(+score, 1);
  if (bonus === 'D') return Math.pow(+score, 2);
  if (bonus === 'T') return Math.pow(+score, 3);
}

function applyOption(roundScore, curRoundIndex, option) {
  let length = roundScore.length;

  if (option === '*') {
    roundScore[curRoundIndex] *= 2;
    if (curRoundIndex - 1 >= 0) roundScore[curRoundIndex - 1] *= 2;
  }
  if (option === '#') {
    roundScore[length - 1] *= -1;
  }
}

console.log(solution(dartResult));
