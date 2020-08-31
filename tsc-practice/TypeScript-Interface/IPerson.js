"use strict";
/*
인터페이스를 구현하는 클래스는 인터페이스에서 정의한 프로퍼티와 추상 메소드를 반드시 구현하여야 한다.
*/
var Person2 = /** @class */ (function () {
    // 인터페이스에서 정의한 프로퍼티의 구현
    function Person2(name) {
        this.name = name;
    }
    // 인터페이스에서 정의한 추상 메소드의 구현
    Person2.prototype.sayHello = function () {
        console.log("Hello " + this.name);
    };
    return Person2;
}());
function greeter(person) {
    person.sayHello();
}
var me = new Person2('Lee');
greeter(me); // Hello Lee
