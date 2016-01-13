"use strict";

var fs = require('fs');

// Card flow: Deck -> Hand -> Field

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
      this.cards = this.cards.concat(this.deck.cards[this.deck.cards.length-1]);
      this.deck.removeCard(this.deck.cards.length-1);
    };
   
    this.removeCard = (index) => this.cards.splice(index, 1);;
    
    this.discard = (index) => {
      this.deck.cards = [this.cards[index]].concat(this.deck.cards);
      this.removeCard(index);
    };

    this.print = () => {
      console.log("---HAND---");
      this.cards.forEach((card, i) => {
        console.log("["+i+"] "+card.name);
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

module.exports.Field = class Field {
    constructor(deck = [], hand = []) {
      this.cards = [];
      this.hand = hand;
      this.deck = deck;

      this.removeCard = (index) => this.cards.splice(index, 1);

      // Put card on field in back of deck
      this.discard = (index) => {
        this.deck.cards = [this.cards[index]].concat(this.deck.cards);
        this.removeCard(index);
      }

      // Put card from hand onto field
      this.playCard = (index) => {
        this.cards = this.cards.concat(hand.cards[index]);
        this.hand.removeCard(index);
      };

      this.print = () => {
        console.log("---FIELD---");
        this.cards.forEach((card, i) => {
          console.log("["+i+"] "+card.name);
        });
      };

      this.printCard = (index) => {
        for(var i in this.cards[index]) {
          console.log(i + ": " + this.cards[index][i]);
        }
      };
    }
}

// Interfaces deck, hand, and field
module.exports.Player = class Player {
  constructor(
    cards = [],
    deck = new exports.Deck(cards), 
    hand = new exports.Hand(deck), 
    field = new exports.Field(deck, hand)) {

    this.deck = deck;
    this.hand = hand;
    this.field = field;

    // Shuffle deck
    this.shuffle = () => {
      this.deck.shuffle();
    }

    // Draw card from deck
    this.draw = () => {
      this.hand.drawCardFromDeck(deck);
    }

    // Play card from hand to field
    this.play = (index) => {
      this.field.playCard(index);
    };
    
    // Discard card from hand
    this.discardFromHand = (index) => {
      this.hand.discard(index);
    };

    // Discard card from field
    this.discardFromField = (index) => {
      this.field.discard(index);
    };

    // Destroy card on field
    this.destroy = (index) => {
      this.field.removeCard(index);
    };

    // Print hand and field
    this.print = () => {
      this.hand.print();
      this.field.print();
    };
  }
}