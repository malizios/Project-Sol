import {Map, List} from 'immutable';

export const INITIAL_STATE = Map({
  player: Map({
    deck: List(),
    hand: List()
  }),
  field: List()
});

export function setState(state, newState) {
  return state.merge(newState);
}

export function setPlayer(playerState, player) {
  return player;
}

export function setDeck(state, deck) {
  const player = state.get('player').set('deck', List(deck));
  return state.set('player', player);
}

export function shuffleDeck(state) {
  var deck = state.get('player').get('deck').toArray();
  let m = deck.length, t, i;
  // While there remain cards to shuffle
  while(m) {
    // Pick a remaining element
    i = Math.floor(Math.random() * m--);

    // Swap it with the current element
    t = deck[m];
    deck[m] = deck[i];
    deck[i] = t;
  }
  const player = state.get('player').set('deck', List(deck));
  return state.set('player', player);
}

export function setHand(state, hand) {
  const player = state.get('player').set('hand', List(hand));
  return state.set('player', player);
}

export function setField(state, cards) {
  return state.set('field', List(cards));
}

export function addCardToDeck(state, card) {
  const deck = state.get('player').get('deck').concat(card);
  const player = state.get('player').set('deck', deck);
  return state.set('player', player);
}

// Remove top card from deck; put in hand
export function addCardToHand(state) {
  const card = state.get('player').get('deck').last();
  const deck = state.get('player').get('deck').pop();
  const hand = state.get('player').get('hand').push(card);
  const player = state.get('player')
    .set('hand', hand)
    .set('deck', deck);
  return state.set('player', player);
}

// Remove card at index from hand and put on field
export function addCardToField(state, index) {
  const card = state.get('player').get('hand').get(index);
  const hand = state.get('player').get('hand').delete(index);
  const field = state.get('field').push(card);
  const player = state.get('player').set('hand', hand);
  return state
    .set('player', player)
    .set('field', field);
}

// Remove card at index from hand and put at bottom of deck
export function discardFromHand(state, index) {
  const card = state.get('player').get('hand').get(index);
  const hand = state.get('player').get('hand').delete(index);
  const deck = List.of(card).concat(state.get('player').get('deck'));
  const player = state.get('player')
    .set('hand', hand)
    .set('deck', deck);
  return state.set('player', player);
}

// Remove card at index from field and put at bottom of deck
export function discardFromField(state, index) {
  const card = state.get('field').get(index);
  const field = state.get('field').delete(index);
  const deck = List.of(card).concat(state.get('player').get('deck'));
  const player = state.get('player')
    .set('deck', deck);
  return state
    .set('player', player)
    .set('field', field);
}

// Delete card on field
export function destroyCard(state, index) {
  const field = state.get('field').delete(index);
  return state.set('field', field);
}
