/*
    클래스 상속
    
    클래스 상속은 코드 재사용 관점에서 매우 유용하다.
    새롭게 정의할 클래스가 기존에 있는 클래스와 매우 유사하다면,
    상속을 통해 그대로 사용하되 다른점만 구현하면 된다.
*/

// extends 키워드   - 부모를 상속받는 자식클래스를 정의할 떄 사용

// 부모클래스
class Circle{
    constructor(radius){
        this.radius = radius; // 반지름
    }
    getDiameter(){ return 2 * this.radius; } // 원의 지름
    getPerimeter(){ return 2*Math.PI*this.radius; } // 원의 둘래
    getArea(){ return Math.PI*Math.pow(this.radius,2) } // 원의 넓이
}

// 자식클래스
class Cylinder extends Circle {
    constructor(radius, height) {
        super(radius);  // 부모클래스를 참조하는 선언
        this.height = height;
    };
    getArea(){ return (this.height * super.getPerimeter()) + (2*super.getArea()); };
    // 원통의 넓이 (부모의 getArea 메서드 오버라이딩)

    getVolume() { return super.getArea() * this.height; };
    // 원통의 부피 (부모의 getArea 를 가져와 height 를 곱하였다)
}

const cylinder = new Cylinder(2,10) // 반지름 2, 높이가 10인 원통

// 원의 지름
console.log(cylinder.getDiameter()) // 4 - 부모의 getDiameter 를 그대로 사용

// 원의 둘레
console.log(cylinder.getPerimeter()) // 12.56... - 부모의 getPerimeter 를 그대로 사용

// 원통의 넓이
console.log(cylinder.getArea()) // 150.79... - 재정의한 메서드

// 원통의 부피
console.log(cylinder.getVolume()) // 125.66... - 새로 정의한 메서드


// cylinder는 Cylinder 클래스의 인스턴스이다.
console.log(cylinder instanceof Cylinder); // true
// cylinder는 Circle 클래스의 인스턴스이다.
console.log(cylinder instanceof Circle);   // true

/*
    자바스크립트는 오버로딩을 지원하지 않지만 arguments 객체를 사용하여 구현할 수 있다. (잘 쓰지 않는편)
    위와 같이 오버라이딩을 사용하여 코드의 재사용성을 확장시킬 수 있다.

    프로토타입 체인은 특정 객체의 프로퍼티나 메소드에 접근하려고 할 때
    프로퍼티 또는 메소드가 없다면 [[Prototype]] 프로퍼티가 가리키는 링크를 따라
    자신의 부모 역할을 하는 프로토타입 객체의 프로퍼티나 메소드를 차례대로 검색한다.
    그리고 검색에 성공하면 그 프로퍼티나 메소드를 사용한다.

    class-extends.png 참조
*/