/*

    arguments

    ES5 에서는 인자의 개수를 사전에 알 수 없는 가변 인자 함수의 경우
    arguments 객체를 통해 인수를 확인한다.

    ES6 부터는 rest 파라미터를 통하여 더욱 손쉽게 arguments 를 대체할 수 있다.

*/

function array(){
    console.log(arguments);
}
array(1,2); // { '0': 1, '1': 2 }
array(); // {}
// arguments 는 유사배열 객체이다.


// ES5
function sum() {
    /*
    가변 인자 함수는 arguments 객체를 통해 인수를 전달받는다.
    유사 배열 객체인 arguments 객체를 배열로 변환한다.
    */
    var array = Array.prototype.slice.call(arguments);
    return array.reduce(function (pre, cur) {
      return pre + cur;
    });
}
console.log(sum(1, 2, 3, 4, 5)); // 15


// ES6
function sum2(...args) {
    console.log(arguments); // Arguments(5)&nbsp;[1, 2, 3, 4, 5, callee: (...), Symbol(Symbol.iterator): ƒ]
    console.log(Array.isArray(args)); // true
    return args.reduce((pre, cur) => pre + cur);
}
console.log(sum2(1, 2, 3, 4, 5)); // 15


// ES6의 화살표 함수에는 arguments 프로퍼티가 없다.
// 따라서 반드시 가변인자 함수를 구현해야 할 때는 rest 파라미터를 사용해야 한다.

var sum3 = (...rest)=>{
    let result = 0;
    for(p of rest){
        result+=p;
    }
    return result;
}
console.log(sum2.hasOwnProperty('arguments')); // true
console.log(sum3.hasOwnProperty('arguments')); // false
console.log(sum3(1, 2, 3, 4, 5)); // 15
console.log(sum3()); // 0
