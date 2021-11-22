const sizes = [
  [10, 7],
  [12, 3],
  [15, 15],
  [14, 7],
  [5, 15],
];
type T = number[];

function solution(sizes: Array<T>) {
  // var answer = 0;
  let x: number[] = [];
  let y: number[] = [];
  for (let i = 0; i < sizes.length; i++) {
    sizes[i].sort((a: number, b: number) => b - a);
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

console.log(solution(sizes));
