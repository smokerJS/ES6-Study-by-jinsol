/*
    커스텀 이터러블

    객체는 이터러블이 아니다.
    하지만 이터레이션 프로토콜을 준수하면 순회할 수 있는 이터러블 객체를 만들수 있다.

    Symbol.iterator를 프로퍼티 키로 사용하는 메소드를 구현하면 순회 가능한 자료 구조인 이터러블이 된다.
*/



const test05 = {        // 객체 생성
    [Symbol.iterator](){    // 객체에 Symbol.iterator 정의
        let [prev ,curr] = [0,1];
        let stepCnt = 0;
        const MAX_STEP = 10;
        return{     // test05 객체가 순회할 때마다 next 함수가 호출
            next(){
                [prev,curr] = [curr,++curr];
                return {value:prev, done:stepCnt++ >= MAX_STEP};
            }
        };
    }
};

for(let val of test05){
    console.log(val);
}

// spread 연산자
const arr = [...test05];
console.log(arr); // [ 1, 2, 3, ... ]

// 디스트럭처링
const [first, second, ...rest] = test05;
console.log(first, second, rest); // 1 2 [ 3, ... ]


/*

Symbol.iterator를 프로퍼티 키로 사용한 메소드는
next() 함수를 프로퍼티로 가지는 객체를 반환하여야 한다.
그리고 next() 함수는 done과 value 프로퍼티를 가지는 객체를 반환한다.
for-of는 done 프로퍼티가 true가 될 때까지 반복하며 done 프로퍼티가 true가 되면 반복을 중지한다.

이터러블 객체는 for–of 루프뿐만 아니라 디스트럭쳐링, spread 연산자, Map과 Set의 생성자에도 사용된다.

*/