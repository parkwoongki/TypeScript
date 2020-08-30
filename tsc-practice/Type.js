"use strict";
var isChecked = false;
var n = null;
var u = undefined;
var decimal = 6;
var hex = 0xffff;
var binary = 10;
var oct = 493;
var color = "blue";
color = 'red';
var myName = "ParkWoongKi";
var Hello = "My name is " + myName;
console.log(Hello);
var obj = {};
var list1 = [1, 'two', true];
var list2 = [12, 34, 4];
var list3 = [1, 2, 3, 45];
var tuple;
tuple = [1, 'hi'];
// tuple = [1, 23];
tuple = [2, ""];
tuple.push(1, "asd", "Asd");
console.log(tuple);
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
;
var c1 = Color1.Green;
console.log(c1);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
    Color2[Color2["white"] = 6] = "white";
})(Color2 || (Color2 = {}));
;
var c2 = Color2.Blue;
console.log(c2);
var notSure = 4;
notSure = "asdasd";
notSure = true;
function warnUser() {
    console.log("this is warning message!");
}
function infiniteLoop() {
    while (true) { }
}
function error(message) {
    throw new Error(message);
}
console.log(error("\uC090\uBE45!!"));
