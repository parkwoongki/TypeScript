class Person5 {
    constructor(public name: string, public age: number) { }
}

interface Developer extends Person5 {
    skills: string[];
}

const developer: Developer = {
    name: 'Lee',
    age: 20,
    skills: ['HTML', 'CSS', 'JavaScript']
}