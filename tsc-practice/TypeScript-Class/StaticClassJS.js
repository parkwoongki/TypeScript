class StaticClass {
  constructor(prop) {
    this.prop = prop;
  }

  static staticMethod() {
    /*
        정적 메소드는 this를 사용할 수 없다.
        정적 메소드 내부에서 this는 클래스의 인스턴스가 아닌 클래스 자신을 가리킨다.
        */
    return "staticMethod";
  }

  prototypeMethod() {
    return this.prop;
  }
}

// 정적 메소드는 클래스 이름으로 호출한다.
console.log(StaticClass.staticMethod());

const staticClass = new StaticClass(123);
// 정적 메소드는 인스턴스로 호출할 수 없다.
console.log(staticClass.staticMethod()); // Uncaught TypeError: foo.staticMethod is not a function
