"use strict";
function test() {
    return 'Lee';
}
function test2() {
    return 1;
}
function test3() {
    return { a: 1 };
}
var UserImpl = /** @class */ (function () {
    function UserImpl() {
        this.name = 'park';
    }
    UserImpl.prototype.login = function () {
        throw new Error("Method not implemented.");
    };
    return UserImpl;
}());
function checkUser(user) {
    if (user.login()) {
        return 'APPROVED';
    }
    else {
        return 'REJECTED';
    }
}
var t = ['', '']; // Error
