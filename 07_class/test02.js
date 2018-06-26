 /*
    ES6 클래스 정의

    ES6의 클래스는 class 키워드를 사용하여 정의한다.
    test01 의 Person 정의보다 간결하다.
*/

class Person {
  constructor(name){
    this._name = name;
  };

  sayHi(){
    console.log(`Hi! ${this._name}`);
  };
};

const me = new Person("jinsol");

me.sayHi(); // Hi! jinsol

console.log(me instanceof Person); // true



