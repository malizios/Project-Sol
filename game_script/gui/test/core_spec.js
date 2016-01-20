import {expect} from 'chai';
import {List, Map, fromJS} from 'immutable';
import {
  setPlayer,
  setDeck,
  setHand,
  setField,
  addCardToDeck,
  addCardToHand,
  addCardToField,
  discardFromHand,
  discardFromField,
  destroyCard
} from '../src/core';

describe('deck', () => {
  it('can add card', () => {
    let state = Map({
      player: Map({
        deck: List(),
        hand: List()
      })
    });
    let card = "Monarch Goblin";
    let nextState = addCardToDeck(state, card);
    expect(nextState).to.eql(fromJS({
      player: {
        deck: ["Monarch Goblin"],
        hand: []
      }
    }));
    expect(state).to.eql(fromJS({
      player: {
        deck: [],
        hand: []
      }
    }));
  });
});

describe('hand', () => {
  it('can add card from deck', () => {
    let state = Map({
      player: Map({
        deck: List.of("Monarch Goblin"),
        hand: List()
      })
    });
    let nextState = addCardToHand(state);
    expect(nextState).to.eql(Map({
      player: Map({
        deck: List(),
        hand: List.of("Monarch Goblin")
      })
    }));
    expect(state).to.eql(Map({
      player: Map({
        deck: List.of("Monarch Goblin"),
        hand: List()
      })
    }));
  });

  it('can discard card to deck', () => {
      let state = Map({
        player: Map({
          deck: List.of("Monarch Goblin"),
          hand: List.of("Goblin Pyromancer")
        }),
        field: List()
      });
      let index = 0;
      let nextState = discardFromHand(state, index);
      expect(nextState).to.eql(fromJS({
        player: {
          deck: ["Goblin Pyromancer", "Monarch Goblin"],
          hand: []
        },
        field: []
      }));
  });
});

describe('field', () => {
  it('can add card from hand', () => {
    let state = Map({
      player: Map({
        deck: List(),
        hand: List.of('Goblin Monarch', 'Goblin Knight')
      }),
      field: List()
    });
    let index = 1;
    let nextState = addCardToField(state, index);
    expect(nextState).to.eql(Map({
      player: Map({
        deck: List(),
        hand: List.of('Goblin Monarch')
      }),
      field: List.of('Goblin Knight')
    }));
  });

  it('can discard card', () => {
    let state = Map({
      player: Map({
        deck: List(),
        hand: List()
      }),
      field: List.of('Goblin Knight')
    });
    let index = 0;
    let nextState = discardFromField(state, index);
    expect(nextState).to.eql(fromJS({
      player: {
        deck: ['Goblin Knight'],
        hand: []
      },
      field: []
    }));
  });

  it('can destroy card', () => {
    let state = Map({
      player: Map({
        deck: List(),
        hand: List()
      }),
      field: List.of('Goblin Knight')
    });
    let index = 0;
    let nextState = destroyCard(state, index);
    expect(nextState).to.eql(Map({
      player: Map({
        deck: List(),
        hand: List()
      }),
      field: List()
    }))
  });
});
