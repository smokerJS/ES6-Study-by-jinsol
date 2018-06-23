/*

    rest parameter

    rest 파라미터는 Spread 연산자(...)를 사용하여 파라미터를 정의한 것을 의미한다.
    이를 사용하면 인수의 리스트를 함수 내부에서 배열로 전달받는다.

*/

function array(...rest){
    console.log(Array.isArray(rest));   // true
    console.log(rest);  // [1,2,3,4,5,6]
}
array(1,2,3,4,5,6);


function test1(val1,val2,...rest){
    console.log(val1);  // 1
    console.log(val2);  // 2
    console.log(rest);  // [3,4,5,6]
}
test1(1,2,3,4,5,6);
// 파라미터를 정의할 경우 순차적으로 대입 후 rest에서 남은 인자가 배열로 바뀐다.


function test2(...rest,val1,val2){} //Rest parameter must be last formal parameter
test2(1,2,3,4,5,6);
// rest 파라미터는 반드시 마지막에 와야한다.
