const phone_number = '01033334444';

function solution(phone_number) {
  var answer = '';
  const b = phone_number.slice(-4);
  for (let i = 0; i < phone_number.length - 4; i++) {
    const a = phone_number[i].replace(phone_number[i], '*');
    answer += a;
  }
  answer += b;
  return answer;
}

function solution2(phone_number) {
  return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
}

console.log(solution(phone_number));
