"use strict";
var ReadOnly = /** @class */ (function () {
    function ReadOnly() {
        this.MAX_LEN = 5;
        this.MSG = 'hello';
    }
    ReadOnly.prototype.log = function () {
        // readonly가 선언된 프로퍼티는 재할당이 금지된다.
        // this.MAX_LEN = 10; // Cannot assign to 'MAX_LEN' because it is a constant or a read-only property.
        // this.MSG = 'Hi'; // Cannot assign to 'MSG' because it is a constant or a read-only property.
        console.log("MAX_LEN: " + this.MAX_LEN); // MAX_LEN: 5
        console.log("MSG: " + this.MSG); // MSG: hello
    };
    return ReadOnly;
}());
new ReadOnly().log();
