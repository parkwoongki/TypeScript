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
var Queue2 = /** @class */ (function () {
    function Queue2() {
        this.data = []; // data: any[]
    }
    Queue2.prototype.push = function (item) {
        this.data.push(item);
    };
    Queue2.prototype.pop = function () {
        return this.data.shift();
    };
    return Queue2;
}());
// Queue 클래스를 상속하여 number 타입 전용 NumberQueue 클래스를 정의
var NumberQueue = /** @class */ (function (_super) {
    __extends(NumberQueue, _super);
    function NumberQueue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // number 타입의 요소만을 push한다.
    NumberQueue.prototype.push = function (item) {
        _super.prototype.push.call(this, item);
    };
    NumberQueue.prototype.pop = function () {
        return _super.prototype.pop.call(this);
    };
    return NumberQueue;
}(Queue2));
var queue2 = new NumberQueue();
queue2.push(0);
// 의도하지 않은 실수를 사전 검출 가능
// [ts] Argument of type '"1"' is not assignable to parameter of type 'number'.
// queue.push('1');
// queue2.push('1'); // 실수를 사전 인지하고 수정할 수 있다
console.log(queue2.pop().toFixed()); // 0
console.log(queue2.pop().toFixed()); // 1
