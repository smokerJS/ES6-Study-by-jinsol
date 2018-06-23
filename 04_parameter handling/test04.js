/*

    spread 문법

    Spread 연산자(Spread Operator, ...)는 연산자의 대상 배열 또는 이터러블을 개별 요소로 분리한다.

*/
var arr = [1,2,3]
console.log(...arr); // 1, 2, 3

var str = "hello es6";
console.log(...str); // h e l l o   e s 6
// 문자열은 이터러블이다.

console.log(new Map([['a', '1'], ['b', '2']])); // Map { 'a' => '1', 'b' => '2' }
console.log(...new Map([['a', '1'], ['b', '2']])); // [ 'a', '1' ] [ 'b', '2' ]
console.log(new Set([1, 2, 3])); // Set { 1, 2, 3 }
console.log(...new Set([1, 2, 3]));  // 1 2 3
// Map과 Set은 이터러블이다.