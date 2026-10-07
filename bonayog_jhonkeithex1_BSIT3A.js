// Class 1: Parent Class
class Animal {
    constructor(name) {
        this.name = name;
    }
    // Method 1
    eat() {
        console.log(`${this.name} is eating.`);
    }
    // Method 2
    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
}

// Class 2: Child Class implementing Inheritance
class Dog extends Animal {
    // Method 3
    bark() {
        console.log(`${this.name} says: Woof Woof!`);
    }
    // Method 4
    play() {
        console.log(`${this.name} is chasing a ball.`);
    }
}

const myDog = new Dog("Buddy");
myDog.eat();
myDog.bark();
