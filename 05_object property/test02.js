// 프로퍼티 이름 조합

// ES5
var i = 0;
var propNamePrefix = 'prop_';

var obj = {};

obj[propNamePrefix + ++i] = i;
obj[propNamePrefix + ++i] = i;
obj[propNamePrefix + ++i] = i;

console.log(obj); // { prop_1: 1, prop_2: 2, prop_3: 3 }
// ES5에서는 프로퍼티 key 값을 동적으로 할당할 때 초기화 이후 할당이 가능하다.



// ES6
let j = 0;
const propNamePrefix2 = 'prop_';

const obj2 = {
  [propNamePrefix2 + ++j]: j,
  [propNamePrefix2 + ++j]: j,
  [propNamePrefix2 + ++j]: j
};

console.log(obj2); // { prop_1: 1, prop_2: 2, prop_3: 3 }
// ES6 에서는 초기화와 동시에 key 값을 동적으로 할당한다.