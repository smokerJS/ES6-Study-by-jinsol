/*

    const - 초기화 및 block level scope

    const 는 반드시 선언과 동시에 할당이 이루어져야 한다.

    let과 마찬가지로 블록 레벨 스코프를 갖는다.

*/


// const test; // Missing initializer in const declaration

{
    const test = 10;
    console.log(test); // 10
}
console.log(test); // is not defined