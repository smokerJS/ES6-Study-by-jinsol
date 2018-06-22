/*

    this

    일반 함수의 경우, 해당 함수를 호출하는 패턴에 따라 this 에 바인딩 되는 객체가 달라진다.
    콜백함수 내부의 this 는 전역 객체 window 를 가리킨다.

*/

function Prefixer(prefix) {
    this.prefix = prefix;
}// Prefixer 인스턴스의 prefix 에 매개변수 prefix 를 대입

Prefixer.prototype.prefixArray = function (arr) {
    var that = this;  // this: Prefixer 생성자 함수의 인스턴스
    return arr.map(function (x) {
        return that.prefix + ' ' + x;
    });
};

var pre = new Prefixer('Hi');   // Prefixer 생성자 매개변수에 Hi
console.log(pre.prefixArray(['Lee', 'Kim']));




// 화살표 함수의 this
// 화살표 함수는 언제나 자신을 포함하는 외부 스코프에서 this 를 계승받는다.
// 이를 Lexical this라 한다.

function Prefixer2(prefix) {
  this.prefix = prefix;
}

Prefixer2.prototype.prefixArray = function (arr) {
  return arr.map(x => `${this.prefix}  ${x}`);  // this 가 본인이 아니라 본인을 포함하는 외부 스코프 즉 Prefixer2
};

const pre2 = new Prefixer2('Hi');
console.log(pre2.prefixArray(['Lee', 'Kim']));

// 화살표 함수는 Lexical this 를 지원하므로 콜백 함수로 사용하기 편리하다.
// 하지만 화살표 함수를 사용하는 것이 오히려 혼란을 불러오는 경우도 있다.