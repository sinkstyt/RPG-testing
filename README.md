# RPG Test of Champions

### _A quick and dirty RPG to allow authors to tinker with Test Driven Development using Jest_

### By _**Mike Pingel, Matthew Folery, and Tyler Sinks**_
_initially created 3 February, 2021_
_last major revision 4 February, 2021_

## Technologies Used
* _html, css, javascript_
* _ESLint, Jest, and npm_
* _webpack, webpack-cli, Babel_
* _VS Code, Chrome DevTools_

## Description
* a role playing game (RPG)
* tracks player and enemy health and other stats
* there may also be other factors that influence enemy encounters:
> armor
> weaponry

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Specs

**Player class**
* choose player type at start
* player instantiates with full health
* player starts at level 0
* experience starts at 0, too
* enemies, and all other characters, are instances of Player
* battle enemies make choices automatically. Also have stats/weapons.

**Event class**
* initial events allow player to:
> select player type
> select starting weapon
> select an event
* later events are presented as four options, one or two of which are chosen at random from an array of all possible events (all non-battle?)
> 1. Spend money at the tavern to regain health, salves for wounds
> 2. Go the forest to chop wood, build strength, or discover item
> 3. Pick a fight
> 4. Other wildcard events (egs. work for someone to earn money and food, choose to go after bounties, apprentice with a blacksmith...)
* perhaps a ratio is set such that a battle has to come up by every fourth turn?
* battle _possibilities:_
1. get defeated
2. win

**Item class**
* armor
* weapon
* money?
* food?
* magic seeing stones so you can start your own religion

Health

Strength could do more damage with a weapon
Vitality could mean more health

Weapon does damage range, stats could modify range

for example, a crappy sword could do 1-10 damage, having a strength of 5 could add 5 to the damage roll or add 5 to the lower number of the range like 6-10

Armor could modify the damage received by a percentage

## Known Bugs

* _Any known issues_
* _should go here_

## License
_MIT 2.0_
_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Contact Information

_{Add your contact information here.}_