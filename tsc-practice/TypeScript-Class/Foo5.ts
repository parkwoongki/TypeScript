class Foo5 {
    // x는 생성자 내부에서만 유효한 지역 변수이다.
    constructor(x: string) {
        console.log(x);
    }
}

const foo5 = new Foo5('Hello');
console.log(foo); // Foo {}