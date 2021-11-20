const nums = [3, 1, 2, 3];

function solution(nums) {
  const species = [...new Set(nums)];
  return species.length < nums.length / 2 ? species.length : nums.length / 2;
}

console.log(solution(nums));
