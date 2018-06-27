// while loop 를 사용한 순회

const arr = [1,2,3,4,5];
const iterator = arr[Symbol.iterator]();

console.log("start while loop");
while(true){
    let result = iterator.next();
    if(result.done) break;
    console.log(result.value);
}
console.log("end while loop");
