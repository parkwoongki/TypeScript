class Foo {

    public x: string;
    protected y: string;
    private z: string;

    constructor(x: string, y: string, z: string) {
        this.x = x, this.y = y, this.z = z;
    }
}

const foo3 = new Foo('x', 'y', 'x');

// public 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조 가능하다.
console.log(foo3.x);

// protected 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조할 수 없다.
// console.log(foo3.y);
// error TS2445: Property 'y' is protected and only accessible within class 'Foo' and its subclasses.

// private 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조할 수 없다.
// console.log(foo3.z);
// error TS2341: Property 'z' is private and only accessible within class 'Foo'.

class Bar extends Foo {
    constructor(x: string, y: string, z: string) {
        super(x, y, z);

        // public 접근 제한자는 자식 클래스 내부에서 참조 가능하다.
        console.log(this.x);

        // protected 접근 제한자는 자식 클래스 내부에서 참조 가능하다.
        console.log(this.y);

        // private 접근 제한자는 자식 클래스 내부에서 참조할 수 없다.
        // console.log(this.z);
        // error TS2341: Property 'z' is private and only accessible within class 'Foo'.
    }
}