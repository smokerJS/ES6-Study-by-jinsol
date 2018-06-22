/*

    생성자

    화살표 함수는 생성자 함수로 사용할 수 없다.
    생성자 함수는 prototype 프로퍼티를 가지며 prototype 프로퍼티가 가리키는 프로토타입 객체의 constructor를 사용한다.
    하지만 화살표 함수는 prototype 프로퍼티를 가지고 있지 않다.

*/

const Test = () => {};

// 화살표 함수는 prototype 프로퍼티가 없다
console.log(Test.hasOwnProperty('prototype')); // false

//hasOwnProperty = Key 이름이 있는지 true / false 로 반환

const test = new Test(); // is not a constructor