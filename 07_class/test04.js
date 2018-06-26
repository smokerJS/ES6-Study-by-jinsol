//인스턴스의 생성

class Foo {};
const foo = new Foo();
/*
  클래스의 인스턴스를 생성하려면 new 연산자와 함께 constructor(생성자)를 호출한다.  
  위 코드에서 new 연산자와 함께 호출한 Foo는 클래스명이 아니라 생성자이다.
*/

console.log(Foo === Foo.prototype.constructor); // true

// const foo2 = Foo(); // TypeError: Class constructor Foo cannot be invoked without 'new'
// new 연산자를 사용하지 않고 생성자를 호출하면 타입에러가 발생한다.
// 생성자는 new 연산자 없이 호출할 수 없다.