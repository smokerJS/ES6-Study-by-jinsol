/*
    이터러블의 구현

    제너레이터 함수를 호출하면 함수 블록이 실행되는 것이 아니라, 제너레이터 객체를 반환한다.
    이 제너레이터 객체는 for-of 루프로 순회할 수 있으며 next() 메서드를 가지고 있다.
    즉, 제너레이터 객체는 이터러블임과 동시에 이터레이터이다.
*/

// 제너레이터 함수
function* genTest() {
    let index = 0;
    while (index < 3) {
      yield index++;
    };
};

// 제너레이터 함수를 호출하여 제너레이터 객체 반환
const generator = genTest();

// 제너레이터 객체는 next() 메서드를 갖는 이터레이터이다.
console.log(generator.next());  // { value: 0, done: false }
console.log(generator.next());  // { value: 1, done: false }
console.log(generator.next());  // { value: 2, done: false }
console.log(generator.next());  // { value: undefined, done: true }

// 제너레이터 객체는 순회가능한 이터러블이다.
for (const val of genTest()) {
    console.log(val); // 0 1 2
}