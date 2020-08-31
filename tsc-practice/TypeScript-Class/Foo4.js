"use strict";
var Foo4 = /** @class */ (function () {
    /*
    접근 제한자가 선언된 생성자 파라미터 x는 클래스 프로퍼티로 선언되고 지동으로 초기화된다.
    public이 선언되었으므로 x는 클래스 외부에서도 참조가 가능하다.
    */
    function Foo4(x) {
        this.x = x;
    }
    return Foo4;
}());
var foo4 = new Foo4('Hello');
console.log(foo4); // Foo { x: 'Hello' }
console.log(foo4.x); // Hello
var Bar4 = /** @class */ (function () {
    /*
    접근 제한자가 선언된 생성자 파라미터 x는 멤버 변수로 선언되고 자동으로 초기화된다.
    private이 선언되었으므로 x는 클래스 내부에서만 참조 가능하다.
    */
    function Bar4(x) {
        this.x = x;
    }
    return Bar4;
}());
var bar4 = new Bar4('Hello');
console.log(bar4); // Bar { x: 'Hello' }
// private이 선언된 bar.x는 클래스 내부에서만 참조 가능하다
// console.log(bar4.x); // Property 'x' is private and only accessible within class 'Bar'.
