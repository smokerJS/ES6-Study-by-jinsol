/*

    spread 배열에서의 사용

    spread 연산자를 배열에서 사용하면 보다 간결하고 가독성 좋게 표현이 가능하다.

*/


// concat
// ES5
var arr = [1, 2, 3];
console.log(arr.concat([4, 5, 6])); // [ 1, 2, 3, 4, 5, 6 ]

// ES6
// ...arr은 [1, 2, 3]을 개별 요소로 분리한다
console.log([...arr, 4, 5, 6]); // [ 1, 2, 3, 4, 5, 6 ]


// push
var arr2 = [1,2,3];
var arr3 = [4,5,6];
arr2.push(...arr3);
console.log(arr2); // [ 1, 2, 3, 4, 5, 6 ]


// splice
var arr4 = [1, 2, 3, 6];
var arr5 = [4, 5];
arr4.splice(3, 0, ...arr5); // arr(3) 자리에서 0개 만큼 지우고 대입
console.log(arr4);  // [ 1, 2, 3, 4, 5, 6 ]


// copy
var arr6 = [1,2,3];
var copy = [...arr6];
console.log(copy);