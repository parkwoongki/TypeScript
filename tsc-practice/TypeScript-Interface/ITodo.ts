// 인터페이스의 정의
interface ITodo {
    id: number;
    content: string;
    completed: boolean;
}

// Todo 클래스는 ITodo 인터페이스를 구현하여야 한다.
class Todo3 implements ITodo {
    constructor(
        public id: number,
        public content: string,
        public completed: boolean
    ) { }
}

const todo2 = new Todo3(1, 'Typescript', false);

console.log(todo2);