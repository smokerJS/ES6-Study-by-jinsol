// import

// export한 모듈을 로드하려면 export한 이름으로 import한다.
// 확장자는 생략 가능하다.
import{pi,square,Person} from "./test02";

console.log(pi);         // 3.141592653589793
console.log(square(10)); // 100
console.log(new Person('jinsol')); // Person { name: 'jinsol' }



// lib라는 이름으로 임포트
import * as lib from './test02';

console.log(lib.pi);         // 3.141592653589793
console.log(lib.square(10)); // 100
console.log(new lib.Person('jinsol')); // Person { name: 'jinsol' }
// 알리아스 사용



import { pi as PI, square as sq, Person as P } from './lib';

console.log(PI);    // 3.141592653589793
console.log(sq(2)); // 4
console.log(new P('jinsol')); // Person { name: 'jinsol' }
// 각 객체에 알리아스 사용


// 모듈에서 하나만을 export할 때는 default 키워드를 사용할 수 있다. 다만, default를 사용하는 경우, var, let, const는 사용할 수 없다.
export default function (x) {
    return x * x;
}