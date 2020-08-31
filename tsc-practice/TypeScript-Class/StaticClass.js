"use strict";
var StaticClass = /** @class */ (function () {
    function StaticClass() {
        // 생성자가 호출될 때마다 카운터를 1씩 증가시킨다.
        StaticClass.instanceCounter++;
    }
    // 생성된 인스턴스의 갯수
    StaticClass.instanceCounter = 0;
    return StaticClass;
}());
var sc1 = new StaticClass();
var sc2 = new StaticClass();
console.log(StaticClass.instanceCounter); // 2
// console.log(sc2.instanceCounter); // error TS2339: Property 'instanceCounter' does not exist on type 'Foo'.
