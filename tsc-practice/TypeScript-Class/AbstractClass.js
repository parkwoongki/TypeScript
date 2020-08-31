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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    // 일반 메소드
    Animal.prototype.move = function () {
        console.log('roaming the earth...');
    };
    return Animal;
}());
// 직접 인스턴스를 생성할 수 없다.
// new Animal();
// error TS2511: Cannot create an instance of the abstract class 'Animal'.
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 추상 클래스를 상속한 클래스는 추상 클래스의 추상 메소드를 반드시 구현하여야 한다
    Dog.prototype.makeSound = function () {
        console.log('bowwow~~');
    };
    return Dog;
}(Animal));
var myDog = new Dog();
myDog.makeSound();
myDog.move();
