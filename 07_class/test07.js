/* 
    호이스팅

    클래스는 let,const 와 같이 호이스팅 되지 않는 것처럼 동작한다.
    즉, class 선언문 이전에 클래스를 참조하면 참조 에러가 발생한다.
*/

const test = new Test07();  // ReferenceError: Test07 is not defined
class Test07{};

/*
  자바스크립트는 ES6의 class를 포함하여 모든 선언(var,let,const,function,class)을 호이스팅한다.
  하지만 클래스는 스코프의 선두에서 선언문에 도달할 때까지 일시적 사작지대에 빠진다.
 
  ES6의 class도 사실은 함수이다.
  다만 function 키워드로 선언한 함수 선언식과 같은 방식으로 호이스팅 하지 않고
  let const 키워드로 선언한 변수에 함수를 한당하는 함수 표현식과 동일하게 호이스팅한다.
  (일시적 사각지대는 01_var let const/test02.js 참조)
*/