/* 
    정적 메서드 : 프로토타입 체인

    클래스는 함수이며 기존 prototype 기반 패턴의 Syntactic sugar일 뿐이다.
    함수 객체(자바스크립트의 함수는 객체이다)는 prototype 프로퍼티를 갖는데
    일반 객체의 [[Prototype]] 프로퍼티와는 다른 것이며 일반 객체는 prototype 프로퍼티를 가지지 않는다.
*/

// ES6 의 클래스 정의
class Test11Temp {
  constructor(prop){
    this.prop = prop;
  };
  static staticMethod(){
    return "스태틱 메서드 호출";
  };
  prototypeMethod(){
    return this.prop;
  };
};
console.log(typeof Test11Temp); // function
// 클래스를 function 즉, 함수로 나타낸다.



// 위 코드를 ES5 형태로 나타내면
var Test11 = (function(){
  function Test11(prop){
    this.prop = prop;
  };
  Test11.staticMethod = function(){
    return "스태틱 메서드 호출";
  };
  Test11.prototype.prototypeMethod = function(){
    return this.prop;
  }
  return Test11;
}());
var test11 = new Test11("프로퍼티");
console.log(Test11.staticMethod()); // 스태틱 메서드 호출
// console.log(test11.staticMethod()); // TypeError: test11.staticMethod is not a function
// ES5도 마찬가지로 인스턴스는 스태틱 메서드를 사용할 수 없다. 밑에서 설명한다.



/*
  함수 객체만 가지고 있는 prototype 프로퍼티는 함수 객체가 생성자로 사용될 때,
  이 함수를 통해 생성된 객체의 부모 역할을 하는 프로토타입 객체를 가리킨다.
  위 코드에서 Test11은 생성자 함수로 사용되므로
  생성자 함수 Test11의 prototype 프로퍼티가 가리키는 프로토타입 객체는
  생성자 함수 Test11을 통해 생성되는 인스턴스 test11의 부모 역할을 한다.
*/

console.log(Test11.prototype === test11.__proto__); // true
// Test11의 프로토타입 프로퍼티와 test11 인스턴스의 부모역할이 같다.


console.log(Test11.prototype.constructor === Test11); // true
/*
  생성자 함수 Test11의 prototype 프로퍼티가 가리키는
  프로토타입 객체가 가지고 있는 constructor 프로퍼티는 생성자 함수 Test11 을 가리킨다.
  즉, 생성자 함수의 프로토타입의 생성자는 본인을 나타내는것이다.


  정적 메서드인 staticMethod는 생성자 함수 Test11의 메서드이고(함수는 객체이므로 메서드를 가질 수 있다),
  일반 메서드인 prototypeMethod는 프로토타입 객체 Test11.prototype의 메서드이다.
  따라서 staticMethod는 test11에서 호출할 수 없다.
*/

console.log(test11.__proto__.constructor.staticMethod()); // 스태틱 메서드 호출




// class-prototype.png 참조
// 해당 파일은 Foo 라는 클래스로 예시되어있습니다.