let nums = [1, 2, 7, 6, 4];

function solution1(nums) {
  var answer = -1;
  let a = [];
  for (let i = 0; i < nums.length - 2; i++) {
    const num = nums[i];
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        a.push(num + nums[j] + nums[k]);
      }
    }
  }
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    const b = a[i];
    for (let j = 2; j < a[i] ** 0.5 + 1; j++) {
      if (b % j === 0) {
        count++;
        break;
      }
    }
  }
  answer = a.length - count;
  return answer;
}

function solution(nums) {
  var answer = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        answer++;

        // 소수 판별
        for (let n = 2; n <= sum ** 0.5; n++) {
          if (sum % n === 0) {
            answer--;
            break;
          }
        }
      }
    }
  }

  return answer;
}

console.log(solution1(nums));
