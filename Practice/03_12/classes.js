class Phone {
  constructor(ram, color, brand, price, isOnMute) {
    (this.ram = ram),
      (this.color = color),
      (this.brand = brand),
      (this.price = price),
      (this.isOnMute = isOnMute);
  }
  //method
  switchMuting(muteStatus) {
    this.muteStatus = muteStatus;
  }
}
const iphone12mini = new Phone();
console.log(iphone12mini);

class Bike {
  constructor(name, size, price, wheelNumber, wheelDiameter, color) {
    (this.name = name),
      (this.size = size),
      (this.price = price),
      (this.wheelNumber = wheelNumber),
      (this.wheelDiameter = wheelDiameter),
      (this.color = color);
  }
  changeWheels(removedWheelNumber, newWheelDiameter) {
    var newWheels = this.wheelNumber - removedWheelNumber;
    if (newWheels < 2) {
      console.log("Bike must have at least 2 wheels");
    } else {
      this.wheelNumber = newWheels;
    }
    this.wheelDiameter = newWheelDiameter;
  }
}

const merida = new Bike("merida", 26, 50000, 4, 20, "black");

console.log(merida);

console.log("modifying the merida bike");

merida.changeWheels(1, 34);
merida.name = "merida triple trust";
merida.color = "green"
console.log(merida);
