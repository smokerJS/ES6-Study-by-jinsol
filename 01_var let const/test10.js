/*

    const - 상수

    상수는 가독성과 유지보수의 편의를 위해 적극적으로 사용해야 한다.

*/

var rand = 100;

// 10의 의미를 알기 어렵기 때문에 가독성이 좋지 않다.
if(rand > 10){}

// 값의 의미를 명확히 기술하여 가독성이 향상된다.
const MAXROWS = 10;
if(rand > MAXROWS){}


// const는 객체에도 사용할 수 있다. 이때도 재할당은 금지된다.
const obj = {test : 123};
obj = {bar : 456}; // Assignment to constant variable.