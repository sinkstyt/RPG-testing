import Player from '../src/js/Player.js';

describe("Player", () => {
  
  // beforeEach()
  
  test("should correctly assign a name passed in as a string at key 'name' ", () => {
    let newPlayer = new Player("Matthew");
    expect(newPlayer.name).toEqual("Matthew");
  });

  test("should correctly assign a health key with a value of 100", () => {
    let newPlayer = new Player("Matthew");
    expect(newPlayer.health).toEqual(100);
  });
});