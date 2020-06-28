 # :medal_military: Mike Visser's Game of WAR! :medal_military:
 

## Introduction 

Game of war is a program designed to simulate the card game War with two computer players. The program creates and distributes a deck of cards, after which the two computer players play rounds of the game. 

For a round, each player reveals the next card in their hand. Whichever player's card has a higher value wins the two cards. If the two players' card values match, they play War. 

To play war, each player places three cards on the table face down, and then places a fourth card on the table face up. The player with the higher card value wins all the cards on the table. 

The game ends when one player has all 52 cards, or if one player does not have enough cards to play War.

## Prerequisites

* You must have Chrome browser installed and be able to access the developer console (⌘ + ⌥ + j on Mac).

## Installation

To install Game of WAR! download the index.html and script.js files to your computer. Be sure to save them in the same directory (aka folder).

Open index.html in Chrome and open the javascript console (⌘ + ⌥ + j on Mac).

## Playing a Game

To play a game, click the "Play WAR" button in your browser. The game results will print out in the console. 

To play another game, simply click the "Play WAR" button again to reset the deck and run through a new game. (Tip: To make each game easier to follow, type ⌘ + k in the console to clear the console log before running your next game.)

If you receive an _Uncaught RangeError: Maximum call stack size exceeded_ error after playing several games, refresh the browser window and click the "Play WAR" button again to start a new game. 

## Acknowledgements

* Many thanks to Roger and Noah for teaching me Javascript.
* Explanation of the Fisher-Yates algorithm and Javascript translation that form the bones of the game deck shuffle fuction came from:
    https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
* Readme template help from:
    https://dev.to/scottydocs/how-to-write-a-kickass-readme-5af9
* Emoji markdown shortcodes found at:
    https://github.com/ikatyang/emoji-cheat-sheet

### Contact me
https://github.com/michael1visser