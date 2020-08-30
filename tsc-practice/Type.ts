let isChecked: boolean = false;

let n: null = null;

let u: undefined = undefined;

let decimal: number = 6;
let hex: number = 0xffff;
let binary: number = 0b1010;
let oct: number = 0o755;

let color: string = "blue";
color = 'red';
let myName: string = `ParkWoongKi`
let Hello: string = `My name is ${myName}`;
console.log(Hello);

const obj: object = {};

let list1: any[] = [1, 'two', true];
let list2: number[] = [12, 34, 4];
let list3: Array<number> = [1, 2, 3, 45];

let tuple: [number, string];
tuple = [1, 'hi'];
// tuple = [1, 23];
tuple = [2, ""];
tuple.push(1, "asd", "Asd");
console.log(tuple);

enum Color1 { Red, Green, Blue };
let c1: Color1 = Color1.Green;
console.log(c1);

enum Color2 { Red = 1, Green = 2, Blue = 3, white = 6 };
let c2: Color2 = Color2.Blue;
console.log(c2);

let notSure: any = 4;
notSure = "asdasd";
notSure = true;

function warnUser(): void {
    console.log(`this is warning message!`);
}

function infiniteLoop(): never {
    while (true) { }
}

function error(message: string): never {
    throw new Error(message);
}

console.log(error(`삐빅!!`));