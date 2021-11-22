function solution(a, b) {
  var answer = '';
  const date = new Date(`2016,${a},${b}`);
  let day = (date + '').split(' ');
  answer = day[0].toUpperCase();
  return answer;
}

console.log(solution(5, 24));
