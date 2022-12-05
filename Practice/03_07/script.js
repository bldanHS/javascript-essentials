/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const pencilcase = {
  height: 6,
  length: 20,
  width: 8,
  volume: 960,
  pen: {
    color: "blue",
    length: 16,
  },
  pencil: {
    color: "grey",
    length: 14,
  },
};

console.log(pencilcase);

console.log(pencilcase["volume"]);
var query = pencilcase.pen;
var penlength = pencilcase.pen.length;
console.log(
  "The pen inside the pencilcase is: ",
  query,
  "and it is ",
  penlength,
  "long"
);
