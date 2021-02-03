import Player from '../src/js/Player.js';
import Weapon from '../src/js/Weapon.js';

describe("Player", () => {
  let newPlayer;
  let halberd;

  beforeEach(() => {
    newPlayer = new Player("Frank");
    halberd = new Weapon(10, 40, 0, "halberd");
  });
    
  test("should correctly assign a name passed in as a string at key 'name' ", () => {
    expect(newPlayer.name).toEqual("Frank");
  });

  test("should correctly assign a health key with a value of 100", () => {
    expect(newPlayer.health).toEqual(100);
  });
  
  test("should correctly assign strength with a value of 0", () => {
    expect(newPlayer.strength).toEqual(0);
  });

  test("should correctly assign attackAccuracy with a value of 0", () => {
    expect(newPlayer.accuracy).toEqual(0);
  });

  test("should return a number greater than or equal to the first parameter", () => {
    expect(newPlayer.randomRoll(1, 10)).toBeGreaterThanOrEqual(1);
  });

  test("should return a number less than or equal to the second parameter", () => {
    expect(newPlayer.randomRoll(1, 10)).toBeLessThanOrEqual(10);
  });

  test("should correctly return the amount of damage applied given a weapon as an argument", () => {
    expect(newPlayer.attack(halberd)).toBeGreaterThanOrEqual(10);
    expect(newPlayer.attack(halberd)).toBeLessThanOrEqual(40);
  });
});