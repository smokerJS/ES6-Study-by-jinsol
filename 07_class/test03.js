//표현식으로 클래스 정의

const Foo = class MyClass {};

const foo = new Foo();
console.log(foo);  // MyClass {}

// new MyClass(); // ReferenceError: MyClass is not defined

/*

  일반적이지 않지만 표현식으로도 클래스 정의가 가능하다.
  함수와 마찬가지로 클래스는 이름을 가질수도, 갖지 않을 수도 있다.
  이때 클래스가 할당된 변수를 사용해 클래스를 생성하지 않고 기명 클래스의 클래스 이름을 사용하여
  클래스를 생성하면 에러가 발생한다. 

*/