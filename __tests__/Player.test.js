import Player from '../src/js/Player.js';

describe("Player", () => {
  
  // beforeEach()
  
  test("should correctly assign a name passed in as a string at key 'name' ", () => {
    let newPlayer = new Player("Matthew");
    expect(newPlayer.name).toEqual("Matthew");
  });
});