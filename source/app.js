// //so so lonely
// var app = app || {};
// app.hey = function() {
//   console.log("hey");
// }
//
// app.hey();

// define an ES6 class called HelloWorld
class HelloWorld {
  constructor(name, purpose) {
    this.attrs = {
      name: name,
      purpose: purpose
    };
  }
  // define a toString() method on the class
  toString() {
    return 'Hello, world!';
  }
}
// instantiate a new instance of HelloWorld
var sample = new HelloWorld("David", "unknown");
// console.log sample's toString() method
console.log(sample.toString());
console.log(sample.attrs);
