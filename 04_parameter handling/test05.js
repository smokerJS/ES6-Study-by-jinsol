/*

    spread 함수의 인자로 사용

    배열을 함수의 인자로 사용하고, 배열의 각 요소를 개별적인 파라미터로 전달하고 싶은 경우
    spread 연산자를 사용하여 개별적인 요소로 파라미터에 할당한다.

*/

function sum (...rest){
    let result = 0;
    for(p of rest){
        result += p;
    }
    return result;
}

var arr = [1,2,3,4,1,6,7,7,8,9,1,2,3,4,1,1,];
console.log(sum(...arr));
// rest 파라미터와 형태가 동일하여 혼동에 주의해야 한다.


//rest 파라미터는 항상 마지막 매개변수여야 하지만 spread 연산자는 위치가 자유롭다.

var arr2 = [1,2,3]
var arr3 = [4,5,6]
var arr4 = [7,8,9]
console.log(sum(2,3,1,...arr2,2,4,5,...arr3,3,2,6,...arr4));