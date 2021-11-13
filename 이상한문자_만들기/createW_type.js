"use strict";
const s = 'try hello world';
function solution(s) {
    var answer = '';
    const splitedS = s.split(' ');
    splitedS.map((element) => {
        const splitedEl = element.split('');
        splitedEl.map((el, index) => {
            if (index % 2 === 0) {
                answer += el.toUpperCase();
            }
            else {
                answer += el.toLowerCase();
            }
        });
        answer += ' ';
    });
    return answer.slice(0, answer.length - 1);
}
console.log(solution(s));
