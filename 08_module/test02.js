/*
    export

    모듈은 독립적인 파일 스코프를 갖기 때문에 모듈 안에 선언한 모든 것들은
    기복적으로 해당 모듈 내부에서만 참조할 수 있다.
    만약 모듈 안에 선언한 항목을 외부에 공개하여
    다른 모듈들이 사용할 수 있게 하고 싶다면 export해야 한다.
    선언된 변수, 함수, 클래스 모두 export할 수 있다.
*/

// export는 현재 대부분의 브라우저가 ES6의 모듈을 지원하지 않습니다.
// 08_module에서는 기본 문법만 알아가며, 이후 Babel과 WebPack을 이용할때 이를 사용합니다.


// 변수의 공개
export const pi = Math.PI;

// 함수의 공개
export function square(x) {
  return x * x;
}

// 클래스의 공개
export class Person {
  constructor(name) {
    this.name = name;
  }
}

// 선언문 앞에 매번 export를 붙이지 않고 하나의 객체로 선언도 가능하다.


const pi2 = Math.PI;

function square2(x) {
  return x * x;
}

class Person2 {
  constructor(name) {
    this.name = name;
  }
}

// 변수, 함수 클래스를 하나의 객체로 구성하여 공개
export { pi2, square2, Person2 };