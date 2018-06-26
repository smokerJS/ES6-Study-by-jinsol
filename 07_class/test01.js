 /*
    ES5의 객체 지향 프로그래밍

    자바스크립트는 프로토타입 기반(prototype-based) 객체지향 언어이다.
    프로토타입 기반 프로그래밍은 클래스가 필요없는(class-free) 객체지향 프로그래밍 스타일로
    프로토타입 체인과 클로저 등으로 객체 지향 언어의 상속, 캡슐화(정보 은닉) 등의 개념을 구현할 수 있다.
*/

// ES5
var Person = (function () {
    // Constructor
    function Person(name) {
      this._name = name;
    };
  
    // public method
    Person.prototype.sayHi = function () {
      console.log('Hi! ' + this._name);
    };
  
    // return constructor
    return Person;
  }());
  
  var me = new Person('jinsol');
  me.sayHi(); // Hi! jinsol
  
  console.log(me instanceof Person); // true


  // prototype-class.png 참조