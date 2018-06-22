/*

    let - block level scope

    var 키워드로 이름이 같은 변수를 중복해서 선언할 수 있었지만, let 키워드로는 이름이 같은 변수를 중복해서 선언 할 수 없다.

*/

let test = 1; // 전역 변수
{
    console.log(test) // is not defined
    let test = 2; // 지역 변수
}

// 1이 출력될것처럼 보이지만 같은 스코프 내에 test가 let으로 선언되어 참조 에러가 발생한다.