"use strict";

import {Player} from './dealer';

var readlineSync = require('readline-sync')
, fs = require('fs');

const HAND_SIZE = 5;
const COMMANDS = ['play card', 'draw', 'discard from hand', 'discard from field', 'card-details'];

// Initialization
var path = readlineSync.question("Enter path to deck file:\n");
console.log("---IMPORTING DECK---");
var myPlayer = new Player(JSON.parse(fs.readFileSync(path)));
console.log("---SHUFFLING DECK---");
myPlayer.shuffle();
console.log("---CREATING INITIAL HAND---");
for (var i = 0; i < HAND_SIZE; i++) {
  myPlayer.draw();
};

// In-Game Loop
while(myPlayer.deck.cards.length != 0) {
  myPlayer.print();
  let cmd = readlineSync.keyInSelect(COMMANDS, "Which action?");
  switch(cmd) {
    // Play card
    case 0:
      var index = readlineSync.question("Which card in hand would you like to play?:\n");
      myPlayer.play(index);
      break;
    // Draw
    case 1:
      myPlayer.draw();
      console.log("Cards left in deck: "+ myPlayer.deck.cards.length);
      break;
    // Discard from Hand
    case 2:
      var index = readlineSync.question("Which card in hand would you like to discard?:\n");
      myPlayer.discardFromHand(index);
      break;
    // Discard from Field
    case 3:
      var index = readlineSync.question("Which card on field would you like to discard?:\n");
      myPlayer.discardFromField(index);
      break;
    // Card in hand Details
    case 4:
      var index = readlineSync.keyInSelect(myPlayer.hand.cardNames(), "Which card?");
      myPlayer.hand.printCard(index);
      break;
    // Destroy card on field
    case 5:
      var index = readlineSync.question("Which card on field would you like to destroy?:\n");
      myPlayer.destroy(index);
    // Cancel
    case -1:
      myPlayer.deck.cards = [];
      break;
  }
}