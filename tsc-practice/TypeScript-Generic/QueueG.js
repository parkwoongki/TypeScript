"use strict";
var Queue3 = /** @class */ (function () {
    function Queue3() {
        this.data = [];
    }
    Queue3.prototype.push = function (item) {
        this.data.push(item);
    };
    Queue3.prototype.pop = function () {
        return this.data.shift();
    };
    Queue3.prototype.reverse = function (items) {
        return items.reverse();
    };
    return Queue3;
}());
// number 전용 Queue
var numberQueue = new Queue3();
numberQueue.push(0);
// numberQueue.push('1'); // 의도하지 않은 실수를 사전 검출 가능
// numberQueue.push('1');   // 실수를 사전 인지하고 수정할 수 있다
numberQueue.push(1);
numberQueue.push(2);
console.log(numberQueue.pop().toFixed()); // 0
console.log(numberQueue.pop().toFixed()); // 1
console.log(numberQueue.pop().toFixed()); // 2
// string 전용 Queue
var stringQueue = new Queue3();
stringQueue.push('Hello');
stringQueue.push('World');
console.log(stringQueue.pop().toUpperCase()); // HELLO
console.log(stringQueue.pop().toUpperCase()); // WORLD
// 커스텀 객체 전용 Queue
var myQueue = new Queue3();
myQueue.push({ name: 'Lee', age: 10 });
myQueue.push({ name: 'Kim', age: 20 });
console.log(myQueue.pop()); // { name: 'Lee', age: 10 }
console.log(myQueue.pop()); // { name: 'Kim', age: 20 }
