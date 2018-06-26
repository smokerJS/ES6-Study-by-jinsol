/*
    constructor(생성자)

    생성자는 인스턴스를 생성하고 클래스 프로퍼티를 초기화하기 위한 특수한 메서드이다.
    생성자는 클래스 내에 한 개만 존재할 수 있으며 만약 클래스가 2개 이상의 생성자를 포함하면
    문법 에러가 발생한다.

    인스턴스를 생성할 때 new 연산자와 함께 호출한 것이 바로 생성자이며, 파라미터에 전달한 값은 클래스 프로퍼티에 할당한다.
*/

class Foo { };
const foo = new Foo();
console.log(foo); // Foo {}

// 클래스 프로퍼티의 동적 할당 및 초기화
foo.num = 1;
console.log(foo); // Foo { num: 1 }




class TestClass {
  constructor(testText){
    // constructor는 인스턴스의 생성과 동시에 클래스 프로퍼티의 생성과 초기화를 실행한다.
    this.testText = testText;
  };
};
const testClass = new TestClass("생성자로 인하여 testText가 초기화 되었습니다.");
console.log(testClass.testText); // 생성자로 인하여 testText가 초기화 되었습니다.