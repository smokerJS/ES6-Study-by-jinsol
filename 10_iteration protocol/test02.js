/*
    이터레이션 프로토콜 사용

    ES6에서 제공하는 빌트인 이터러블은 아래와 같다.
    이 객체들은 이터레이션 프로토콜을 준수하고 있으며 이터러이터를 반환한다.

    Array
    Array.prototype[Symbol.iterator]

    String
    String.prototype[Symbol.iterator]

    Map
    Map.prototype[Symbol.iterator]

    Set
    Set.prototype[Symbol.iterator]

    DOM data structures
    NodeList.prototype[Symbol.iterator]
    HTMLCollection.prototype[Symbol.iterator]
*/


/*
    이터러블
    Symbol.iterator를 프로퍼티 키로 사용한 메소드를 구현해야 한다.
    배열에는 Array.prototype[Symbol.iterator] 메소드가 구현되어 있다.
*/
const iterable = ["a","b","c"];

/*
    이터레이터
    이터러블의 Symbol.iterator를 프로퍼티 키로 사용한 메소드는 이터레이터를 반환한다.
*/
const iterator = iterable[Symbol.iterator]();


/*
    이터레이터는 순회 가능한 자료 구조인 이터러블의 요소를 탐색하기 위한 포인터로서
    value, done 프로퍼티를 갖는 객체를 반환하는 next() 함수를 메소드로 갖는 객체이다.
    이터레이터의 next() 메소드를 통해 이터러블 객체를 순회할 수 있다.
*/
console.log(iterator.next()); // { value: 'a', done: false }
console.log(iterator.next()); // { value: 'b', done: false }
console.log(iterator.next()); // { value: 'c', done: false }
console.log(iterator.next()); // { value: undefined, done: true }