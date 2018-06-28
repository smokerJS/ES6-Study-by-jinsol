/*
    심볼의 사용

    객체의 프로퍼티 키는 빈 문자열을 포함하는 문자열과 숫자로 만들 수 있다.
*/

const obj = {};
obj.prop = "myProp";
obj[123] = 123;
obj['prop'+123] = false;
console.log(obj); // { '123': 123, prop: 'myProp', prop123: false }

/*
    Symbol 값도 객체의 프로퍼티 키로 사용할 수 있다.
    Symbol 값은 애플리케이션 전체에서 유일한 값이므로
    Symbol 값을 키로 갖는 프로퍼티는 다른 어떠한 프로퍼티와도 충돌하지 않는다.
*/

const symbol = Symbol("mySymbol");
obj[symbol] = 123;
console.log(obj); //{ '123': 123, prop: 'myProp', prop123: false, [Symbol(mySymbol)]: 123 }
console.log(obj[symbol]); // 123