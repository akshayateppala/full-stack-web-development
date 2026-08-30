//HYBRID IMHERITANCE
// COMBINATION OF HIERARICHICAL + MULTIPLE
class Person {
  constructor(name) {
    this.name = name;
  }
  introduce() {
    console.log(`I am ${this.name}.`);
  }
}

let CanCode = Base => class extends Base {
  code() {
    console.log(`${this.name} writes code.`);
  }
};

let CanDesign = Base => class extends Base {
  design() {
    console.log(`${this.name} designs UI.`);
  }
};

class Developer extends CanDesign(CanCode(Person)) {
  work() {
    console.log(`${this.name} is working on a project.`);
  }
}

const dev = new Developer("Akshaya");
dev.introduce(); 
dev.code();      
dev.design();    
dev.work();      