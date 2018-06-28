/*
    immutable type

    Symbol은 변경 불가능한(immutable) 기본 자료형(primitive)이다.
    Symbol() 함수는 인자로 문자열을 전달할 수 있지만, 심볼 생성에 어떠한 영향도 주지 않는다.
    디버깅시 심볼에 대한 설명으로 기능을 다한다.
*/

let mySymbol = Symbol();
// console.log(mySymbol + 's'); // TypeError: Cannot convert a Symbol value to a string

let symbol = Symbol('진솔이가 진행하는 ES6');

console.log(symbol);        // Symbol(진솔이가 진행하는 ES6)
console.log(typeof symbol); // symbol


// Symbol() 함수가 생성한 Symbol 값은 애플리케이션 전체에서 유일하다.
console.log(symbol === Symbol('진솔이가 진행하는 ES6')); // false