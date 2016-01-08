"use strict";

var dealer = require('./dealer')
, readlineSync = require('readline-sync')
, fs = require('fs');

const HAND_SIZE = 5;
const COMMANDS = ['draw', 'discard', 'card-details'];

// Initialization
var path = readlineSync.question("Enter path to deck file:\n");
console.log("---IMPORTING DECK---");
var myDeck = new dealer.Deck(JSON.parse(fs.readFileSync(path)));
console.log("---SHUFFLING DECK---");
myDeck.shuffle();
console.log("---CREATING INITIAL HAND---");
var myHand = new dealer.Hand(myDeck);
for (var i = 0; i < HAND_SIZE; i++) {
  myHand.drawCardFromDeck();
};

// In-Game Loop
while(myDeck.cards.length != 0) {
  myHand.print();
  let cmd = readlineSync.keyInSelect(COMMANDS, "Which action?");
  switch(cmd) {
    // Draw
    case 0:
      myHand.drawCardFromDeck();
      console.log("Cards left in deck: "+ myDeck.cards.length);
      break;
    // Discard
    case 1:
      var index = readlineSync.question("Which card would you like to discard?:\n");
      myHand.removeCard(index);
      break;
    // Card Details
    case 2:
      var index = readlineSync.keyInSelect(myHand.cardNames(), "Which card?");
      myHand.printCard(index);
      break;
    // Cancel
    case -1:
      myDeck.cards = [];
      break;
  }
}