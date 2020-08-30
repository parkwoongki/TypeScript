"use strict";
// string: 원시 타입 문자열 타입
var primiteveStr;
primiteveStr = 'hello'; // OK
// 원시 타입 문자열 타입에 객체를 할당하였다.
// primiteveStr = new String('hello'); // Error
/*
Type 'String' is not assignable to type 'string'.
'string' is a primitive, but 'String' is a wrapper object. Prefer using 'string' when possible.
*/
// String: String 생성자 함수로 생성된 String 래퍼 객체 타입
var objectStr;
objectStr = 'hello'; // OK
objectStr = new String('hello'); // OK
