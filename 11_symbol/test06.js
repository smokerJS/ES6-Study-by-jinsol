/*
    Symbol.for

    Symbol.for 메서드는 인자로 전달받은 프로퍼티 키를 통해
    Symbol 레지스트리에 존재하는 심볼을 검색한다.
    검색에 성공하면 검색된 심볼을 반환하고, 검색에 실패하면 새로운 Symbol을 생성한다.
*/

// 새로운 전역 Symbol 생성
const s1 = Symbol.for('foo');
// Symbol 레지스트리에서 이미 만들어진 Symbol을 검색
const s2 = Symbol.for('foo');

console.log(s1 === s2); // true

// Symbol() 함수는 매번 다른 Symbol 값을 생성하는 것에 반해,
// Symbol.for은 단 하나의 Symbol을 생성하여 여러 모듈이 공유한다.

const s3 = Symbol("foo");
const s4 = Symbol("foo");
console.log(s3 === s4); // false