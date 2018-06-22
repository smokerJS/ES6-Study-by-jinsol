/*

    화살표 함수의 호출

    화살표 함수는 익명 함수로만 사용할 수 있다.
    따라서 화살표 함수를 호출하기 위해서는 함수 표현식을 사용한다.

*/

// ES5
var test1 = function(x){return x*x};
console.log(test1(10)) // 100

// ES6
const test2 = x => x * x;
console.log(test2(10)); // 100



// 콜백함수 사용
// ES5
var arr = [1, 2, 3];
var test3 = arr.map(function (x) { // x는 요소값
  return x * x;
});
console.log(test3); // [ 1, 4, 9 ]

const test4 = arr.map(x => x * x);
console.log(test4); // [ 1, 4, 9 ]

