/*
    for of loop

    ES6에 새로 추가된 for of loop 는 이터러블 객체를 순회하며
    next() 메서드를 호출하고 next() 메서드가 반환하는 객체의 done 프로퍼티가 true 가 될 때까지 반복한다.
*/

const arr = ['a','b','c','d','e'];
for(let data of arr){
    console.log(data);
};

// 만약 index 값이 필요하다면 entries() 메서드를 사용하여 값을 추출한다.
for(let [index,data] of arr.entries()){
    console.log(`${index} : ${data}`);
};


// 변수 타입과 for of
// 문자열
for (const val of 'abc') {
    console.log(val);       // a b c
}

// Map
for (const [key, value] of new Map([['a', '1'], ['b', '2'], ['c', '3']])) {
    console.log(`key : ${key} value : ${value}`); // key : a value : 1 ...
}

// Set
for (const val of new Set([1, 2, 3])) {
    console.log(val);   // 1 2 3
}