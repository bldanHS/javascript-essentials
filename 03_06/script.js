/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("The pocket number of the backpack is: ", backpack.pocketNum);
console.log("The volume of the backpack is: ", backpack.volume);
console.log("The straplength L is: ", backpack.strapLength.left); 

console.log("The volume of the backpack is: ", backpack["volume"]);

var valtozo = "volume";

console.log(backpack[valtozo])