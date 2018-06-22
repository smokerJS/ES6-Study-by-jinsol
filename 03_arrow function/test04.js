/*

    method

    화살표 함수로 메소드를 정의할 경우 this 로 인하여
    원하지 않는 결과가 나올 수 있다.
    화살표 함수로 메소드 정의는 피해야 한다.

*/

const person = {
    name : "jinsol",
    sayHi : ()=>console.log(`Hi ${this.name}`)
};
person.sayHi() // Hi undefined
// 이 경우 화살표 함수 내의 this 는 상위 컨택스트인 전역 객체 window 를 가리킨다.



const person2 = {
    name : "jinsol",
    sayHi(){
        console.log(`Hi ${this.name}`)
    }
}
person2.sayHi(); // Hi jinsol
// 이처럼 ES6의 축약 메서드 표현을 사용하는것이 좋다.


