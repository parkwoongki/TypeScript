"use strict";
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    Person1.prototype.walk = function () {
        console.log(this.name + " is walking");
    };
    return Person1;
}());
var person1 = new Person1('ParkWoongKi');
person1.walk();
