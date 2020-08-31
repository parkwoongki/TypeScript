// 인터페이스의 정의
interface Todo {
    id: number;
    content: string;
    completed: boolean;
}

// 변수 todo의 타입으로 Todo 인터페이스를 선언하였다.
let todo: Todo;

// 변수 todo는 Todo 인터페이스를 준수하여야 한다.
todo = { id: 1, content: 'typescript', completed: false };