// 객체 디스트럭처링 2



const { prop1: p1, prop2: p2 } = { prop1: 'a', prop2: 'b' };
console.log(p1, p2); // 'a' 'b'
console.log({ prop1: p1, prop2: p2 }); // { prop1: 'a', prop2: 'b' }



// 축약형
const { prop3, prop4 } = { prop3: 'a', prop4: 'b' };
console.log({ prop3, prop4 }); // { prop3: 'a', prop4: 'b' }



// default value
const { prop5, prop6, prop7 = 'c' } = { prop5: 'a', prop6: 'b' };
console.log({ prop5, prop6, prop7 }); // { prop5: 'a', prop6: 'b', prop7: 'c' }



// 초기화를 하더라도 덮어쓴다.
const { prop9, prop10 = 'c' } = { prop9: 'a', prop10: 'b' };
console.log({ prop9, prop10 }); // { prop9: 'a', prop10: 'b' }
