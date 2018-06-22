/*

    let 으로 closer 대체하기

    test05.js 에서 클로저를 사용한 예제에서
    for loop 의 초기화식에 let을 사용하면 간단하게 값을 대입하고 가져올 수 있다.

*/


var funcs = [];
// 함수의 배열을 생성하는 for 루프의 i는 전역 변수다.
for (let i = 0; i < 3; i++) {
  funcs.push(function () { console.log("클로저 예제 : ",i); });
}

// 배열에서 함수를 꺼내어 호출한다.
for (var j = 0; j < 3; j++) {
  funcs[j]();
}
// 0 1 2 출력