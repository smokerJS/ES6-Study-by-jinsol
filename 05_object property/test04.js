// __proto__ 프로퍼티에 의한 상속


// ES5
var parent = {
  name: 'parent',
  sayHi: function() {
    console.log('Hi! ' + this.name);
  }
};

// 프로토타입 패턴 상속
var child = Object.create(parent);
child.name = 'child';

parent.sayHi(); // Hi! parent
child.sayHi();  // Hi! child

/*
  ES5에서는 객체를 상속받기 위해 Object.create() 함수를 사용한다.
  이를 프로토타입 패턴 상속이라 한다.
*/



// ES6
const parent2 = {
  name: 'parent2',
  sayHi() {
    console.log('Hi! ' + this.name);
  }
};

const child2 = {
  // child 객체의 프로토타입 객체에 parent 객체를 바인딩하여 상속을 구현한다.
  __proto__: parent2,
  name: 'child2'
};

parent2.sayHi(); // Hi! parent2
child2.sayHi();  // Hi! child2
/*
  ES6에서는 __proto__ 프로퍼티를 직접 설정할 수 있다.
  이것은 객체 리터럴에 의해 생성된 객체의 __proto__ 프로퍼티에 다른 객체를 직접 바인딩하여
  상속을 표현할 수 있음을 의미한다.
*/


const exam = {
  name: 'jinsol'
}
exam.__proto__= parent2;
exam.sayHi();