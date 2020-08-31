class Person1 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  walk() {
    console.log(`${this.name} is walking`);
  }
}

const person1 = new Person1('ParkWoongKi');
person1.walk();