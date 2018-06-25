// 배열 디스트럭처링 1
// Array destructuring


// ES5
var arr = [1, 2, 3];
var one   = arr[0];
var two   = arr[1];
var three = arr[2];
console.log(one, two, three); // 1 2 3
// ES5에서 배열의 각 요소를 배열로부터 디스트럭처링하여 변수에 할당하는 방법이다.



// ES6
const arr2 = [1,2,3];
const [one2,tow2,three2] = arr2;
console.log(one2,tow2,three2); // 1 2 3
// 배열의 인덱스를 기준으로 배열로부터 요소룰 추출하여 변수에 할당한다.




