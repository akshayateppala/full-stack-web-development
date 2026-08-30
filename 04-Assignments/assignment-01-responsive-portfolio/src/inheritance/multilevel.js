//MULTILEVEL INHERITANCE
class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} eats food.`);
  }
}

class Mammal extends Animal {
  walk() {
    console.log(`${this.name} walks on land.`);
  }
}

class Dog extends Mammal {
  bark() {
    console.log(`${this.name} barks.`);
  }
}

const d1 = new Dog("Tommy");
d1.eat();   
d1.walk();  
d1.bark();  