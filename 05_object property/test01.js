// 프로퍼티 축약 표현

// ES5
var x = 1, y = 2;
var obj = {
    x:x,
    y:y
}
console.log(obj); // { x: 1, y: 2 }


// ES6
let x2 = 1, y2 = 2;
const obj2 = { x2, y2 };
console.log(obj2); // { x2: 1, y2: 2 }
// ES6에서는 프로퍼티 값으로 변수를 사용하는 경우, 프로퍼티 이름을 생략할 수 있다.
// 이때 프로퍼티 이름은 변수의 이름으로 자동 생성된다.