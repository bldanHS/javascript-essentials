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

class Bike {
  constructor(size, price, wheelNumber, wheelDiameter, color) {
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
