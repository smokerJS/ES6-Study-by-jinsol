/*
    제너레이터 호출

    제너레이터 함수를 호출하면 함수 블록이 실행되는 것이 아니라, 제너레이터 객체를 반환한다.
*/

// 제너레이터 함수 선언
function* foo() {
    yield 1;
    yield 2;
    yield 3;
};

// 제너레이터 함수 호출 - 제너레이터 객체를 생성하고 반환한다.
const generator = foo();

for (const val of generator) {
    console.log(val); // 1 2 3
};

// spead operator
const arr = [...foo()];
console.log(arr); // [ 1, 2, 3 ]

/*
    제너레이터 함수의 함수 블록을 실행하려면 제너레이터 함수가 생성한 제너레이터 객체의 next() 메서드를 호출한다.
    yield 구문은 next() 메서드를 일시 중지시킨다.
    return처럼 값을 반환할 수 있다.

    next() 메서드가 처음으로 호출되면 yield 이전까지 실행하고 실행을 일시 중지한다.
    next() 메서드가 호출되면 일시 중지된 코드를 다시 실행하고 yield를 만나면 또 다시 실행을 일시 중지한다.

    next() -> yield -> next() ->  yield
    이러한 흐름은 return을 만나거나 또는 함수의 마지막 라인까지 실행하여
    해당 함수가 종료할 때까지 진행된다.
*/

