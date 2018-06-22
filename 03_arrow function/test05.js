/*

    prototype

    화살표 함수로 정의된 메서드를 prototype 에 할당하는 경우도 this 와 같은 문제가 발생한다.

*/

const person = {
    name: 'jinsol',
};

Object.prototype.sayHi = () => console.log(`Hi ${this.name}`);


person.sayHi(); // Hi undefined



Object.prototype.sayHi = function() {
    console.log(`Hi ${this.name}`);
};
  
person.sayHi(); // Hi jinsol