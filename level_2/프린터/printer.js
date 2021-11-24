const priorities = [2, 1, 3, 2];
const location = 2;

function solution(priorities, location) {
  var answer = 0;
  // priorities_index: 대기목록의 초기 인덱스 값 (대기문서의 ID 값이라고 생각)
  let priorities_index = [];
  for (let i = 0; i < priorities.length; i++) {
    priorities_index.push(i);
  }
  let print, print_index;
  while (priorities.length > 0) {
    // print: 대기목록의 가장 앞에 있는 문서의 우선순위
    console.log(priorities);
    print = priorities.shift(); //shift() = 배열 가장 앞에있는 값을 제거 후 그 값을 리턴
    // 현재 문서보다 우선순위가 높은 문서가 중간에 있는 경우 -> 대기목록 순서 변경
    //9가 맨앞에 올때까지만 true
    if (priorities.some((priorities) => priorities > print)) {
      //뽑은 수가 가장 큰 수가 아닐때
      priorities.push(print); // 대기목록의 가장 뒤로 문서 이동
      console.log(priorities);
      priorities_index.push(priorities_index.shift()); // 대기목록의 ID 순서도 변경
      console.log(priorities_index);
      console.log('---------------');
    }
    // 우선순위가 높은 문서가 맨 앞에 있는 경우 -> 해당 문서 출력
    else {
      //뽑은 수가 가장 큰 수일때
      answer++;
      // 현재 인쇄한 문서의 ID 값이 내가 요청한 문서일 경우, 반복문 종료
      print_index = priorities_index.shift();
      console.log(print_index);
      console.log('---------------');
      if (print_index == location) break;
    }
  }
  return answer;
}

// function solution(priorities, location) {
//   var list = priorities.map((t, i) => ({
//     my: i === location,
//     val: t,
//   }));
//   var count = 0;
//   while (true) {
//     var cur = list.splice(0, 1)[0];
//     if (list.some((t) => t.val > cur.val)) {
//       list.push(cur);
//     } else {
//       count++;
//       if (cur.my) return count;
//     }
//   }
// }

console.log(solution(priorities, location));
