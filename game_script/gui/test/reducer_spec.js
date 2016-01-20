import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

  it('handles SET_STATE', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: Map({
        player: Map({
          deck: List.of('Monarch Goblin', 'Goblin Pyromancer'),
          hand: List()
        }),
        field: List()
      })
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.eql(fromJS({
      player: {
        deck: ['Monarch Goblin', 'Goblin Pyromancer'],
        hand: []
      },
      field: []
    }));
  });

  it('handles SET_STATE  with plain JS payload', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: {
        player: {
          deck: ['Monarch Goblin', 'Goblin Pyromancer'],
          hand: []
        },
        field: []
      }
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.eql(fromJS({
      player: {
        deck: ['Monarch Goblin', 'Goblin Pyromancer'],
        hand: []
      },
      field: []
    }));
  });

  it('handles SET_STATE without initial state', () => {
    const action = {
      type: 'SET_STATE',
      state: {
        player: {
          deck: ['Monarch Goblin', 'Goblin Pyromancer'],
          hand: []
        },
        field: []
      }
    };
    const nextState = reducer(undefined, action);
    expect(nextState).to.eql(fromJS({
      player: {
        deck: ['Monarch Goblin', 'Goblin Pyromancer'],
        hand: []
      },
      field: []
    }));
  });

});
