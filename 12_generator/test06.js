/*
    커스텀 이터러블

    제너레이터는 이터레이터이므로 제너레이터를 활용하여 커스텀 이터러블 객체를 생성할 수 있다.
*/

const test06 = {
    [Symbol.iterator](){
        let[prev,curr] = [-1,0];
        let step = 0;
        const MAX_STEP = 10;
        return{
            next(){
                [prev,curr] = [prev,++curr];
                return {value : curr, done: ++step > MAX_STEP};
            }
        };
    }
};
for(let val of test06){
    console.log(val);
}
/*
    위와 같이 이터레이터를 생성하려면 이터레이션 프로토콜을 준수해야 한다.
    즉, Symbol.iterator를 프로퍼티 키로 사용한 메서드를 구현하여
    이터러블 객체를 만들고 Symbol.iterator를 프로퍼티 키로 사용한 메소드가
    value, done 프로퍼티를 갖는 객체를 반환하는 next() 함수를 메소드로 갖는 객체를 반환해야 한다.
*/

console.log("-------------------------------------");


const gneTest06 = {
    *[Symbol.iterator](){
        let [prev, curr] = [-1,0];
        const MAX_STEP = 10;
        for(let i = 0 ; i < MAX_STEP ; i++){
            [prev, curr] = [curr, ++curr];
            yield curr;
        };
    }
};

for (const val of gneTest06) {
    console.log(val);
};
/*
* [Symbol.iterator]()는 이터레이터를 제너레이터로 구현한 것이다.
따라서 gneTest06 객체는 이터레이터를 구현한 이터러블 객체이다.

이처럼 제너레이터로 이터레이터를 구현하면 value, done 프로퍼티를 갖는 객체를 반환하는
next() 메서드를 별도로 구현하지 않아도 동일한 객체를 반환하기 때문에 구현이 간단하며 가독성이 높아진다.
*/



console.log("-------------------------------------");
const genFn = function*(MAX_STEP){
    let[prev, curr] = [-1,0];
    for(let i = 0; i < MAX_STEP; i++){
        [prev,curr] = [curr,++curr];
        yield curr;
    };
};
for(let val of genFn(10)){
    console.log(val);
}
// 제너레이터만을 이용하여 순회를 구현