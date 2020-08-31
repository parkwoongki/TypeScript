"use strict";
var Foo5 = /** @class */ (function () {
    // x는 생성자 내부에서만 유효한 지역 변수이다.
    function Foo5(x) {
        console.log(x);
    }
    return Foo5;
}());
var foo5 = new Foo5('Hello');
console.log(foo); // Foo {}
