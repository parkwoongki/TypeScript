interface Person10 {
    name: string,
    age?: number
}

// 빈 객체를 Person 타입으로 지정
const person10 = {} as Person10;
person10.name = 'Lee';
person10.age = 20;
// person10.address = 'Seoul'; // Error