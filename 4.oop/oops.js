//  Object Oriented Programming, is one of the major approaches to the software development process. In OOP, objects and classes organize code to describe things and what they can do.

// Methods are properties that are functions. This adds different behavior to an object.

// Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.

// Constructors follow a few conventions:

// Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
// Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
// Constructors define properties and behaviors instead of returning a value as other functions might.

// the constructor is more flexible. It's now possible to define the properties for each Bird at the time it is created, which is one way that JavaScript constructors are so useful. They group objects together based on shared characteristics and behavior and define a blueprint that automates their creation.

function Dog(name) {
  this.name = name; // Own property
}

Dog.prototype.numLegs = 4; // Prototype property

let beagle = new Dog("Snoopy");

console.log(beagle.name); // "Snoopy" (own property)
console.log(beagle.numLegs); // 4 (inherited from prototype)

// Check if properties are own properties
console.log(beagle.hasOwnProperty("name")); // true
console.log(beagle.hasOwnProperty("numLegs")); // false

// Accessing properties
console.log(Object.keys(beagle)); // ["name"] (own properties only)
console.log(beagle.numLegs); // 4 (accessed through prototype)

function Dog(name, color) {
  (this.name = name), (this.color = color), (this.numLegs = 4);
}

let terrier = new Dog("terrier", "noIdea");

// instanceof :=to know whether object is created using constructor or not

//use of prototype props :- A better way is to use the prototype of Bird. Properties in the prototype are shared among ALL instances of Bird. Here's how to add numLegs to the Bird prototype:

Dog.prototype.numLegs = 4;

// The numLegs property will be available on the beagle instance because the instance looks up the prototype chain for properties it doesn't directly have. Changes to the prototype are dynamically reflected in all instances, regardless of when they were created.

// There is a special constructor property located on the object instances. Note that the constructor property is a reference to the constructor function that created the instance.
// Note: Since the constructor property can be overwritten.it’s generally better to use the instanceof method to check the type of an object.

// There is one crucial side effect of manually setting the prototype to a new object. It erases the constructor property.To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property

// an object inherits its prototype directly from the constructor function that created it

function Dog(name) {
  this.name = name;
}

beagle = new Dog("Snoopy");

// Only change code below this line

Dog.prototype.isPrototypeOf(beagle);

// Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of Bird.prototype is Object.prototype

Object.prototype.isPrototypeOf(Dog.prototype);

// In this prototype chain, Bird is the supertype for duck, while duck is the subtype. Object is a supertype for both Bird and duck. Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method.

// Object.create(obj) creates a new object, and sets obj as the new object's prototype. Recall that the prototype is like the "recipe" for creating an object. By setting the prototype of animal to be the prototype of Animal, you are effectively giving the animal instance the same "recipe" as any other instance of Animal.

// set the prototype of the subtype (or child)—in this case, Bird—to be an instance of Animal.

Bird.prototype = Object.create(Animal.prototype);
// Remember that the prototype is like the "recipe" for creating an object. In a way, the recipe for Bird now includes all the key "ingredients" from Animal.

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

function Dog() {}

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);

beagle = new Dog();

let duck = new Bird("duck");
console.log(duck instanceof Bird); // true
console.log(duck instanceof Animal); // true

/**
 *  let duck = new Bird(); and you call duck.eat(), this is how JavaScript looks for the method on the prototype chain of duck:

duck => Is eat() defined here? No.
Bird => Is eat() defined here? => Yes. Execute it and stop searching.
Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
Object => JavaScript stopped searching before reaching this level.
 * 
 */

//  Mixins are useful when a programmer wants to share functionality between different classes. Instead of repeating the same code over and over again, the common functionality can simply be grouped into a mixin and then included into each class that requires it.

let bird = {
  name: "Donald",
  numLegs: 2,
};

let boat = {
  name: "Warrior",
  type: "race-boat",
};

// Only change code below this line

let glideMixin = function (obj) {
  obj.glide = function () {
    return;
  };
};

glideMixin(bird);
glideMixin(boat);

bird.glide();
boat.glide();

// closure:  In JavaScript, a function always has access to the context in which it was created. This is called closure

(function () {
  console.log("A cozy nest is ready");
})();

// group related functionality for creating a single module or obj

let funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.isCute = function () {
        return true;
      };
    },
    singMixin: function (obj) {
      obj.sing = function () {
        console.log("Singing to an awesome tune");
      };
    },
  };
})();

funModule.singMixin(duck);
duck.sing();
