import React from 'react';
import Card from './Card';

export default React.createClass({
  render: function() {
    var destroy = this.props.destroy;
    var discard = this.props.discard;
    var cardNodes = this.props.field.map(function(card, i) {
      return (
        <Card {...card} index={i} key={card.id} destroy={destroy} discard={discard}/>
      );
    });
    return (
      <div className="field">
      <h1>Field</h1>
      {cardNodes}
      </div>
    );
  }
});
