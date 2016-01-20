import React from 'react';
import {connect} from 'react-redux';
import Field from './Field';
import Hand from './Hand';
import Deck from './Deck';
import Import from './Import';
import * as actionCreators from '../action_creators';

export const Player = React.createClass({
  getDeck: function() {
    return this.props.deck || [];
  },
  render: function() {
    return (
      <div className="player">
        <Field {...this.props} destroy={this.props.destroyCard} discard={this.props.discardFromField}/>
        <Hand {...this.props} play={this.props.addCardToField} discard={this.props.discardFromHand}/>
        <Deck {...this.props} shuffle={this.props.shuffleDeck}/>
        <Import {...this.props} setDeck={this.props.setDeck}/>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    field: state.get('field'),
    hand: state.get('player').get('hand'),
    deck: state.get('player').get('deck')
  }
}

export const PlayerContainer = connect(
  mapStateToProps,
  actionCreators
)(Player);
