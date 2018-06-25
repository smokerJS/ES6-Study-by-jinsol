// 객체 디스트럭처링 1
// Object destructuring


// ES5
var obj = { firstName: 'jinsol', lastName: 'JUNG' };
var firstName = obj.firstName;
var lastName  = obj.lastName;
console.log(firstName, lastName); // jinsol JUNG
// ES5에서는 객체의 각 프로퍼티를 객체로부터 디스트럭처링 하여 변수에 할당하기 위해서는 key값을 사용해야 한다.




// ES6 
const obj2 = { firstName2: 'jinsol', lastName2: 'JUNG' };
const { firstName2, lastName2 } = obj2;
console.log(firstName2, lastName2); // jinsol JUNG
// 객체 디스트럭처링을 위해서는 할당 연산자 왼쪽에 객체 형태의 변수 리스트가 필요하다.
// 배열의 디스트럭처링과 유사하며 할당 기준은 프로퍼티 이름(키)이다.
// 할당받는 변수명과 프로퍼티 이름이 일치해야 하며 그렇지 않을경우 undefined 를 반환한다.
