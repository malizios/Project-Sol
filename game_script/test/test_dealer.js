var expect = require('expect.js');
import {Deck, Hand, Field, Player} from '../dealer';

describe('Deck', function() {
  it('starts out empty', function() {
    var myDeck = new Deck();
    expect(myDeck.cards).to.be.empty();
  });

  it('can insert new cards', function() {
    var myDeck = new Deck();
    myDeck.addCard({ "name": "Monarch Goblin" });
    expect(myDeck.cards).to.eql([{ "name": "Monarch Goblin" }]);
  });

  it('can remove cards', function() {
    var myDeck = new Deck();
    myDeck.addCard({ "name": "Monarch Goblin" });
    myDeck.removeCard(0);
    expect(myDeck.cards).to.be.empty();
  });
});

describe('Hand', function() {
  it('starts out empty', function() {
    var myHand = new Hand();
    expect(myHand.cards).to.be.empty();
  });

  it('can insert new cards', function() {
    var myDeck = new Deck();
    myDeck.addCard({ "name": "Monarch Goblin" });
    expect(myDeck.cards).to.eql([{ "name": "Monarch Goblin" }]);
  });

  it('can remove cards', function() {
    var myDeck = new Deck();
    myDeck.addCard({ "name": "Monarch Goblin" });
    var myHand = new Hand(myDeck);
    myHand.drawCardFromDeck();
    myHand.removeCard(0);
    expect(myHand.cards).to.be.empty();
  });

  it('can discard cards', () => {
    var myDeck = new Deck([
      { "name": "Goblin Monarch" },
      { "name": "Goblin Pyromancer" }
    ]);
    var myHand = new Hand(myDeck);
    myHand.drawCardFromDeck();
    myHand.drawCardFromDeck();
    // Discard Goblin Monarch from hand
    myHand.discard(1);
    expect(myHand.cards).to.eql([
      { "name": "Goblin Pyromancer" }
    ]);
    expect(myDeck.cards).to.eql([
      { "name": "Goblin Monarch" }
    ]);
  });
});

describe('Field', function() {
  it('starts out empty', function() {
    var myField = new Field();
    expect(myField.cards).to.be.empty();
  });

  it('can discard card to deck', function() {
    var myDeck = new Deck([
      { "name": "Fairy Queen Mav" }, 
      { "name": "Goblin Monarch" }
    ]);
    var myHand = new Hand(myDeck);
    // draw Goblin Monarch from deck
    myHand.drawCardFromDeck();
    var myField = new Field(myDeck, myHand);
    // play Goblin Monarch
    myField.playCard(0);
    // discard Fairy Queen Mav to bottom of deck
    myField.discard(0);
    expect(myDeck.cards).to.eql([
      { "name": "Goblin Monarch" },
      { "name": "Fairy Queen Mav" }, 
    ]);
  });
});

describe('Player', () => {
  it('starts with empty deck, hand, and field', () => {
    var myPlayer = new Player();
    expect(myPlayer.hand.cards).to.be.empty();
    expect(myPlayer.deck.cards).to.be.empty();
    expect(myPlayer.field.cards).to.be.empty();
  });

  it('can be initialized with a deck', () => {
    var myDeck = new Deck([
      { "name": "Goblin Monarch" },
      { "name": "Goblin Pyromancer" }
    ]);
    var myPlayer = new Player(myDeck);
    expect(myPlayer.deck.cards).to.eql([
      { "name": "Goblin Monarch" },
      { "name": "Goblin Pyromancer" }
    ]);
  });
  
  it('can draw a card', () => {
    var myDeck = new Deck([
      { "name": "Goblin Monarch" },
      { "name": "Goblin Pyromancer" }
    ]);
    var myPlayer = new Player(myDeck);
    myPlayer.draw();
    expect(myPlayer.hand.cards).to.eql([
      { "name": "Goblin Pyromancer" }
    ]);
    expect(myPlayer.deck.cards).to.eql([
      { "name": "Goblin Monarch" }
    ]);
  });

  it('can discard a card from hand', () => {
    var myDeck = new Deck([
      { "name": "Goblin Monarch" },
      { "name": "Goblin Pyromancer" }
    ]);
    var myPlayer = new Player(myDeck);
    myPlayer.draw();
    myPlayer.draw();
    myPlayer.discardFromHand(1);
    expect(myPlayer.hand.cards).to.eql([
      { "name": "Goblin Pyromancer" }
    ]);
    expect(myPlayer.deck.cards).to.eql([
      { "name": "Goblin Monarch" }
    ]);
  });

  it('can play a card', () => {
    var myDeck = new Deck([
      { "name": "Goblin Monarch" }
    ]);
    var myPlayer = new Player(myDeck);
    myPlayer.draw();
    myPlayer.play(0);
    expect(myPlayer.field.cards).to.eql([
      { "name": "Goblin Monarch" }
    ]);
    expect(myPlayer.hand.cards).to.be.empty();
  });

  it('can discard a card from field', () => {
    var myDeck = new Deck([
      { "name": "Goblin Monarch" }
    ]);
    var myPlayer = new Player(myDeck);
    myPlayer.draw();
    myPlayer.play(0);
    myPlayer.discardFromField(0);
    expect(myPlayer.field.cards).to.be.empty();
    expect(myPlayer.deck.cards).to.eql([
      { "name": "Goblin Monarch" }
    ]);
  });

  it('can destroy card', () => {
    var myDeck = new Deck([
      { "name": "Goblin Monarch" }
    ]);
    var myPlayer = new Player(myDeck);
    myPlayer.draw();
    myPlayer.play(0);
    myPlayer.destroy(0);
    expect(myPlayer.field.cards).to.be.empty();
    expect(myPlayer.deck.cards).to.be.empty();
  });
});