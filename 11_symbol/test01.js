/*
    symbol

    자바스크립트의 기본 자료형
    Boolean
    null
    undefined
    Number
    String

    객체형
    Object

    심볼은 ES6에서 새롭게 추가된 7번째 타입이다.
    Symbol은 애플리케이션 전체에서 유일하며 변경 불가능한 기본 자료형 값이다.
    주로 객체의 프로퍼티 키로 사용한다.

*/

let mySymbol = Symbol();
console.log(mySymbol);        // Symbol()
console.log(typeof mySymbol); // symbol