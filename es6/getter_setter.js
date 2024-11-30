/**
 * getter and setter functions are special methods that let you get and set the values of an object’s properties in a controlled way. They allow you to define custom behavior when retrieving or updating a property, adding an extra layer of control. Let’s break down what they are and how they work.

1. Getters
Getters allow you to retrieve (or "get") a property’s value.
They are defined using the get keyword.
When you access the property, the getter method is automatically called.
You can use a getter to compute a value or manipulate data before returning it.

 *  2. Setters
Setters allow you to set (or "update") a property’s value.
They are defined using the set keyword.
When you assign a value to the property, the setter method is automatically called.
You can use a setter to validate data, modify a value, or trigger side effects before setting it.
 */

// Only change code below this line
/* class Thermostat {
  constructor(temp) {
    this.temp = temp;
    this.temp = (5 / 9) * (this.temp - 32);
  }
  get temperature() {
    return this.temp;
  }
  set temperature(update_temp) {
    // console.log(update_temp)
    this.temp = update_temp;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
// console.log(thermos.temperature)
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
// console.log(thermos.temperature)
*/

class Thermostat {
  constructor(fahrenheit) {
    this._tempFahrenheit = fahrenheit; // store temperature in Fahrenheit
  }

  get temperature() {
    // Convert Fahrenheit to Celsius
    return (5 / 9) * (this._tempFahrenheit - 32);
  }

  set temperature(celsius) {
    console.log(celsius);
    // Convert Celsius back to Fahrenheit and store
    this._tempFahrenheit = (celsius * 9) / 5 + 32;
    console.log(this._tempFahrenheit);
  }
}

// Testing
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp); // Output: 24.44

thermos.temperature = 26; // Setting in Celsius
temp = thermos.temperature; // Should output 26 in Celsius after conversion
console.log(temp); // Output: 26

class Rectangle {
  constructor(width, height) {
    this.width = width; // Calls the setter
    this.height = height;
  }

  get width() {
    return this._width;
  }

  set width(value) {
    if (value > 0) {
      this._width = value;
    } else {
      console.log("Width must be positive!");
      this._width = 1; // Default to 1 if invalid
    }
  }
}

const rect = new Rectangle(0, 10);
console.log(rect.width); // Output: 1 (setter defaults to 1 if 0 is given)
