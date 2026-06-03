function Animal(name) {
  this.name = name;
}

Animal.prototype.describe = function () {
  return `This animal is named ${this.name}`;
};


function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog

Dog.prototype.bark = function () {
  return `${this.name} says woof`;
};

function Cat(name, color) {
  Animal.call(this, name);
  this.color = color;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.meow = function () {
  return `${this.name} meows`;
};


function Vehicle(brand) {
  this.brand = brand;
}


Vehicle.prototype.describe = function () {
  return `Vehicle brand: ${this.brand}`;
};

function Car(brand, model, running = false) {
  Vehicle.call(this, brand);
  this.model = model;
  this.running = running;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.start = function () {
  this.running = true;
  return `${this.model} is now running`;
};

Car.prototype.stop = function () {
  this.running = false;
  return `${this.model} has stopped`;
};

Car.prototype.showModel = function () {
  return `Model: ${this.model}`;
};


function ElectricCar(brand, model, batteryLevel) {
  Car.call(this, brand, model);
  this.batteryLevel = batteryLevel;
}

ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.charge = function(){
    return `${this.model} is charging, battery at ${this.batteryLevel}%`;
};



const runDemoBtn = document.getElementById("run-demo-btn");
const output = document.getElementById("output");

runDemoBtn.addEventListener("click", () => {
  const car1 = new Car("Toyota", "Corolla");
  const car2 = new Car("Honda", "Civic", true);
  const dog1 = new Dog("SnoopDog","Epagneul");
  const cat1 = new Cat("Tuxi", "Tuxedo");
  const electr1 = new ElectricCar("Toyota", "Pryus", 100);
  const car3 = new Car("Toyota", "Siena");

  output.innerHTML = `
    <p>${car1.describe()}</p>
    <p>${car1.showModel()}</p>
    <p>${car1.start()}</p>
    <hr>
    <p>${car2.describe()}</p>
    <p>${car2.showModel()}</p>
    <p>${car2.stop()}</p>
    <p>${dog1.bark()}</p>
    <p>${dog1.describe()}</p>
    <p>${cat1.meow()}</p>
    <p>${cat1.describe()}</p>
    <p>${electr1.charge()}</p>
    <p>${car3.start()}</p>
    <p>${car3.stop()}</p>
    <p>${car3.showModel()}</p>
  `;

    console.log(Object.getPrototypeOf(Dog.prototype) === Animal.prototype);
    console.log(Object.getPrototypeOf(Car.prototype) === Vehicle.prototype);
    console.log(Object.getPrototypeOf(ElectricCar.prototype) === Car.prototype);
});

class AnimalClass {
  constructor(name) {
    this.name = name;
  }

  describe() {
    return `This animal is named ${this.name}`;
  }
}

class DogClass extends AnimalClass {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    return `${this.name} barks`;
  }
}

const dog2 = DogClass("Bridget", "Loulou");

console.log(dog2.describe());
console.log(dog2.bark());








/////////Task1


