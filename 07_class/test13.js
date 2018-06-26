/*
    super 키워드

    super 키워드는 부모 클래스를 참조할 때 또는 부모 클래스의 생성자를 호출할 때 사용한다.
    test12 예제 참조
*/

// 부모 클래스
class Circle{
    constructor(radius){ this.radius = radius; }
    getDiameter(){ return 2 * this.radius; }
    getPerimeter(){ return 2*Math.PI*this.radius; }
    getArea(){ return Math.PI*Math.pow(this.radius,2) }
}

// 자식클래스
class Cylinder extends Circle {
    constructor(radius, height) {
        super(radius);  // 부모클래스를 참조하는 선언
        // super 메서드는 부모 클래스의 인스턴스를 생성한다.
        this.height = height;
    };
    getArea(){ return (this.height * super.getPerimeter()) + (2*super.getArea()); };
    // super을 사용하여 부모클래스의 메서드를 호출한다.
    getVolume() { return super.getArea() * this.height; };
}

/*
super 메소드는 자식 class의 constructor 내부에서 부모 클래스의 constructor(super-constructor)를 호출한다.
즉, 부모 클래스의 인스턴스를 생성한다.
자식 클래스의 constructor에서 super()를 호출하지 않으면 this에 대한 참조 에러(ReferenceError)가 발생한다.
*/

class Parent {}
class Child extends Parent {
  constructor() {} // ReferenceError: this is not defined
}
const child = new Child();
// 이것은 super 메서드를 호출하기 이전에는 this를 참조할 수 없음을 의미한다.
// super 키워드는 부모 클래스에 대한 참조이며, 부모 클래스의 프로퍼티 또는 메서드를 참조하기 위하여 사용한다.
// 반드시 자식클래스의 생성자 정의에 super 메서드가 포함되어야 한다.
