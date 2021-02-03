export default class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.strength = 0;
    this.accuracy = 0;
  }

  damageRoll(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}





// function (name) {
//   return "hi " + name;
// }

// (name) => {
//   return "hi " + name;
// }

// const greeting = (name) => {
//   return "hi " + name;
// }



/* class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  checkType() {
    //Function body goes here.
  }    
};  */