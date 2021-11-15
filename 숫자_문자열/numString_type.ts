const s1: string = '23four5six7';

function solution(s: string): number {
  const num: string[] = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  for (let i: any = 0; i < num.length; i++) {
    const a = s1.split(num[i]);
    s = a.join(i);
  }
  return Number(s1);
}
