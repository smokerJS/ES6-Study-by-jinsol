/*
    전역변수 var

    ES6 이전 javascript 에서는 var 키워드를 사용하여 변수 선언을 해야했다.
    var 키워드는 설계상 오류에 주의를 기울이지 않으면 심각한 문제를 일으킨다.

    1. 함수 레벨 스코프
     - 전역 변수의 남발
     - for loop 초기화식에서 사용한 변수를 for loop 외부 또는 전역에서 참조할 수 있다.

    2. var 키워드 생략 허용
     - 의도하지 않은 변수의 전역화

    3. 중복 선언 허용
     - 의도하지 않은 변수값 변경
    
    4. 변수 호이스팅
     - 변수를 선언하기 전에 참조가 가능하다.

*/

console.log(test) // undefined
var test = 123;
console.log(test) // 123
{
    var test = 456
}
console.log(test) // 456