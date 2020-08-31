interface IPerson2 {
    name: string;
}

function sayHello(person: IPerson2): void {
    console.log(`Hello ${person.name}`);
}

const me3 = { name: 'Lee', age: 18 };
sayHello(me3); // Hello Lee