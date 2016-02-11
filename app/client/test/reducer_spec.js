import {Map, fromJS} from 'immutable';
import {expect} from "chai";

import {counter} from "../src/reducers";

describe('reducers', () => {

  describe('counter', () => {

    it('handles INCREMENT', () => {
      const initialState = fromJS({
        count: 0
      });
      const action = {
        type: 'INCREMENT'
      };
      const nextState = counter(initialState, action);
      expect(nextState).to.eql(fromJS({
        count: 1
      }));
    });

    it('handles DECREMENT', () => {
      const initialState = fromJS({
        count: 0
      });
      const action = {
        type: 'DECREMENT'
      };
      const nextState = counter(initialState, action);
      expect(nextState).to.eql(fromJS({
        count: -1
      }));
    });
  });
});
