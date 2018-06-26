/*
    프로미스의 생성과 사용

    프로미스는 Promise 생성자 함수를 통해 인스턴스화한다.
    Promise 생성자 함수는 비동기 작업을 수행할 콜백 함수를 인자로 전달받는데
    이 콜백 함수는 resolve와 reject 함수를 인자로 전달받는다.

*/

function setTime(time){
    //Promise 객체의 생성
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // 비동기 작업 수행
            if( bool ){
                resolve(done);
            }  
            else { // 비동기 작업 수행 실패 
                reject('Error: ' +err);
            }
        },time);
    })
}
//var bool = true;  
var bool = false;
// bool의 값을 바꾸며 실행해주세요
var err = "비동기 에러 발생";
var done = "비동기 성공";

/*
    Promise는 비동기 처리가 성공(fulfilled)하였는지 또는 실패(rejected)하였는지 등의 상태(state) 정보를 갖는다.

    pending     	비동기 처리가 아직 수행되지 않은 상태
    fulfilled       비동기 처리가 수행된 상태 (성공)
    rejected        비동기 처리가 수행된 상태 (실패)
    settled         비동기 처리가 수행된 상태 (성공 또는 실패)
*/

setTime(1000)
.then(
    // 첫 번째 콜백 함수는 성공(fulfilled, resolve 함수가 호출된 상태) 시 호출된다.
    result => console.log(result),
    // 두 번째 함수는 실패(rejected, reject 함수가 호출된 상태) 시 호출된다.
    error => console.log(error)
);

/*
    위의 예제처럼 비동기 함수 내에서 Promise 객체를 생성하고
    그 내부에서 비동기 처리를 구현한다.
    이때 비동기 처리에 성공하면 resolve 메서드를 호출한다.
    resolve 메서드의 인자로 비동기 처리 결과를 전달하고, 처리 결과는 Promise 객체의 후속 처리 메서드로 전달된다.
    만약 비동기 처리에 실패하면 reject 메서드를 호출하고 위와 같이 진행한다.


    Promise로 구현된 비동기 함수는 Promise 객체를 반환하여야 한다.
    반환되는 Promise 객체는 후속처리 메서드(then, catch)를 통해 비동기 처리 결과 또는 에러 메세지를 전달받아 처리한다.
    Promise 객체의 상태 정보에 따라 후속 처리 메서드를 체이닝 방식으로 호출한다.

    then
    then 메소드는 두 개의 콜백 함수를 인자로 전달 받는다.
    첫 번째 콜백 함수는 성공(fulfilled, resolve 함수가 호출된 상태) 시 호출되고
    두 번째 함수는 실패(rejected, reject 함수가 호출된 상태) 시 호출된다.

    catch
    예외(비동기 처리에서 발생한 에러와 then 메소드에서 발생한 에러)가 발생하면 호출된다.
*/