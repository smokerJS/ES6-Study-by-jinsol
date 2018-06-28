// next() 인자

function* foo(n) {
    const x = yield n;       // x = 10
    const y = yield (x + 1); // y = 20
    const z = yield (y + 2); // z = 30
    return x + y + z;
}

// 파라미터 n에 1을 할당하고 제너레이터 객체를 iterator에 할당
const iterator = foo(1);

console.log(iterator.next());   // const x = yield n;   n = 1
// {value:1, done:false}

console.log(iterator.next(10));  // const y = yield (x + 1);    x = 10
// {value:11, done:false}

console.log(iterator.next(20));  // const z = yield (y + 2);    y = 20
// {value:22, done:false}

console.log(iterator.next(30));  // return x + y + z;   z = 30
// {value:60, done:true}



// yield는 대입문 변수에 값을 할당하지 않고, next()의 인자가 대입문 변수에 할당된다.
// generator-next.png 참조