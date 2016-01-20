export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function setDeck(deck) {
  return {
    type: 'SET_DECK',
    deck
  };
}

export function shuffleDeck() {
  return {
    type: 'SHUFFLE'
  };
}

export function drawCard() {
  return {
    type: 'ADD_CARD_TO_HAND'
  };
}

export function addCardToField(index) {
  return {
    type: 'ADD_CARD_TO_FIELD',
    index
  };
}

export function discardFromHand(index) {
  return {
    type: 'DISCARD_FROM_HAND',
    index
  };
}

export function discardFromField(index) {
  return {
    type: 'DISCARD_FROM_FIELD',
    index
  };
}

export function destroyCard(index) {
  return {
    type: 'DESTROY_CARD',
    index
  };
}
