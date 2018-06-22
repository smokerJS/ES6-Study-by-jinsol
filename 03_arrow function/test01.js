/*

    화살표 함수의 선언

    화살표 함수(arrow function)는 function 키워드 새신 화살표(=>)를 사용한다.
    하지만 모든 경우 사용할 수 있는것은 아니다.

*/


// 매개변수 지정
()=>{console.log("매개변수가 없는 경우");};

x=>{console.log("매개변수가 한 개인 경우 소괄호 생략 가능");};
(x=>{console.log(x)})(2);

(x,y)=>{console.log("다수의 매개변수 소괄호 생략 불가능");};




// 함수 몸체 지정 방법
x => {return x*x};          // single line block
x=>x*x                      // 함수의 몸체가 한줄의 구문이라면 중괄호를 생략할 수 있으며 암묵적으로 return 된다.

console.log((x=>x*x)(2));



()=>{return {test:1}};
()=>({a:1})                 // 위 표현과 동일하며 객체 반환시 소괄호를 사용한다. 

console.log(()=>({a:1})); 



()=>{
    console.log("라인수가 한줄이 아니라면 중괄호로 묶는다.");
    return 100;
}