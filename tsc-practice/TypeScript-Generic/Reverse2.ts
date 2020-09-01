function reverse2<T>(items: T[]): T[] {
    return items.reverse();
}

const arg2 = [{ name: 'Lee' }, { name: 'Kim' }];
// 인수에 의해 타입 매개변수가 결정된다.
const reversed2 = reverse2(arg2);
console.log(reversed2); // [ { name: 'Kim' }, { name: 'Lee' } ]