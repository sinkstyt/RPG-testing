# RPG Test of Champions

### _A quick and dirty RPG envisioned to run in the console_
_created to allow authors to tinker with Test Driven Development using Jest_

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
* tracks player and enemy stats (egs. health, accuracy, name, etc.)
* there may also be other factors that influence enemy encounters:
> armor
> weaponry
* there is no user interface built for this one yet

## Setup This Project Locally on Your Machine &mdash; **Installation Instructions**

* Copy the following link to your clipboard: https://github.com/sinkstyt/RPG-testing.git
* Open a Bash Terminal (aka command line)
* In your terminal window, navigate to a directory that you will hold your clone of this project
* Within your git bash terminal type in 'git clone' and then paste in the link from your clipboard by right clicking and selecting 'paste' example below:
```at Terminal promt
YOUR_COMPUTER/Users/yourUserName/rpg-folder $ git clone https://github.com/
```
* After the page has been cloned to your chosen directory, locate the folder and open it.
* After you have the folder open that you have just cloned, launch all the files in your text editor of choice (such as VS Code, Atom, Sublime, VIM, etc.)

## Specs
_predominantly brainstorming before writing any tests:_

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
* Weapon does damage range, stats could modify range
* money?
* food?
* magic seeing stones so you can start your own religion

**Health**
* Strength could do more damage with a weapon
* Vitality could mean more health

## Known Bugs

* _No functioning user interface_
* _Event class has not yet been begun_
If you run into any issues or have questions, ideas or concerns, please contact an author and/or contribute freely to the code.

## License
_MIT 2.0_

## Contact Information

_Tyler Sinks &mdash; tyler.sinks@gmail.com_
_Michael Pingel &mdash; mdpingel@gmail.com_
_Matthew Foley &mdash; mattfoley0375@gmail.com_