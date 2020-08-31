"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Foo = /** @class */ (function () {
    function Foo(x, y, z) {
        this.x = x, this.y = y, this.z = z;
    }
    return Foo;
}());
var foo3 = new Foo('x', 'y', 'x');
// public 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조 가능하다.
console.log(foo3.x);
// protected 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조할 수 없다.
// console.log(foo3.y);
// error TS2445: Property 'y' is protected and only accessible within class 'Foo' and its subclasses.
// private 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조할 수 없다.
// console.log(foo3.z);
// error TS2341: Property 'z' is private and only accessible within class 'Foo'.
var Bar = /** @class */ (function (_super) {
    __extends(Bar, _super);
    function Bar(x, y, z) {
        var _this = _super.call(this, x, y, z) || this;
        // public 접근 제한자는 자식 클래스 내부에서 참조 가능하다.
        console.log(_this.x);
        // protected 접근 제한자는 자식 클래스 내부에서 참조 가능하다.
        console.log(_this.y);
        return _this;
        // private 접근 제한자는 자식 클래스 내부에서 참조할 수 없다.
        // console.log(this.z);
        // error TS2341: Property 'z' is private and only accessible within class 'Foo'.
    }
    return Bar;
}(Foo));
