"use strict";
const numbers = [1, 2, 3, 4, 6, 7, 8, 0];
function solution4(numbers) {
    let answer = 0;
    for (let i = 0; i < 10; i++) {
        if (!numbers.includes(i)) {
            answer += i;
        }
    }
    return answer;
}
//reduce
function solution5(numbers) {
    return (45 -
        numbers.reduce((sum, value) => {
            return sum + value;
        }, 0));
}
console.log(solution5(numbers));
