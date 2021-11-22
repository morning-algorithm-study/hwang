const sizes = [
  [10, 7],
  [12, 3],
  [15, 15],
  [14, 7],
  [5, 15],
];

function solution(sizes) {
  // var answer = 0;
  let x = [];
  let y = [];
  for (let i = 0; i < sizes.length; i++) {
    sizes[i].sort((a, b) => b - a);
    x.push(sizes[i][0]);
    y.push(sizes[i][1]);
  }
  console.log(x);
  console.log(y);
  console.log(sizes);
  x.sort((a, b) => b - a);
  y.sort((a, b) => b - a);
  return x[0] * y[0];
  // const size = sizes.flat();
  // size.sort((a, b) => b - a);
  // console.log(size[0], size[sizes.length]);
  // answer = size[0] * size[sizes.length];
  // return answer;
}

function solution2(sizes) {
  let w = 0;
  let h = 0;
  sizes.forEach((s) => {
    const [a, b] = s.sort((a, b) => a - b);
    if (a > h) h = a;
    if (b > w) w = b;
  });

  return w * h;
}

function solution3(sizes) {
  let x = [];
  let y = [];
  for (let i = 0; i < sizes.length; i++) {
    sizes[i].sort((a, b) => b - a);
    x.push(sizes[i][0]);
    y.push(sizes[i][1]);
  }
  return Math.max(...x) * Math.max(...y);
}

console.log(solution3(sizes));
