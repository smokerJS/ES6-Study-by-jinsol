/*

    closer

    for loop 등에 var를 사용하면 초기화식에 사용된 변수는 전역 변수로 계속 남아있게된다.
    또한 이 변수의 값을 객체에 대입하거나 불러올때 최종적으로 대입된 변수의 값으로 대입이된다.
    이를 해결하는것이 클로저이다.

*/


var funcs = [];
// 함수의 배열을 생성하는 for 루프의 i는 전역 변수다.
for (var i = 0; i < 3; i++) {
  funcs.push(function () { console.log("클로저 예제 : ",i); });
}

// 배열에서 함수를 꺼내어 호출한다.
for (var j = 0; j < 3; j++) {
  funcs[j]();
}
// 3 3 3 출력


funcs.splice(0,funcs.length);


// 함수의 배열을 생성하는 for 루프의 i는 전역 변수다.
for (var i = 0; i < 3; i++) {
  (function (index) { // index는 자유변수다.
    funcs.push(function () { console.log("클로저 예제 : ",index); });
  }(i));
}

// 배열에서 함수를 꺼내어 호출한다
for (var j = 0; j < 3; j++) {
  funcs[j]();
}
// 0 1 2 출력