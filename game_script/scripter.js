"use strict";

import {Player} from './dealer';

var readlineSync = require('readline-sync')
, fs = require('fs');

// For adding color to the console
var clc = require('cli-color');

const HAND_SIZE = 5;
const COMMANDS = ['play card', 'draw', 'discard from hand', 'discard from field', 'card-details'];

//string to hold log
let logFile = "";

// Initialization
var path = readlineSync.question("Enter path to deck file:\n");
logFile += "IMPORTING DECK: "+path+"\n";
var myPlayer = new Player(JSON.parse(fs.readFileSync(path)));
myPlayer.shuffle();
for (var i = 0; i < HAND_SIZE; i++) {
  myPlayer.draw();
};

logFile += "DECK: ";
myPlayer.deck.cards.forEach((card) => {
  logFile += card.name + ", ";
});
logFile += "\n";

// Keep track of current turn
var i = 0;

// In-Game Loop
while(myPlayer.deck.cards.length != 0) {
  logFile += "\n---TURN "+i+"---\n";
  i += 1;
  logFile += "HAND: ";
  myPlayer.hand.cards.forEach((card) => {
    logFile += card.name + ", ";
  });
  logFile += "\nFIELD: ";
  myPlayer.field.cards.forEach((card) => {
    logFile += card.name + ", ";
  });
  logFile += "\n";
  myPlayer.print();
  let cmd = readlineSync.keyInSelect(COMMANDS, "Which action?");
  switch(cmd) {
    // Play card
    case 0:
      var index = readlineSync.question("Which card in hand would you like to play?:\n");
      if(index < 0 || index > myPlayer.hand.cards.length-1) {
        console.log("Please enter a valid option");
        logFile += "ACTION: INVALID INDEX\n";
        break;
      }
      logFile += "ACTION: played "+myPlayer.hand.cards[index].name+"\n";
      myPlayer.play(index);
      break;
    // Draw
    case 1:
      logFile += "ACTION: drew "+myPlayer.deck.cards[myPlayer.deck.cards.length-1].name+"\n";
      myPlayer.draw();
      console.log("Cards left in deck: "+ myPlayer.deck.cards.length);
      break;
    // Discard from Hand
    case 2:
      var index = readlineSync.question("Which card in hand would you like to discard?:\n");
      if(index < 0 || index > myPlayer.hand.cards.length-1) {
        console.log("Please enter a valid option");
        logFile += "ACTION: INVALID INDEX\n";
        break;
      }
      logFile += "ACTION: discarded "+myPlayer.hand.cards[index].name+" from hand\n";
      myPlayer.discardFromHand(index);
      break;
    // Discard from Field
    case 3:
      var index = readlineSync.question("Which card on field would you like to discard?:\n");
      if(index < 0 || index > myPlayer.field.cards.length-1) {
        console.log("Please enter a valid option");
        logFile += "ACTION: INVALID INDEX\n";
        break;
      }
      logFile += "ACTION: discarded "+myPlayer.field.cards[index].name+" from field\n";
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
      if(index < 0 || index > myPlayer.field.cards.length-1) {
        console.log("Please enter a valid option");
        logFile += "ACTION: INVALID INDEX\n";
        break;
      }
      logFile += "ACTION: destroyed "+myPlayer.field.cards[index].name+"\n";
      myPlayer.destroy(index);
    // Cancel
    case -1:
      myPlayer.deck.cards = [];
      break;
  }
}

// Write log to file
fs.writeFile('scritper_log.txt', logFile, (err) => {
 if(err) return console.log(err);
});