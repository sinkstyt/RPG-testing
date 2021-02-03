import Player from '../src/js/Player.js';

describe("Player", () => {
  let newPlayer;

  beforeEach(() => {
    newPlayer = new Player("Frank");
  });
    
  test("should correctly assign a name passed in as a string at key 'name' ", () => {
    expect(newPlayer.name).toEqual("Matthew");
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
});