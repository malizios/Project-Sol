import {
  INITIAL_STATE,
  setState,
  setPlayer,
  setDeck,
  setHand,
  setField,
  shuffleDeck,
  addCardToDeck,
  addCardToHand,
  addCardToField,
  discardFromHand,
  discardFromField,
  destroyCard
} from './core';

export default function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'SET_PLAYER':
      return state.update('player',
        playerState => setPlayer(playerState, action.player))
    case 'SET_DECK':
      return setDeck(state, action.deck);
    case 'SET_HAND':
      return setHand(state, action.hand);
    case 'SET_FIELD':
      return setField(state, action.field);
    case 'SHUFFLE':
      return shuffleDeck(state);
    case 'ADD_CARD_TO_DECK':
      return addCardToDeck(state, action.card);
    case 'ADD_CARD_TO_HAND':
      return addCardToHand(state);
    case 'ADD_CARD_TO_FIELD':
      return addCardToField(state, action.index);
    case 'DISCARD_FROM_HAND':
      return discardFromHand(state, action.index);
    case 'DISCARD_FROM_FIELD':
      return discardFromField(state, action.index);
    case 'DESTROY_CARD':
      return destroyCard(state, action.index);
  }
}
