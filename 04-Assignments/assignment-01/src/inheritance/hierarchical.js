class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  start() {
    console.log(`${this.brand} vehicle started.`);
  }
}

class Car extends Vehicle {
  drive() {
    console.log(`${this.brand} car is driving.`);
  }
}

class Bike extends Vehicle {
  ride() {
    console.log(`${this.brand} bike is riding.`);
  }
}

const car = new Car("Toyota");
car.start(); 
car.drive(); 

const bike = new Bike("Honda");
bike.start(); 
bike.ride(); 