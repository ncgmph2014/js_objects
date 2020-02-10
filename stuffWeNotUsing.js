//in javascript, functions are objects! wtf??
//curly braces are object literal syntax
//object literal syntax is not the best for duplicating objects
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1
//   },
//   //functions in objects are methods
//   draw: function() {
//     console.log("draw");
//   }
// };
//factory function
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function() {
//       console.log("draw");
//     }
//   };
// }

// const circle = createCircle(1);

//Define a constructor function

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
  //don't need a return statement, i guess
}
// const Circle1 = new Function(
//   "radius",
//   `
// this.radius = radius;
// this.draw = function(){
//     console.log("draw");
// }
// `
// );

// const circle = new Circle1(1);

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

const another = new Circle(1);

//value types, also primitives
//values types examples: number, string, boolean, symbol, undefined, null
//reference types examples: objects, functions, arrays
let x = { value: 10 };
let y = x;

//assigning values to a variable has a different effect than assigning a reference to a variable

x.value = 20;
