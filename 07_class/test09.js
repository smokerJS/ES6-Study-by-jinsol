/* 
    setter

    setter는 클래스 프로퍼티에 값을 할당할 때마다 클래스 프로퍼티의 값을 조작하는 행위가 필요할 때 사용한다.
    setter는 메소드 이름 앞에 set 키워드를 사용해 정의한다.
    이때 메소드 이름은 클래스 프로퍼티 이름처럼 사용된다.
*/

class Test09{
  constructor(arr = []){
    this._arr = arr;
  };

  get fristElem(){
    return this._arr.length ? this._arr[0] : null;
  };

  set fristElem(elem){
    this._arr = [elem, ...this._arr];
  };

};

const test = new Test09([1,2]);

// 프로퍼티 fristElem 에 값을 할당하면 setter가 호출된다.
test.fristElem = 10;
console.log(test.fristElem); // 10;

// test.fristElem(100); // TypeError: test.fristElem is not a function
// 함수처럼 사용하면 안되기 때문에 주의해야 한다.
