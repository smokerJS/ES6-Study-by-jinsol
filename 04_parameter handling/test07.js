/*

    spread 객체에서의 사용

    Spread 연산자를 사용하면 객체를 손쉽게 병합 또는 변경할 수 있다.

*/


// 객체의 병합
var test1 = {name:"진솔",age:25};
var test2 = {addr:"송파구",pet:"슈슈"};
var test1sum2 = {...test1,...test2};
console.log(test1sum2); // { name: '진솔', age: 25, addr: '송파구', pet: '슈슈' }


// 특정 프로퍼티 변경
var test3 = {...test1,name:"정진솔"};
console.log(test3); // { name: '정진솔', age: 25 }

// 프로퍼티 추가
var test4 = {...test1,petAge:12};
console.log(test4); //{ name: '진솔', age: 25, petAge: 12 }


// Object.assign 메소드를 사용해도 동일한 작업을 할 수 있다.
console.log(Object.assign({},test1,test2));
console.log(Object.assign({},test1,{name:"정진솔"}));
console.log(Object.assign({},test1,{petAge:12}));
// 맨 앞의 객체에 합쳐지기때문에 빈 객체를 줘야한다.


// spread 연산자를 사용하면 유사 배열 객체를 배열로 손쉽게 변환할 수 있다.
// var arr = [...arrTemp];
// 유사배열 객체는 타입이 Object 이고 배열은 Array이다.
// 이 타입을 손쉽게 바꾸는게 가능하다.

