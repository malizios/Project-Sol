var expect = require('expect.js')
, dealer = require('../dealer');

describe('Deck', function() {
  it('starts out empty', function() {
    var myDeck = new dealer.Deck();
    expect(myDeck.cards).to.be.empty();
  });

  it('can insert new cards', function() {
    var myDeck = new dealer.Deck();
    myDeck.addCard({ "name": "Monarch Goblin" });
    expect(myDeck.cards).to.eql([{ "name": "Monarch Goblin" }]);
  });

  it('can remove cards', function() {
    var myDeck = new dealer.Deck();
    myDeck.addCard({ "name": "Monarch Goblin" });
    myDeck.removeCard(0);
    expect(myDeck.cards).to.be.empty();
  });
});

describe('Hand', function() {
  it('starts out empty', function() {
    var myHand = new dealer.Hand();
    expect(myHand.cards).to.be.empty();
  });

  it('can insert new cards', function() {
    var myDeck = new dealer.Deck();
    myDeck.addCard({ "name": "Monarch Goblin" });
    expect(myDeck.cards).to.eql([{ "name": "Monarch Goblin" }]);
  });

  it('can remove cards', function() {
    var myDeck = new dealer.Deck();
    myDeck.addCard({ "name": "Monarch Goblin" });
    var myHand = new dealer.Hand(myDeck);
    myHand.drawCardFromDeck();
    myHand.removeCard(0);
    expect(myHand.cards).to.be.empty();
  });
});