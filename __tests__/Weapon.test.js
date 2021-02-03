import Weapon from '../src/js/Weapon.js';

describe("Weapon", () => {

  test("should return an object with keys minDamage, maxDamage, and accuracy equal to their argument values respectively", () => {
    let newWeapon = new Weapon(10, 30, 15);
    expect(newWeapon.minDamage).toEqual(10);
    expect(newWeapon.maxDamage).toEqual(30);
    expect(newWeapon.accuracy).toEqual(15);
  });

});