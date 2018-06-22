/*
    let

    javascript는 모든 선언을 호이스팅한다.
    호이스팅이란, var 선언문이나 function 선언문 등을 해당 스코프의 선두로 옮긴 것처럼 동작하는 특성이다.



    let 은 호이스팅 대상이지만 변수 선언 이전에 참조하면 참조 에러(ReferenceError)가 발생한다.

     - let 키워드로 선언된 변수는 스코프의 시작에서 변수의 선언까지 일시적 사각지대(Temporal Dead Zone; TDZ) 에 빠진다.

     - 변수는 선언단계 -> 초기화단계 -> 할당단계 세 단계를 거치는데,
       var 키워드로 선언된 변수는 선언과 초기화가 한번에 이루어지지만 
       let 키워드로 선언된 변수는 스코프에 변수를 선언하지만 초기화는 변수 선언문에 도달했을 때 이루어진다.
       초기화 이전에 변수에 접근하려고 하면 참조 에러가 발생한다.
       스코프의 시작 지점부터 초기화 시작 지점까지의 구간을 "일시적 사작지대" 라고 부른다


*/



console.log(test) // is not defined
let test = 123;