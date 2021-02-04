export default class Player {
  constructor(name) {
    this.name = name;
    this.level = 0;
    this.xp = 100;
    this.health = 100;
    this.strength = 0;
    this.accuracy = 0;
  }

  randomRoll(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  attackDamage(weapon) {
    return this.randomRoll(weapon.minDamage, weapon.maxDamage);
  }

  attackAccuracy(weapon) {
    const combinedAccuracy = weapon.accuracy + this.accuracy;
    return this.randomRoll(combinedAccuracy, 100);
  }

  isHit(weapon) {
    const accuracyResult = this.attackAccuracy(weapon);
    if (accuracyResult > 80) {
      return true;
    } else {
      return false;
    }
  }

  levelUp() {
    
  }
}

// random number 0-100

// number > 80 = hit

// player accuracy 0

// weapon accuracy 20

// 56
// 96 = hit



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