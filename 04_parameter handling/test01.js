// 파라미터 기본값 (default parameter value)


//ES5
function plus(x,y){
    x = x || 0;
    y = y || 0;
    return x+y;
    // 매개변수 x,y 에 인수를 할당하지 않은 경우 0을 할당한다.
}
console.log(plus());    // 0
console.log(plus(1,2)); // 3

// ES6
function plus2(x = 0, y = 0) {
    // 파라미터 x, y에 인수를 할당하지 않은 경우, 기본값 0을 할당한다.
    return x + y;
}
console.log(plus2());     // 0
console.log(plus2(1, 2)); // 3