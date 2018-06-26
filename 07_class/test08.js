/* 
    getter

    getter는 클래스 프로퍼티에 접근할 때마다 클래스 프로퍼티의 값을 조작하는 행위가 필요할 때 사용한다.
    getter는 메소드 이름 앞에 get 키워드를 사용해 정의한다.
    이때 메소드 이름은 클래스 프로퍼티 이름처럼 사용된다.
    다시 말해 getter는 호출하는 것이 아니라 프로퍼티처럼 참조하는 형식으로 사용하며 참조시에 메소드가 호출된다.
    getter는 이름 그대로 무언가를 취득할 때 사용하므로 반드시 무언가를 반환해야 한다.
*/

class Test08{
  constructor(arr = []){
    this._arr = arr;
  };

  // getter : get 키워드 뒤에 오는 메소드 이름 fristElem은 프로퍼티 이름처럼 사용한다.
  get fristElem(){
    // getter는 반드시 무언가를 반환해야 한다.
    return this._arr.length ? this._arr[0] : null;
  };
};

const test = new Test08([1,2]);
console.log(test.fristElem); // 1