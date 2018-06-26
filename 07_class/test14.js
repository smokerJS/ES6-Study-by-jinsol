/*
    static 메서드와 prototype 메서드의 상속

    프로토타입 관점에서 바라보면 자식 클래스의 [[Prototype]] 프로퍼티가 가리키는 프로토타입 객체는 부모 클래스이다.
    class-prototype-relation.png 참조

    prototype 메서드는 스태틱 메서드가 아닌 사용자 정의 메서드를 말한다.
*/

class Parent {};
class Child extends Parent {};
console.log(Child.__proto__ === Parent); // true
console.log(Child.prototype.__proto__ === Parent.prototype); // true

// 이것은 프로토타입 체인에 의해 부모 클래스의 정적 메서드도 상속됨을 의미한다.

class Test14 {
    static staticMethod(){
        return "Test14의 스태틱 메서드 호출";
    };
};

class Test extends Test14{};
console.log(Test14.staticMethod()); // Test14의 스태틱 메서드 호출
console.log(Test.staticMethod());   // Test14의 스태틱 메서드 호출


/*
    자식 클래스의 정적 메서드 내부에서도 super 키워드를 사용하여 부모 클래스의 정적 메서드를 호출할 수 있따.
    이는 자식 클래스는 프로토타입 체인에 의해 부모 클래스의 정적 메서드를 참조할 수 있기 때문이다.
*/

class AClass{ static staticMethod(){ return "안녕"; }; };
class BClass extends AClass{ 
    static staticMethod(){ return `${super.staticMethod()} 진솔!`; }; 
    prototypeMethod() { return `${super.staticMethod()} 세계!`; }
};
console.log(BClass.staticMethod()); // 안녕 진솔!

/*
    하지만 자식 클래스의 일반 메소드(프로토타입 메소드) 내부에서는 super 키워드를 사용하여 부모 클래스의 정적 메소드를 호출할 수 없다.
    이는 자식 클래스의 인스턴스는 프로토타입 체인에 의해 부모 클래스의 정적 메소드를 참조할 수 없기 때문이다.
*/
console.log(new BClass().prototypeMethod()); // (intermediate value).staticMethod is not a function


//class-prototype-chain.png 참조