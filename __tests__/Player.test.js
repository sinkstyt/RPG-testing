import Player from '../src/js/Player.js';

describe("Player", () => {
  // let reusableTriangle;

  // beforeEach(() => {
  //   reusableTriangle = new Triangle(5, 5, 5);
  // });
    
  test("should correctly assign a name passed in as a string at key 'name' ", () => {
    let newPlayer = new Player("Matthew");
    expect(newPlayer.name).toEqual("Matthew");
  });

  test("should correctly assign a health key with a value of 100", () => {
    let newPlayer = new Player("Matthew");
    expect(newPlayer.health).toEqual(100);
  });
  
  test("should correctly assign strength with a value of 0", () => {
    let newPlayer = new Player("Matthew");
    expect(newPlayer.strength).toEqual(0);
  });
});