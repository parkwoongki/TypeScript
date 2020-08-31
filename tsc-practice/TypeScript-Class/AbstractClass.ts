abstract class Animal {
    // 추상 메소드
    abstract makeSound(): void;
    // 일반 메소드
    move(): void {
        console.log('roaming the earth...');
    }
}

// 직접 인스턴스를 생성할 수 없다.
// new Animal();
// error TS2511: Cannot create an instance of the abstract class 'Animal'.

class Dog extends Animal {
    // 추상 클래스를 상속한 클래스는 추상 클래스의 추상 메소드를 반드시 구현하여야 한다
    makeSound() {
        console.log('bowwow~~');
    }
}

const myDog = new Dog();
myDog.makeSound();
myDog.move();