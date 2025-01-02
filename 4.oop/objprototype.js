// (Object.create(Animal.prototype)) with a new plain object ({ constructor: Bird }). This new object has no connection to Animal.prototype. Consequently, Bird no longer inherits from Animal

function Animal() {
  constructor: Animal;
}
function Bird(name) {
  this.name = name;
}
function Dog(name) {
  this.name = name;
}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
// Animal.prototype.constructor = Animal

Bird.prototype = {
  constructor: Bird,
};

Dog.prototype = {
  constructor: Dog,
};

// Only change code below this line

let duck = new Bird("duck");
let beagle = new Dog("beag");

console.log(Bird.isPrototypeOf(Animal));

console.log(Bird.prototype instanceof Animal);
console.log(duck.constructor);
