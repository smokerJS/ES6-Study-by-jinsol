// 메서드 축약 표현

// ES5
var obj = {
  name: 'jinsol',
  sayHi: function() {
    console.log('Hi! ' + this.name);
  }
};

obj.sayHi(); // Hi! jinsol
// ES5에서는 객체에 메서드를 선언할 때 프로퍼티 값으로 함수 선언식을 사용한다.



// ES6
const obj2 = {
  name: 'jinsol',
  sayHi() {
    console.log('Hi! ' + this.name);
  },
  arrow : ()=>{
    console.log("화살표 함수는 익명함수이기 때문에 프로퍼티 값을 설정해야 선언이 가능하다.");
  }
};

obj2.sayHi(); // Hi! jinsol
// ES6에서는 객체에 메서드를 선언할 떄 function 키워드를 생략한 축약 표현이 가능하다.
// 화살표함수는 익명함수이기 때문에 불가능하다.