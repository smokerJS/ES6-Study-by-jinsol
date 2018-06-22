/*

    ES6 부터 도입된 template literal 은 새로운 문자열 표기법이다.
    일반 문자열을 표현하는 ' " 따옴표 문자 대신  달리 백틱(backtick)문자 ` 를 사용한다.

*/

let template = `템플릿 리터럴은 '작은 따오표 와', "큰 따옴표를" 혼용할 수 있다.`;
console.log(template);

template = "일반적인 문자열의 줄바꿈은 허용되지 않으며, 공백을 표현하기 위해서\
            백슬래시 로 시작하는 Escape Sequence 를 사용하여야 한다";
console.log(template);

template = `
템플릿 리터럴을 사용하면
손쉽게 줄바꿈이 가능하다.
`
console.log(template);
