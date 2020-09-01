"use strict";
function reverse(items) {
    return items.reverse();
}
var arg = [1, 2, 3, 4, 5];
// 인수에 의해 타입 매개변수가 결정된다.
var reversed = reverse(arg);
console.log(reversed); // [ 5, 4, 3, 2, 1 ]
