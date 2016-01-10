"use strict";

var fs = require('fs');

// For adding color to the console
var clc = require('cli-color');

module.exports.Deck = class Deck {
  constructor(cards) {
    if (cards) this.cards = cards;
    else this.cards = [];
    this.addCard = (card) => this.cards = this.cards.concat(card);
    this.removeCard = (index) => this.cards.splice(index, 1);
    
    // Fisher-Yates Shuffle
    this.shuffle = () => {
      let m = this.cards.length, t, i;
      
      // While there remain cards to shuffle
      while(m) {
        // Pick a remaining element
        i = Math.floor(Math.random() * m--);

        // Swap it with the current element
        t = this.cards[m];
        this.cards[m] = this.cards[i];
        this.cards[i] = t;
      }
    };
    this.print = () => {
      console.log("---DECK---");
      this.cards.forEach((card, i) => {
        console.log("["+i+"] "+card.name);
      });
    };
  }
}

module.exports.Hand = class Hand {
  constructor(deck) {
    this.cards = [];
    this.deck = deck;
    this.drawCardFromDeck = () => {
      this.cards = this.cards.concat(deck.cards[0]);
      this.deck.removeCard(0);
    };
    this.removeCard = (index) => this.cards.splice(index, 1);;
    this.print = () => {
      console.log("---HAND---");
      this.cards.forEach((card, i) => {
		  if (card.symbol == "Attack") {
			  console.log("["+i+"] "+clc.redBright(card.name));
		  }
		  else if (card.symbol == "Defense") {
			  console.log("["+i+"] "+clc.blueBright(card.name));
		  }
		  else if (card.symbol == "Resource") {
			  console.log("["+i+"] "+clc.greenBright(card.name));
		  }
		  else if (card.symbol == "Trap") {
			  console.log("["+i+"] "+clc.magentaBright(card.name));
		  }
		  else {
			  console.log("["+i+"] "+card.name);  
		  }
      });
    };
    this.cardNames = () => {
      var cards = [];
      this.cards.forEach((card) => {
        cards = cards.concat(card.name);
      });
      return cards;
    };
    this.printCard = (index) => {
      for(var i in this.cards[index]) {
        console.log(i + ": " + this.cards[index][i]);
      }
    };
  }
}