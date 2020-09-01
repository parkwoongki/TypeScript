class Queue {
    protected data: any[] = []; // data: any[]

    push(item: string | number) {
        this.data.push(item);
    }

    pop() {
        return this.data.shift();
    }
}

const queue = new Queue();

queue.push(0);
queue.push('1'); // 의도하지 않은 실수!

console.log(queue.pop().toFixed()); // 0
console.log(queue.pop().toFixed()); // Runtime error