/*
    프로미스의 에러 처리

    비동기 함수 setTime은 Promise 객체를 반환한다.
    Promise 객체의 후속처리 메서드를 사용하여 비동기 처리 결과에 대한 후속 처리를 수행한다.
    비동기 처리 시 발생한 에러 메세지는 then 메서드의 두 번째 콜백 함수로 전달된다.

    Promise 객체의 후속 처리 메소드 catch을 사용하여도 에러를 처리할 수 있다.
*/

function setTime(time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if( bool ){ resolve("비동기 성공"); }  
            else { 
                reject('Error: 비동기 에러 발생');
                throw catchMSg;
            }
        },time);
    })
}
 
var bool = false;
var catchMSg = "Error! 에러가 발생했어요!";
setTime(1000)
.then(
    result => console.log(result),
    error => console.log(error) // 에러를 캐치한다.
).catch(
    error => console.log(error) // 에러를 캐치한다.
);

/*
    then 메서드의 두 번째 콜백함수를 실행하지 않고
    바로 catch 메서드를 실행한다.
    test02.js와 달리 에러를 캐치할 수 있다.


    catch 메서드는 에러를 처리한다는 점에서 then 메서드의 두 번째 콜백 함수와 유사하지만 미묘한 차이가 있다.
    then 메서드의 두 번째 콜백 함수는 비동기 처리에서 발생한 에러(reject 함수가 호출된 상태)만을 캐치한다.
    하지만 catch 메서드는 비동기 처리에서 발생한 에러뿐만 아니라 then 메서드 내부에서 발생한 에러도 캐치한다.
    따라서 에러 처리는 catch 메서드를 사용하는 편이 보다 효율적이다.

*/

