/* 
    정적 메서드 : 정의

    클래스의 정적(static) 메서드를 정의할 때 static 키워드를 사용한다.
    정적 메서드는 클래스의 인스턴스가 아닌 클래스 이름으로 호출한다.
    따라서 클래스의 인스턴스를 생성하지 않아도 호출할 수 있다.
*/

class Test10{
  constructor(prop){
    this.prop = prop;
  };

  static staticMethod(){
    /*
      정적 메서드는 this를 사용할 수 없다.
      정적 메서드 내부에서 this는 클래스의 인스턴스가 아닌 클래스 자신을 가리킨다.
    */
    return "스태틱 메서드 호출";
  };

  prototypeMethod(){
    return this.prop;
  };

};

console.log(Test10.staticMethod()); // 스태틱 메서드 호출
// 정적 메서드는 클래스 이름으로 호출한다.

const test = new Test10("프로퍼티");

// console.log(test.staticMethod()); // TypeError: test.staticMethod is not a function
// 정적 메서드는 인스턴스로 호출할 수 없다.

/*
  정적 메서드는 인스턴스로 호출이 불가능하다.
  이것은 정적 메서드는 this를 사용할 수 없다는 것을 의미한다.
  일반 메서드 내부에서 this는 클래스의 인스턴스를 가리키며,
  메서드 내부에서 this를 사용한다는 것은 클래스의 인스턴스의 생성을 전제로 한다.

  정적 메서드는 클래스 이름으로 호출하기 때문에 인스턴스를 생성하지 않아도 사용할 수 있다.
  하지만 this를 사용할 수 없기때문에 메서드 내에서 this가 필요없는 메서드는 정적메서드로 만들 수 있다.
  
  정적메서드는 Math 객체의 메소드처럼 전역에서 사용할 유틸리티 함수를 생성할 때 주로 사용한다.
*/

class MyMath{
  static sum(...num){
    let result = 0;
    num.forEach(val => result += val);
    return result;
  };
};
console.log(MyMath.sum(1,2,3)); // 6