"use strict";
// Todo 클래스는 ITodo 인터페이스를 구현하여야 한다.
var Todo3 = /** @class */ (function () {
    function Todo3(id, content, completed) {
        this.id = id;
        this.content = content;
        this.completed = completed;
    }
    return Todo3;
}());
var todo2 = new Todo3(1, 'Typescript', false);
console.log(todo2);
