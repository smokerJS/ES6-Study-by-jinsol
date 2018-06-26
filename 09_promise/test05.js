/*
    프로미스 체이닝

    비동기 함수의 처리 결과를 가지고 다른 비동기 함수를 호출해야 하는 경우,
    함수의 호출이 중첩되어 복잡도가 높아지는 콜백 헬이 발생한다.
    프로미스는 후속 처리 메서드를 체이닝하여 여러 개의 프로미스를 연결하여 사용할 수 있다.
    이로써 콜백 헬을 해결한다.

    Promise 객체를 반환한 비동기 함수는 프로미스 후속 처리 메서드인 then이나 catch 메서드를 사용할 수 있다.
    따라서 then 메서드가 Promise 객체를 반환하도록 하면 여러 개의 프로미스를 연결하여 사용할 수 있다.
*/
var time = 1000;
var bool = true;
//var bool = false;
// bool의 값을 바꾸며 실행해주세요
function setTime1(time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if( bool ){
                console.log("첫번쨰 비동기 성공");
                
                resolve(time -= 200); 
            }  
            else { 
                console.log('첫번쨰 비동기 실패')
                
                reject(time -= 200);
            }
        },time);
    })
}
function setTime2(time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if( bool ){ resolve("두번째 비동기 성공");}  
            else { 
                reject('두번쨰 비동기 실패');
                time -= 200;
            }
        },time);
    })
}

setTime1(time)
.then(result1 =>  setTime2(result1) )
.then(result2 => console.log(result2))
.catch(err => setTime2(err))
.catch(err => console.log(err));