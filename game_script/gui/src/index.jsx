import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {INITIAL_STATE} from './core';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {setState, setDeck, drawCard, addCardToField} from './action_creators';
import {PlayerContainer} from './components/Player';

const store = createStore(reducer);
store.dispatch(setState(INITIAL_STATE));

ReactDom.render(
  <Provider store={store}>
    <PlayerContainer />
  </Provider>,
  document.getElementById('app')
);
