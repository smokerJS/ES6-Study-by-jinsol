/*
    이터러블과 이터레이터

    ES6에는 이터러블(iterable)과 이터레이터(iterator)를 정의한 이터레이션 프로토콜(iteration protocol)이 추가되었다.

    
    이터러블(iterable)
    이터러블은 순회 가능한 자료 구조이다.
    Symbol.iterator를 프로퍼티 키로 사용한 메소드를 구현하는 것에 의해 순회 가능한 자료 구조인 이터러블이 된다.

    이터레이터(iterator)
    Symbol.iterator를 프로퍼티 키로 사용한 메소드는 이터레이터를 반환한다.
    이터레이터는 순회 가능한 자료 구조인 이터러블의 요소를 탐색하기 위한 포인터로서
    next() 메서드를 갖는 객체이다.
    next() 메서드는 value,done 프로퍼티를 갖는 객체를 반환하며 이 메서드를 통해 이터러블 객체를 순회할 수 있다.

    iteration-protocol.png 참조
*/

/*
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