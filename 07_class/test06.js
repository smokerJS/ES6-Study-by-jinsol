/* 
    클래스 프로퍼티

    클래스 몸체에는 메서드만 선언할 수 있다.
    클래스 바디에 클래스 프로퍼티(멤버변수)를 선언하면 문법 에러가 발생한다.
*/
class Test06{
  // name = "이름을 입력하지 않았습니다."; // SyntaxError

  constructor(name = "이름을 입력하지 않았습니다."){
    this.name = name; // 클래스 프로퍼티의 선언과 초기화
  };

  myName(){
    return `제 이름은 ${this.name} 입니다!`;
  };
};
console.log(new Test06().myName()); // 이름을 입력하지 않았습니다.
console.log(new Test06("jinsol").myName()); // 제 이름은 jinsol 입니다!


/*
  constructor 내부에 선언한 클래스 프로퍼티는 클래스의 인스턴스를 가리키는 this에 바인딩한다.
  클래스 프로퍼티는 클래스가 생성할 인스턴스의 프로퍼티가 되며,
  인스턴스를 통해 클래스 외부에서 언제나 참조할 수 있다. 즉, 언제나 public 상태이다.
*/
const test = new Test06("진솔");
console.log(test.name); // 진솔
// 클래스 외부에서 참조할 수 있다.