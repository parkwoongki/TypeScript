interface Person10 {
    name: string;
    age?: number;
}

interface Developer2 {
    skills: string[];
}

interface WebDeveloper extends Person10, Developer2 { }

const webDeveloper: WebDeveloper = {
    name: 'Lee',
    age: 20,
    skills: ['HTML', 'CSS', 'JavaScript']
}