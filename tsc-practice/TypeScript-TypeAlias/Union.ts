// 문자열 리터럴로 타입 지정
type Str = 'Lee';

// 유니온 타입으로 타입 지정
type Union = string | null;

// 문자열 유니온 타입으로 타입 지정
type Name = 'Lee' | 'Kim';
function test(): Name {
    return 'Lee';
}

// 숫자 리터럴 유니온 타입으로 타입 지정
type Num1 = 1 | 2 | 3 | 4 | 5;
function test2(): Num1 {
    return 1;
}

// 객체 리터럴 유니온 타입으로 타입 지정
type Obj = { a: 1 } | { b: 2 };
function test3(): Obj {
    return { a: 1 };
}

// 함수 유니온 타입으로 타입 지정
type Func = (() => string) | (() => void);

// 인터페이스 유니온 타입으로 타입 지정
// type Shape = Square | Rectangle | Circle;

type User2 = {
    name: string;
    login(): boolean;
}

type UserState = 'PENDING' | 'APPROVED' | 'REJECTED';
class UserImpl implements User2 {
    login(): boolean {
        throw new Error("Method not implemented.");
    }
    name: string = 'park';
}

function checkUser(user: User2): UserState {
    if (user.login()) {
        return 'APPROVED'
    } else {
        return 'REJECTED'
    }
}

// 튜플로 타입 지정
type Tuple = [string, boolean];
const t: Tuple = ['', '']; // Error