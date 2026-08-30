//MULTIPLE JS
//JavaScript classes can't extend more than one class directly, so mixins are used.
let CanFly = Base => class extends Base {
  fly() {
    console.log(`${this.name} can fly.`);
  }
};

let CanSwim = Base => class extends Base {
  swim() {
    console.log(`${this.name} can swim.`);
  }
};

class Bird {
  constructor(name) {
    this.name = name;
  }
}

class Duck extends CanSwim(CanFly(Bird)) {}

const duck = new Duck("Donald");
duck.fly();  
duck.swim(); 