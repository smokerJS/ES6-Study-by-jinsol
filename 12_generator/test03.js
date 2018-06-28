// 제너레이터 진행

// 제너레이터 함수 선언
function* genFunc() {
    console.log('제너레이터 함수 시작');
    yield 1;
    console.log('제너레이터 함수 재시작');
    yield 2;
    console.log('제너레이터 함수 종료');
    return 3;
}
// 제너레이터 함수 호출. 제너레이터 객체를 생성하고 반환한다.
const generator = genFunc();

// 처음 실행
console.log(generator.next());
// 제너레이터 함수 시작
// { value: 1, done: false }

// 두번째 실행
console.log(generator.next());
// 제너레이터 함수 재시작
// { value: 2, done: false }

// 마지막 실행
console.log(generator.next());
// 제너레이터 함수 종료
// { value: 3, done: true }

/*
    제너레이터 객체는 기본적으로 next() 메서드를 가지고 있다.
    이는 제너레이터 객체가 이터레이터인 것을 의미한다.
    이터레이터의 next() 메서드는 value,done 프로퍼티를 갖는 객체를 반환한다.
    value 프로퍼티는 yield과 return 구문의 반환값이고
    done 프로퍼티는 제너레이터 함수 내의 모든 yield 구문이 실행되었는지를 나타내는 boolean 타입의 값이다.
*/