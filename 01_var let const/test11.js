/*

    const - 객체

    const는 재할당이 금지된다.
    이는 const 의 변수 타입이 객체인 경우, 객체에 대한 참조를 변경하지 못한다는 것을 의미한다.
    하지만 이때 객체의 프로퍼티는 보호되지 않는다.
    재할당은 불가능 하지만 할당된 객체의 내용(프로퍼티 추가, 삭제, 값 변경)은 변경이 가능하다.

*/

const user = {name : "jinsol"};
user.age = 25;
user.name = "jung jin sol"

console.log(user) // { name: 'jung jin sol', age: 25 }

// 객체의 내용이 변경되더라도 객체 타입 변수에 할당된 주소값은 변경되지 않는다.